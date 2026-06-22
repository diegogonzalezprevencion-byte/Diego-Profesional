# Diego Profesional - Etapa 5B

Versión consolidada con estructura comercial avanzada.

## Incluye desde Etapa 5A
- Landing corporativa.
- Blog SEO.
- Landing pages locales.
- Dashboard admin.
- Testimonios.
- Galería.
- Reservas.
- Recordatorios.
- Supabase.

## Nuevo en Etapa 5B
- Captura de leads.
- Popup de captación comercial.
- Newsletter por interés.
- Panel admin de leads.
- Panel admin de newsletter.
- Preparación para pagos online.
- Panel admin de pagos.
- Preparación para Google Calendar.
- Endpoint para generar evento preparado.
- Variables de entorno para futuras integraciones.

## Nuevas rutas públicas
- `/newsletter`

## Nuevas rutas admin
- `/admin/leads`
- `/admin/newsletter`
- `/admin/pagos`
- `/admin/google-calendar`

## Nuevas API routes
- `/api/leads`
- `/api/newsletter`
- `/api/admin/leads`
- `/api/admin/newsletter`
- `/api/admin/pagos`
- `/api/admin/google-calendar`

## Variables adicionales en Vercel
- `GOOGLE_CALENDAR_ID`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_REFRESH_TOKEN`
- `PAYMENT_PROVIDER`
- `WEBPAY_COMMERCE_CODE`
- `WEBPAY_API_KEY`
- `MERCADOPAGO_ACCESS_TOKEN`

## Importante
Esta etapa deja la estructura preparada para pagos y Google Calendar.  
La conexión real con Webpay/MercadoPago/Google Calendar requiere credenciales productivas y ajustes según el proveedor elegido.

## Supabase
Ejecuta `supabase/schema.sql`.
