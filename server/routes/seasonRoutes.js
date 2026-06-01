import { Router } from 'express';
import { createCrudController } from '../controllers/crudController.js';
import { createSeasonController } from '../controllers/seasonController.js';

export function seasonRoutes(seasonService, archiveService, authMiddleware) {
  const router = Router();
  const crud = createCrudController(seasonService);
  const season = createSeasonController(seasonService, archiveService);
  router.get('/', crud.list);
  router.get('/:id', crud.get);
  router.post('/', authMiddleware, crud.create);
  router.patch('/:id', authMiddleware, crud.update);
  router.delete('/:id', authMiddleware, crud.remove);
  router.post('/:id/close', authMiddleware, season.close);
  router.post('/:id/archive', authMiddleware, season.archive);
  return router;
}
