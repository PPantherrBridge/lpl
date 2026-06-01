const NAV_ITEMS = [
  { id: 'matches', label: 'Matches' },
  { id: 'teams', label: 'Teams' },
  { id: 'players', label: 'Players' },
  { id: 'seasons', label: 'Seasons' }
];

export default function TopNav({ activePage, onNavigate }) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="logo">
          LPL<span>Local Premier League</span>
        </div>
        <nav className="nav-links" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activePage === item.id ? 'active' : ''}`}
              type="button"
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
