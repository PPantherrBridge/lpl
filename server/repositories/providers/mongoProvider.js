import { assertKnownTable } from '../../config/tables.js';
import { sanitizeRecordForTable } from '../../config/tableColumns.js';

export class MongoProvider {
  constructor(db) {
    this.db = db;
  }

  static async create({ databaseUrl }) {
    if (!databaseUrl) throw new Error('DATABASE_URL is required for MongoDB.');
    const { MongoClient } = await import('mongodb');
    const client = new MongoClient(databaseUrl);
    await client.connect();
    return new MongoProvider(client.db());
  }

  collection(table) {
    assertKnownTable(table);
    return this.db.collection(table);
  }

  async list(table, filters = {}) {
    return this.collection(table).find(filters).map(({ _id, ...record }) => record).toArray();
  }

  async get(table, id) {
    const row = await this.collection(table).findOne({ id });
    if (!row) return null;
    const { _id, ...record } = row;
    return record;
  }

  async findOne(table, filters = {}) {
    const row = await this.collection(table).findOne(filters);
    if (!row) return null;
    const { _id, ...record } = row;
    return record;
  }

  async create(table, data) {
    const now = new Date().toISOString();
    const record = sanitizeRecordForTable(table, {
      ...data,
      created_at: data.created_at || now,
      updated_at: data.updated_at || now
    });
    await this.collection(table).insertOne(record);
    return record;
  }

  async update(table, id, data) {
    const patch = sanitizeRecordForTable(table, {
      ...data,
      updated_at: new Date().toISOString()
    }, { omit: ['id', 'created_at'] });
    if (!Object.keys(patch).length) return this.get(table, id);
    await this.collection(table).updateOne({ id }, { $set: patch });
    return this.get(table, id);
  }

  async delete(table, id) {
    await this.collection(table).deleteOne({ id });
    return true;
  }

  async upsert(table, data, conflictKey = 'id') {
    const now = new Date().toISOString();
    const record = sanitizeRecordForTable(table, {
      ...data,
      updated_at: now,
      created_at: data.created_at || now
    });
    await this.collection(table).updateOne(
      { [conflictKey]: record[conflictKey] },
      { $set: record },
      { upsert: true }
    );
    return this.findOne(table, { [conflictKey]: record[conflictKey] });
  }

  async deleteWhere(table, filters = {}) {
    const result = await this.collection(table).deleteMany(filters);
    return result.deletedCount;
  }
}
