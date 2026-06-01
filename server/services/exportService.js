function bySeason(seasonId) {
  return (record) => !seasonId || record.season_id === seasonId || record.seasonId === seasonId;
}

async function latestSeason(repositories) {
  const seasons = await repositories.seasons.list();
  return seasons.find((season) => season.status === 'active') || seasons.at(-1) || null;
}

export class ExportService {
  constructor(repositories) {
    this.repositories = repositories;
  }

  async buildExport({ scope = 'entire-database', seasonId = '' } = {}) {
    const selectedSeason = seasonId || (scope === 'current-season' ? (await latestSeason(this.repositories))?.id : '');
    const payload = {
      version: 'LPL_EXPORT_V1',
      exportDate: new Date().toISOString(),
      seasons: [],
      teams: [],
      players: [],
      matches: [],
      records: [],
      archives: [],
      playoffs: [],
      settings: []
    };

    if (scope === 'live-match') {
      payload.liveMatches = await this.repositories.liveMatches.list();
      return payload;
    }

    if (scope === 'teams-only') {
      payload.teams = await this.repositories.teams.list();
      return payload;
    }

    if (scope === 'players-only') {
      payload.players = await this.repositories.players.list();
      return payload;
    }

    payload.seasons = await this.repositories.seasons.list();
    payload.teams = await this.repositories.teams.list();
    payload.players = await this.repositories.players.list();
    payload.matches = await this.repositories.matches.list();
    payload.records = await this.repositories.records.list();
    payload.archives = await this.repositories.archives.list();
    payload.playoffs = await this.repositories.playoffs.list();
    payload.settings = await this.repositories.settings.list();

    payload.innings = await this.repositories.innings.list();
    payload.battingScorecards = await this.repositories.battingScorecards.list();
    payload.bowlingScorecards = await this.repositories.bowlingScorecards.list();
    payload.ballEvents = await this.repositories.ballEvents.list();
    payload.partnerships = await this.repositories.partnerships.list();
    payload.fallOfWickets = await this.repositories.fallOfWickets.list();
    payload.pointsTable = await this.repositories.pointsTable.list();
    payload.headToHead = await this.repositories.headToHead.list();
    payload.liveMatches = await this.repositories.liveMatches.list();

    if (scope === 'selected-season' || scope === 'current-season') {
      payload.seasons = payload.seasons.filter(bySeason(selectedSeason)).concat(payload.seasons.filter((s) => s.id === selectedSeason));
      for (const key of ['matches', 'records', 'archives', 'playoffs', 'innings', 'battingScorecards', 'bowlingScorecards', 'ballEvents', 'partnerships', 'fallOfWickets', 'pointsTable', 'headToHead']) {
        payload[key] = (payload[key] || []).filter(bySeason(selectedSeason));
      }
    }

    return payload;
  }
}
