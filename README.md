# Fase 5 - Panel Administrador

Proyecto Next.js + Supabase con panel administrador básico.

## Incluye
- Todo lo de Fase 4.
- Panel `/admin`.
- Vista de reservas `/admin/reservas`.
- Gestión de disponibilidad `/admin/disponibilidad`.
- Cambio de estado de reservas: pendiente, confirmada, cancelada.
- Creación de horarios disponibles.
- Eliminación de horarios disponibles.
- PIN simple de acceso frontend para panel administrativo.

## Variables de entorno en Vercel

Configura:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_ADMIN_PIN`

Ejemplo:
`NEXT_PUBLIC_ADMIN_PIN=1234`

## Importante

El PIN de esta fase es una protección básica de frontend para avanzar rápido.  
En una fase posterior se debe reemplazar por autenticación real con Supabase Auth.

## SQL

Ejecuta `supabase/schema.sql` en Supabase SQL Editor.

## Vercel

- Framework Preset: Next.js
- Output Directory: dejar vacío
