# Diego Profesional - Etapa 5A

Versión consolidada de producción con mejoras comerciales y SEO.

## Incluye
- Landing corporativa mejorada.
- Blog profesional SEO.
- Landing pages locales SEO:
  - `/prevencion-riesgos-santiago`
  - `/prevencion-riesgos-providencia`
  - `/prevencion-riesgos-las-condes`
  - `/masoterapia-santiago`
  - `/masoterapia-providencia`
  - `/masoterapia-las-condes`
- Panel administrador:
  - `/admin/dashboard`
  - `/admin/testimonios`
  - `/admin/galeria`
  - reservas, disponibilidad y recordatorios.
- Testimonios administrables.
- Galería administrable.
- Dashboard administrativo con métricas.
- Schema.org JSON-LD.
- Sitemap ampliado.
- Supabase ampliado.

## Variables de entorno Vercel
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_ADMIN_PIN`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `CONTACT_EMAIL`
- `CRON_SECRET`

## Supabase
Ejecuta `supabase/schema.sql`.

## Vercel
- Framework Preset: Next.js
- Output Directory: dejar vacío
