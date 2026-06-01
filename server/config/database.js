import { env } from './env.js';
import { MemoryProvider } from '../repositories/providers/memoryProvider.js';
import { SupabaseProvider } from '../repositories/providers/supabaseProvider.js';
import { SqlProvider } from '../repositories/providers/sqlProvider.js';
import { MongoProvider } from '../repositories/providers/mongoProvider.js';

export async function createDatabaseProvider() {
  if (env.databaseProvider === 'supabase') {
    if (!env.supabaseUrl || !env.supabaseKey) {
      console.warn('SUPABASE_URL/SUPABASE_KEY are not configured. Falling back to local JSON storage for development.');
      return MemoryProvider.create();
    }
    return SupabaseProvider.create({ url: env.supabaseUrl, key: env.supabaseKey });
  }

  if (['postgres', 'postgresql', 'mysql', 'sqlite'].includes(env.databaseProvider)) {
    return SqlProvider.create({ kind: env.databaseProvider, databaseUrl: env.databaseUrl });
  }

  if (env.databaseProvider === 'mongodb' || env.databaseProvider === 'mongo') {
    return MongoProvider.create({ databaseUrl: env.databaseUrl });
  }

  if (env.databaseProvider === 'memory' || env.databaseProvider === 'json') {
    return MemoryProvider.create();
  }

  throw new Error(`Unsupported DATABASE_PROVIDER: ${env.databaseProvider}`);
}
