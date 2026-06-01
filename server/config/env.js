import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: process.env.ENV_FILE || path.resolve(__dirname, '../../.env') });
dotenv.config({ path: process.env.ENV_FILE || path.resolve(__dirname, '../.env') });

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 4000),
  databaseProvider: (process.env.DATABASE_PROVIDER || 'supabase').toLowerCase(),
  databaseUrl: process.env.DATABASE_URL || '',
  supabaseUrl: process.env.SUPABASE_URL || '',
  supabaseKey: process.env.SUPABASE_KEY || '',
  jwtSecret: process.env.JWT_SECRET || 'dev-only-change-me',
  adminPassword: process.env.ADMIN_PASSWORD || '',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173'
};
