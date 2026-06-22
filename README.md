# Fase 6 - Automatizaciones

Proyecto Next.js + Supabase con panel administrador y automatizaciones iniciales.

## Incluye
- Todo lo de Fase 5.
- Botón flotante de WhatsApp.
- Mensaje automático de WhatsApp para reservas.
- API de contacto `/api/contacto`.
- Preparación para confirmaciones por correo.
- Variables de entorno para WhatsApp y correo.
- Panel administrador de reservas y disponibilidad.

## Variables de entorno en Vercel

Configura:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_ADMIN_PIN`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `CONTACT_EMAIL`

Ejemplo de WhatsApp:
`NEXT_PUBLIC_WHATSAPP_NUMBER=56912345678`

## Importante sobre correo

Esta fase deja preparada la API de contacto y estructura de automatización.  
Para envío real de correos en producción se recomienda integrar Resend, SendGrid o Brevo en la siguiente mejora.

## Supabase

Ejecuta `supabase/schema.sql` en el SQL Editor.

## Vercel

- Framework Preset: Next.js
- Output Directory: dejar vacío
