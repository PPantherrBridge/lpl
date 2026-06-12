/**
 * LPL unified statistics engine.
 * Pure functions over match result arrays — no DOM or global state.
 */

export const PLAYER_CANONICAL_MAP = {
  'ShreyanshLSG|LSG': 'ShreyanshP',
  'ShreyanshMI|MI': 'ShreyanshS',
  'Vikas|MI': 'VikasD',
  'VikasCSK|CSK': 'Vikas',
  'MohanGT|GT': 'MohanR',
  'Mohan|GT': 'MohanR',
  'PavanGT|GT': 'Pavan',
  'PavanSRH|SRH': 'PavanP'
};

export function normalizePlayerName(name, team, canonicalMap = PLAYER_CANONICAL_MAP) {
  return canonicalMap[`${name}|${team}`] || name;
}

export function parseOversToBalls(oversStr) {
  const parts = String(oversStr ?? '0').split('.');
  return parseInt(parts[0], 10) * 6 + parseInt(parts[1] || '0', 10);
}

export function parseOversToDecimal(oversStr) {
  return parseOversToBalls(oversStr) / 6;
}

export function formatOversFromBalls(ballCount) {
  const full = Math.floor(ballCount / 6);
  const frac = ballCount % 6;
  return frac ? `${full}.${frac}` : `${full}`;
}

export function formatOversFromDecimal(overs) {
  return formatOversFromBalls(Math.round(overs * 6));
}

function decorateTeam(player, teamMeta) {
  const tm = teamMeta[player.team] || {};
  return {
    ...player,
    pri: tm.pri || '#444',
    sec: tm.sec || '#fff',
    teamName: tm.name || player.team
  };
}

function getBowlingTeam(match, battingTeam) {
  return battingTeam === match.t1 ? match.t2 : match.t1;
}

function matchPassesFilter(match, options = {}) {
  const { seasonId = null, matchFilter = 'all', completedOnly = false } = options;

  if (completedOnly && match.winner === 'TBD') return false;
  if (seasonId && match.seasonId && match.seasonId !== seasonId) return false;
  if (seasonId && !match.seasonId) return false;

  if (matchFilter === 'league') return !match.playoffRound;
  if (matchFilter === 'playoffs') return !!match.playoffRound;
  if (matchFilter === 'finals') {
    const round = String(match.playoffRound || '').toLowerCase();
    return round === 'final' || round === 'f';
  }

  return true;
}

/**
 * Filter the raw RESULTS array by season, match stage, and completion status.
 */
export function getFilteredResults(results, options = {}) {
  return (results || []).filter((match) => matchPassesFilter(match, options));
}

function formatBattingAverage(runs, inns, notOuts) {
  const denom = inns - notOuts;
  return denom > 0 ? (runs / denom).toFixed(1) : '—';
}

function formatStrikeRate(runs, balls) {
  return balls > 0 ? (runs / balls * 100).toFixed(1) : '0.0';
}

function formatEconomy(runs, oversDecimal) {
  return oversDecimal > 0 ? (runs / oversDecimal).toFixed(2) : '0.00';
}

function pickBestSpell(spells) {
  return spells.reduce(
    (best, spell) => (spell.w > best.w || (spell.w === best.w && spell.r < best.r) ? spell : best),
    { w: 0, r: 999 }
  );
}

/**
 * Cumulative batting stats keyed by player|team, returned as a decorated array.
 */
export function aggregateBattingStats(results, teamMeta = {}, options = {}) {
  const map = {};

  for (const match of getFilteredResults(results, options)) {
    if (!match.scorecard) continue;

    for (const inn of match.scorecard.innings) {
      for (const batter of inn.batters || []) {
        const fixedName = normalizePlayerName(batter.n, inn.team);
        const key = `${fixedName}|${inn.team}`;

        if (!map[key]) {
          map[key] = {
            n: fixedName,
            team: inn.team,
            runs: 0,
            balls: 0,
            inns: 0,
            notOuts: 0,
            hs: 0,
            hsNotOut: false
          };
        }

        const entry = map[key];
        entry.runs += batter.r;
        entry.balls += batter.b;
        entry.inns += 1;
        if (batter.notout) entry.notOuts += 1;
        if (batter.r > entry.hs || (batter.r === entry.hs && batter.notout)) {
          entry.hs = batter.r;
          entry.hsNotOut = !!batter.notout;
        }
      }
    }
  }

  return Object.values(map).map((player) => {
    const srStr = formatStrikeRate(player.runs, player.balls);
    return decorateTeam({
      ...player,
      sr: parseFloat(srStr),
      srStr,
      avg: formatBattingAverage(player.runs, player.inns, player.notOuts)
    }, teamMeta);
  });
}

/**
 * Cumulative bowling stats with spell tracking for best figures.
 */
export function aggregateBowlingStats(results, teamMeta = {}, options = {}) {
  const map = {};

  for (const match of getFilteredResults(results, options)) {
    if (!match.scorecard) continue;

    for (const inn of match.scorecard.innings) {
      const bowlTeam = getBowlingTeam(match, inn.team);

      for (const bowler of inn.bowlers || []) {
        const fixedName = normalizePlayerName(bowler.n, bowlTeam);
        const key = `${fixedName}|${bowlTeam}`;

        if (!map[key]) {
          map[key] = {
            n: fixedName,
            team: bowlTeam,
            ovBalls: 0,
            overs: 0,
            runs: 0,
            wkts: 0,
            inns: 0,
            spells: [],
            bestSpellW: 0,
            bestSpellR: 0
          };
        }

        const entry = map[key];
        const balls = parseOversToBalls(bowler.o);
        const overs = balls / 6;

        entry.ovBalls += balls;
        entry.overs += overs;
        entry.runs += bowler.r;
        entry.wkts += bowler.w;
        entry.inns += 1;
        entry.spells.push({ w: bowler.w, r: bowler.r });

        if (bowler.w > entry.bestSpellW || (bowler.w === entry.bestSpellW && bowler.r < entry.bestSpellR)) {
          entry.bestSpellW = bowler.w;
          entry.bestSpellR = bowler.r;
        }
      }
    }
  }

  return Object.values(map).map((player) => {
    const econStr = formatEconomy(player.runs, player.overs);
    const ovStr = formatOversFromDecimal(player.overs);
    const best = pickBestSpell(player.spells);

    return decorateTeam({
      ...player,
      ovStr,
      econ: parseFloat(econStr),
      econStr,
      bestStr: best.w > 0 ? `${best.w}/${best.r}` : '—',
      bestSpell: player.bestSpellW ? `${player.bestSpellW}/${player.bestSpellR}` : '—'
    }, teamMeta);
  });
}

/**
 * Flatten individual batting innings.
 * normalizeNames=false preserves scorecard names (Season Stats highest scores).
 * normalizeNames=true applies canonical map (Records highest scores).
 */
export function aggregateBattingInnings(results, teamMeta = {}, options = {}) {
  const { normalizeNames = false, sortByRuns = false } = options;
  const list = [];

  for (const match of getFilteredResults(results, options)) {
    if (!match.scorecard) continue;

    for (const inn of match.scorecard.innings) {
      const tm = teamMeta[inn.team] || {};

      for (const batter of inn.batters || []) {
        const name = normalizeNames
          ? normalizePlayerName(batter.n, inn.team)
          : batter.n;

        list.push({
          ...batter,
          n: name,
          team: inn.team,
          matchId: match.id,
          vs: inn.team === match.t1 ? match.t2 : match.t1,
          pri: tm.pri || '#444',
          sec: tm.sec || '#fff',
          teamName: tm.name || inn.team
        });
      }
    }
  }

  if (sortByRuns) return list.sort((a, b) => b.r - a.r);
  return list;
}

/**
 * Individual bowling spells (w > 0) for records tables.
 */
export function aggregateBowlingSpells(results, teamMeta = {}, options = {}) {
  const spells = [];

  for (const match of getFilteredResults(results, options)) {
    if (!match.scorecard) continue;

    for (const inn of match.scorecard.innings) {
      const bowlTeam = getBowlingTeam(match, inn.team);
      const tm = teamMeta[bowlTeam] || {};

      for (const bowler of inn.bowlers || []) {
        if (bowler.w <= 0) continue;

        const fixedName = normalizePlayerName(bowler.n, bowlTeam);
        spells.push({
          ...bowler,
          n: fixedName,
          team: bowlTeam,
          vs: inn.team,
          matchId: match.id,
          pri: tm.pri || '#444',
          sec: tm.sec || '#fff',
          teamName: tm.name || bowlTeam
        });
      }
    }
  }

  return spells.sort((a, b) => b.w - a.w || a.r - b.r);
}

function parseFieldingFromDismissal(dis, bowlingTeam, normalize) {
  const text = String(dis || '').trim();
  if (!text || text === 'not out') return null;

  // Caught and bowled — credit catch to the bowler (e.g. "c x b Jasprit Bumrah")
  const cAndBMatch = text.match(/^c\s+x\s+b\s+(.+)$/i);
  if (cAndBMatch) {
    const bowler = normalize(cAndBMatch[1].trim(), bowlingTeam);
    return { type: 'catch', fielder: bowler };
  }

  const catchMatch = text.match(/^c\s+(.+?)\s+b\s+/i);
  if (catchMatch) {
    const fielder = normalize(catchMatch[1].trim(), bowlingTeam);
    return { type: 'catch', fielder };
  }

  const stumpMatch = text.match(/^st\s+(.+?)\s+b\s+/i);
  if (stumpMatch) {
    const fielder = normalize(stumpMatch[1].trim(), bowlingTeam);
    return { type: 'stumping', fielder };
  }

  const runOutParen = text.match(/run out\s*\(([^)]+)\)/i);
  if (runOutParen) {
    const fielder = normalize(runOutParen[1].trim(), bowlingTeam);
    return { type: 'runOut', fielder };
  }

  const runOutPlain = text.match(/^run out\s+(.+)$/i);
  if (runOutPlain) {
    const fielder = normalize(runOutPlain[1].trim(), bowlingTeam);
    return { type: 'runOut', fielder };
  }

  if (/^run out$/i.test(text)) {
    return { type: 'runOut', fielder: null };
  }

  return null;
}

/**
 * Fielding stats derived from dismissal strings in scorecards.
 */
export function aggregateFieldingStats(results, teamMeta = {}, options = {}) {
  const map = {};

  const ensurePlayer = (name, team) => {
    const key = `${name}|${team}`;
    if (!map[key]) {
      map[key] = {
        n: name,
        team,
        catches: 0,
        stumpings: 0,
        runOuts: 0,
        directHits: 0,
        events: []
      };
    }
    return map[key];
  };

  for (const match of getFilteredResults(results, options)) {
    if (!match.scorecard) continue;

    for (const inn of match.scorecard.innings) {
      const bowlingTeam = getBowlingTeam(match, inn.team);
      const normalize = (name, team) => normalizePlayerName(name, team);

      for (const batter of inn.batters || []) {
        const event = parseFieldingFromDismissal(batter.dis, bowlingTeam, normalize);
        if (!event || !event.fielder) continue;

        const player = ensurePlayer(event.fielder, bowlingTeam);
        if (event.type === 'catch') player.catches += 1;
        else if (event.type === 'stumping') player.stumpings += 1;
        else if (event.type === 'runOut') player.runOuts += 1;

        player.events.push({
          type: event.type,
          matchId: match.id,
          batter: batter.n,
          dismissal: batter.dis
        });
      }
    }
  }

  return Object.values(map).map((player) => decorateTeam(player, teamMeta));
}

/**
 * Team-level innings totals and metadata.
 */
export function aggregateTeamStats(results, teamMeta = {}, options = {}) {
  const innings = [];

  for (const match of getFilteredResults(results, options)) {
    if (!match.scorecard) continue;

    for (const inn of match.scorecard.innings) {
      const tm = teamMeta[inn.team] || {};
      const score = parseInt(inn.total, 10) || 0;

      innings.push({
        team: inn.team,
        score,
        total: inn.total,
        overs: inn.overs,
        vs: inn.team === match.t1 ? match.t2 : match.t1,
        matchId: match.id,
        pri: tm.pri || '#444',
        sec: tm.sec || '#fff',
        teamName: tm.name || inn.team
      });
    }
  }

  const teamTotals = [...innings].sort((a, b) => b.score - a.score);
  return { innings, teamTotals };
}

/**
 * Player of the match award counts.
 */
export function aggregatePotmStats(results, options = {}) {
  const map = {};

  for (const match of getFilteredResults(results, options)) {
    if (!match.potm || match.winner === 'TBD') continue;

    const key = `${match.potm}|${match.winner}`;
    if (!map[key]) {
      map[key] = {
        n: match.potm,
        team: match.winner,
        count: 0,
        details: []
      };
    }

    map[key].count += 1;
    map[key].details.push(`M${match.id}: ${match.potmDetail}`);
  }

  return Object.values(map).sort((a, b) => b.count - a.count);
}

/**
 * Best bowling spell for a player using raw scorecard names (legacy parity).
 */
export function getBestSpell(name, team, results, options = {}) {
  let best = null;

  for (const match of getFilteredResults(results, options)) {
    if (!match.scorecard) continue;

    for (const inn of match.scorecard.innings) {
      const bowlingTeam = getBowlingTeam(match, inn.team);
      if (bowlingTeam !== team) continue;

      for (const bowler of inn.bowlers || []) {
        if (bowler.n !== name) continue;
        if (!best || bowler.w > best.w || (bowler.w === best.w && bowler.r < best.r)) {
          best = bowler;
        }
      }
    }
  }

  return best ? `${best.w}/${best.r}` : '—';
}

export function getMvpScoreBreakdown(player) {
  const bat = parseFloat((
    player.batRuns * 1
    + (player.avg || 0) * 6
    + player.sr / 5
    + player.hs * 1.5
    + player.notOuts * 4
  ).toFixed(1));

  const bowl = parseFloat((
    player.wkts * 12
    + Math.max(0, 20 - player.econ) * 3
    + player.bowOvers * 1.2
    + player.bestSpellW * 5
    + (player.bestSpellW >= 4 ? 4 : 0)
  ).toFixed(1));

  const bonus = parseFloat((player.matches * 3 + player.potmCount * 10).toFixed(1));

  return { bat, bowl, bonus };
}

/**
 * Combined batting + bowling + bonus MVP scores.
 */
export function computeMvpScores(results, teamMeta = {}, options = {}) {
  const players = {};

  const addPlayer = (name, team) => {
    const key = `${name}|${team}`;
    if (!players[key]) {
      const tm = teamMeta[team] || {};
      players[key] = {
        n: name,
        team,
        teamName: tm.name || team,
        pri: tm.pri || '#444',
        sec: tm.sec || '#fff',
        batRuns: 0,
        balls: 0,
        inns: 0,
        notOuts: 0,
        hs: 0,
        hsNotOut: false,
        bowOvers: 0,
        bowRuns: 0,
        wkts: 0,
        bowInns: 0,
        bestSpellW: 0,
        bestSpellR: 0,
        matches: new Set(),
        potmCount: 0
      };
    }
    return players[key];
  };

  for (const match of getFilteredResults(results, options)) {
    if (!match.scorecard) continue;

    const matchKey = match.id || `${match.t1}-${match.t2}-${match.date || ''}`;

    for (const inn of match.scorecard.innings) {
      const battingTeam = inn.team;

      for (const batter of inn.batters || []) {
        const player = addPlayer(normalizePlayerName(batter.n, battingTeam), battingTeam);
        player.batRuns += batter.r;
        player.balls += batter.b;
        player.inns += 1;
        if (batter.notout) player.notOuts += 1;
        if (batter.r > player.hs || (batter.r === player.hs && batter.notout)) {
          player.hs = batter.r;
          player.hsNotOut = !!batter.notout;
        }
        player.matches.add(matchKey);
      }

      const bowlingTeam = getBowlingTeam(match, inn.team);
      for (const bowler of inn.bowlers || []) {
        const player = addPlayer(normalizePlayerName(bowler.n, bowlingTeam), bowlingTeam);
        const parts = String(bowler.o).split('.');
        const overs = parseInt(parts[0], 10) + (parseInt(parts[1] || '0', 10) / 6);

        player.bowOvers += overs;
        player.bowRuns += bowler.r;
        player.wkts += bowler.w;
        player.bowInns += 1;

        if (bowler.w > player.bestSpellW || (bowler.w === player.bestSpellW && bowler.r < player.bestSpellR)) {
          player.bestSpellW = bowler.w;
          player.bestSpellR = bowler.r;
        }

        player.matches.add(matchKey);
      }
    }
  }

  const potmCount = {};
  for (const match of getFilteredResults(results, options)) {
    if (match.potm) potmCount[match.potm] = (potmCount[match.potm] || 0) + 1;
  }

  return Object.values(players).map((player) => {
    player.potmCount = potmCount[player.n] || 0;
    player.matches = player.matches.size;
    player.sr = player.balls > 0 ? (player.batRuns / player.balls * 100) : 0;
    player.srStr = player.balls > 0 ? player.sr.toFixed(1) : '0.0';
    player.avg = player.inns - player.notOuts > 0
      ? (player.batRuns / (player.inns - player.notOuts))
      : 0;
    player.avgStr = player.inns - player.notOuts > 0 ? player.avg.toFixed(1) : '—';
    player.econ = player.bowOvers > 0 ? (player.bowRuns / player.bowOvers) : 0;
    player.econStr = player.bowOvers > 0 ? player.econ.toFixed(2) : '0.00';
    player.ovStr = formatOversFromDecimal(player.bowOvers);
    player.bestSpell = player.bestSpellW ? `${player.bestSpellW}/${player.bestSpellR}` : '—';

    const { bat, bowl, bonus } = getMvpScoreBreakdown(player);
    player.score = parseFloat((bat + bowl + bonus).toFixed(1));

    return player;
  }).sort((a, b) => b.score - a.score);
}

/**
 * Detailed player profile built from aggregate stats plus innings-level scans.
 */
export function buildPlayerProfileStats(results, teamMeta, playerName, playerTeam, options = {}) {
  const filtered = getFilteredResults(results, options);
  const batRows = aggregateBattingStats(filtered, teamMeta, options);
  const bowlRows = aggregateBowlingStats(filtered, teamMeta, options);
  const fieldRows = aggregateFieldingStats(filtered, teamMeta, options);

  const battingRow = batRows.find((p) => p.n === playerName && p.team === playerTeam) || null;
  const bowlingRow = bowlRows.find((p) => p.n === playerName && p.team === playerTeam) || null;
  const fieldingRow = fieldRows.find((p) => p.n === playerName && p.team === playerTeam) || null;

  const batMatches = new Set();
  const matchLog = [];
  let thirties = 0;
  let fifties = 0;
  let hundreds = 0;
  let ducks = 0;
  let fours = 0;
  let sixes = 0;
  let hasBoundaryData = false;
  let spells3w = 0;
  let spells4w = 0;
  let spells5w = 0;

  for (const match of filtered) {
    if (!match.scorecard || match.winner === 'TBD') continue;

    const playerInMatch = match.t1 === playerTeam || match.t2 === playerTeam;
    const result = !playerInMatch ? '—' : (match.winner === playerTeam ? 'W' : 'L');

    for (const inn of match.scorecard.innings) {
      if (inn.team === playerTeam) {
        for (const batter of inn.batters || []) {
          const name = normalizePlayerName(batter.n, inn.team);
          if (name !== playerName) continue;

          batMatches.add(match.id);
          const runs = batter.r || 0;
          if (!batter.notout && runs === 0) ducks += 1;
          if (runs >= 100) hundreds += 1;
          else if (runs >= 50) fifties += 1;
          else if (runs >= 30) thirties += 1;

          if (batter.fours != null || batter.f4 != null) {
            fours += batter.fours ?? batter.f4 ?? 0;
            hasBoundaryData = true;
          }
          if (batter.sixes != null || batter.f6 != null) {
            sixes += batter.sixes ?? batter.f6 ?? 0;
            hasBoundaryData = true;
          }

          const opp = inn.team === match.t1 ? match.t2 : match.t1;
          const oppMeta = teamMeta[opp] || {};
          matchLog.push({
            matchId: match.id,
            type: 'bat',
            vs: opp,
            vsName: oppMeta.name || opp,
            figures: `${runs}${batter.notout ? '*' : ''} (${batter.b})`,
            detail: batter.notout ? 'not out' : (batter.dis || '—'),
            result
          });
        }
      }

      const bowlTeam = getBowlingTeam(match, inn.team);
      if (bowlTeam === playerTeam) {
        for (const bowler of inn.bowlers || []) {
          const name = normalizePlayerName(bowler.n, bowlTeam);
          if (name !== playerName) continue;

          const wkts = bowler.w || 0;
          if (wkts >= 5) spells5w += 1;
          else if (wkts === 4) spells4w += 1;
          else if (wkts === 3) spells3w += 1;

          const batTeam = inn.team;
          const batMeta = teamMeta[batTeam] || {};
          matchLog.push({
            matchId: match.id,
            type: 'bowl',
            vs: batTeam,
            vsName: batMeta.name || batTeam,
            figures: `${wkts}/${bowler.r} (${bowler.o})`,
            detail: `Econ ${bowler.econ || '—'}`,
            result
          });
        }
      }
    }
  }

  matchLog.sort((a, b) => b.matchId - a.matchId);

  const batting = battingRow ? {
    matches: batMatches.size,
    innings: battingRow.inns,
    runs: battingRow.runs,
    balls: battingRow.balls,
    average: battingRow.avg,
    strikeRate: battingRow.srStr,
    highestScore: `${battingRow.hs}${battingRow.hsNotOut ? '*' : ''}`,
    thirties,
    fifties,
    hundreds,
    fours: hasBoundaryData ? fours : '—',
    sixes: hasBoundaryData ? sixes : '—',
    ducks
  } : null;

  let bowling = null;
  if (bowlingRow) {
    const bowlAvg = bowlingRow.wkts > 0 ? (bowlingRow.runs / bowlingRow.wkts).toFixed(1) : '—';
    const bowlBalls = Math.round(bowlingRow.overs * 6);
    const bowlSr = bowlingRow.wkts > 0 ? (bowlBalls / bowlingRow.wkts).toFixed(1) : '—';
    bowling = {
      wickets: bowlingRow.wkts,
      overs: bowlingRow.ovStr,
      economy: bowlingRow.econStr,
      average: bowlAvg,
      strikeRate: bowlSr,
      bestBowling: bowlingRow.bestStr,
      threeW: spells3w,
      fourW: spells4w,
      fiveW: spells5w
    };
  }

  const fielding = {
    catches: fieldingRow?.catches || 0,
    stumpings: fieldingRow?.stumpings || 0,
    runOuts: fieldingRow?.runOuts || 0
  };

  return {
    batting,
    bowling,
    fielding,
    matchLog,
    hasBatting: !!batting,
    hasBowling: !!bowling,
    hasFielding: fielding.catches + fielding.stumpings + fielding.runOuts > 0
  };
}

/**
 * Legacy-compatible bundle used by Season Stats and Home pages.
 */
export function buildPlayerStatsBundle(results, teamMeta = {}, options = {}) {
  const batArr = aggregateBattingStats(results, teamMeta, options);
  const bowlArr = aggregateBowlingStats(results, teamMeta, options);

  const bat = {};
  const bowl = {};

  for (const player of batArr) {
    bat[`${player.n}|${player.team}`] = {
      n: player.n,
      team: player.team,
      runs: player.runs,
      balls: player.balls,
      inns: player.inns,
      notOuts: player.notOuts,
      hs: player.hs,
      hsNotOut: player.hsNotOut,
      sr: player.sr,
      srStr: player.srStr,
      avg: player.avg,
      pri: player.pri,
      sec: player.sec,
      teamName: player.teamName
    };
  }

  for (const player of bowlArr) {
    bowl[`${player.n}|${player.team}`] = {
      n: player.n,
      team: player.team,
      overs: player.overs,
      runs: player.runs,
      wkts: player.wkts,
      inns: player.inns,
      ovStr: player.ovStr,
      econ: player.econ,
      econStr: player.econStr,
      pri: player.pri,
      sec: player.sec,
      teamName: player.teamName
    };
  }

  return { bat, bowl, batArr, bowlArr };
}
