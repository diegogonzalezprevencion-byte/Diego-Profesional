# Fase 4 - Supabase Backend

Proyecto Next.js funcional con backend Supabase para reservas.

## Incluye
- Frontend corporativo.
- Agenda Prevención de Riesgos.
- Agenda Masoterapia.
- API route `POST /api/reservas`.
- API route `GET /api/reservas`.
- API route `GET /api/disponibilidad`.
- Cliente Supabase.
- Script SQL para crear tablas.
- Variables de entorno de ejemplo.

## Pasos para usar Supabase

1. Crear un proyecto en Supabase.
2. Ir a SQL Editor.
3. Copiar y ejecutar el contenido de `supabase/schema.sql`.
4. Copiar las credenciales del proyecto:
   - Project URL
   - anon public key
   - service_role key
5. En Vercel, agregar estas variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

## Importante
La `SUPABASE_SERVICE_ROLE_KEY` debe quedar solo en Vercel y nunca exponerse públicamente.

## Instalación local

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Vercel
- Framework Preset: Next.js
- Output Directory: dejar vacío
