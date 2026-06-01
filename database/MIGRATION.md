# LPL LocalStorage Migration

Use `server/scripts/migration.js` to move data from the old single-file app into the configured database provider.

1. Open the old HTML app in a browser.
2. Export browser storage as JSON. A simple console command is:

```js
JSON.stringify({ localStorage: { ...localStorage } }, null, 2)
```

3. Save that JSON to a file, for example `localStorage-export.json`.
4. Configure `.env` with `SUPABASE_URL`, `SUPABASE_KEY`, `DATABASE_PROVIDER`, and `JWT_SECRET`.
5. Run:

```bash
npm install
npm run migrate --workspace server -- ../localStorage-export.json --mode merge
```

The migration script:

- Reads exported `lpl_*` localStorage keys.
- Maps teams into `teams` and `players`.
- Maps fixtures and completed custom matches into `matches`.
- Stores legacy storage keys in `settings` so the React-hosted legacy UI can hydrate without data loss.
- Migrates the live match key `lpl_live_session_v2` through the live match system when present.
- Prints an integrity check with season, team, player, match, and live-match counts.

The same script also accepts `LPL_EXPORT_V1` JSON files from the new Export Data panel.
