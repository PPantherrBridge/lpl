import { assertKnownTable } from './tables.js';

export const TABLE_COLUMNS = {
  seasons: [
    'id', 'name', 'number', 'year', 'status', 'started_at', 'closed_at', 'archived_at',
    'metadata', 'created_at', 'updated_at'
  ],
  teams: [
    'id', 'season_id', 'code', 'name', 'primary_color', 'secondary_color', 'captain',
    'vice_captain', 'women', 'raw', 'created_at', 'updated_at'
  ],
  players: [
    'id', 'team_id', 'season_id', 'name', 'batting_hand', 'role', 'bowling_style',
    'attributes', 'raw', 'created_at', 'updated_at'
  ],
  matches: [
    'id', 'season_id', 'match_number', 'stage', 'team1_id', 'team2_id', 'winner_team_id',
    'venue', 'match_date', 'match_date_label', 'status', 'result_summary',
    'player_of_match', 'scorecard', 'raw', 'created_at', 'updated_at'
  ],
  innings: [
    'id', 'match_id', 'season_id', 'innings_number', 'batting_team_id', 'bowling_team_id',
    'runs', 'wickets', 'overs', 'extras', 'raw', 'created_at', 'updated_at'
  ],
  batting_scorecards: [
    'id', 'match_id', 'innings_id', 'season_id', 'team_id', 'player_id', 'player_name',
    'runs', 'balls', 'fours', 'sixes', 'strike_rate', 'dismissal', 'not_out', 'raw',
    'created_at', 'updated_at'
  ],
  bowling_scorecards: [
    'id', 'match_id', 'innings_id', 'season_id', 'team_id', 'player_id', 'player_name',
    'overs', 'balls', 'maidens', 'runs', 'wickets', 'economy', 'raw', 'created_at',
    'updated_at'
  ],
  ball_events: [
    'id', 'match_id', 'innings_id', 'season_id', 'over_number', 'ball_in_over',
    'legal_ball_number', 'striker_id', 'striker_name', 'non_striker_id', 'bowler_id',
    'bowler_name', 'event_type', 'runs', 'extras', 'wicket', 'dismissal', 'raw',
    'created_at'
  ],
  partnerships: [
    'id', 'match_id', 'innings_id', 'season_id', 'player1_name', 'player2_name',
    'runs', 'balls', 'wicket_number', 'raw', 'created_at'
  ],
  fall_of_wickets: [
    'id', 'match_id', 'innings_id', 'season_id', 'wicket_number', 'score', 'over_label',
    'player_name', 'dismissal', 'raw', 'created_at'
  ],
  points_table: [
    'id', 'season_id', 'team_id', 'played', 'won', 'lost', 'tied', 'points',
    'net_run_rate', 'runs_for', 'balls_for', 'runs_against', 'balls_against',
    'raw', 'created_at', 'updated_at'
  ],
  records: [
    'id', 'season_id', 'category', 'player_id', 'player_name', 'team_id', 'match_id',
    'value', 'label', 'raw', 'created_at', 'updated_at'
  ],
  head_to_head: [
    'id', 'season_id', 'player1_id', 'player2_id', 'comparison', 'created_at',
    'updated_at'
  ],
  live_matches: [
    'id', 'match_id', 'season_id', 'state', 'last_updated', 'created_at', 'updated_at'
  ],
  playoffs: [
    'id', 'season_id', 'match_id', 'stage', 'team1_id', 'team2_id', 'winner_team_id',
    'runner_up_team_id', 'status', 'fixture', 'result', 'raw', 'created_at', 'updated_at'
  ],
  archives: [
    'id', 'season_id', 'season_name', 'snapshot', 'immutable', 'created_at', 'updated_at'
  ],
  admins: [
    'id', 'username', 'password_hash', 'role', 'created_at', 'updated_at'
  ],
  settings: [
    'id', 'key', 'value', 'created_at', 'updated_at'
  ]
};

export function allowedColumns(tableName) {
  assertKnownTable(tableName);
  return new Set(TABLE_COLUMNS[tableName]);
}

export function sanitizeRecordForTable(tableName, record, options = {}) {
  if (!record || typeof record !== 'object') return {};
  const allowed = allowedColumns(tableName);
  const omit = new Set(options.omit || []);
  return Object.fromEntries(
    Object.entries(record).filter(([key, value]) => allowed.has(key) && !omit.has(key) && value !== undefined)
  );
}

export function sanitizeFiltersForTable(tableName, filters = {}) {
  return sanitizeRecordForTable(tableName, filters);
}
