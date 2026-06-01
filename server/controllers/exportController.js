export function createExportController(exportService) {
  return {
    async exportData(req, res, next) {
      try {
        const payload = await exportService.buildExport({
          scope: req.query.scope || 'entire-database',
          seasonId: req.query.seasonId || ''
        });
        res.json(payload);
      } catch (err) {
        next(err);
      }
    }
  };
}
