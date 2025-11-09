# 🌐 Personal Portfolio — Franco Fernández

Un portfolio moderno, visual y responsive desarrollado con **Vue.js**, enfocado en mostrar proyectos, habilidades y experiencia de forma atractiva y dinámica.  
Incluye animaciones fluidas, cambio de idioma, cambio de tipografía, y un diseño optimizado para escritorio y dispositivos móviles.

---

## 🚀 Características Principales

- ⚙️ **Framework:** Vue.js 3 con composición API (`<script setup>`)
- 🎨 **Diseño Responsive:** Adaptado a cualquier tamaño de pantalla (desktop, tablet, móvil)
- ✨ **Animaciones CSS:** Transiciones suaves y efectos visuales (hover, fade, slide, blur)
- 🌍 **Multilenguaje (i18n):** Soporte completo para inglés y español
- 🧩 **Componentes reutilizables:** Navbar, Footer, Sections dinámicas
- 🧠 **Interactividad con JavaScript:** Cambio de fuente, cambio de idioma, menú desplegable móvil
- 🧾 **Descarga directa de CV**
- 🌈 **Tema moderno y limpio:** Paleta de colores oscuros con acentos en violeta/azul
- 🧰 **Organización modular:** Vistas separadas (`Home`, `About`, `Skills`, `Projects`, `Contact`)

---

## 🖼️ Estructura del Proyecto

src/
│
├── assets/ # Banderas y archivos estáticos
├── components/ # Componentes reutilizables (Navbar, Footer, etc.)
├── layouts/ # Contenedor principal
├── locales/ # Traducciones (en.json, es.json)
├── router/ # Configuración de rutas Vue Router
├── views/ # Páginas principales
│ ├── About.vue
│ ├── Contact.vue
│ ├── Home.vue
│ ├── Projects.vue
│ └── Skills.vue
│
├── App.vue # Componente raíz
└── main.js # Punto de entrada


---

## 🧠 Tecnologías y Herramientas

| Tipo | Herramienta |
|------|--------------|
| Framework | [Vue.js 3](https://vuejs.org/) |
| Router | [Vue Router](https://router.vuejs.org/) |
| Internacionalización | [Vue I18n](https://vue-i18n.intlify.dev/) |
| Estilos | CSS3 + Variables personalizadas + Media Queries |
| Iconos | SVG personalizados |
| Animaciones | CSS transitions / keyframes |
| Almacenamiento local | `localStorage` (para fuente seleccionada) |
| Control de scroll | JS nativo con eventos `window.scroll` |

---

## 💡 Funcionalidades destacadas

### 🔤 Cambio de tipografía
- El botón `Aa ↻` permite rotar entre distintas fuentes (Playfair Display, Roboto Mono, Montserrat, etc.).
- La selección se guarda en `localStorage` para persistencia entre sesiones.

### 🇺🇸🇪🇸 Cambio de idioma
- Sistema bilingüe: inglés ↔ español.
- Implementado con Vue I18n y archivos JSON.

### 📱 Navbar responsive
- En pantallas pequeñas, el menú se convierte en un **hamburger menu** con animación de despliegue.
- Se cierra automáticamente al tocar un enlace.

### 🎨 Animaciones
- Sombras, desenfoques y transiciones suaves.
- Gradientes animados y efectos de hover interactivos.
- Despliegue dinámico del menú móvil con `max-height` y opacidad.

### 📂 Descarga de CV
- Enlace directo a un archivo PDF incluido en la carpeta `/public/files`.