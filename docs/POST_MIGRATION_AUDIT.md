# Post-Migration Audit

Date: 2026-06-01

## Current State

- Backend persistence is database-backed through repositories and provider adapters.
- Supabase is the active production-style provider.
- The original LPL UI is intentionally preserved through the legacy markup/runtime mounted by React.
- Startup data for teams, players, matches, playoffs, and live match state is hydrated from the API before the legacy UI initializes.
- localStorage remains only as a compatibility cache for selected legacy workflows.

## Git And Secret Hygiene

- `.gitignore` exists and ignores `node_modules/`, `.env`, `.env.*`, `dist/`, `.vite/`, `coverage/`, `server/.data/`, `*.sqlite`, and `*.log`.
- `.env.example` is tracked-safe and contains placeholders only.
- `.env` is ignored and is not tracked.
- No tracked `.env` files were found.
- The client reads only `VITE_API_BASE_URL`; no server-only secrets are referenced from client code.
- Secret scan notes:
  - Tracked source contains environment variable names in documentation/config only.
  - No Supabase service role key, JWT value, database URL value, or admin password value was found in tracked application source.

## Remaining localStorage Usage

The following legacy compatibility areas still touch localStorage:

- `lpl_teams`: admin team/player manager compatibility cache.
- `lpl_fixtures`: admin fixture manager compatibility cache, synced through `/api/import/storage-key`.
- `lpl_custom_matches`: legacy match entry/manage cache, synced through `/api/import/storage-key`.
- `lpl_live_session_v2`: local backup for scorer autosave; database source is `/api/live/current`.
- `lpl_tournament_stage`, `lpl_playoff_fixtures`, `lpl_playoff_results`: playoff workflow compatibility cache and sync source.
- `lpl_playoff_status_*`: local playoff status lock/badge state.
- One-time legacy player rename migration markers.
- Admin clear/debug utilities that remove old `lpl_*` local keys.

## Remaining sessionStorage Usage

- `lpl_admin_token`: JWT used by `client/src/services/lplApi.js`.
- `lpl_admin_authenticated`: legacy UI flag used to unlock/show admin pages.

## Remaining Legacy Dependencies

- `client/src/pages/legacy-markup.html`: preserved original markup.
- `client/public/legacy/lpl-legacy.js`: preserved original DOM runtime.
- `client/src/pages/LegacyLPLPage.jsx`: React integration wrapper using `dangerouslySetInnerHTML`.
- `client/src/services/adminExtensions.js`: archive/import/export/season manager bridge.
- `client/src/styles/lpl-admin.css` and `client/src/styles/lpl-base.css`: original visual system.
- `client/legacy-backup/*`: backup copy of the restored legacy assets.

## Frontend Areas Still Using Sync Bridges

- Team/player admin updates call `saveTeamsToStorage()` and then `syncStorageKey('lpl_teams', TEAMS)`.
- Fixture admin updates call `saveFixturesToStorage()` and then `syncStorageKey('lpl_fixtures', FIXTURES)`.
- Match entry stores custom matches and syncs `lpl_custom_matches`.
- Playoff fixture/result flows sync `lpl_playoff_fixtures`, `lpl_playoff_results`, and `lpl_tournament_stage`.
- Live scorer autosave writes both the local cache and `/api/live/current`.

## Areas Requiring Direct CRUD APIs Later

- Team create/edit/delete should eventually call `/api/teams` directly.
- Player create/edit/reorder/delete should eventually call `/api/players` directly.
- Fixture create/edit/delete should eventually call `/api/matches` directly.
- Match save/delete should eventually call `/api/matches` directly.
- Playoff stage/status management should eventually call `/api/playoffs` and season APIs directly.
- Player rename across historical matches should become a backend operation or explicit migration endpoint.

## Stability Notes

- Main API bootstrap failure clears legacy hardcoded data and shows a visible API error banner.
- Optional playoff/live load failures clear those runtime areas and now show a visible warning banner.
- API network failures are normalized into actionable errors by `lplApi`.
- Backend sync for deleted fixtures now deletes stale scheduled `fixture_*` match rows instead of only upserting surviving fixtures.

## Risks

- The legacy runtime is large and DOM-global; accidental duplicate function names can still break the public script.
- Some admin writes are eventually synced through bridge endpoints rather than direct CRUD calls, so failures can leave UI state ahead of the database until refresh.
- `sessionStorage` admin flags are legacy UI state and should not be treated as authorization; backend JWT middleware remains the actual enforcement.
- Playoff status badge persistence is still mostly local and should be moved to the database before relying on it for season archive decisions.

## Recommended Next Priorities

1. Replace fixture bridge writes with direct `/api/matches` create/update/delete while keeping the same UI.
2. Replace team/player bridge writes with direct `/api/teams` and `/api/players`.
3. Move playoff status locks from localStorage into `playoffs` or `settings`.
4. Add a small browser smoke test for API bootstrap, fixture delete persistence, and live match restore.
5. Add a server-side import/export regression test using the memory provider.
