export class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  list(filters) {
    return this.repository.list(filters);
  }

  get(id) {
    return this.repository.get(id);
  }

  create(data) {
    return this.repository.create(data);
  }

  update(id, data) {
    return this.repository.update(id, data);
  }

  delete(id) {
    return this.repository.delete(id);
  }
}
