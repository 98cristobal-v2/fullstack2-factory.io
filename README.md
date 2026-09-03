# ⚡ Proyecto Web factory.io - Evaluación Parcial 1

¡Bienvenidos al repositorio oficial de **factory.io**! Este proyecto consiste en el desarrollo de un prototipo funcional de tienda en línea de hardware y componentes informáticos, aplicando estándares web de HTML5 semántico, CSS3 nativo y JavaScript (Vanilla).

---

## 👥 Integrantes del Grupo
* Cristóbal
* Ricardo

---

## 🛠️ Tecnologías Utilizadas
* **HTML5:** Estructura 100% semántica para cada una de las vistas.
* **CSS3:** Estilos globales mediante css/estilos.css con nombres de colores estándar en inglés y distribución adaptable.
* **JavaScript (Vanilla):** Validaciones de formularios en tiempo real (`js/validaciones.js`), y gestión de respuestas dinámicas.
* **Git & GitHub:** Control de versiones con metodología de ramas y commits descriptivos de trabajo colaborativo.

---

## 📂 Estructura del Proyecto

fullstack2-factory.io/
│
├── css/
│   └── estilos.css         # Hoja de estilos globales
│
├── js/
│   └── validaciones.js     # Funciones y lógica de validación en JS
│
├── img/                    # Galería de imágenes locales de productos
│   ├── cpu.jpg
│   ├── gpu.jpg
│   ├── ram.jpg
│   └── ssd.jpg
│   └── etc...
├── index.html              # Página principal (Home)
├── productos.html          # Catálogo de hardware y accesorios
├── nosotros.html           # Información institucional y video embebido
├── blogs.html              # Artículos y notas técnicas
├── contacto.html           # Formulario de soporte y servicio técnico
├── login.html              # Inicio de sesión
├── registro.html           # Formulario de registro de usuarios
└── carrito.html            # Vista del carrito de compras

---

## 📋 Cumplimiento de Pauta y Funcionalidades

### 1. Estructura HTML5 y CSS3
- [x] **HTML Semántico:** Uso estricto de etiquetas `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` y `<footer>`.
- [x] **Navegación e Interconexión:** Menú de navegación `<nav>` fluido y sincronizado en todas las páginas del sitio.
- [x] **Elementos Multimedia:** Integración de imágenes locales `<img>` para productos y video embebido `<iframe>` en `nosotros.html`.
- [x] **Estilos CSS Externos:** Hoja única `css/estilos.css` vinculada globalmente, con nomenclatura de colores estándar nativos y reglas limpias por etiquetas.

### 2. Validaciones de Formularios en JS (`js/validaciones.js`)
- [x] **Lógica Nativa:** Manejo directo de variables y eventos mediante `onclick` y llamadas a funciones nativas.
- [x] **Validación de RUT:** Comprobación de longitud entre 8 y 9 caracteres (`.length`).
- [x] **Validación de Correo:** Chequeo de campos vacíos, presencia de `@` y restricción de dominios permitidos (`@gmail.com`, `@duoc.cl`, `@profesor.cl`) utilizando `.endsWith()`.
- [x] **Respuesta Visual:** Mensajes de error o confirmación desplegados dinámicamente en pantalla (`<p id="mensaje"></p>`) mediante `.textContent`.
- [x] **Limpieza de Campos:** Reseteo automático de inputs tras completar cada envío exitoso.

### 3. Control de Versiones Git
- [x] Registro de avances continuos en la rama `desarrollo-general-proyecto` con mensajes de commit normados para la posterior integración a la rama `main`.

---

## 🚀 Cómo Ejecutar el Proyecto

1. **Clonar el repositorio:**
   git clone https://github.com/98cristobal-v2/fullstack2-factory.io

2. **Entrar a la carpeta del proyecto:**
   cd fullstack2-factory.io

3. **Ejecutar la aplicación:**
   Abre el archivo `index.html` directamente en tu navegador web o utiliza la extensión **Live Server** en Visual Studio Code.

---

*Proyecto desarrollado para la asignatura de **Full-Stack II** — Duoc UC (2026).*
