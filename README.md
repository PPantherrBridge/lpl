# LPL Full-Stack Application

This project refactors the original single-file `LPL_v18.html` app into a React + Vite client and Node + Express API with a swappable database repository layer.

The current LPL UI, animations, admin scorer, scorecards, records, head-to-head screens, teams, fixtures, points table, playoffs, and live match workflow are preserved by hosting the legacy DOM/runtime inside React while database-backed services are introduced underneath it.

## Structure

```text
client/
  src/
    pages/
    components/
    modals/
    hooks/
    services/
    styles/
    utils/
  public/legacy/
server/
  routes/
  controllers/
  services/
  repositories/
  middleware/
  config/
database/
  schema.sql
  seed.sql
  MIGRATION.md
shared/
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env` from `.env.example`:

```bash
cp .env.example .env
```

3. Configure at minimum:

```env
SUPABASE_URL=...
SUPABASE_KEY=...
JWT_SECRET=replace-with-a-long-random-secret
ADMIN_PASSWORD=replace-with-a-strong-admin-password
```

4. Run the Supabase SQL in:

```text
database/schema.sql
database/seed.sql
```

5. Start development:

```bash
npm run dev
```

Client: `http://localhost:5173`
API: `http://localhost:4000`

## Database Providers

Default provider:

```env
DATABASE_PROVIDER=supabase
SUPABASE_URL=
SUPABASE_KEY=
```

Switch providers by changing `DATABASE_PROVIDER` and `DATABASE_URL`:

```env
DATABASE_PROVIDER=postgres
DATABASE_URL=postgres://user:password@localhost:5432/lpl
```

Supported provider adapters are in `server/repositories/providers`:

- Supabase PostgreSQL
- PostgreSQL
- MySQL
- MongoDB
- SQLite
- Local JSON memory provider for development fallback

Business logic talks to repositories/services, not provider-specific clients.

## Live Match Persistence

The live scorer still looks and behaves like the original app, but `lpl_live_session_v2` is hydrated from and synced to `/api/live/current`.

The saved live state includes:

- `matchId`
- `seasonId`
- `innings`
- `battingTeam`
- `bowlingTeam`
- `score`
- `wickets`
- `overs`
- `balls`
- `currentBatters`
- `currentBowler`
- `ballByBall`
- `partnerships`
- `fallOfWickets`
- `extras`
- `lastUpdated`

When the admin reopens the site, the React bridge loads the database-backed live match before the legacy scorer initializes.

## Admin

Admin login uses `/api/auth/login` and JWT. Set `ADMIN_PASSWORD` and `JWT_SECRET` outside source code in `.env`.

Admin panel additions:

- Season Manager
- Export Data
- Import Data
- Archives navigation tab

## Export / Import

Exports use database-independent JSON:

```json
{
  "version": "LPL_EXPORT_V1",
  "exportDate": "",
  "seasons": [],
  "teams": [],
  "players": [],
  "matches": [],
  "records": [],
  "archives": [],
  "playoffs": [],
  "settings": []
}
```

Additional scorecard/live arrays are included for full database exports.

Import modes:

- `merge`
- `overwrite`
- `season-only`

## Archives

Closing and archiving a season creates a frozen row in `archives`.

The archive snapshot stores:

- Final points table and standings
- Champion and runner-up
- Orange/Purple Cap equivalents
- MVP
- Team statistics
- Match results
- Playoffs
- Records
- Player statistics

`database/schema.sql` includes an immutability trigger that blocks archive updates/deletes.

## Migration

See [database/MIGRATION.md](database/MIGRATION.md).

Quick command:

```bash
npm run migrate --workspace server -- ./localStorage-export.json --mode merge
```

## API Endpoints

- `/api/seasons`
- `/api/teams`
- `/api/players`
- `/api/matches`
- `/api/live`
- `/api/records`
- `/api/archives`
- `/api/playoffs`
- `/api/export`
- `/api/import`

Also available:

- `/api/auth/login`
- `/api/bootstrap`

## Production Build

```bash
npm run build
npm run start --workspace server
```

The Express server serves the Vite build from `client/dist`.
