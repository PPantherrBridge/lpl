export const TABLE_NAMES = [
  'seasons',
  'teams',
  'players',
  'matches',
  'innings',
  'batting_scorecards',
  'bowling_scorecards',
  'ball_events',
  'partnerships',
  'fall_of_wickets',
  'points_table',
  'records',
  'head_to_head',
  'live_matches',
  'playoffs',
  'archives',
  'admins',
  'settings'
];

export const REPOSITORY_TABLES = {
  seasons: 'seasons',
  teams: 'teams',
  players: 'players',
  matches: 'matches',
  innings: 'innings',
  battingScorecards: 'batting_scorecards',
  bowlingScorecards: 'bowling_scorecards',
  ballEvents: 'ball_events',
  partnerships: 'partnerships',
  fallOfWickets: 'fall_of_wickets',
  pointsTable: 'points_table',
  records: 'records',
  headToHead: 'head_to_head',
  liveMatches: 'live_matches',
  playoffs: 'playoffs',
  archives: 'archives',
  admins: 'admins',
  settings: 'settings'
};

export function assertKnownTable(table) {
  if (!TABLE_NAMES.includes(table)) {
    throw new Error(`Unknown table: ${table}`);
  }
}
