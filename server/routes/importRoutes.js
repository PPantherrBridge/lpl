import { Router } from 'express';
import { createImportController } from '../controllers/importController.js';

export function importRoutes(importService, storageSyncService, authMiddleware) {
  const router = Router();
  const controller = createImportController(importService, storageSyncService);
  router.post('/', authMiddleware, controller.importData);
  router.post('/storage-key', authMiddleware, controller.syncStorageKey);
  return router;
}
