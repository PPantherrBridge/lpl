import { createClient } from '@supabase/supabase-js';
import { assertKnownTable } from '../../config/tables.js';
import { sanitizeRecordForTable } from '../../config/tableColumns.js';

function applyFilters(query, filters = {}) {
  return Object.entries(filters).reduce((q, [key, value]) => {
    if (value === undefined || value === null || value === '') return q;
    return q.eq(key, value);
  }, query);
}

export class SupabaseProvider {
  constructor(client) {
    this.client = client;
  }

  static async create({ url, key }) {
    return new SupabaseProvider(createClient(url, key, {
      auth: { persistSession: false }
    }));
  }

  async list(table, filters = {}) {
    assertKnownTable(table);
    const { data, error } = await applyFilters(this.client.from(table).select('*'), filters);
    if (error) throw error;
    return data || [];
  }

  async get(table, id) {
    assertKnownTable(table);
    const { data, error } = await this.client.from(table).select('*').eq('id', id).maybeSingle();
    if (error) throw error;
    return data;
  }

  async findOne(table, filters = {}) {
    assertKnownTable(table);
    const { data, error } = await applyFilters(this.client.from(table).select('*'), filters).limit(1).maybeSingle();
    if (error) throw error;
    return data;
  }

  async create(table, data) {
    assertKnownTable(table);
    const now = new Date().toISOString();
    const record = sanitizeRecordForTable(table, {
      ...data,
      created_at: data.created_at || now,
      updated_at: data.updated_at || now
    });
    const { data: rows, error } = await this.client
      .from(table)
      .insert(record)
      .select('*')
      .single();
    if (error) throw error;
    return rows;
  }

  async update(table, id, data) {
    assertKnownTable(table);
    const record = sanitizeRecordForTable(table, {
      ...data,
      updated_at: new Date().toISOString()
    }, { omit: ['id', 'created_at'] });
    if (!Object.keys(record).length) return this.get(table, id);
    const { data: row, error } = await this.client
      .from(table)
      .update(record)
      .eq('id', id)
      .select('*')
      .maybeSingle();
    if (error) throw error;
    return row;
  }

  async delete(table, id) {
    assertKnownTable(table);
    const { error } = await this.client.from(table).delete().eq('id', id);
    if (error) throw error;
    return true;
  }

  async upsert(table, data, conflictKey = 'id') {
    assertKnownTable(table);
    const now = new Date().toISOString();
    const record = sanitizeRecordForTable(table, {
      ...data,
      updated_at: now,
      created_at: data.created_at || now
    });
    const { data: row, error } = await this.client
      .from(table)
      .upsert(record, { onConflict: conflictKey })
      .select('*')
      .single();
    if (error) throw error;
    return row;
  }

  async deleteWhere(table, filters = {}) {
    assertKnownTable(table);
    const { error } = await applyFilters(this.client.from(table).delete(), filters);
    if (error) throw error;
    return true;
  }
}
