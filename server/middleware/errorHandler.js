export function notFound(req, res) {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.originalUrl}` });
}

export function errorHandler(err, req, res, next) {
  if (res.headersSent) return next(err);
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error.'
  });
}
