import { lplApi } from '../services/lplApi.js';
import { useApi } from '../hooks/useApi.js';
import { asArray, statusLabel } from '../utils/formatters.js';
import { EmptyState, ErrorState, LoadingState } from '../components/PageState.jsx';
import KpiStrip from '../components/KpiStrip.jsx';

export default function SeasonsPage() {
  const { data, loading, error, reload } = useApi(async () => {
    const [seasons, archives] = await Promise.all([lplApi.listSeasons(), lplApi.listArchives()]);
    return { data: { seasons: seasons.data || [], archives: archives.data || [] } };
  }, []);

  if (loading) return <LoadingState label="Loading seasons from API" />;
  if (error) return <ErrorState message={error} onRetry={reload} />;

  const seasons = asArray(data?.seasons).sort((a, b) => (a.number || 0) - (b.number || 0));
  const archives = asArray(data?.archives);

  if (!seasons.length) {
    return <EmptyState title="No seasons found" detail="The importer creates Season 1 automatically when migration prep files do not include seasons." />;
  }

  return (
    <section className="page-shell">
      <div className="page-heading">
        <div>
          <h1>Seasons</h1>
          <p>Season lifecycle status from the backend.</p>
        </div>
      </div>

      <KpiStrip
        items={[
          { label: 'Seasons', value: seasons.length },
          { label: 'Active', value: seasons.filter((season) => season.status === 'active').length },
          { label: 'Archived Snapshots', value: archives.length }
        ]}
      />

      <div className="season-timeline">
        {seasons.map((season) => (
          <article className="season-row" key={season.id}>
            <div>
              <h2>{season.name || `Season ${season.number || ''}`}</h2>
              <p>{season.year || 'Year TBD'} · ID {season.id}</p>
            </div>
            <span className={`status-pill status-${season.status || 'unknown'}`}>{statusLabel(season.status)}</span>
            <div className="season-dates">
              <span>Started: {season.started_at ? new Date(season.started_at).toLocaleDateString() : 'Not started'}</span>
              <span>Closed: {season.closed_at ? new Date(season.closed_at).toLocaleDateString() : 'Open'}</span>
              <span>Archived: {season.archived_at ? new Date(season.archived_at).toLocaleDateString() : 'No'}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
