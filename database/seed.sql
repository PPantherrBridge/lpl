-- Example seed data. Set ADMIN_PASSWORD in .env for the real admin credential.

insert into seasons (id, name, number, year, status)
values ('season_1', 'Season 1', 1, '2025', 'draft')
on conflict (id) do nothing;

insert into teams (id, season_id, code, name, primary_color, secondary_color, captain, vice_captain, women)
values
  ('RCB', 'season_1', 'RCB', 'Royal Challengers Bangalore', '#E63946', '#FFBE0B', 'Shivu', 'Mohan', false),
  ('MI', 'season_1', 'MI', 'Mumbai Indians', '#004BA0', '#00D4FF', 'Shreyans', 'Bhuvan', false)
on conflict (id) do nothing;

insert into players (id, team_id, season_id, name, batting_hand, role, bowling_style, attributes)
values
  ('RCB_Enoch', 'RCB', 'season_1', 'Enoch', 'LHB', 'AR', 'LAO', '{"power":98,"consistency":79,"powerplay":95,"death_overs":70,"clutch":75}'),
  ('MI_Shreyans', 'MI', 'season_1', 'Shreyans', 'RHB', 'AR', 'FAST', '{"power":96,"consistency":80,"powerplay":95,"death_overs":85,"clutch":85}')
on conflict (id) do nothing;

insert into matches (id, season_id, match_number, team1_id, team2_id, venue, match_date_label, status)
values ('fixture_1', 'season_1', 1, 'RCB', 'MI', 'LPL Arena', 'Opening Match', 'scheduled')
on conflict (id) do nothing;
