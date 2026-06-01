-- LPL database schema for Supabase PostgreSQL.
-- IDs are text to keep imports portable across PostgreSQL, MySQL, MongoDB, SQLite, and Supabase.

create extension if not exists pgcrypto;

create table if not exists seasons (
  id text primary key default gen_random_uuid()::text,
  name text not null,
  number integer,
  year text,
  status text not null default 'draft' check (status in ('draft', 'active', 'closed', 'archived')),
  started_at timestamptz,
  closed_at timestamptz,
  archived_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists teams (
  id text primary key,
  season_id text references seasons(id) on delete set null,
  code text not null,
  name text not null,
  primary_color text,
  secondary_color text,
  captain text,
  vice_captain text,
  women boolean not null default false,
  raw jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists players (
  id text primary key,
  team_id text references teams(id) on delete cascade,
  season_id text references seasons(id) on delete set null,
  name text not null,
  batting_hand text,
  role text,
  bowling_style text,
  attributes jsonb not null default '{}'::jsonb,
  raw jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists matches (
  id text primary key,
  season_id text references seasons(id) on delete set null,
  match_number integer,
  stage text not null default 'league',
  team1_id text references teams(id) on delete set null,
  team2_id text references teams(id) on delete set null,
  winner_team_id text references teams(id) on delete set null,
  venue text,
  match_date date,
  match_date_label text,
  status text not null default 'scheduled' check (status in ('scheduled', 'live', 'completed', 'abandoned')),
  result_summary text,
  player_of_match text,
  scorecard jsonb,
  raw jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists innings (
  id text primary key,
  match_id text not null references matches(id) on delete cascade,
  season_id text references seasons(id) on delete set null,
  innings_number integer not null,
  batting_team_id text references teams(id) on delete set null,
  bowling_team_id text references teams(id) on delete set null,
  runs integer not null default 0,
  wickets integer not null default 0,
  overs text,
  extras integer not null default 0,
  raw jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(match_id, innings_number)
);

create table if not exists batting_scorecards (
  id text primary key,
  match_id text not null references matches(id) on delete cascade,
  innings_id text references innings(id) on delete cascade,
  season_id text references seasons(id) on delete set null,
  team_id text references teams(id) on delete set null,
  player_id text references players(id) on delete set null,
  player_name text not null,
  runs integer not null default 0,
  balls integer not null default 0,
  fours integer not null default 0,
  sixes integer not null default 0,
  strike_rate numeric,
  dismissal text,
  not_out boolean not null default false,
  raw jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists bowling_scorecards (
  id text primary key,
  match_id text not null references matches(id) on delete cascade,
  innings_id text references innings(id) on delete cascade,
  season_id text references seasons(id) on delete set null,
  team_id text references teams(id) on delete set null,
  player_id text references players(id) on delete set null,
  player_name text not null,
  overs text,
  balls integer not null default 0,
  maidens integer not null default 0,
  runs integer not null default 0,
  wickets integer not null default 0,
  economy numeric,
  raw jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists ball_events (
  id text primary key,
  match_id text not null references matches(id) on delete cascade,
  innings_id text references innings(id) on delete cascade,
  season_id text references seasons(id) on delete set null,
  over_number integer,
  ball_in_over integer,
  legal_ball_number integer,
  striker_id text references players(id) on delete set null,
  striker_name text,
  non_striker_id text references players(id) on delete set null,
  bowler_id text references players(id) on delete set null,
  bowler_name text,
  event_type text not null,
  runs integer not null default 0,
  extras integer not null default 0,
  wicket boolean not null default false,
  dismissal text,
  raw jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists partnerships (
  id text primary key,
  match_id text not null references matches(id) on delete cascade,
  innings_id text references innings(id) on delete cascade,
  season_id text references seasons(id) on delete set null,
  player1_name text not null,
  player2_name text not null,
  runs integer not null default 0,
  balls integer not null default 0,
  wicket_number integer,
  raw jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists fall_of_wickets (
  id text primary key,
  match_id text not null references matches(id) on delete cascade,
  innings_id text references innings(id) on delete cascade,
  season_id text references seasons(id) on delete set null,
  wicket_number integer not null,
  score integer not null,
  over_label text,
  player_name text not null,
  dismissal text,
  raw jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists points_table (
  id text primary key,
  season_id text references seasons(id) on delete cascade,
  team_id text references teams(id) on delete cascade,
  played integer not null default 0,
  won integer not null default 0,
  lost integer not null default 0,
  tied integer not null default 0,
  points integer not null default 0,
  net_run_rate numeric not null default 0,
  runs_for integer not null default 0,
  balls_for integer not null default 0,
  runs_against integer not null default 0,
  balls_against integer not null default 0,
  raw jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(season_id, team_id)
);

create table if not exists records (
  id text primary key,
  season_id text references seasons(id) on delete set null,
  category text not null,
  player_id text references players(id) on delete set null,
  player_name text,
  team_id text references teams(id) on delete set null,
  match_id text references matches(id) on delete set null,
  value numeric,
  label text,
  raw jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists head_to_head (
  id text primary key,
  season_id text references seasons(id) on delete set null,
  player1_id text references players(id) on delete cascade,
  player2_id text references players(id) on delete cascade,
  comparison jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists live_matches (
  id text primary key default 'current',
  match_id text,
  season_id text references seasons(id) on delete set null,
  state jsonb not null,
  last_updated timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists playoffs (
  id text primary key,
  season_id text references seasons(id) on delete cascade,
  match_id text references matches(id) on delete set null,
  stage text not null,
  team1_id text references teams(id) on delete set null,
  team2_id text references teams(id) on delete set null,
  winner_team_id text references teams(id) on delete set null,
  runner_up_team_id text references teams(id) on delete set null,
  status text not null default 'scheduled',
  fixture jsonb,
  result jsonb,
  raw jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists archives (
  id text primary key,
  season_id text not null references seasons(id) on delete restrict,
  season_name text not null,
  snapshot jsonb not null,
  immutable boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(season_id)
);

create table if not exists admins (
  id text primary key default gen_random_uuid()::text,
  username text not null unique,
  password_hash text not null,
  role text not null default 'admin',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists settings (
  id text primary key,
  key text not null unique,
  value jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function prevent_archive_mutation()
returns trigger as $$
begin
  raise exception 'Season archives are immutable and cannot be updated or deleted';
end;
$$ language plpgsql;

drop trigger if exists archives_are_immutable_update on archives;
create trigger archives_are_immutable_update
before update or delete on archives
for each row
when (old.immutable is true)
execute function prevent_archive_mutation();

create index if not exists idx_players_team on players(team_id);
create index if not exists idx_matches_season on matches(season_id);
create index if not exists idx_innings_match on innings(match_id);
create index if not exists idx_ball_events_match on ball_events(match_id);
create index if not exists idx_records_season_category on records(season_id, category);
create index if not exists idx_archives_season on archives(season_id);
