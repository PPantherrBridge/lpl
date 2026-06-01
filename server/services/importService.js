const EXPORT_VERSION = 'LPL_EXPORT_V1';
const MIGRATION_PREP_VERSION = 'LPL_MIGRATION_PREP_V1';
const DEFAULT_SEASON_ID = 'season_1';

const PAYLOAD_REPOSITORIES = {
  seasons: 'seasons',
  teams: 'teams',
  players: 'players',
  matches: 'matches',
  records: 'records',
  archives: 'archives',
  playoffs: 'playoffs',
  settings: 'settings',
  innings: 'innings',
  battingScorecards: 'battingScorecards',
  bowlingScorecards: 'bowlingScorecards',
  ballEvents: 'ballEvents',
  partnerships: 'partnerships',
  fallOfWickets: 'fallOfWickets',
  pointsTable: 'pointsTable',
  headToHead: 'headToHead',
  liveMatches: 'liveMatches'
};

const SUMMARY_LABELS = {
  seasons: 'Seasons',
  teams: 'Teams',
  players: 'Players',
  matches: 'Matches',
  archives: 'Archives',
  playoffs: 'Playoffs',
  liveMatches: 'Live Matches'
};

const REQUIRED_EXPORT_ARRAYS = ['seasons', 'teams', 'players', 'matches', 'records', 'archives', 'playoffs', 'settings'];
const VALID_MATCH_STATUSES = new Set(['scheduled', 'live', 'completed', 'abandoned']);

function ensureArray(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === 'object') return Object.values(value);
  return [];
}

function slug(value) {
  return String(value ?? '')
    .trim()
    .replace(/\s+/g, '_')
    .replace(/[^a-zA-Z0-9_-]/g, '')
    || 'unknown';
}

function settingRecords(settings = {}) {
  if (Array.isArray(settings)) {
    return settings.map((setting) => ({
      ...setting,
      id: setting.id || setting.key,
      key: setting.key || setting.id
    }));
  }
  if (!settings || typeof settings !== 'object') return [];
  return Object.entries(settings).map(([key, value]) => ({ id: key, key, value }));
}

function recordIdentity(record) {
  return record?.id || record?.key || null;
}

function validateNoDuplicateRecords(payload) {
  for (const payloadKey of Object.keys(PAYLOAD_REPOSITORIES)) {
    const records = payload[payloadKey] || [];
    if (!Array.isArray(records) || !records.length) continue;
    const seen = new Set();
    const duplicates = new Set();
    for (const record of records) {
      const id = recordIdentity(record);
      if (!id) continue;
      if (seen.has(id)) duplicates.add(id);
      seen.add(id);
    }
    if (duplicates.size) {
      throw new Error(`Duplicate ${payloadKey} record IDs detected: ${[...duplicates].join(', ')}`);
    }
  }
}

function validateMatchRecords(matches = []) {
  const errors = [];
  const seen = new Set();
  for (const [index, match] of matches.entries()) {
    const label = match?.id || `index ${index}`;
    if (!match?.id) errors.push(`match at index ${index} is missing id`);
    if (match?.id && seen.has(match.id)) errors.push(`duplicate match id ${match.id}`);
    if (match?.id) seen.add(match.id);
    if (!match?.team1_id) errors.push(`${label} is missing team1_id`);
    if (!match?.team2_id) errors.push(`${label} is missing team2_id`);
    if (!VALID_MATCH_STATUSES.has(match?.status)) errors.push(`${label} has invalid status ${match?.status || '(missing)'}`);
  }
  if (errors.length) {
    throw new Error(`Invalid match structure: ${errors.join('; ')}`);
  }
}

function validateNormalizedPayload(payload) {
  validateNoDuplicateRecords(payload);
  validateMatchRecords(payload.matches || []);
  return payload;
}

function mapTeamRecords(teams, seasonId) {
  if (Array.isArray(teams)) {
    return teams.map((team) => ({
      id: team.id || team.code || team.abbr || team.shortName,
      season_id: team.season_id || team.seasonId || seasonId,
      code: team.code || team.abbr || team.id,
      name: team.name || team.fullName || team.code || team.id,
      primary_color: team.primary_color || team.primaryColor || team.pri,
      secondary_color: team.secondary_color || team.secondaryColor || team.sec,
      captain: team.captain || team.cap,
      vice_captain: team.vice_captain || team.viceCaptain || team.vc,
      women: Boolean(team.women),
      raw: team.raw || team
    }));
  }

  if (!teams || typeof teams !== 'object') return [];
  return Object.entries(teams).map(([code, team]) => ({
    id: team.id || code,
    season_id: team.season_id || team.seasonId || seasonId,
    code,
    name: team.name || code,
    primary_color: team.primary_color || team.primaryColor || team.pri,
    secondary_color: team.secondary_color || team.secondaryColor || team.sec,
    captain: team.captain || team.cap,
    vice_captain: team.vice_captain || team.viceCaptain || team.vc,
    women: Boolean(team.women),
    raw: team.raw || team
  }));
}

function playersFromTeams(teams, seasonId) {
  if (!teams || Array.isArray(teams) || typeof teams !== 'object') return [];
  const players = [];
  for (const [teamId, team] of Object.entries(teams)) {
    for (const player of team.players || []) {
      const name = player.name || player.n;
      players.push({
        id: player.id || `${teamId}_${slug(name)}`,
        team_id: player.team_id || player.teamId || teamId,
        season_id: player.season_id || player.seasonId || seasonId,
        name,
        batting_hand: player.batting_hand || player.battingHand || player.hand,
        role: player.role,
        bowling_style: player.bowling_style || player.bowlingStyle || player.style,
        attributes: player.attributes || {
          power: player.p,
          consistency: player.c,
          powerplay: player.pp,
          death_overs: player.do,
          clutch: player.cl
        },
        raw: player.raw || player
      });
    }
  }
  return players;
}

function mapPlayerRecords(players, teams, seasonId) {
  const directPlayers = ensureArray(players);
  const mapped = directPlayers.map((player) => {
    const teamId = player.team_id || player.teamId || player.team || player.teamCode || player.teamKey;
    const name = player.name || player.n;
    return {
      id: player.id || `${teamId || 'player'}_${slug(name)}`,
      team_id: teamId,
      season_id: player.season_id || player.seasonId || seasonId,
      name,
      batting_hand: player.batting_hand || player.battingHand || player.hand,
      role: player.role,
      bowling_style: player.bowling_style || player.bowlingStyle || player.style,
      attributes: player.attributes || {
        power: player.p,
        consistency: player.c,
        powerplay: player.pp,
        death_overs: player.do,
        clutch: player.cl
      },
      raw: player.raw || player
    };
  });

  if (mapped.length) return mapped;
  return playersFromTeams(teams, seasonId);
}

function mapCompletedMatch(match, seasonId) {
  const matchNumber = Number(match.match_number || match.matchNumber || match.id || 0) || null;
  return {
    id: match.id && String(match.id).startsWith('match_') ? String(match.id) : `match_${match.id || matchNumber || slug(match.matchId)}`,
    season_id: match.season_id || match.seasonId || seasonId,
    match_number: match.match_number || match.matchNumber || matchNumber,
    stage: match.stage || 'league',
    team1_id: match.team1_id || match.team1Id || match.t1,
    team2_id: match.team2_id || match.team2Id || match.t2,
    winner_team_id: match.winner_team_id || match.winnerTeamId || match.winner,
    venue: match.venue || 'LPL Arena',
    match_date: match.match_date || match.matchDate || null,
    match_date_label: match.match_date_label || match.matchDateLabel || match.date || '',
    status: match.status || 'completed',
    result_summary: match.result_summary || match.resultSummary || match.margin || '',
    player_of_match: match.player_of_match || match.playerOfMatch || match.potm || '',
    scorecard: match.scorecard || null,
    raw: match.raw || match
  };
}

function mapFixture(fixture, seasonId) {
  const matchNumber = Number(fixture.match_number || fixture.matchNumber || fixture.id || 0) || null;
  return {
    id: fixture.id && String(fixture.id).startsWith('fixture_') ? String(fixture.id) : `fixture_${fixture.id || matchNumber || slug(fixture.matchId)}`,
    season_id: fixture.season_id || fixture.seasonId || seasonId,
    match_number: fixture.match_number || fixture.matchNumber || matchNumber,
    stage: fixture.stage || 'league',
    team1_id: fixture.team1_id || fixture.team1Id || fixture.t1,
    team2_id: fixture.team2_id || fixture.team2Id || fixture.t2,
    venue: fixture.venue || 'LPL Arena',
    match_date: fixture.match_date || fixture.matchDate || null,
    match_date_label: fixture.match_date_label || fixture.matchDateLabel || fixture.date || '',
    status: fixture.status || 'scheduled',
    raw: fixture.raw || fixture
  };
}

function mapMatches(completedMatches, fixtures, seasonId) {
  const completed = ensureArray(completedMatches).map((match) => mapCompletedMatch(match, seasonId));
  const completedNumbers = new Set(completed.map((match) => match.match_number).filter(Boolean));
  const scheduled = ensureArray(fixtures)
    .map((fixture) => mapFixture(fixture, seasonId))
    .filter((fixture) => !completedNumbers.has(fixture.match_number));
  return [...completed, ...scheduled];
}

function mapArchiveRecords(archives, seasonId) {
  return ensureArray(archives).map((archive, index) => {
    const archiveSeasonId = archive.season_id || archive.seasonId || archive.snapshot?.seasonId || seasonId;
    return {
      id: archive.id || `archive_${archiveSeasonId || index + 1}`,
      season_id: archiveSeasonId,
      season_name: archive.season_name || archive.seasonName || archive.snapshot?.seasonName || 'Season 1',
      snapshot: archive.snapshot || archive,
      immutable: archive.immutable !== false,
      created_at: archive.created_at || archive.createdAt
    };
  });
}

function mapPlayoffRecords(playoffs, seasonId) {
  if (!playoffs) return [];
  if (Array.isArray(playoffs)) {
    return playoffs.map((playoff, index) => ({
      id: playoff.id || `playoff_${index + 1}`,
      season_id: playoff.season_id || playoff.seasonId || seasonId,
      stage: playoff.stage || playoff.name || `Playoff ${index + 1}`,
      fixture: playoff.fixture || (playoff.status === 'scheduled' ? playoff : undefined),
      result: playoff.result || (playoff.status === 'completed' ? playoff : undefined),
      raw: playoff.raw || playoff
    }));
  }

  const out = [];
  for (const [groupName, value] of Object.entries(playoffs)) {
    for (const item of ensureArray(value)) {
      out.push({
        id: item.id || `playoff_${slug(groupName)}_${out.length + 1}`,
        season_id: item.season_id || item.seasonId || seasonId,
        stage: item.stage || groupName,
        fixture: groupName.toLowerCase().includes('fixture') ? item : item.fixture,
        result: groupName.toLowerCase().includes('result') ? item : item.result,
        raw: item.raw || item
      });
    }
  }
  return out;
}

function mapLiveMatch(liveMatch, seasonId) {
  if (!liveMatch) return [];
  const state = liveMatch.state || liveMatch;
  return [{
    id: liveMatch.id || 'current',
    match_id: liveMatch.match_id || liveMatch.matchId || state.matchId || 'live',
    season_id: liveMatch.season_id || liveMatch.seasonId || state.seasonId || seasonId,
    state,
    last_updated: liveMatch.last_updated || liveMatch.lastUpdated || state.lastUpdated || new Date().toISOString()
  }];
}

function normalizeExportPayload(payload) {
  for (const key of REQUIRED_EXPORT_ARRAYS) {
    if (!Array.isArray(payload[key])) throw new Error(`Export is missing array: ${key}`);
  }
  return validateNormalizedPayload({
    ...payload,
    liveMatches: payload.liveMatches || []
  });
}

function normalizeMigrationPrepPayload(payload) {
  const seasons = Array.isArray(payload.seasons) && payload.seasons.length
    ? payload.seasons
    : [{ id: DEFAULT_SEASON_ID, name: 'Season 1', number: 1, year: payload.year || '2025', status: 'draft' }];
  const seasonId = seasons[0].id || DEFAULT_SEASON_ID;
  const matches = mapMatches(payload.completedMatches, payload.fixtures, seasonId);

  return validateNormalizedPayload({
    version: EXPORT_VERSION,
    sourceVersion: MIGRATION_PREP_VERSION,
    exportDate: payload.exportDate || new Date().toISOString(),
    seasons,
    teams: mapTeamRecords(payload.teams || [], seasonId),
    players: mapPlayerRecords(payload.players || [], payload.teams || {}, seasonId),
    matches,
    records: payload.records || [],
    archives: mapArchiveRecords(payload.archives || [], seasonId),
    playoffs: mapPlayoffRecords(payload.playoffs || [], seasonId),
    settings: settingRecords(payload.settings || {}),
    liveMatches: mapLiveMatch(payload.liveMatch, seasonId),
    // Count only the completed matches sourced from completedMatches[].
    // `matches` also includes scheduled fixtures from payload.fixtures[], so using
    // matches.length would overcount (e.g. 59 completed + 1 fixture = 60 ≠ 59).
    migrationPrepSourceMatchCount: ensureArray(payload.completedMatches).length
  });
}

export function normalizeImportPayload(payload) {
  if (!payload || !payload.version) throw new Error('Invalid LPL import file.');
  if (payload.version === EXPORT_VERSION) return normalizeExportPayload(payload);
  if (payload.version === MIGRATION_PREP_VERSION) return normalizeMigrationPrepPayload(payload);
  throw new Error(`Unsupported LPL import version: ${payload.version}`);
}

function emptySummary() {
  return Object.fromEntries(
    Object.values(SUMMARY_LABELS).map((label) => [label, { source: 0, inserted: 0, updated: 0, skipped: 0, present: 0 }])
  );
}

function incrementSummary(summary, payloadKey, field) {
  const label = SUMMARY_LABELS[payloadKey];
  if (label) summary[label][field]++;
}

export class ImportService {
  constructor(repositories) {
    this.repositories = repositories;
  }

  validate(payload) {
    normalizeImportPayload(payload);
  }

  async assertMigrationMatchCount(payload, matchIds) {
    if (payload.sourceVersion !== MIGRATION_PREP_VERSION) return;
    // Validate that every match that was written to the DB is now retrievable,
    // and that there are no duplicate IDs — without asserting a hardcoded count.
    const present = await Promise.all(matchIds.map((id) => this.repositories.matches.get(id)));
    const missingIds = matchIds.filter((id, i) => !present[i]);
    if (missingIds.length) {
      throw new Error(
        `Match import integrity check failed: ${missingIds.length} record(s) could not be read back ` +
        `after upsert. Missing IDs: ${missingIds.join(', ')}`
      );
    }
    const unique = new Set(matchIds);
    if (unique.size !== matchIds.length) {
      const dupes = matchIds.filter((id, i) => matchIds.indexOf(id) !== i);
      throw new Error(
        `Match import integrity check failed: duplicate match IDs detected after import: ${[...new Set(dupes)].join(', ')}`
      );
    }
  }

  async importPayload(rawPayload, mode = 'merge') {
    const payload = normalizeImportPayload(rawPayload);

    let inserted = 0;
    let updated = 0;
    let skipped = 0;
    const summary = emptySummary();
    const matchIds = [];

    for (const [payloadKey, repoKey] of Object.entries(PAYLOAD_REPOSITORIES)) {
      const repo = this.repositories[repoKey];
      const records = payload[payloadKey] || [];
      if (!records.length) continue;

      for (const record of records) {
        incrementSummary(summary, payloadKey, 'source');
        if (payloadKey === 'matches') matchIds.push(record.id || record.key);

        if (mode === 'season-only' && payloadKey !== 'archives' && payloadKey !== 'seasons' && !record.season_id && !record.seasonId) {
          skipped++;
          incrementSummary(summary, payloadKey, 'skipped');
          continue;
        }

        const id = record.id || record.key;
        const exists = id ? await repo.get(id) : null;
        if (exists && mode === 'merge') {
          skipped++;
          incrementSummary(summary, payloadKey, 'skipped');
          continue;
        }

        await repo.upsert({ ...record, id }, 'id');
        if (exists) {
          updated++;
          incrementSummary(summary, payloadKey, 'updated');
        } else {
          inserted++;
          incrementSummary(summary, payloadKey, 'inserted');
        }
      }
    }

    await this.assertMigrationMatchCount(payload, matchIds);

    await Promise.all(Object.entries(SUMMARY_LABELS).map(async ([payloadKey, label]) => {
      const repoKey = PAYLOAD_REPOSITORIES[payloadKey];
      summary[label].present = repoKey ? (await this.repositories[repoKey].list()).length : 0;
    }));

    return {
      version: payload.version,
      sourceVersion: payload.sourceVersion || payload.version,
      inserted,
      updated,
      skipped,
      summary
    };
  }
}
