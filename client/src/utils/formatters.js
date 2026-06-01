export function asArray(value) {
  return Array.isArray(value) ? value : [];
}

export function teamLabel(team, fallback = '') {
  if (!team) return fallback || 'TBD';
  return team.name || team.code || team.id || fallback || 'TBD';
}

export function initials(value = '') {
  return String(value || 'LPL')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase() || 'L';
}

export function statusLabel(value = '') {
  return String(value || 'unknown').replace(/_/g, ' ').toUpperCase();
}

export function safeNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

export function averageAttributes(attributes = {}) {
  const values = Object.values(attributes).map(Number).filter(Number.isFinite);
  if (!values.length) return null;
  return (values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(1);
}
