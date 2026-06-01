#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { createDatabaseProvider } from '../config/database.js';
import { createRepositories } from '../repositories/index.js';
import { ImportService } from '../services/importService.js';
import { StorageSyncService } from '../services/storageSyncService.js';

const SUPPORTED_DIRECT_IMPORTS = new Set(['LPL_EXPORT_V1', 'LPL_MIGRATION_PREP_V1']);
const SUMMARY_KEYS = [
  ['Seasons', 'seasons'],
  ['Teams', 'teams'],
  ['Players', 'players'],
  ['Matches', 'matches'],
  ['Archives', 'archives'],
  ['Playoffs', 'playoffs'],
  ['Live Matches', 'liveMatches']
];

function parseArgs(argv) {
  const args = { file: '', mode: 'merge' };
  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--mode') args.mode = argv[++i] || 'merge';
    else if (!args.file) args.file = arg;
  }
  return args;
}

function parseMaybeJson(value) {
  if (typeof value !== 'string') return value;
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function normalizeLocalStorageExport(raw) {
  if (SUPPORTED_DIRECT_IMPORTS.has(raw.version)) return raw;

  const source = raw.localStorage || raw.storage || raw;
  const keys = Object.keys(source).filter((key) => key.startsWith('lpl_'));
  if (!keys.length) {
    throw new Error('No lpl_* localStorage keys found. Export localStorage as JSON first.');
  }

  return {
    storageKeys: Object.fromEntries(keys.map((key) => [key, parseMaybeJson(source[key])]))
  };
}

async function verify(repositories) {
  const [seasons, teams, players, matches, archives, playoffs, live] = await Promise.all([
    repositories.seasons.list(),
    repositories.teams.list(),
    repositories.players.list(),
    repositories.matches.list(),
    repositories.archives.list(),
    repositories.playoffs.list(),
    repositories.liveMatches.list()
  ]);

  return {
    seasons: seasons.length,
    teams: teams.length,
    players: players.length,
    matches: matches.length,
    archives: archives.length,
    playoffs: playoffs.length,
    liveMatches: live.length
  };
}

function printImportSummary(result, integrity) {
  console.log('\nImport summary');
  console.log('==============');
  for (const [label, key] of SUMMARY_KEYS) {
    const row = result?.summary?.[label];
    if (row) {
      console.log(`${label}: source=${row.source}, inserted=${row.inserted}, updated=${row.updated}, skipped=${row.skipped}, present=${row.present}`);
    } else {
      console.log(`${label}: present=${integrity[key] || 0}`);
    }
  }
}

async function main() {
  const args = parseArgs(process.argv);
  if (!args.file) {
    console.error('Usage: node server/scripts/migration.js <localStorage-export.json|lpl-export.json> [--mode merge|overwrite|season-only]');
    process.exit(1);
  }

  const inputPath = path.resolve(args.file);
  const raw = JSON.parse(await fs.readFile(inputPath, 'utf8'));
  const normalized = normalizeLocalStorageExport(raw);
  const provider = await createDatabaseProvider();
  const repositories = createRepositories(provider);

  let importResult = null;
  if (SUPPORTED_DIRECT_IMPORTS.has(normalized.version)) {
    importResult = await new ImportService(repositories).importPayload(normalized, args.mode);
    console.log(`Imported ${importResult.sourceVersion} as ${importResult.version}.`);
  } else {
    const storageSync = new StorageSyncService(repositories);
    for (const [key, value] of Object.entries(normalized.storageKeys)) {
      await storageSync.syncStorageKey(key, value);
      console.log(`Synced ${key}`);
    }
  }

  const integrity = await verify(repositories);
  printImportSummary(importResult, integrity);
  console.log('\nIntegrity check:', integrity);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
