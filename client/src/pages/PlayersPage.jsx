import { useMemo, useState } from 'react';
import { lplApi } from '../services/lplApi.js';
import { useApi } from '../hooks/useApi.js';
import { asArray, averageAttributes, teamLabel } from '../utils/formatters.js';
import { EmptyState, ErrorState, LoadingState } from '../components/PageState.jsx';
import KpiStrip from '../components/KpiStrip.jsx';

function teamMap(teams) {
  return Object.fromEntries(asArray(teams).map((team) => [team.id, team]));
}

export default function PlayersPage() {
  const [query, setQuery] = useState('');
  const [teamFilter, setTeamFilter] = useState('');
  const { data, loading, error, reload } = useApi(async () => {
    const [players, teams] = await Promise.all([lplApi.listPlayers(), lplApi.listTeams()]);
    return { data: { players: players.data || [], teams: teams.data || [] } };
  }, []);

  const teamsById = useMemo(() => teamMap(data?.teams), [data?.teams]);

  if (loading) return <LoadingState label="Loading players from API" />;
  if (error) return <ErrorState message={error} onRetry={reload} />;

  const players = asArray(data?.players);
  const teams = asArray(data?.teams);
  const filtered = players.filter((player) => {
    const text = `${player.name || ''} ${player.role || ''} ${player.bowling_style || ''}`.toLowerCase();
    const matchesSearch = !query || text.includes(query.toLowerCase());
    const matchesTeam = !teamFilter || player.team_id === teamFilter;
    return matchesSearch && matchesTeam;
  });

  if (!players.length) {
    return <EmptyState title="No players found" detail="Players imported from teams or migration exports will appear here." />;
  }

  return (
    <section className="page-shell">
      <div className="page-heading">
        <div>
          <h1>Players</h1>
          <p>Searchable squad list backed by the players API.</p>
        </div>
      </div>

      <KpiStrip
        items={[
          { label: 'Players', value: players.length },
          { label: 'Teams Represented', value: new Set(players.map((player) => player.team_id).filter(Boolean)).size },
          { label: 'All Rounders', value: players.filter((player) => player.role === 'AR').length }
        ]}
      />

      <div className="filters-inner app-filters">
        <input className="fsearch" placeholder="Search players" value={query} onChange={(event) => setQuery(event.target.value)} />
        <select className="fsel" value={teamFilter} onChange={(event) => setTeamFilter(event.target.value)}>
          <option value="">All Teams</option>
          {teams.map((team) => (
            <option key={team.id} value={team.id}>{team.name || team.code}</option>
          ))}
        </select>
      </div>

      {!filtered.length ? (
        <EmptyState title="No matching players" detail="Clear the search or team filter to see the full squad list." />
      ) : (
        <div className="table-wrap">
          <table className="lb app-table">
            <thead>
              <tr>
                <th>Player</th>
                <th>Team</th>
                <th>Role</th>
                <th>Hand</th>
                <th>Style</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((player) => (
                <tr key={player.id}>
                  <td>{player.name}</td>
                  <td>{teamLabel(teamsById[player.team_id], player.team_id)}</td>
                  <td>{player.role || '-'}</td>
                  <td>{player.batting_hand || '-'}</td>
                  <td>{player.bowling_style || '-'}</td>
                  <td>{averageAttributes(player.attributes) || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
