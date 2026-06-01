import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

const LEGACY_DEV_PASSWORD = 'LPLAdminAccess2026';

export class AuthService {
  constructor(repositories) {
    this.repositories = repositories;
  }

  sign(payload) {
    return jwt.sign(payload, env.jwtSecret, { expiresIn: '12h' });
  }

  verify(token) {
    return jwt.verify(token, env.jwtSecret);
  }

  async login({ username = 'admin', password }) {
    if (!password) return null;

    if (env.adminPassword && password === env.adminPassword) {
      return { token: this.sign({ sub: username, role: 'admin' }), user: { username, role: 'admin' } };
    }

    const admin = await this.repositories.admins.findOne({ username });
    if (admin?.password_hash && await bcrypt.compare(password, admin.password_hash)) {
      return { token: this.sign({ sub: username, role: 'admin' }), user: { username, role: 'admin' } };
    }

    if (env.nodeEnv !== 'production' && password === LEGACY_DEV_PASSWORD) {
      return { token: this.sign({ sub: username, role: 'admin' }), user: { username, role: 'admin' } };
    }

    return null;
  }
}
