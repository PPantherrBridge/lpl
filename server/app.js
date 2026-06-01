import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { env } from './config/env.js';
import { createDatabaseProvider } from './config/database.js';
import { createRepositories } from './repositories/index.js';
import { createServices } from './services/index.js';
import { apiRoutes } from './routes/index.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function createApp() {
  const provider = await createDatabaseProvider();
  const repositories = createRepositories(provider);
  const services = createServices(repositories);

  const app = express();
  app.locals.repositories = repositories;
  app.locals.services = services;

  app.use(cors({ origin: env.corsOrigin === '*' ? true : env.corsOrigin, credentials: true }));
  app.use(express.json({ limit: '50mb' }));
  app.use(morgan(env.nodeEnv === 'production' ? 'combined' : 'dev'));

  app.get('/health', (req, res) => res.json({ ok: true, provider: env.databaseProvider }));
  app.use('/api', apiRoutes(services));

  const clientDist = path.resolve(__dirname, '../client/dist');
  app.use(express.static(clientDist));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(clientDist, 'index.html'), (err) => {
      if (err) next();
    });
  });

  app.use(notFound);
  app.use(errorHandler);

  return app;
}
