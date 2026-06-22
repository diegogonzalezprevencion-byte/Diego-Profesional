# Diego Prevención de Riesgos Web

Versión separada solo para servicios profesionales de Prevención de Riesgos en Chile.

## Incluye

- Landing profesional solo de Prevención de Riesgos.
- Agenda online de prevención.
- Panel administrador.
- Gestión de reservas.
- Gestión de disponibilidad.
- Recordatorios por WhatsApp preparados.
- Blog SEO orientado a Prevención.
- Landing pages SEO locales:
  - `/prevencion-riesgos-santiago`
  - `/prevencion-riesgos-providencia`
  - `/prevencion-riesgos-las-condes`
- Leads.
- Newsletter.
- Testimonios.
- Galería.
- Dashboard administrativo.
- Preparación de pagos.
- Preparación de Google Calendar.
- Supabase ampliado.

## Rutas principales

- `/`
- `/agenda-prevencion`
- `/blog`
- `/contacto`
- `/politicas`
- `/newsletter`
- `/admin`

## Variables de entorno Vercel

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_ADMIN_PIN`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `CONTACT_EMAIL`
- `CRON_SECRET`
- `GOOGLE_CALENDAR_ID`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_REFRESH_TOKEN`
- `PAYMENT_PROVIDER`
- `WEBPAY_COMMERCE_CODE`
- `WEBPAY_API_KEY`
- `MERCADOPAGO_ACCESS_TOKEN`

## Supabase

Ejecuta `supabase/schema.sql`.

## Vercel

- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: dejar vacío
