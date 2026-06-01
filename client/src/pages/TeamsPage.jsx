import { lplApi } from '../services/lplApi.js';
import { useApi } from '../hooks/useApi.js';
import { asArray, initials } from '../utils/formatters.js';
import { EmptyState, ErrorState, LoadingState } from '../components/PageState.jsx';
import KpiStrip from '../components/KpiStrip.jsx';

export default function TeamsPage() {
  const { data, loading, error, reload } = useApi(async () => {
    const [teams, players] = await Promise.all([lplApi.listTeams(), lplApi.listPlayers()]);
    return { data: { teams: teams.data || [], players: players.data || [] } };
  }, []);

  if (loading) return <LoadingState label="Loading teams from API" />;
  if (error) return <ErrorState message={error} onRetry={reload} />;

  const teams = asArray(data?.teams).sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  const players = asArray(data?.players);
  const playerCountByTeam = players.reduce((counts, player) => {
    counts[player.team_id] = (counts[player.team_id] || 0) + 1;
    return counts;
  }, {});

  if (!teams.length) {
    return <EmptyState title="No teams found" detail="Teams imported from the migration will appear here." />;
  }

  return (
    <section className="page-shell">
      <div className="page-heading">
        <div>
          <h1>Teams</h1>
          <p>Franchises loaded from the backend team repository.</p>
        </div>
      </div>

      <KpiStrip
        items={[
          { label: 'Teams', value: teams.length },
          { label: 'Players', value: players.length },
          { label: "Women's Teams", value: teams.filter((team) => team.women).length }
        ]}
      />

      <div className="team-grid">
        {teams.map((team) => (
          <article className="team-card" key={team.id}>
            <div className="team-card-header" style={{ borderColor: team.primary_color || 'var(--border)' }}>
              <div
                className="team-avatar"
                style={{
                  background: `${team.primary_color || '#1e1e45'}33`,
                  borderColor: team.primary_color || 'var(--gold)',
                  color: team.secondary_color || 'var(--gold)'
                }}
              >
                {initials(team.code || team.name)}
              </div>
              <div>
                <h2>{team.name || team.code}</h2>
                <p>{team.code || team.id}</p>
              </div>
            </div>
            <div className="team-detail-grid">
              <div><span>Captain</span><strong>{team.captain || 'TBD'}</strong></div>
              <div><span>Vice Captain</span><strong>{team.vice_captain || 'TBD'}</strong></div>
              <div><span>Squad</span><strong>{playerCountByTeam[team.id] || 0}</strong></div>
              <div><span>Type</span><strong>{team.women ? "Women's" : "Men's"}</strong></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
