import { assertKnownTable } from '../../config/tables.js';
import { sanitizeRecordForTable } from '../../config/tableColumns.js';

function ident(name) {
  if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(name)) throw new Error(`Unsafe SQL identifier: ${name}`);
  return `"${name}"`;
}

function placeholders(kind, count, offset = 0) {
  if (kind === 'postgres' || kind === 'postgresql') {
    return Array.from({ length: count }, (_, i) => `$${i + 1 + offset}`).join(', ');
  }
  return Array.from({ length: count }, () => '?').join(', ');
}

function sqlValue(value) {
  if (value && typeof value === 'object' && !(value instanceof Date)) {
    return JSON.stringify(value);
  }
  return value;
}

export class SqlProvider {
  constructor({ kind, client }) {
    this.kind = kind === 'postgresql' ? 'postgres' : kind;
    this.client = client;
  }

  static async create({ kind, databaseUrl }) {
    if (!databaseUrl && kind !== 'sqlite') throw new Error('DATABASE_URL is required for SQL providers.');
    if (kind === 'postgres' || kind === 'postgresql') {
      const { Pool } = await import('pg');
      return new SqlProvider({ kind: 'postgres', client: new Pool({ connectionString: databaseUrl }) });
    }
    if (kind === 'mysql') {
      const mysql = await import('mysql2/promise');
      return new SqlProvider({ kind: 'mysql', client: await mysql.createPool(databaseUrl) });
    }
    if (kind === 'sqlite') {
      const sqlite = await import('better-sqlite3');
      return new SqlProvider({ kind: 'sqlite', client: new sqlite.default(databaseUrl || './lpl.sqlite') });
    }
    throw new Error(`Unsupported SQL provider: ${kind}`);
  }

  async query(sql, params = []) {
    if (this.kind === 'postgres') {
      const result = await this.client.query(sql, params);
      return result.rows;
    }
    if (this.kind === 'mysql') {
      const [rows] = await this.client.execute(sql.replaceAll('"', '`'), params);
      return rows;
    }
    const stmt = this.client.prepare(sql.replaceAll('"', '`'));
    if (/^\s*select/i.test(sql)) return stmt.all(...params);
    const result = stmt.run(...params);
    return [{ changes: result.changes, lastInsertRowid: result.lastInsertRowid }];
  }

  async list(table, filters = {}) {
    assertKnownTable(table);
    const entries = Object.entries(filters).filter(([, value]) => value !== undefined && value !== null && value !== '');
    const where = entries.length ? ` WHERE ${entries.map(([key], idx) => `${ident(key)} = ${placeholders(this.kind, 1, idx)}`).join(' AND ')}` : '';
    return this.query(`SELECT * FROM ${ident(table)}${where}`, entries.map(([, value]) => value));
  }

  async get(table, id) {
    const rows = await this.list(table, { id });
    return rows[0] || null;
  }

  async findOne(table, filters = {}) {
    const rows = await this.list(table, filters);
    return rows[0] || null;
  }

  async create(table, data) {
    assertKnownTable(table);
    const now = new Date().toISOString();
    const record = sanitizeRecordForTable(table, {
      ...data,
      created_at: data.created_at || now,
      updated_at: data.updated_at || now
    });
    const keys = Object.keys(record);
    await this.query(
      `INSERT INTO ${ident(table)} (${keys.map(ident).join(', ')}) VALUES (${placeholders(this.kind, keys.length)})`,
      keys.map((key) => sqlValue(record[key]))
    );
    return record;
  }

  async update(table, id, data) {
    assertKnownTable(table);
    const record = sanitizeRecordForTable(table, {
      ...data,
      updated_at: new Date().toISOString()
    }, { omit: ['id', 'created_at'] });
    const keys = Object.keys(record);
    if (!keys.length) return this.get(table, id);
    await this.query(
      `UPDATE ${ident(table)} SET ${keys.map((key, idx) => `${ident(key)} = ${placeholders(this.kind, 1, idx)}`).join(', ')} WHERE ${ident('id')} = ${placeholders(this.kind, 1, keys.length)}`,
      [...keys.map((key) => sqlValue(record[key])), id]
    );
    return this.get(table, id);
  }

  async delete(table, id) {
    assertKnownTable(table);
    await this.query(`DELETE FROM ${ident(table)} WHERE ${ident('id')} = ${placeholders(this.kind, 1)}`, [id]);
    return true;
  }

  async upsert(table, data, conflictKey = 'id') {
    const existing = await this.findOne(table, { [conflictKey]: data[conflictKey] });
    if (existing) return this.update(table, existing.id, data);
    return this.create(table, data);
  }

  async deleteWhere(table, filters = {}) {
    assertKnownTable(table);
    const entries = Object.entries(filters).filter(([, value]) => value !== undefined && value !== null && value !== '');
    if (!entries.length) return 0;
    const where = entries.map(([key], idx) => `${ident(key)} = ${placeholders(this.kind, 1, idx)}`).join(' AND ');
    await this.query(`DELETE FROM ${ident(table)} WHERE ${where}`, entries.map(([, value]) => value));
    return true;
  }
}
