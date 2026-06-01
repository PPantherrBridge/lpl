import { lplApi } from '../services/lplApi.js';
import { useApi } from '../hooks/useApi.js';
import { asArray, statusLabel, teamLabel } from '../utils/formatters.js';
import { EmptyState, ErrorState, LoadingState } from '../components/PageState.jsx';
import KpiStrip from '../components/KpiStrip.jsx';

function groupById(rows) {
  return Object.fromEntries(asArray(rows).map((row) => [row.id, row]));
}

function scoreSummary(match) {
  if (match.result_summary) return match.result_summary;
  if (match.scorecard?.summary) return match.scorecard.summary;
  if (match.status === 'scheduled') return match.match_date_label || 'Fixture scheduled';
  return 'Result pending';
}

export default function MatchesPage() {
  const { data, loading, error, reload } = useApi(async () => {
    const [matches, teams] = await Promise.all([lplApi.listMatches(), lplApi.listTeams()]);
    return { data: { matches: matches.data || [], teams: teams.data || [] } };
  }, []);

  if (loading) return <LoadingState label="Loading matches from API" />;
  if (error) return <ErrorState message={error} onRetry={reload} />;

  const matches = asArray(data?.matches).sort((a, b) => (a.match_number || 0) - (b.match_number || 0));
  const teamsById = groupById(data?.teams);
  const completed = matches.filter((match) => match.status === 'completed');
  const scheduled = matches.filter((match) => match.status === 'scheduled');
  const live = matches.filter((match) => match.status === 'live');

  if (!matches.length) {
    return <EmptyState title="No matches in the database" detail="Import a season or create fixtures to populate the match center." />;
  }

  return (
    <section className="page-shell">
      <div className="page-heading">
        <div>
          <h1>Matches</h1>
          <p>Database-backed fixtures and results.</p>
        </div>
      </div>

      <KpiStrip
        items={[
          { label: 'Total Matches', value: matches.length },
          { label: 'Completed', value: completed.length },
          { label: 'Scheduled', value: scheduled.length },
          { label: 'Live', value: live.length }
        ]}
      />

      <div className="match-list">
        {matches.map((match) => {
          const team1 = teamsById[match.team1_id];
          const team2 = teamsById[match.team2_id];
          const winner = teamsById[match.winner_team_id];
          return (
            <article className="match-card" key={match.id}>
              <div className="match-card-top">
                <span className={`status-pill status-${match.status || 'unknown'}`}>{statusLabel(match.status)}</span>
                <span className="muted-label">Match {match.match_number || match.id}</span>
              </div>
              <div className="match-teams">
                <span>{teamLabel(team1, match.team1_id)}</span>
                <span className="vs-mark">VS</span>
                <span>{teamLabel(team2, match.team2_id)}</span>
              </div>
              <div className="match-meta">
                {match.stage || 'league'} · {match.venue || 'Venue TBD'} · {match.match_date_label || match.match_date || 'Date TBD'}
              </div>
              <div className="match-result">
                {winner ? `${teamLabel(winner)} won` : scoreSummary(match)}
                {winner && match.result_summary ? ` · ${match.result_summary}` : ''}
              </div>
              {match.player_of_match && <div className="match-potm">POTM: {match.player_of_match}</div>}
            </article>
          );
        })}
      </div>
    </section>
  );
}
