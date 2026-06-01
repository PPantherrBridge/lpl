import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { authRoutes } from './authRoutes.js';
import { bootstrapRoutes } from './bootstrapRoutes.js';
import { seasonRoutes } from './seasonRoutes.js';
import { crudRoutes } from './crudRoutes.js';
import { liveRoutes } from './liveRoutes.js';
import { archiveRoutes } from './archiveRoutes.js';
import { exportRoutes } from './exportRoutes.js';
import { importRoutes } from './importRoutes.js';

export function apiRoutes(services) {
  const router = Router();
  const auth = requireAuth(services.auth);

  router.use('/auth', authRoutes(services.auth));
  router.use('/bootstrap', bootstrapRoutes(services.storageSync));
  router.use('/seasons', seasonRoutes(services.seasons, services.archive, auth));
  router.use('/teams', crudRoutes(services.teams, auth));
  router.use('/players', crudRoutes(services.players, auth));
  router.use('/matches', crudRoutes(services.matches, auth));
  router.use('/live', liveRoutes(services.live, auth));
  router.use('/records', crudRoutes(services.records, auth));
  router.use('/archives', archiveRoutes(services.archive));
  router.use('/playoffs', crudRoutes(services.playoffs, auth));
  router.use('/export', exportRoutes(services.export, auth));
  router.use('/import', importRoutes(services.import, services.storageSync, auth));

  return router;
}
