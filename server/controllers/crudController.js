export function createCrudController(service) {
  return {
    async list(req, res, next) {
      try {
        res.json({ data: await service.list(req.query) });
      } catch (err) {
        next(err);
      }
    },
    async get(req, res, next) {
      try {
        const record = await service.get(req.params.id);
        if (!record) return res.status(404).json({ error: 'Not found.' });
        res.json({ data: record });
      } catch (err) {
        next(err);
      }
    },
    async create(req, res, next) {
      try {
        res.status(201).json({ data: await service.create(req.body) });
      } catch (err) {
        next(err);
      }
    },
    async update(req, res, next) {
      try {
        const record = await service.update(req.params.id, req.body);
        if (!record) return res.status(404).json({ error: 'Not found.' });
        res.json({ data: record });
      } catch (err) {
        next(err);
      }
    },
    async remove(req, res, next) {
      try {
        await service.delete(req.params.id);
        res.status(204).end();
      } catch (err) {
        next(err);
      }
    }
  };
}
