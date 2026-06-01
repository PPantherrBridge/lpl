function pickLeader(records, category) {
  const record = records.find((item) => item.category === category || item.type === category);
  return record?.player_name || record?.player || record?.name || '';
}

export class ArchiveService {
  constructor(repositories) {
    this.repositories = repositories;
  }

  async list() {
    return this.repositories.archives.list();
  }

  async get(id) {
    return this.repositories.archives.get(id);
  }

  async createSeasonArchive(seasonId) {
    const season = await this.repositories.seasons.get(seasonId);
    if (!season) throw new Error('Season not found.');
    const existingArchive = await this.repositories.archives.findOne({ season_id: seasonId });
    if (existingArchive) return existingArchive;

    const [
      pointsTable,
      matches,
      playoffs,
      records,
      players,
      teams
    ] = await Promise.all([
      this.repositories.pointsTable.list({ season_id: seasonId }),
      this.repositories.matches.list({ season_id: seasonId }),
      this.repositories.playoffs.list({ season_id: seasonId }),
      this.repositories.records.list({ season_id: seasonId }),
      this.repositories.players.list(),
      this.repositories.teams.list()
    ]);

    const final = playoffs.find((item) => String(item.stage || '').toLowerCase() === 'final' || item.is_final);
    const champion = final?.winner_team_id || final?.winner || pointsTable[0]?.team_id || '';
    const runnerUp = final?.runner_up_team_id || final?.runner_up || pointsTable[1]?.team_id || '';

    const snapshot = {
      seasonId,
      seasonName: season.name,
      archivedAt: new Date().toISOString(),
      finalPointsTable: pointsTable,
      finalStandings: pointsTable,
      champion,
      runnerUp,
      orangeCap: pickLeader(records, 'orange_cap'),
      purpleCap: pickLeader(records, 'purple_cap'),
      mvp: pickLeader(records, 'mvp'),
      teamStatistics: teams,
      matchResults: matches,
      playoffs,
      records,
      playerStatistics: players.filter((player) => !player.season_id || player.season_id === seasonId)
    };

    const archive = await this.repositories.archives.create({
      id: `archive_${seasonId}`,
      season_id: seasonId,
      season_name: season.name,
      snapshot,
      immutable: true
    });

    await this.repositories.seasons.update(seasonId, {
      status: 'archived',
      archived_at: snapshot.archivedAt
    });

    return archive;
  }
}
