const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';

function authToken() {
  try {
    return sessionStorage.getItem('lpl_admin_token') || '';
  } catch {
    return '';
  }
}

async function request(path, options = {}) {
  const headers = new Headers(options.headers || {});
  const token = authToken();

  if (token) headers.set('Authorization', `Bearer ${token}`);
  if (options.body && !(options.body instanceof FormData) && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  let response;
  try {
    response = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers
    });
  } catch (err) {
    throw new Error(`Unable to reach LPL API at ${API_BASE}${path}. Check that the backend is running.`);
  }

  const contentType = response.headers.get('content-type') || '';
  let payload;
  try {
    payload = contentType.includes('application/json') ? await response.json() : await response.text();
  } catch {
    payload = '';
  }

  if (!response.ok) {
    const message = typeof payload === 'object' ? payload.error || payload.message : payload;
    throw new Error(message || `API request failed: ${response.status}`);
  }

  return payload;
}

function oversFromBalls(legalBalls = 0) {
  return `${Math.floor(legalBalls / 6)}.${legalBalls % 6}`;
}

function isLegalBall(ball) {
  if (!ball) return false;
  if (ball.type === 'run' || ball.type === 'wicket') return true;
  if (ball.type === 'extra') return ball.extra === 'b' || ball.extra === 'lb';
  return false;
}

export function normalizeLiveSession(session) {
  const currentInnings = Number(session?.curInn || session?.innings || 1);
  const liveInnings = session?.liveInnings || session?.inningsState || { 1: {}, 2: {} };
  const current = liveInnings[currentInnings] || { runs: 0, wickets: 0, balls: [], extras: 0 };
  const legalBalls = (current.balls || []).filter(isLegalBall).length;
  const battingTeam = currentInnings === 1 ? session?.t1k : session?.t2k;
  const bowlingTeam = currentInnings === 1 ? session?.t2k : session?.t1k;
  const matchId = session?.matchId || session?.fixtureId || [session?.t1k, session?.t2k, session?.date].filter(Boolean).join('_') || 'live';

  return {
    matchId,
    seasonId: session?.seasonId || null,
    innings: currentInnings,
    battingTeam,
    bowlingTeam,
    score: Number(current.runs || 0),
    wickets: Number(current.wickets || 0),
    overs: oversFromBalls(legalBalls),
    balls: legalBalls,
    currentBatters: {
      striker: session?.striker || '',
      nonStriker: session?.nonStriker || ''
    },
    currentBowler: session?.bowler || '',
    ballByBall: liveInnings,
    partnerships: session?.partnerships || [],
    fallOfWickets: session?.fallOfWickets || [],
    extras: Number(current.extras || 0),
    lastUpdated: new Date().toISOString(),
    legacySession: session
  };
}

export const lplApi = {
  request,
  login(password) {
    return request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ password })
    });
  },
  getBootstrap() {
    return request('/bootstrap');
  },
  getLiveSession() {
    return request('/live/current');
  },
  saveLiveSession(session) {
    return request('/live/current', {
      method: 'PUT',
      body: JSON.stringify({ state: normalizeLiveSession(session) })
    });
  },
  clearLiveSession() {
    return request('/live/current', { method: 'DELETE' });
  },
  syncStorageKey(key, value) {
    return request('/import/storage-key', {
      method: 'POST',
      body: JSON.stringify({ key, value })
    });
  },
  exportData(scope, seasonId) {
    const params = new URLSearchParams({ scope });
    if (seasonId) params.set('seasonId', seasonId);
    return request(`/export?${params.toString()}`);
  },
  importData(payload, mode = 'merge') {
    return request('/import', {
      method: 'POST',
      body: JSON.stringify({ payload, mode })
    });
  },
  listArchives() {
    return request('/archives');
  },
  getArchive(id) {
    return request(`/archives/${encodeURIComponent(id)}`);
  },
  listSeasons() {
    return request('/seasons');
  },
  listTeams() {
    return request('/teams');
  },
  listPlayers() {
    return request('/players');
  },
  listMatches() {
    return request('/matches');
  },
  createMatch(body) {
    return request('/matches', {
      method: 'POST',
      body: JSON.stringify(body)
    });
  },
  updateMatch(id, body) {
    return request(`/matches/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      body: JSON.stringify(body)
    });
  },
  deleteMatch(id) {
    return request(`/matches/${encodeURIComponent(id)}`, {
      method: 'DELETE'
    });
  },
  listRecords() {
    return request('/records');
  },
  listPlayoffs() {
    return request('/playoffs');
  },
  createSeason(body) {
    return request('/seasons', {
      method: 'POST',
      body: JSON.stringify(body)
    });
  },
  updateSeason(id, body) {
    return request(`/seasons/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      body: JSON.stringify(body)
    });
  },
  archiveSeason(id) {
    return request(`/seasons/${encodeURIComponent(id)}/archive`, {
      method: 'POST'
    });
  }
};

window.LPLApi = lplApi;
