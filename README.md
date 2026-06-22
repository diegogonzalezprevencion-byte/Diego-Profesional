# APP-Web Prevención de Riesgos

Versión personalizada para servicios profesionales de Prevención de Riesgos, con la imagen principal incorporada en la primera página.

## Archivos principales

- `index.html`: estructura de la página.
- `styles.css`: diseño visual y adaptación móvil.
- `script.js`: menú móvil, animaciones, WhatsApp y formulario por correo.
- `assets/images/diego-gonzalez-prevencion-riesgos.jpg`: imagen principal.
- `assets/images/diego-gonzalez-prevencion-riesgos-mobile.jpg`: versión optimizada para móvil.
- `assets/images/og-prevencion-riesgos.jpg`: imagen para vista previa al compartir.
- `vercel.json`: configuración simple para publicar en Vercel.

## Qué se actualizó

- Se personalizó la APP-web solo para Prevención de Riesgos.
- Se incorporó la imagen profesional en la primera página.
- Se eliminó la referencia de ubicación propia de masoterapia y se reemplazó por un enfoque general para empresas y sucursales.
- Se incluyeron secciones de servicios, método de trabajo, enfoque ejecutivo, herramientas y contacto.
- Se dejó estructura estática compatible con GitHub + Vercel.

## Cómo editar WhatsApp y correo

Abre `script.js` y cambia estos valores:

```js
const CONFIG = {
  whatsappNumber: "569XXXXXXXX",
  email: "contacto@tudominio.cl",
};
```

Ejemplo:

```js
const CONFIG = {
  whatsappNumber: "56912345678",
  email: "contacto@miempresa.cl",
};
```

## Cómo publicar en Vercel

1. Crea un repositorio en GitHub.
2. Sube todos los archivos de esta carpeta.
3. Entra a Vercel.
4. Selecciona `New Project`.
5. Importa el repositorio.
6. En framework selecciona `Other` o deja detección automática.
7. Haz clic en `Deploy`.

## Cómo revisar localmente

Solo abre `index.html` en el navegador.
