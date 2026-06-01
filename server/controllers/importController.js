export function createImportController(importService, storageSyncService) {
  return {
    async importData(req, res, next) {
      try {
        const result = await importService.importPayload(req.body?.payload, req.body?.mode || 'merge');
        res.json(result);
      } catch (err) {
        next(err);
      }
    },
    async syncStorageKey(req, res, next) {
      try {
        const result = await storageSyncService.syncStorageKey(req.body?.key, req.body?.value);
        res.json(result);
      } catch (err) {
        next(err);
      }
    }
  };
}
