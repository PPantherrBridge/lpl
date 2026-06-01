export function createAuthController(authService) {
  return {
    async login(req, res, next) {
      try {
        const result = await authService.login(req.body || {});
        if (!result) return res.status(401).json({ error: 'Password not recognized.' });
        res.json(result);
      } catch (err) {
        next(err);
      }
    }
  };
}
