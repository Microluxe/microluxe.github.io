# Microluxe Studio — Web para GitHub Pages

Web bilingüe y responsive para Microluxe Studio, preparada para publicarse como sitio estático en GitHub Pages.

## Contenido incluido

- Diseño deluxe en tonos lila, beige, dorado champagne y ciruela.
- Selector de idioma inglés / español.
- Carrusel automático de trabajos con flechas, indicadores, gesto táctil y pausa al interactuar.
- Animación suave al pasar el cursor sobre las fotografías.
- Visor ampliado de imágenes con navegación anterior / siguiente.
- Listado interactivo de servicios, precios y duración.
- Selección automática del servicio en el formulario.
- Formulario de contacto y solicitud de cita dirigido a `neylec@gmail.com`.
- Fecha adaptada al formato estadounidense `MM/DD/YYYY`.
- Botón para añadir hasta cinco servicios en una misma solicitud.
- Validación obligatoria de nombre, servicio y al menos un dato de contacto: correo o teléfono.
- Enlaces alternativos de reserva mediante Booksy.

## Publicación rápida en GitHub Pages

1. Crea un repositorio público en GitHub.
2. Descomprime el ZIP.
3. Sube **todos los archivos y carpetas que aparecen dentro** directamente a la raíz del repositorio. `index.html` debe quedar en la raíz, no dentro de otra carpeta.
4. En GitHub entra en **Settings → Pages**.
5. En **Build and deployment**, selecciona **Deploy from a branch**.
6. Selecciona la rama **main** y la carpeta **/(root)**.
7. Pulsa **Save**.

Para publicar como web principal de una cuenta, el repositorio debe llamarse `USUARIO.github.io`. Para una web de proyecto, puede utilizarse cualquier nombre.

## Activación del formulario

GitHub Pages no envía correos por sí mismo. El formulario utiliza FormSubmit.

1. Publica primero la web en GitHub Pages.
2. Envía una solicitud de prueba desde la página ya publicada.
3. FormSubmit enviará un correo de activación a `neylec@gmail.com`.
4. Neyle debe abrir ese correo y confirmar el endpoint.
5. Envía una segunda solicitud para comprobar la recepción.

El formulario exige:

- Nombre.
- Servicio.
- Al menos un correo electrónico o un teléfono/WhatsApp.

## Archivos principales

- `index.html`: estructura de la página y formulario.
- `assets/css/styles.css`: diseño responsive y animaciones.
- `assets/js/main.js`: traducciones, catálogo, carrusel, visor, fechas de EE. UU. y envío del formulario.
- `assets/images/microluxe-logo.png`: logo PNG transparente utilizado en cabecera, hero y pie.
- `.nojekyll`: evita que GitHub Pages procese innecesariamente los archivos con Jekyll.

## Recomendaciones

- Las fotografías actuales se cargan desde Booksy. Conviene sustituirlas por archivos originales dentro de `assets/images/` para evitar depender de enlaces externos.
- Confirma el nombre profesional, la dirección completa y los precios antes de publicar.
- Los precios y duraciones se actualizan en `assets/js/main.js`.
