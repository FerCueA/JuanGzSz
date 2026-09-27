# 🎸 Landing de Juan González

**Web de jazz y blues en directo en Tenerife.**

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com)

Landing page construida con **Angular 21** y **Tailwind CSS 4**, pensada para presentar la propuesta artística de Juan González y convertir visitas en reservas por WhatsApp. Estética de cartel de jazz: papel cálido, tipografía editorial y un póster como pieza central.

🌍 **Autoría:** [aleixofdezcuevas.es](https://aleixofdezcuevas.es/)

---

## ✨ Qué incluye

- 🎷 **Identidad jazz / blues**: papel cálido, tinta y naranja; tipografías Cormorant Garamond y Source Sans 3.
- 🏠 **Apertura tipo cartel** con CTA de reserva, datos de confianza y póster ilustrado.
- 🖋️ **Repertorio** en formato _set list_, dividido en capítulos.
- 🗓️ **Agenda de directos** con estado vacío listo para publicar fechas.
- 🎧 **Música y galería** como secciones data-driven (se activan al rellenar sus datos).
- 📝 **Formulario de reserva** con validación que compone el mensaje de WhatsApp.
- ❓ **FAQ** en acordeón (`<details>`, sin JS).
- 📲 **CTA final de booking** con contacto directo por WhatsApp.
- 🧭 **Navegación** por anclas con **scrollspy** y **menú móvil** accesible.
- 🪄 **Animaciones** de aparición al hacer scroll, respetando `prefers-reduced-motion`.
- ♿ **Responsive** mobile-first y accesible (foco visible, jerarquía de encabezados, contraste AA).
- 🧩 **Contenido centralizado** en `src/app/core`, con layout, secciones y UI separados.
- 🎨 **Design system** con tokens en `src/styles.css` documentado en `DESIGN.md`.
- ⚡ **SSR** con prerender de la página.

---

## 🛠️ Tecnologías

**🎨 Frontend**
[![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

**🧰 Calidad y tooling**
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white)](https://vitest.dev)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black)](https://prettier.io)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://www.netlify.com)

---

## 🚀 Puesta en marcha

### Requisitos

- 🟢 `Node.js >= 22.12.0`
- 📦 `npm`

### Comandos

```bash
npm install       # instalar dependencias
npm start         # entorno de desarrollo → http://localhost:4200
npm run build     # generar la build de producción (con SSR)
```

---

## 🧾 Scripts

| Script                   | Descripción                                     |
| ------------------------ | ----------------------------------------------- |
| `npm start`              | Inicia el entorno de desarrollo                 |
| `npm run build`          | Genera la build de producción (SSR + prerender) |
| `npm run watch`          | Compila en modo observación                     |
| `npm test`               | Ejecuta los tests con Vitest                    |
| `npm run lint`           | Analiza el código con ESLint                    |
| `npm run typecheck`      | Comprueba los tipos de la aplicación            |
| `npm run typecheck:spec` | Comprueba los tipos de los tests                |
| `npm run format`         | Formatea el código con Prettier                 |
| `npm run format:check`   | Comprueba el formato sin modificar archivos     |

> ℹ️ Antes de dar por terminado un cambio: `lint`, `typecheck`, `test` y `build`.

---

## 📁 Estructura

```
src/
  app/
    core/               # Datos y constantes del sitio
      site.ts           # Identidad, navegación, contacto, FAQ y datos de secciones
    layout/             # Chrome de la página
      navbar/           # Navegación con scrollspy y menú móvil
      footer/
    sections/           # Secciones de contenido
      hero/
      about/
      shows/            # Agenda (data-driven)
      music/            # Música (data-driven)
      gallery/          # Galería (data-driven)
      booking/          # Formulario de reserva + WhatsApp
      faq/              # Preguntas frecuentes
    shared/
      directives/       # reveal (animación al hacer scroll)
      ui/               # Base reutilizable
        button/         # Directiva appButton
        section/        # Contenedor de sección
        poster-card/    # Póster decorativo
    app.ts              # Composición de la landing
    app.config.ts       # Providers de la aplicación
    app.routes*.ts      # Rutas (vacías) y estrategia de render
  styles.css            # Tokens del design system (@theme)
  index.html
  main.ts
  main.server.ts
  server.ts
```

> 💡 Para cambiar textos o datos de contacto y navegación suele bastar con editar `src/app/core/site.ts` y las plantillas de `sections/`. Los valores visuales viven en `src/styles.css`.

---

## 🚀 Despliegue

Proyecto preparado para desplegarse en **Netlify** mediante la configuración incluida en `netlify.toml`, con el runtime de Angular para soportar SSR.

- **Comando de build:** `npm run build`
- **Carpeta de publicación:** `dist/JuanGzSz/browser`

---

## 📫 Contacto

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/34619869942)
[![Web](https://img.shields.io/badge/Web-aleixofdezcuevas.es-2b3742?style=for-the-badge)](https://aleixofdezcuevas.es/)

---

## 📚 Documentación adicional

- [`DESIGN.md`](./DESIGN.md) — sistema de diseño (referencia obligatoria para UI).
- [`AGENTS.md`](./AGENTS.md) — reglas para agentes de IA.

---

## Autoría

- Diseño y desarrollo: [aleixofdezcuevas.es](https://aleixofdezcuevas.es/)
