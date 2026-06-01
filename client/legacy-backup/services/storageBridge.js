import { lplApi } from './lplApi.js';

const LPL_PREFIX = 'lpl_';
const LIVE_KEY = 'lpl_live_session_v2';
const SYNC_DELAY_MS = 350;

let installed = false;
let nativeSetItem = null;
let nativeRemoveItem = null;
const syncTimers = new Map();

function safeJson(value) {
  if (typeof value !== 'string') return value;
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function scheduleSync(key, value, removed = false) {
  if (!key?.startsWith(LPL_PREFIX)) return;
  clearTimeout(syncTimers.get(key));
  syncTimers.set(
    key,
    setTimeout(async () => {
      syncTimers.delete(key);
      try {
        if (key === LIVE_KEY) {
          if (removed) await lplApi.clearLiveSession();
          else await lplApi.saveLiveSession(safeJson(value));
          return;
        }
        await lplApi.syncStorageKey(key, removed ? null : safeJson(value));
      } catch (err) {
        console.warn(`LPL database sync skipped for ${key}:`, err.message);
      }
    }, SYNC_DELAY_MS)
  );
}

async function hydrateFromDatabase() {
  try {
    const bootstrap = await lplApi.getBootstrap();
    const storage = bootstrap?.storage || {};
    for (const [key, value] of Object.entries(storage)) {
      if (value === undefined || value === null) continue;
      nativeSetItem.call(window.localStorage, key, typeof value === 'string' ? value : JSON.stringify(value));
    }
  } catch (err) {
    console.info('LPL bootstrap API unavailable; starting from bundled legacy data.', err.message);
  }

  try {
    const live = await lplApi.getLiveSession();
    const state = live?.data?.state || live?.state;
    const legacySession = state?.legacySession || state;
    if (legacySession && Object.keys(legacySession).length) {
      nativeSetItem.call(window.localStorage, LIVE_KEY, JSON.stringify(legacySession));
    }
  } catch (err) {
    console.info('No database-backed live match to restore.', err.message);
  }
}

function patchLocalStorage() {
  if (installed) return;
  nativeSetItem = Storage.prototype.setItem;
  nativeRemoveItem = Storage.prototype.removeItem;

  Storage.prototype.setItem = function patchedSetItem(key, value) {
    const result = nativeSetItem.apply(this, arguments);
    if (this === window.localStorage) scheduleSync(String(key), value, false);
    return result;
  };

  Storage.prototype.removeItem = function patchedRemoveItem(key) {
    const oldValue = this === window.localStorage ? this.getItem(key) : null;
    const result = nativeRemoveItem.apply(this, arguments);
    if (this === window.localStorage) scheduleSync(String(key), oldValue, true);
    return result;
  };

  installed = true;
}

export async function installDatabaseBridge() {
  if (!nativeSetItem) {
    nativeSetItem = Storage.prototype.setItem;
    nativeRemoveItem = Storage.prototype.removeItem;
  }
  await hydrateFromDatabase();
  patchLocalStorage();
}
