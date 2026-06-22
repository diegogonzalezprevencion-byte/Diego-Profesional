# Fase 7 - Producción, SEO y Cierre

Aplicación Next.js + Supabase lista para GitHub y Vercel.

## Incluye
- Sitio corporativo profesional.
- Servicios de Prevención de Riesgos.
- Servicios de Masoterapia.
- Agenda online por área.
- Reservas con Supabase.
- Panel administrador.
- Gestión de disponibilidad.
- Botón WhatsApp.
- Formulario de contacto.
- API de contacto.
- SEO básico.
- Sitemap dinámico.
- Robots.txt dinámico.
- Página de políticas.
- Checklist de producción.

## Variables de entorno en Vercel

Configura en Vercel → Settings → Environment Variables:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_ADMIN_PIN`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `CONTACT_EMAIL`

## Supabase

1. Crear proyecto en Supabase.
2. Ir a SQL Editor.
3. Ejecutar `supabase/schema.sql`.
4. Agregar variables de entorno en Vercel.
5. Redeploy.

## Vercel

- Framework Preset: Next.js.
- Build Command: `npm run build`.
- Output Directory: dejar vacío.
- Install Command: automático.

## Checklist final

- Cambiar el nombre "Diego Profesional" por tu marca definitiva si corresponde.
- Cambiar valores de servicios si lo necesitas.
- Configurar WhatsApp real.
- Configurar dominio personalizado.
- Probar reserva de prevención.
- Probar reserva de masoterapia.
- Probar formulario de contacto.
- Probar panel `/admin`.
- Cambiar PIN admin.
- Revisar políticas antes de publicar.

## Nota de seguridad

El PIN admin es básico y suficiente para esta fase inicial.  
Para producción avanzada se recomienda reemplazarlo por Supabase Auth.
