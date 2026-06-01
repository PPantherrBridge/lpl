export function createSeasonController(seasonService, archiveService) {
  return {
    async archive(req, res, next) {
      try {
        res.json({ data: await archiveService.createSeasonArchive(req.params.id) });
      } catch (err) {
        next(err);
      }
    },
    async close(req, res, next) {
      try {
        const record = await seasonService.update(req.params.id, { status: 'closed', closed_at: new Date().toISOString() });
        res.json({ data: record });
      } catch (err) {
        next(err);
      }
    }
  };
}
