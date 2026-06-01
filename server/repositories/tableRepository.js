import { v4 as uuidv4 } from 'uuid';
import { sanitizeFiltersForTable, sanitizeRecordForTable } from '../config/tableColumns.js';

export class TableRepository {
  constructor(provider, tableName) {
    this.provider = provider;
    this.tableName = tableName;
  }

  list(filters = {}) {
    return this.provider.list(this.tableName, sanitizeFiltersForTable(this.tableName, filters));
  }

  get(id) {
    return this.provider.get(this.tableName, id);
  }

  findOne(filters = {}) {
    return this.provider.findOne(this.tableName, sanitizeFiltersForTable(this.tableName, filters));
  }

  create(data) {
    const record = sanitizeRecordForTable(this.tableName, { ...data, id: data.id || uuidv4() });
    return this.provider.create(this.tableName, record);
  }

  update(id, data) {
    const record = sanitizeRecordForTable(this.tableName, data, { omit: ['id', 'created_at'] });
    if (!Object.keys(record).length) return this.get(id);
    return this.provider.update(this.tableName, id, record);
  }

  delete(id) {
    return this.provider.delete(this.tableName, id);
  }

  upsert(data, conflictKey = 'id') {
    const record = sanitizeRecordForTable(this.tableName, { ...data, id: data.id || data[conflictKey] || uuidv4() });
    return this.provider.upsert(this.tableName, record, conflictKey);
  }

  upsertMany(records = [], conflictKey = 'id') {
    return Promise.all(records.map((record) => this.upsert(record, conflictKey)));
  }

  deleteWhere(filters = {}) {
    return this.provider.deleteWhere(this.tableName, sanitizeFiltersForTable(this.tableName, filters));
  }
}
