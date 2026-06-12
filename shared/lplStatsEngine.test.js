/**
 * Parity tests: unified stats engine vs legacy reference implementations.
 * Run: node shared/lplStatsEngine.test.js
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  aggregateBattingInnings,
  aggregateBattingStats,
  aggregateBowlingSpells,
  aggregateBowlingStats,
  aggregateFieldingStats,
  aggregatePotmStats,
  aggregateTeamStats,
  buildPlayerProfileStats,
  buildPlayerStatsBundle,
  computeMvpScores,
  getBestSpell,
  getFilteredResults,
  normalizePlayerName,
  PLAYER_CANONICAL_MAP
} from './lplStatsEngine.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

let passed = 0;
let failed = 0;

function assertEqual(actual, expected, label) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a !== e) {
    failed += 1;
    console.error(`FAIL: ${label}`);
    console.error('  expected:', (e || '').slice(0, 500));
    console.error('  actual:  ', (a || '').slice(0, 500));
    return;
  }
  passed += 1;
}

function roundBowlRow(player) {
  return {
    ...player,
    overs: parseFloat(Number(player.overs).toFixed(6)),
    econ: parseFloat(Number(player.econ).toFixed(2)),
    econStr: Number(player.econ).toFixed(2)
  };
}

function roundMvpRow(player) {
  return {
    n: player.n,
    team: player.team,
    batRuns: player.batRuns,
    balls: player.balls,
    inns: player.inns,
    notOuts: player.notOuts,
    hs: player.hs,
    hsNotOut: player.hsNotOut,
    bowOvers: parseFloat(Number(player.bowOvers).toFixed(6)),
    bowRuns: player.bowRuns,
    wkts: player.wkts,
    bowInns: player.bowInns,
    bestSpellW: player.bestSpellW,
    bestSpellR: player.bestSpellR,
    matches: player.matches,
    potmCount: player.potmCount,
    sr: parseFloat(Number(player.sr).toFixed(6)),
    avg: parseFloat(Number(player.avg).toFixed(6)),
    econ: parseFloat(Number(player.econ).toFixed(6)),
    score: player.score
  };
}

function stripDecoration(rows) {
  return rows.map(({ pri, sec, teamName, ...rest }) => rest);
}

function stripBowlExtras(rows) {
  return rows.map(({ overs, bestSpellW, bestSpellR, bestSpell, ...rest }) => rest);
}

function sortBatting(rows) {
  return [...rows].sort((a, b) => `${a.n}|${a.team}`.localeCompare(`${b.n}|${b.team}`));
}

function sortBowling(rows) {
  return [...rows].sort((a, b) => `${a.n}|${a.team}`.localeCompare(`${b.n}|${b.team}`));
}

// ── Legacy reference implementations (pre-migration copies) ─────────────────

function legacyNormalize(name, team) {
  return PLAYER_CANONICAL_MAP[`${name}|${team}`] || name;
}

function legacyBuildPlayerStats(results) {
  const bat = {};
  const bowl = {};

  for (const m of results) {
    if (!m.scorecard) continue;
    for (const inn of m.scorecard.innings) {
      const team = inn.team;
      for (const b of inn.batters || []) {
        const fixedName = legacyNormalize(b.n, team);
        const k = `${fixedName}|${team}`;
        if (!bat[k]) bat[k] = { n: fixedName, team, runs: 0, balls: 0, inns: 0, notOuts: 0, hs: 0, hsNotOut: false };
        bat[k].runs += b.r;
        bat[k].balls += b.b;
        bat[k].inns += 1;
        if (b.notout) bat[k].notOuts += 1;
        if (b.r > bat[k].hs || (b.r === bat[k].hs && b.notout)) {
          bat[k].hs = b.r;
          bat[k].hsNotOut = !!b.notout;
        }
      }
      const bowlingTeam = inn.team === m.t1 ? m.t2 : m.t1;
      for (const bw of inn.bowlers || []) {
        const fixedBwName = legacyNormalize(bw.n, bowlingTeam);
        const k = `${fixedBwName}|${bowlingTeam}`;
        if (!bowl[k]) bowl[k] = { n: fixedBwName, team: bowlingTeam, overs: 0, runs: 0, wkts: 0, inns: 0 };
        const parts = String(bw.o).split('.');
        const fullOv = parseInt(parts[0], 10) + (parseInt(parts[1] || '0', 10) / 6);
        bowl[k].overs += fullOv;
        bowl[k].runs += bw.r;
        bowl[k].wkts += bw.w;
        bowl[k].inns += 1;
      }
    }
  }

  const batArr = Object.values(bat).map((b) => {
    const sr = b.balls > 0 ? (b.runs / b.balls * 100).toFixed(1) : '0.0';
    const avg = b.inns - b.notOuts > 0 ? (b.runs / (b.inns - b.notOuts)).toFixed(1) : '—';
    return { ...b, sr: parseFloat(sr), srStr: sr, avg };
  });

  const bowlArr = Object.values(bowl).map((b) => {
    const econ = b.overs > 0 ? (b.runs / b.overs).toFixed(2) : '0.00';
    const full = Math.floor(b.overs);
    const frac = Math.round((b.overs - full) * 6);
    const ovStr = frac ? `${full}.${frac}` : `${full}`;
    return { ...b, ovStr, econ: parseFloat(econ), econStr: econ };
  });

  return { bat, bowl, batArr, bowlArr };
}

function legacyBatStats(results) {
  const map = {};
  for (const m of results) {
    if (!m.scorecard) continue;
    for (const inn of m.scorecard.innings) {
      for (const b of inn.batters || []) {
        const fixedName = legacyNormalize(b.n, inn.team);
        const k = `${fixedName}|${inn.team}`;
        if (!map[k]) map[k] = { n: fixedName, team: inn.team, runs: 0, balls: 0, inns: 0, notOuts: 0, hs: 0, hsNotOut: false };
        const e = map[k];
        e.runs += b.r;
        e.balls += b.b;
        e.inns += 1;
        if (b.notout) e.notOuts += 1;
        if (b.r > e.hs || (b.r === e.hs && b.notout)) { e.hs = b.r; e.hsNotOut = !!b.notout; }
      }
    }
  }
  return Object.values(map).map((p) => {
    const sr = p.balls > 0 ? (p.runs / p.balls * 100).toFixed(1) : '0.0';
    const denom = p.inns - p.notOuts;
    return { ...p, sr: parseFloat(sr), srStr: sr, avg: denom > 0 ? (p.runs / denom).toFixed(1) : '—' };
  });
}

function legacyBowlStats(results) {
  const map = {};
  for (const m of results) {
    if (!m.scorecard) continue;
    for (const inn of m.scorecard.innings) {
      const bowlTeam = inn.team === m.t1 ? m.t2 : m.t1;
      for (const bw of inn.bowlers || []) {
        const fixedBwName = legacyNormalize(bw.n, bowlTeam);
        const k = `${fixedBwName}|${bowlTeam}`;
        if (!map[k]) map[k] = { n: fixedBwName, team: bowlTeam, ovBalls: 0, runs: 0, wkts: 0, inns: 0, spells: [] };
        const e = map[k];
        const pts = String(bw.o).split('.');
        e.ovBalls += parseInt(pts[0], 10) * 6 + parseInt(pts[1] || '0', 10);
        e.runs += bw.r;
        e.wkts += bw.w;
        e.inns += 1;
        e.spells.push({ w: bw.w, r: bw.r });
      }
    }
  }
  return Object.values(map).map((p) => {
    const totalOv = p.ovBalls / 6;
    const econ = totalOv > 0 ? (p.runs / totalOv).toFixed(2) : '0.00';
    const full = Math.floor(totalOv);
    const frac = Math.round((totalOv - full) * 6);
    const best = p.spells.reduce((a, b) => (b.w > a.w || (b.w === a.w && b.r < a.r) ? b : a), { w: 0, r: 999 });
    return {
      ...p,
      ovStr: frac ? `${full}.${frac}` : `${full}`,
      econ: parseFloat(econ),
      econStr: econ,
      bestStr: best.w > 0 ? `${best.w}/${best.r}` : '—'
    };
  });
}

function legacyMvp(results) {
  const players = {};
  const addPlayer = (name, team) => {
    const key = `${name}|${team}`;
    if (!players[key]) {
      players[key] = {
        n: name, team, batRuns: 0, balls: 0, inns: 0, notOuts: 0, hs: 0, hsNotOut: false,
        bowOvers: 0, bowRuns: 0, wkts: 0, bowInns: 0, bestSpellW: 0, bestSpellR: 0, matches: new Set()
      };
    }
    return players[key];
  };

  for (const m of results) {
    if (!m.scorecard) continue;
    const matchKey = m.id || `${m.t1}-${m.t2}-${m.date || ''}`;
    for (const inn of m.scorecard.innings) {
      for (const b of inn.batters || []) {
        const p = addPlayer(legacyNormalize(b.n, inn.team), inn.team);
        p.batRuns += b.r;
        p.balls += b.b;
        p.inns += 1;
        if (b.notout) p.notOuts += 1;
        if (b.r > p.hs || (b.r === p.hs && b.notout)) { p.hs = b.r; p.hsNotOut = !!b.notout; }
        p.matches.add(matchKey);
      }
      const bowlingTeam = inn.team === m.t1 ? m.t2 : m.t1;
      for (const bw of inn.bowlers || []) {
        const p = addPlayer(legacyNormalize(bw.n, bowlingTeam), bowlingTeam);
        const parts = String(bw.o).split('.');
        const overs = parseInt(parts[0], 10) + (parseInt(parts[1] || '0', 10) / 6);
        p.bowOvers += overs;
        p.bowRuns += bw.r;
        p.wkts += bw.w;
        p.bowInns += 1;
        if (bw.w > p.bestSpellW || (bw.w === p.bestSpellW && bw.r < p.bestSpellR)) {
          p.bestSpellW = bw.w;
          p.bestSpellR = bw.r;
        }
        p.matches.add(matchKey);
      }
    }
  }

  const potmCount = {};
  for (const m of results) {
    if (m.potm) potmCount[m.potm] = (potmCount[m.potm] || 0) + 1;
  }

  return Object.values(players).map((p) => {
    p.potmCount = potmCount[p.n] || 0;
    p.matches = p.matches.size;
    p.sr = p.balls > 0 ? (p.batRuns / p.balls * 100) : 0;
    p.avg = p.inns - p.notOuts > 0 ? (p.batRuns / (p.inns - p.notOuts)) : 0;
    p.econ = p.bowOvers > 0 ? (p.bowRuns / p.bowOvers) : 0;
    const battingPoints = p.batRuns * 1 + (p.avg || 0) * 6 + p.sr / 5 + p.hs * 1.5 + p.notOuts * 4;
    const bowlingPoints = p.wkts * 12 + Math.max(0, 20 - p.econ) * 3 + p.bowOvers * 1.2 + p.bestSpellW * 5 + (p.bestSpellW >= 4 ? 4 : 0);
    const matchPoints = p.matches * 3;
    const potmPoints = p.potmCount * 10;
    p.score = parseFloat((battingPoints + bowlingPoints + matchPoints + potmPoints).toFixed(1));
    return p;
  }).sort((a, b) => b.score - a.score);
}

function loadResultsFromLegacy() {
  const legacyPath = path.join(ROOT, 'client/public/legacy/lpl-legacy.js');
  const source = fs.readFileSync(legacyPath, 'utf8');
  const startMarker = '// ─── RESULTS (completed matches)';
  const endMarker = '];\n\n// ─── FIXTURES';
  const sectionStart = source.indexOf(startMarker);
  const arrayStart = source.indexOf('const RESULTS = [', sectionStart);
  const end = source.indexOf(endMarker, arrayStart);
  if (sectionStart < 0 || arrayStart < 0 || end < 0) {
    throw new Error('RESULTS array boundaries not found in lpl-legacy.js');
  }

  const arrayLiteral = source.slice(arrayStart + 'const RESULTS = '.length, end + 1).trim();
  // eslint-disable-next-line no-new-func
  return Function(`"use strict"; return (${arrayLiteral});`)();
}

function toLegacyBowlBundleRow(player) {
  return {
    n: player.n,
    team: player.team,
    overs: player.overs,
    runs: player.runs,
    wkts: player.wkts,
    inns: player.inns,
    ovStr: player.ovStr,
    econ: player.econ,
    econStr: player.econStr
  };
}

const sampleResults = [
  {
    id: 99,
    t1: 'RCB',
    t2: 'MI',
    winner: 'MI',
    potm: 'Bhuvan',
    potmDetail: '78* (31)',
    scorecard: {
      innings: [
        {
          team: 'RCB',
          total: '120/3',
          overs: '10',
          batters: [
            { n: 'MohanGT', dis: 'c Adith b Sachin', r: 50, b: 20, sr: '250.00' },
            { n: 'Enoch', dis: 'not out', r: 40, b: 18, sr: '222.22', notout: true }
          ],
          bowlers: [
            { n: 'Shreyans', o: '2.4', r: 30, w: 1, econ: '11.25' }
          ]
        },
        {
          team: 'MI',
          total: '121/2',
          overs: '9.5',
          batters: [
            { n: 'Bhuvan', dis: 'not out', r: 78, b: 31, sr: '251.61', notout: true },
            { n: 'Adith', dis: 'run out (Sachin)', r: 10, b: 5, sr: '200.00' }
          ],
          bowlers: [
            { n: 'MohanGT', o: '2', r: 25, w: 2, econ: '12.50' }
          ]
        }
      ]
    }
  },
  {
    id: 100,
    t1: 'GT',
    t2: 'CSK',
    winner: 'GT',
    scorecard: {
      innings: [
        {
          team: 'GT',
          total: '90/1',
          overs: '8',
          batters: [
            { n: 'MohanGT', dis: 'not out', r: 60, b: 25, sr: '240.00', notout: true }
          ],
          bowlers: []
        }
      ]
    }
  }
];

function runFixtureTests(results, label) {
  const legacyBundle = legacyBuildPlayerStats(results);
  const engineBundle = buildPlayerStatsBundle(results, {});

  assertEqual(
    sortBatting(stripDecoration(legacyBundle.batArr)),
    sortBatting(stripDecoration(engineBundle.batArr)),
    `${label}: buildPlayerStats batting`
  );

  assertEqual(
    sortBowling(stripDecoration(legacyBundle.bowlArr.map(roundBowlRow))),
    sortBowling(stripDecoration(engineBundle.bowlArr.map(toLegacyBowlBundleRow).map(roundBowlRow))),
    `${label}: buildPlayerStats bowling`
  );

  assertEqual(
    sortBatting(stripDecoration(legacyBatStats(results))),
    sortBatting(stripDecoration(aggregateBattingStats(results, {}))),
    `${label}: _batStats`
  );

  assertEqual(
    sortBowling(stripBowlExtras(stripDecoration(legacyBowlStats(results)))),
    sortBowling(stripBowlExtras(stripDecoration(aggregateBowlingStats(results, {})))),
    `${label}: _bowlStats`
  );

  const legacyMvpMap = Object.fromEntries(
    legacyMvp(results).map((p) => [`${p.n}|${p.team}`, p.score])
  );
  const engineMvpMap = Object.fromEntries(
    computeMvpScores(results, {}).map((p) => [`${p.n}|${p.team}`, p.score])
  );
  assertEqual(Object.keys(legacyMvpMap).sort(), Object.keys(engineMvpMap).sort(), `${label}: computeMvpScores players`);
  for (const key of Object.keys(legacyMvpMap)) {
    if (Math.abs(legacyMvpMap[key] - engineMvpMap[key]) > 0.15) {
      failed += 1;
      console.error(`FAIL: ${label}: computeMvpScores score for ${key}`);
      console.error('  expected:', legacyMvpMap[key]);
      console.error('  actual:  ', engineMvpMap[key]);
    } else {
      passed += 1;
    }
  }

  const { teamTotals } = aggregateTeamStats(results, {});
  assertEqual(teamTotals.length === 0 || teamTotals[0]?.score >= (teamTotals[1]?.score ?? 0), true, `${label}: aggregateTeamStats sort`);

  if (label === 'sample') {
    const potm = aggregatePotmStats(results);
    assertEqual(potm[0]?.n, 'Bhuvan', `${label}: aggregatePotmStats leader`);

    const fielding = aggregateFieldingStats(results, {});
    const adithCatches = fielding.find((p) => p.n === 'Adith');
    assertEqual(adithCatches?.catches, 1, `${label}: aggregateFieldingStats catches`);

    const spells = aggregateBowlingSpells(results, {});
    assertEqual(spells[0]?.w, 2, `${label}: aggregateBowlingSpells top wicket`);

    const normalizedInnings = aggregateBattingInnings(results, {}, { normalizeNames: true });
    const mohanGtRow = normalizedInnings.find((row) => row.team === 'GT' && row.r === 60);
    assertEqual(mohanGtRow?.n, 'MohanR', `${label}: aggregateBattingInnings normalize`);

    const rawInnings = aggregateBattingInnings(results, {}, { sortByRuns: true });
    assertEqual(rawInnings[0]?.n, 'Bhuvan', `${label}: aggregateBattingInnings sort`);
  }

  if (engineBundle.bowlArr.length) {
    const bowler = engineBundle.bowlArr[0];
    const legacyBest = getBestSpell(bowler.n, bowler.team, results);
    assertEqual(typeof legacyBest, 'string', `${label}: getBestSpell returns string`);
  }
}

console.log('LPL stats engine parity tests\n');

runFixtureTests(sampleResults, 'sample');
console.log('  sample fixtures OK');

const productionResults = loadResultsFromLegacy();
runFixtureTests(productionResults, 'production RESULTS');
console.log(`  production RESULTS OK (${productionResults.length} matches)`);

const leagueOnly = getFilteredResults(productionResults, { matchFilter: 'league' });
const playoffOnly = getFilteredResults(
  [...productionResults, { id: 9999, t1: 'RCB', t2: 'MI', winner: 'RCB', playoffRound: 'Final', scorecard: { innings: [] } }],
  { matchFilter: 'finals' }
);
assertEqual(playoffOnly.length, 1, 'getFilteredResults finals');
assertEqual(leagueOnly.every((m) => !m.playoffRound), true, 'getFilteredResults league');

assertEqual(normalizePlayerName('MohanGT', 'GT'), 'MohanR', 'normalizePlayerName');

function testFieldingDismissals() {
  const results = [
    {
      id: 501,
      t1: 'MI',
      t2: 'RCB',
      winner: 'MI',
      scorecard: {
        innings: [{
          team: 'RCB',
          batters: [
            { n: 'Enoch', dis: 'c Adith b Sachin', r: 10, b: 5, sr: '200.00' },
            { n: 'Monish', dis: 'c x b Shreyans', r: 22, b: 11, sr: '200.00' },
            { n: 'Harsha', dis: 'st Adith b Sachin', r: 8, b: 6, sr: '133.33' },
            { n: 'Naveen', dis: 'run out (Sachin)', r: 5, b: 3, sr: '166.67' }
          ],
          bowlers: [
            { n: 'Shreyans', o: '2', r: 20, w: 1, econ: '10.00' },
            { n: 'Sachin', o: '2', r: 15, w: 1, econ: '7.50' }
          ]
        }]
      }
    }
  ];

  const fielding = aggregateFieldingStats(results, {});
  const adith = fielding.find((p) => p.n === 'Adith' && p.team === 'MI');
  const shreyans = fielding.find((p) => p.n === 'Shreyans' && p.team === 'MI');
  const sachin = fielding.find((p) => p.n === 'Sachin' && p.team === 'MI');
  const phantomX = fielding.find((p) => p.n === 'x');

  assertEqual(adith?.catches, 1, 'fielding: c Fielder b Bowler catch');
  assertEqual(adith?.stumpings, 1, 'fielding: stumping');
  assertEqual(sachin?.runOuts, 1, 'fielding: run out (Fielder)');
  assertEqual(shreyans?.catches, 1, 'fielding: c x b Bowler credits bowler catch');
  assertEqual(phantomX, undefined, 'fielding: c x b does not credit fielder x');
}

function testPlayerProfile() {
  const results = [
    {
      id: 601,
      t1: 'RCB',
      t2: 'MI',
      winner: 'MI',
      potm: 'Bhuvan',
      scorecard: {
        innings: [
          {
            team: 'RCB',
            batters: [
              { n: 'Enoch', dis: 'b Shreyans', r: 55, b: 30, sr: '183.33' },
              { n: 'Monish', dis: 'not out', r: 12, b: 8, sr: '150.00', notout: true }
            ],
            bowlers: [{ n: 'Shreyans', o: '4', r: 40, w: 1, econ: '10.00' }]
          },
          {
            team: 'MI',
            batters: [{ n: 'Bhuvan', dis: 'not out', r: 40, b: 20, sr: '200.00', notout: true }],
            bowlers: [
              { n: 'Enoch', o: '2', r: 25, w: 0, econ: '12.50' },
              { n: 'Monish', o: '2', r: 20, w: 3, econ: '10.00' }
            ]
          }
        ]
      }
    }
  ];

  const profile = buildPlayerProfileStats(results, {}, 'Monish', 'RCB', {});
  assertEqual(profile.batting?.runs, 12, 'profile batting runs');
  assertEqual(profile.batting?.fifties, 0, 'profile no fifty');
  assertEqual(profile.bowling?.wickets, 3, 'profile bowling wickets');
  assertEqual(profile.bowling?.threeW, 1, 'profile 3W spell');
  assertEqual(profile.matchLog.length, 2, 'profile match log entries');
}

testFieldingDismissals();
console.log('  fielding dismissal formats OK');
testPlayerProfile();
console.log('  player profile OK');

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
