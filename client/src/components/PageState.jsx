export function LoadingState({ label = 'Loading data' }) {
  return <div className="state-panel state-muted">{label}</div>;
}

export function EmptyState({ title = 'No data yet', detail = 'Once records exist in the database, they will appear here.' }) {
  return (
    <div className="state-panel">
      <div className="state-title">{title}</div>
      <div className="state-detail">{detail}</div>
    </div>
  );
}

export function ErrorState({ message, onRetry }) {
  return (
    <div className="state-panel state-error">
      <div className="state-title">API error</div>
      <div className="state-detail">{message}</div>
      {onRetry && (
        <button className="ghost-action" type="button" onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  );
}
