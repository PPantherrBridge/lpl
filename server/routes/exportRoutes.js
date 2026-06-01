import { Router } from 'express';
import { createExportController } from '../controllers/exportController.js';

export function exportRoutes(exportService, authMiddleware) {
  const router = Router();
  const controller = createExportController(exportService);
  router.get('/', authMiddleware, controller.exportData);
  return router;
}
