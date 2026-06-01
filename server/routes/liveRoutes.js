import { Router } from 'express';
import { createLiveController } from '../controllers/liveController.js';

export function liveRoutes(liveService, authMiddleware) {
  const router = Router();
  const controller = createLiveController(liveService);
  router.get('/current', controller.getCurrent);
  router.put('/current', authMiddleware, controller.saveCurrent);
  router.post('/current', authMiddleware, controller.saveCurrent);
  router.delete('/current', authMiddleware, controller.clearCurrent);
  return router;
}
