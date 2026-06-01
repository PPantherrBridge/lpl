import { Router } from 'express';
import { createCrudController } from '../controllers/crudController.js';

export function crudRoutes(service, authMiddleware) {
  const router = Router();
  const controller = createCrudController(service);
  router.get('/', controller.list);
  router.get('/:id', controller.get);
  router.post('/', authMiddleware, controller.create);
  router.patch('/:id', authMiddleware, controller.update);
  router.delete('/:id', authMiddleware, controller.remove);
  return router;
}
