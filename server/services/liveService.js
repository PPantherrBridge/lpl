export class LiveService {
  constructor(repositories) {
    this.liveMatches = repositories.liveMatches;
  }

  async getCurrent() {
    return this.liveMatches.get('current');
  }

  async saveCurrent(state) {
    const lastUpdated = new Date().toISOString();
    return this.liveMatches.upsert({
      id: 'current',
      match_id: state.matchId || state.match_id || 'live',
      season_id: state.seasonId || state.season_id || null,
      state,
      last_updated: lastUpdated
    });
  }

  async clearCurrent() {
    return this.liveMatches.delete('current');
  }
}
