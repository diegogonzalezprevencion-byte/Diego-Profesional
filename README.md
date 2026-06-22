# Fase 4 Fix - Supabase Backend

Esta versión corrige el error de Vercel:

`Falta NEXT_PUBLIC_SUPABASE_URL`

## Qué se corrigió

Antes, el cliente Supabase lanzaba error durante el build si no estaban configuradas las variables de entorno.

Ahora el build de Vercel puede completarse aunque todavía no hayas configurado Supabase.  
Si intentas usar las APIs sin variables, la API responderá con un error controlado.

## Variables necesarias en Vercel

En Vercel → Settings → Environment Variables, agrega:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## SQL

Ejecuta `supabase/schema.sql` en el SQL Editor de Supabase.

## Vercel

- Framework Preset: Next.js
- Output Directory: dejar vacío
