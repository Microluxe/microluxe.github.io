# Microluxe Studio — Web para GitHub Pages

Web bilingüe y responsive para Microluxe Studio, preparada para publicarse como sitio estático en GitHub Pages.

## Contenido incluido

- Diseño deluxe en tonos lila, beige, dorado champagne y ciruela.
- Selector de idioma inglés / español.
- Carrusel automático con las 18 fotografías de **Show all photos → Portfolio** de Booksy, flechas, indicadores, gesto táctil y pausa al interactuar.
- Animación suave al pasar el cursor sobre las fotografías.
- Visor ampliado de imágenes con navegación anterior / siguiente.
- Listado interactivo de servicios, precios y duración.
- Selección automática del servicio en el formulario.
- Formulario de contacto y solicitud de cita dirigido a `neylec@gmail.com`.
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
- `assets/js/main.js`: traducciones, catálogo, carrusel, visor y envío del formulario.
- `assets/data/portfolio.json`: manifiesto de fotografías utilizado por el carrusel.
- `scripts/sync_booksy_portfolio.py`: obtiene las 18 imágenes del portfolio y las guarda dentro de la web.
- `.github/workflows/sync-booksy-portfolio.yml`: sincroniza automáticamente el portfolio al subir la web y cada lunes.
- `.nojekyll`: evita que GitHub Pages procese innecesariamente los archivos con Jekyll.

## Sincronización de las 18 fotografías

Booksy solo incluye unas pocas miniaturas en el HTML inicial. Las 18 imágenes completas aparecen después de abrir **Show all photos → Portfolio**. Por eso esta versión incluye una automatización específica:

1. Sube todos los archivos a la rama `main`.
2. GitHub ejecutará automáticamente **Actions → Sync Booksy portfolio**.
3. La automatización abrirá la galería de Booksy, recuperará las 18 fotografías y las guardará en `assets/images/portfolio/`.
4. Al terminar, hará un nuevo commit y GitHub Pages volverá a publicar la web automáticamente.

La primera sincronización puede tardar unos minutos. Mientras se completa, la web utiliza la selección de respaldo incluida en el ZIP. También puedes iniciar la actualización manualmente desde **Actions → Sync Booksy portfolio → Run workflow**.

Las imágenes quedan almacenadas dentro del propio repositorio para que el portfolio no dependa permanentemente de los enlaces externos de Booksy.

## Recomendaciones

- Mantén activadas las acciones del repositorio para conservar el portfolio actualizado.
- Confirma el nombre profesional, la dirección completa y los precios antes de publicar.
- Los precios y duraciones se actualizan en `assets/js/main.js`.
