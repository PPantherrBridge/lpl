# LPL Statistics Architecture

Date: 2026-06-12

## Overview

All LPL leaderboards and record tables are derived from completed match scorecards stored in the in-memory `RESULTS` array (hydrated from `/api/matches` at boot). A single pure-function statistics engine now owns every aggregation path.

```text
API bootstrap → RESULTS[] → getFilteredResults() → aggregate*() → page renderers
```

| Layer | Location | Role |
|-------|----------|------|
| Data source | `lpl-legacy.js` (`RESULTS`, `TEAM_META`) | Raw match + team metadata |
| Engine | `shared/lplStatsEngine.js` | Pure filtering and aggregation |
| Bootstrap | `client/src/pages/LegacyLPLPage.jsx` | Exposes `window.LPLStatsEngine` before legacy script loads |
| UI renderers | `lpl-legacy.js` | Unchanged DOM/HTML; thin wrappers call the engine |

## Engine API

### Filtering

```js
getFilteredResults(results, {
  seasonId: null,          // match.seasonId when multi-season is active
  matchFilter: 'all',      // 'all' | 'league' | 'playoffs' | 'finals'
  completedOnly: false     // exclude winner === 'TBD'
})
```

Default options reproduce pre-migration behaviour (entire `RESULTS` array, no stage filter).

### Aggregations

| Function | Output | Used by |
|----------|--------|---------|
| `aggregateBattingStats()` | Cumulative batter rows (runs, balls, SR, avg, HS) | Season Stats, Records, Home |
| `aggregateBowlingStats()` | Cumulative bowler rows (wkts, overs, econ, bestStr) | Season Stats, Records, Home |
| `aggregateBattingInnings()` | Flat per-innings batting rows | Highest Scores tabs |
| `aggregateBowlingSpells()` | Individual spells with w > 0 | Records → Best Bowling |
| `aggregateFieldingStats()` | Catches, stumpings, run-outs from dismissals | Future Cricket Center |
| `aggregateTeamStats()` | Team innings totals | Records → Team Totals |
| `aggregatePotmStats()` | POTM award counts | Records → Most POTMs |
| `computeMvpScores()` | Combined MVP points | Season Stats → MVPs |
| `buildPlayerStatsBundle()` | `{ bat, bowl, batArr, bowlArr }` legacy shape | Home, Season Stats |
| `getBestSpell()` | Best spell string (`w/r`) using raw scorecard names | Purple Cap, Most Wickets |
| `getMvpScoreBreakdown()` | Bat/bowl/bonus sub-scores for MVP cards | Season Stats MVP UI |

### Shared utilities

- `normalizePlayerName()` — canonical player rename map (`PLAYER_CANONICAL_MAP`)
- `parseOversToDecimal()` / `formatOversFromDecimal()` — consistent overs math
- `getMvpScoreBreakdown()` — single source for MVP formula (no duplicate in renderers)

## Page integration

### Home (`initHome`, `renderHomeHighlights`, `renderHomePerformers`)

```js
buildPlayerStats() → buildPlayerStatsBundle(getFilteredResults(), TEAM_META)
```

### Season Stats (`renderStat`, leaderboards, hero banner)

```js
buildPlayerStats()          // batting + bowling tables
computeMvpScores()          // MVP tab
getAllInningsHighs()        // highest individual innings (raw scorecard names)
getBestSpell()              // per-row best spell in bowling tables
```

### Records (`_batStats`, `_bowlStats`, `_allInnings`, `_teamTotals`, `_potmCount`, `_recBestBowling`)

Each `_`-prefixed helper is a one-line wrapper around the matching `aggregate*()` function.

### Future Cricket Center

Cricket Center should call the same engine with explicit filters:

```js
const results = LPLStatsEngine.getFilteredResults(RESULTS, {
  seasonId: ccSeasonSelect.value,
  matchFilter: ccMatchFilter.value
});
const batting = LPLStatsEngine.aggregateBattingStats(results, TEAM_META);
const bowling = LPLStatsEngine.aggregateBowlingStats(results, TEAM_META);
const fielding = LPLStatsEngine.aggregateFieldingStats(results, TEAM_META);
const { teamTotals } = LPLStatsEngine.aggregateTeamStats(results, TEAM_META);
```

No new aggregation logic should be added inside Cricket Center renderers.

## Behavioural parity notes

These intentional differences between call sites are preserved:

| Call site | Behaviour |
|-----------|-----------|
| `getAllInningsHighs()` | `normalizeNames: false`, `sortByRuns: true` — keeps original scorecard batter names |
| `_allInnings()` | `normalizeNames: true` — applies canonical rename map |
| `getBestSpell()` | Matches raw `bowler.n` against normalized display name (legacy parity) |
| `_bowlStats().bestStr` | Pre-computed from spell list during aggregation |
| `renderPurpleCap` best column | On-demand `getBestSpell()` scan (same result as `bestStr` when names align) |

## Fielding stats

`aggregateFieldingStats()` parses dismissal strings:

- `c Fielder b Bowler` → catch
- `st Fielder b Bowler` → stumping
- `run out (Fielder)` / `run out Fielder` → run-out

Fielders are normalized with the bowling team's canonical map. No UI consumes fielding data yet; the function is ready for Cricket Center milestones and fielding leaderboards.

## Testing

Parity tests compare the engine against legacy reference implementations:

```bash
node shared/lplStatsEngine.test.js
```

Tests cover:

- Sample fixture matches
- Full production `RESULTS` array extracted from `lpl-legacy.js`
- Batting, bowling, MVP, POTM, team totals, fielding, innings flattening
- `getFilteredResults()` stage filters

MVP scores are compared per `player|team` key with a tolerance of `0.15` points to account for floating-point overs accumulation in the legacy formula. Leaderboard batting and bowling values are compared exactly.

## What was removed

The following duplicate implementations were deleted from `lpl-legacy.js` and replaced with wrappers:

- Inline `buildPlayerStats()` loop (~60 lines)
- Inline `computeMvpScores()` loop (~80 lines)
- `_batStats()`, `_bowlStats()`, `_allInnings()`, `_potmCount()`, `_teamTotals()`
- `getAllInningsHighs()`, `getBestSpell()` scan loops
- `_recBestBowling()` spell collection loop
- Duplicate MVP sub-score formula in `renderMVPs()`

## Future improvements

1. Memoize `buildPlayerStatsBundle()` per filter key when Cricket Center adds live filter changes.
2. Move MVP / fielding leaderboards to server-side materialized views if `records` table becomes authoritative.
3. Expose `getFilteredResults()` options through Cricket Center season/match dropdowns.
4. Add Vitest and import `lplStatsEngine.test.js` into CI.
