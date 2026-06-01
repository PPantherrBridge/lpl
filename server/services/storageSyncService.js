import { randomUUID } from 'node:crypto';

function normalizeTeamRecords(teams = {}) {
  return Object.entries(teams).map(([id, team]) => ({
    id,
    code: id,
    name: team.name || id,
    primary_color: team.pri || team.primary_color || '#444444',
    secondary_color: team.sec || team.secondary_color || '#ffffff',
    captain: team.cap || team.captain || '',
    vice_captain: team.vc || team.vice_captain || '',
    women: Boolean(team.women),
    raw: team
  }));
}

function normalizePlayerRecords(teams = {}) {
  const players = [];
  for (const [teamId, team] of Object.entries(teams)) {
    for (const player of team.players || []) {
      const name = player.n || player.name;
      players.push({
        id: `${teamId}_${name}`.replace(/\s+/g, '_'),
        team_id: teamId,
        name,
        batting_hand: player.hand || '',
        role: player.role || '',
        bowling_style: player.style || '',
        attributes: {
          power: player.p,
          consistency: player.c,
          powerplay: player.pp,
          death_overs: player.do,
          clutch: player.cl
        },
        raw: player
      });
    }
  }
  return players;
}

function fixtureRecordId(fixture = {}) {
  const id = fixture.id || fixture.match_number || fixture.matchNumber || fixture.matchId || randomUUID();
  const text = String(id);
  return text.startsWith('fixture_') ? text : `fixture_${text}`;
}

function normalizeFixtureRecords(fixtures = []) {
  return fixtures.map((fixture) => ({
    id: fixtureRecordId(fixture),
    match_number: Number(fixture.match_number || fixture.matchNumber || fixture.id) || null,
    team1_id: fixture.t1,
    team2_id: fixture.t2,
    venue: fixture.venue || 'LPL Arena',
    match_date_label: fixture.date || '',
    status: 'scheduled',
    raw: fixture
  }));
}

function isLegacyScheduledFixture(record = {}) {
  if (record.status !== 'scheduled') return false;
  return String(record.id || '').startsWith('fixture_');
}

function normalizeResultRecords(results = []) {
  return results.map((match) => ({
    id: `match_${match.id}`,
    match_number: match.id,
    season_id: match.season_id || match.seasonId || null,
    team1_id: match.t1,
    team2_id: match.t2,
    winner_team_id: match.winner,
    venue: match.venue || 'LPL Arena',
    match_date_label: match.date || '',
    result_summary: match.margin || '',
    player_of_match: match.potm || '',
    status: 'completed',
    scorecard: match.scorecard || null,
    raw: match
  }));
}

export class StorageSyncService {
  constructor(repositories) {
    this.repositories = repositories;
  }

  async syncStorageKey(key, value) {
    await this.repositories.settings.upsert({ id: key, key, value });

    if (key === 'lpl_live_session_v2') {
      await this.repositories.liveMatches.upsert({
        id: 'current',
        match_id: value?.matchId || [value?.t1k, value?.t2k, value?.date].filter(Boolean).join('_') || 'live',
        season_id: value?.seasonId || null,
        state: { legacySession: value, lastUpdated: new Date().toISOString() },
        last_updated: new Date().toISOString()
      });
    }

    if (key === 'lpl_teams' && value && typeof value === 'object') {
      await this.repositories.teams.upsertMany(normalizeTeamRecords(value));
      await this.repositories.players.upsertMany(normalizePlayerRecords(value));
    }

    if (key === 'lpl_fixtures' && Array.isArray(value)) {
      const fixtureRecords = normalizeFixtureRecords(value);
      const incomingIds = new Set(fixtureRecords.map((fixture) => fixture.id));
      await this.repositories.matches.upsertMany(fixtureRecords);

      const scheduledMatches = await this.repositories.matches.list({ status: 'scheduled' });
      const deletedFixtures = scheduledMatches.filter((match) => (
        isLegacyScheduledFixture(match) && !incomingIds.has(match.id)
      ));
      await Promise.all(deletedFixtures.map((match) => this.repositories.matches.delete(match.id)));
    }

    if (key === 'lpl_custom_matches' && Array.isArray(value)) {
      await this.repositories.matches.upsertMany(normalizeResultRecords(value));
    }

    if (key === 'lpl_playoff_fixtures' && Array.isArray(value)) {
      await this.repositories.playoffs.upsertMany(value.map((fixture) => ({
        id: `playoff_fixture_${fixture.id || fixture.stage || randomUUID()}`,
        stage: fixture.stage || '',
        fixture,
        status: 'scheduled'
      })));
    }

    if (key === 'lpl_playoff_results' && Array.isArray(value)) {
      await this.repositories.playoffs.upsertMany(value.map((result) => ({
        id: `playoff_result_${result.id || result.stage || randomUUID()}`,
        stage: result.stage || '',
        result,
        status: 'completed'
      })));
    }

    return { ok: true };
  }

  async getBootstrapStorage() {
    const settings = await this.repositories.settings.list();
    return settings
      .filter((setting) => setting.key?.startsWith('lpl_'))
      .reduce((out, setting) => {
        out[setting.key] = setting.value;
        return out;
      }, {});
  }
}
