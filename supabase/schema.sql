create table if not exists public.reservas (
  id uuid primary key default gen_random_uuid(),
  area text not null check (area in ('prevencion', 'masoterapia')),
  servicio text not null,
  fecha date not null,
  hora text not null,
  nombre text not null,
  email text not null,
  telefono text not null,
  estado text not null default 'pendiente' check (estado in ('pendiente', 'confirmada', 'cancelada')),
  recordatorio_24h_enviado boolean not null default false,
  recordatorio_dia_enviado boolean not null default false,
  ultimo_recordatorio_at timestamp with time zone,
  created_at timestamp with time zone default now()
);

alter table if exists public.reservas add column if not exists recordatorio_24h_enviado boolean not null default false;
alter table if exists public.reservas add column if not exists recordatorio_dia_enviado boolean not null default false;
alter table if exists public.reservas add column if not exists ultimo_recordatorio_at timestamp with time zone;

create table if not exists public.disponibilidad (
  id uuid primary key default gen_random_uuid(),
  area text not null check (area in ('prevencion', 'masoterapia')),
  fecha date not null,
  hora text not null,
  disponible boolean not null default true,
  created_at timestamp with time zone default now(),
  unique (area, fecha, hora)
);

create table if not exists public.contactos (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  email text not null,
  telefono text,
  mensaje text not null,
  origen text default 'web',
  created_at timestamp with time zone default now()
);

alter table public.reservas enable row level security;
alter table public.disponibilidad enable row level security;
alter table public.contactos enable row level security;

drop policy if exists "Permitir insertar reservas publicas" on public.reservas;
create policy "Permitir insertar reservas publicas"
on public.reservas for insert to anon with check (true);

drop policy if exists "Permitir lectura disponibilidad publica" on public.disponibilidad;
create policy "Permitir lectura disponibilidad publica"
on public.disponibilidad for select to anon using (true);

drop policy if exists "Permitir insertar contactos publicos" on public.contactos;
create policy "Permitir insertar contactos publicos"
on public.contactos for insert to anon with check (true);

insert into public.disponibilidad (area, fecha, hora, disponible)
values
('prevencion', current_date + interval '1 day', '09:00', true),
('prevencion', current_date + interval '1 day', '10:00', true),
('prevencion', current_date + interval '1 day', '11:00', true),
('prevencion', current_date + interval '2 days', '15:00', true),
('prevencion', current_date + interval '2 days', '16:00', true),
('masoterapia', current_date + interval '1 day', '12:00', true),
('masoterapia', current_date + interval '1 day', '17:00', true),
('masoterapia', current_date + interval '2 days', '18:00', true),
('masoterapia', current_date + interval '3 days', '15:00', true)
on conflict (area, fecha, hora) do nothing;
