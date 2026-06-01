import { Router } from 'express';
import { createArchiveController } from '../controllers/archiveController.js';

export function archiveRoutes(archiveService) {
  const router = Router();
  const controller = createArchiveController(archiveService);
  router.get('/', controller.list);
  router.get('/:id', controller.get);
  return router;
}
