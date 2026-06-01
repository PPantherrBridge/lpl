import { REPOSITORY_TABLES } from '../config/tables.js';
import { TableRepository } from './tableRepository.js';

export function createRepositories(provider) {
  return Object.fromEntries(
    Object.entries(REPOSITORY_TABLES).map(([name, table]) => [name, new TableRepository(provider, table)])
  );
}
