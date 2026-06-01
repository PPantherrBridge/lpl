import { Router } from 'express';
import { createAuthController } from '../controllers/authController.js';

export function authRoutes(authService) {
  const router = Router();
  const controller = createAuthController(authService);
  router.post('/login', controller.login);
  return router;
}
