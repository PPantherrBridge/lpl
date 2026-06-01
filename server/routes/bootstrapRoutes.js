import { Router } from 'express';
import { createBootstrapController } from '../controllers/bootstrapController.js';

export function bootstrapRoutes(storageSyncService) {
  const router = Router();
  const controller = createBootstrapController(storageSyncService);
  router.get('/', controller.bootstrap);
  return router;
}
