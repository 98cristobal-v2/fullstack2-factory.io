# Proyecto Web factory.io - Evaluativa Parcial 1

## Instrucciones de Desarrollo

crear la aplicación web cumpliendo estrictamente con los siguientes puntos de la pauta:

### 1. Estructura HTML5 y CSS3
- **HTML Semántico**: Utilizar etiquetas semánticas obligatorias (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Navegación e Interconexión**: Menú `<nav>` fluido entre las páginas principales (`index.html`, `nosotros.html`, `registro.html`, `login.html`).
- **Elementos Multimedia**: Incluir imágenes con etiqueta `<img>`, botones interactivos y un video embebido con `<iframe>` en `nosotros.html`.
- **Estilos CSS Externos**: Usar un único archivo `css/estilos.css` vinculado a todos los HTML. Usar colores estándar (`blue`, `white`, `black`, `gray`, `lightgray`, `red`, `green`) y distribución Flexbox (`.barra-navegacion`, `.grilla-productos`).

### 2. Validaciones de Formularios en JS (`js/validaciones.js`)
- Lógica simple en JavaScript nativo usando `document.getElementById` y `.addEventListener("click", ...)`.
- Validar en los inputs que el RUT tenga largo entre 8 y 9 caracteres (`.length`) y que el correo contenga `@` (`.includes("@")`).
- Mostrar mensajes de error o éxito específicos en un párrafo `<p id="msg-error"></p>` mediante `.textContent`.
- Verificar la existencia de elementos con `if (document.getElementById("..."))` antes de asignar eventos para evitar errores en la consola.

### 3. Control de Versiones Git
- Registrar los avances con commits descriptivos que reflejen el trabajo colaborativo en el repositorio.
