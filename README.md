# Etapa 3 - Recordatorios Automáticos

Esta versión toma como base la Etapa 2 e incorpora estructura para recordatorios.

## Cambios principales
- Nuevas columnas en tabla `reservas`:
  - `recordatorio_24h_enviado`
  - `recordatorio_dia_enviado`
  - `ultimo_recordatorio_at`
- Mensajes automáticos preparados para WhatsApp.
- Panel `/admin/recordatorios`.
- API `/api/admin/recordatorios`.
- API preparada para marcar recordatorios como enviados.
- Variable `CRON_SECRET` para futura automatización con Vercel Cron.

## Importante
Esta etapa deja la lógica y panel listos.  
El envío 100% automático requiere conectar un proveedor externo de WhatsApp/Email o un cron real.

## Variables de entorno
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

Si ya tienes tablas creadas, el SQL incluye `alter table if exists` para agregar columnas nuevas.
