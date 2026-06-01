import { CrudService } from './crudService.js';
import { AuthService } from './authService.js';
import { LiveService } from './liveService.js';
import { StorageSyncService } from './storageSyncService.js';
import { ExportService } from './exportService.js';
import { ImportService } from './importService.js';
import { ArchiveService } from './archiveService.js';

export function createServices(repositories) {
  return {
    auth: new AuthService(repositories),
    live: new LiveService(repositories),
    storageSync: new StorageSyncService(repositories),
    export: new ExportService(repositories),
    import: new ImportService(repositories),
    archive: new ArchiveService(repositories),
    seasons: new CrudService(repositories.seasons),
    teams: new CrudService(repositories.teams),
    players: new CrudService(repositories.players),
    matches: new CrudService(repositories.matches),
    records: new CrudService(repositories.records),
    playoffs: new CrudService(repositories.playoffs),
    archives: new CrudService(repositories.archives)
  };
}
