import { lplApi } from './lplApi.js';

let installed = false;

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function setText(id, message, color = 'var(--silver)') {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.color = color;
  el.textContent = message;
}

function downloadJson(filename, payload) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

async function renderArchives() {
  const target = document.getElementById('archivesContent');
  if (!target) return;
  target.innerHTML = '<div style="color:var(--silver);font-size:13px;">Loading archived seasons…</div>';
  try {
    const response = await lplApi.listArchives();
    const archives = response.data || [];
    if (!archives.length) {
      target.innerHTML = '<div style="color:var(--silver);font-size:13px;">No archived seasons yet. Close and archive a season from the admin Season Manager to freeze it here.</div>';
      return;
    }
    target.innerHTML = `<div class="archive-grid">${archives.map((archive) => {
      const snapshot = archive.snapshot || {};
      const title = snapshot.seasonName || archive.season_name || archive.seasonId || archive.season_id || archive.id;
      return `<button class="archive-card" onclick="openArchiveSeason('${escapeHtml(archive.id)}')">
        <div class="archive-title">${escapeHtml(title)}</div>
        <div class="archive-meta">
          Champion: ${escapeHtml(snapshot.champion || 'TBD')}<br>
          Runner-up: ${escapeHtml(snapshot.runnerUp || 'TBD')}<br>
          Archived: ${escapeHtml((archive.created_at || archive.createdAt || '').slice(0, 10))}
        </div>
      </button>`;
    }).join('')}</div>`;
  } catch (err) {
    target.innerHTML = `<div style="color:var(--red);font-size:13px;">Unable to load archives: ${escapeHtml(err.message)}</div>`;
  }
}

function renderSnapshotTable(rows, emptyLabel) {
  if (!Array.isArray(rows) || !rows.length) {
    return `<div style="color:var(--silver);font-size:13px;">${escapeHtml(emptyLabel)}</div>`;
  }
  const keys = Object.keys(rows[0]).slice(0, 8);
  return `<table class="lb" style="margin-top:12px;">
    <thead><tr>${keys.map((key) => `<th>${escapeHtml(key)}</th>`).join('')}</tr></thead>
    <tbody>${rows.map((row) => `<tr>${keys.map((key) => `<td>${escapeHtml(row[key])}</td>`).join('')}</tr>`).join('')}</tbody>
  </table>`;
}

async function openArchiveSeason(id) {
  const target = document.getElementById('archivesContent');
  if (!target) return;
  target.innerHTML = '<div style="color:var(--silver);font-size:13px;">Opening archive…</div>';
  try {
    const response = await lplApi.getArchive(id);
    const archive = response.data;
    const snapshot = archive.snapshot || {};
    target.innerHTML = `
      <button class="adm-ghost-btn" onclick="renderArchives()" style="margin-bottom:20px;">← Back to Archives</button>
      <div class="ptitle">${escapeHtml(snapshot.seasonName || archive.season_name || 'Season Archive')}</div>
      <div class="archive-kpi-grid">
        <div class="archive-kpi"><div class="archive-kpi-label">Champion</div><div class="archive-kpi-value">${escapeHtml(snapshot.champion || 'TBD')}</div></div>
        <div class="archive-kpi"><div class="archive-kpi-label">Runner-up</div><div class="archive-kpi-value">${escapeHtml(snapshot.runnerUp || 'TBD')}</div></div>
        <div class="archive-kpi"><div class="archive-kpi-label">Orange Cap</div><div class="archive-kpi-value">${escapeHtml(snapshot.orangeCap || 'TBD')}</div></div>
        <div class="archive-kpi"><div class="archive-kpi-label">Purple Cap</div><div class="archive-kpi-value">${escapeHtml(snapshot.purpleCap || 'TBD')}</div></div>
        <div class="archive-kpi"><div class="archive-kpi-label">MVP</div><div class="archive-kpi-value">${escapeHtml(snapshot.mvp || 'TBD')}</div></div>
      </div>
      <div class="archive-section"><div class="rsec-title">Final Points Table</div>${renderSnapshotTable(snapshot.pointsTable || snapshot.finalPointsTable, 'No points table stored.')}</div>
      <div class="archive-section"><div class="rsec-title">Match Results</div>${renderSnapshotTable(snapshot.matchResults || snapshot.matches, 'No match results stored.')}</div>
      <div class="archive-section"><div class="rsec-title">Playoffs</div>${renderSnapshotTable(snapshot.playoffs, 'No playoff data stored.')}</div>
      <div class="archive-section"><div class="rsec-title">Team Statistics</div>${renderSnapshotTable(snapshot.teamStatistics || snapshot.teamStats, 'No team statistics stored.')}</div>
      <div class="archive-section"><div class="rsec-title">Player Statistics</div>${renderSnapshotTable(snapshot.playerStatistics || snapshot.playerStats, 'No player statistics stored.')}</div>
      <div class="archive-section"><div class="rsec-title">Records</div>${renderSnapshotTable(snapshot.records, 'No records stored.')}</div>
    `;
  } catch (err) {
    target.innerHTML = `<button class="adm-ghost-btn" onclick="renderArchives()" style="margin-bottom:20px;">← Back</button><div style="color:var(--red);font-size:13px;">Unable to open archive: ${escapeHtml(err.message)}</div>`;
  }
}

async function renderAdminSeasonManager() {
  const target = document.getElementById('adminSeasonList');
  if (!target) return;
  target.innerHTML = '<div style="color:var(--silver);font-size:12px;">Loading seasons…</div>';
  try {
    const response = await lplApi.listSeasons();
    const seasons = response.data || [];
    if (!seasons.length) {
      target.innerHTML = '<div style="color:var(--silver);font-size:12px;">No database seasons yet.</div>';
      return;
    }
    target.innerHTML = seasons.map((season) => `
      <div class="adm-entry-card">
        <div>
          <strong>${escapeHtml(season.name || `Season ${season.number || season.id}`)}</strong>
          <div style="font-size:11px;color:var(--silver);margin-top:3px;">${escapeHtml(season.status || 'draft')} · ${escapeHtml(season.year || '')}</div>
        </div>
        <div style="font-size:11px;color:var(--silver);">${escapeHtml(season.id)}</div>
      </div>
    `).join('');
  } catch (err) {
    target.innerHTML = `<div style="color:var(--red);font-size:12px;">Unable to load seasons: ${escapeHtml(err.message)}</div>`;
  }
}

async function createSeason() {
  const name = prompt('Season name', `Season ${new Date().getFullYear()}`);
  if (!name) return;
  const year = prompt('Season year', String(new Date().getFullYear())) || String(new Date().getFullYear());
  try {
    await lplApi.createSeason({ name, year, status: 'draft' });
    setText('adminSeasonStatus', 'Season created.', 'var(--green)');
    await renderAdminSeasonManager();
  } catch (err) {
    setText('adminSeasonStatus', err.message, 'var(--red)');
  }
}

async function updateSeasonStatus(status) {
  const seasons = (await lplApi.listSeasons()).data || [];
  const suggested = seasons.find((season) => season.status === 'active') || seasons[0];
  const id = prompt(`Season id to mark ${status}`, suggested?.id || '');
  if (!id) return;
  await lplApi.updateSeason(id, { status });
  setText('adminSeasonStatus', `Season marked ${status}.`, 'var(--green)');
  await renderAdminSeasonManager();
}

async function archiveSeason() {
  const seasons = (await lplApi.listSeasons()).data || [];
  const suggested = seasons.find((season) => season.status === 'closed' || season.status === 'active') || seasons[0];
  const id = prompt('Season id to archive', suggested?.id || '');
  if (!id) return;
  await lplApi.archiveSeason(id);
  setText('adminSeasonStatus', 'Season archive created and frozen.', 'var(--green)');
  await renderAdminSeasonManager();
}

async function exportData(scope) {
  try {
    let seasonId = '';
    if (scope === 'selected-season') seasonId = prompt('Season id to export') || '';
    const payload = await lplApi.exportData(scope, seasonId);
    downloadJson(`lpl-${scope}-${new Date().toISOString().slice(0, 10)}.json`, payload);
    setText('adminLastUpdate', `JSON export ready: ${scope}`, 'var(--green)');
  } catch (err) {
    setText('adminLastUpdate', `Export failed: ${err.message}`, 'var(--red)');
  }
}

async function importData() {
  const file = document.getElementById('lplImportFile')?.files?.[0];
  const mode = document.getElementById('lplImportMode')?.value || 'merge';
  if (!file) {
    setText('lplImportStatus', 'Choose a JSON export file first.', 'var(--red)');
    return;
  }
  try {
    const payload = JSON.parse(await file.text());
    if (!['LPL_EXPORT_V1', 'LPL_MIGRATION_PREP_V1'].includes(payload.version)) {
      throw new Error('Invalid export version.');
    }
    const response = await lplApi.importData(payload, mode);
    setText('lplImportStatus', `Import complete. ${response.inserted || 0} inserted, ${response.updated || 0} updated, ${response.skipped || 0} skipped.`, 'var(--green)');
    await renderAdminSeasonManager();
    await renderArchives();
  } catch (err) {
    setText('lplImportStatus', `Import failed: ${err.message}`, 'var(--red)');
  }
}

export function installAdminExtensions() {
  if (installed) return;
  installed = true;

  const originalShowPage = window.showPage;
  if (typeof originalShowPage === 'function') {
    window.showPage = function wrappedShowPage(id, btn) {
      const result = originalShowPage.call(this, id, btn);
      if (id === 'archives') setTimeout(renderArchives, 0);
      return result;
    };
  }

  const originalSelectAdminSection = window.selectAdminSection;
  if (typeof originalSelectAdminSection === 'function') {
    window.selectAdminSection = function wrappedSelectAdminSection(section, btn) {
      const result = originalSelectAdminSection.call(this, section, btn);
      if (section === 'seasons') setTimeout(renderAdminSeasonManager, 0);
      return result;
    };
  }

  window.renderArchives = renderArchives;
  window.openArchiveSeason = openArchiveSeason;
  window.lplExportData = exportData;
  window.lplImportData = importData;
  window.lplCreateSeason = createSeason;
  window.lplStartSeason = () => updateSeasonStatus('active').catch((err) => setText('adminSeasonStatus', err.message, 'var(--red)'));
  window.lplCloseSeason = () => updateSeasonStatus('closed').catch((err) => setText('adminSeasonStatus', err.message, 'var(--red)'));
  window.lplArchiveSeason = () => archiveSeason().catch((err) => setText('adminSeasonStatus', err.message, 'var(--red)'));
  window.lplViewArchivedSeasons = () => {
    window.closeAdminPanel?.();
    const archiveBtn = [...document.querySelectorAll('.nav-link')].find((btn) => btn.textContent.trim().toLowerCase() === 'archives');
    window.showPage?.('archives', archiveBtn);
  };
}
