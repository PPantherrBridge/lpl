export function createBootstrapController(storageSyncService) {
  return {
    async bootstrap(req, res, next) {
      try {
        res.json({ storage: await storageSyncService.getBootstrapStorage() });
      } catch (err) {
        next(err);
      }
    }
  };
}
