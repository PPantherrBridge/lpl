export function requireAuth(authService) {
  return (req, res, next) => {
    const header = req.get('authorization') || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : '';
    if (!token) return res.status(401).json({ error: 'Authentication required.' });
    try {
      req.user = authService.verify(token);
      return next();
    } catch {
      return res.status(401).json({ error: 'Invalid or expired token.' });
    }
  };
}
