export function createLiveController(liveService) {
  return {
    async getCurrent(req, res, next) {
      try {
        res.json({ data: await liveService.getCurrent() });
      } catch (err) {
        next(err);
      }
    },
    async saveCurrent(req, res, next) {
      try {
        const state = req.body?.state || req.body || {};
        res.json({ data: await liveService.saveCurrent(state) });
      } catch (err) {
        next(err);
      }
    },
    async clearCurrent(req, res, next) {
      try {
        await liveService.clearCurrent();
        res.status(204).end();
      } catch (err) {
        next(err);
      }
    }
  };
}
