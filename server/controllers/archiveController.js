export function createArchiveController(archiveService) {
  return {
    async list(req, res, next) {
      try {
        res.json({ data: await archiveService.list() });
      } catch (err) {
        next(err);
      }
    },
    async get(req, res, next) {
      try {
        const archive = await archiveService.get(req.params.id);
        if (!archive) return res.status(404).json({ error: 'Archive not found.' });
        res.json({ data: archive });
      } catch (err) {
        next(err);
      }
    }
  };
}
