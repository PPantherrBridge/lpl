import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { TABLE_NAMES, assertKnownTable } from '../../config/tables.js';
import { sanitizeRecordForTable } from '../../config/tableColumns.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_FILE = path.resolve(__dirname, '../../.data/lpl-dev-db.json');

function matchesFilters(record, filters = {}) {
  return Object.entries(filters).every(([key, value]) => {
    if (value === undefined || value === null || value === '') return true;
    return record[key] === value;
  });
}

export class MemoryProvider {
  constructor(filePath = DEFAULT_FILE) {
    this.filePath = process.env.MEMORY_DB_FILE || filePath;
    this.data = Object.fromEntries(TABLE_NAMES.map((table) => [table, []]));
  }

  static async create(options = {}) {
    const provider = new MemoryProvider(options.filePath);
    await provider.load();
    return provider;
  }

  async load() {
    try {
      const raw = await fs.readFile(this.filePath, 'utf8');
      this.data = { ...this.data, ...JSON.parse(raw) };
    } catch (err) {
      if (err.code !== 'ENOENT') throw err;
      await this.persist();
    }
  }

  async persist() {
    await fs.mkdir(path.dirname(this.filePath), { recursive: true });
    await fs.writeFile(this.filePath, JSON.stringify(this.data, null, 2));
  }

  async list(table, filters = {}) {
    assertKnownTable(table);
    return this.data[table].filter((record) => matchesFilters(record, filters));
  }

  async get(table, id) {
    assertKnownTable(table);
    return this.data[table].find((record) => record.id === id) || null;
  }

  async findOne(table, filters = {}) {
    assertKnownTable(table);
    return this.data[table].find((record) => matchesFilters(record, filters)) || null;
  }

  async create(table, data) {
    assertKnownTable(table);
    const now = new Date().toISOString();
    const record = sanitizeRecordForTable(table, {
      ...data,
      created_at: data.created_at || now,
      updated_at: data.updated_at || now
    });
    this.data[table].push(record);
    await this.persist();
    return record;
  }

  async update(table, id, data) {
    assertKnownTable(table);
    const idx = this.data[table].findIndex((record) => record.id === id);
    if (idx === -1) return null;
    const record = sanitizeRecordForTable(table, {
      ...this.data[table][idx],
      ...data,
      updated_at: new Date().toISOString()
    });
    this.data[table][idx] = record;
    await this.persist();
    return record;
  }

  async delete(table, id) {
    assertKnownTable(table);
    const before = this.data[table].length;
    this.data[table] = this.data[table].filter((record) => record.id !== id);
    await this.persist();
    return before !== this.data[table].length;
  }

  async upsert(table, data, conflictKey = 'id') {
    assertKnownTable(table);
    const keyValue = data[conflictKey];
    const idx = this.data[table].findIndex((record) => record[conflictKey] === keyValue);
    if (idx === -1) return this.create(table, data);
    const record = sanitizeRecordForTable(table, {
      ...this.data[table][idx],
      ...data,
      updated_at: new Date().toISOString()
    });
    this.data[table][idx] = record;
    await this.persist();
    return record;
  }

  async deleteWhere(table, filters = {}) {
    assertKnownTable(table);
    const before = this.data[table].length;
    this.data[table] = this.data[table].filter((record) => !matchesFilters(record, filters));
    await this.persist();
    return before - this.data[table].length;
  }
}
