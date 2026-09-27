# AGENTS.md

Guía para agentes de IA que trabajan en este repositorio.

## Project overview

Landing page de una sola página de **Juan González** (guitarrista de jazz/blues en
Tenerife). No es una aplicación con rutas: `app.routes.ts` está vacío y todo se compone
en `App` a partir de secciones.

- **Framework:** Angular 21 (standalone components, zoneless, `ChangeDetectionStrategy.OnPush`).
- **Estilos:** Tailwind CSS v4 vía `@tailwindcss/postcss` (no hay `tailwind.config`; los
  tokens se definen en `src/styles.css` con `@theme`).
- **SSR:** Angular SSR + Express, prerender de la ruta estática (`app.routes.server.ts`).
- **Tests:** Vitest (`ng test` / `npm test`).
- **Despliegue:** Netlify (`netlify.toml`).
- **Idioma del contenido:** español (`<html lang="es">`).

## Project structure

```text
src/
├── app/
│   ├── core/              # Datos y constantes del sitio (site.ts)
│   ├── layout/            # Chrome de la página: navbar, footer
│   ├── sections/          # Secciones: hero, about, shows, music, gallery, booking, faq
│   ├── shared/
│   │   ├── directives/    # Directivas reutilizables (reveal)
│   │   └── ui/            # Componentes y directivas base (button, section, poster-card)
│   ├── app.ts / app.html  # Composición de la landing
│   ├── app.config.ts      # Providers de la app
│   └── app.routes*.ts     # Rutas (vacías) y estrategia de render
├── styles.css             # Tokens de diseño (@theme) + estilos globales
├── index.html
└── main.ts / main.server.ts / server.ts
```

**Dónde colocar cada cosa:**

- Componente reutilizable sin contexto de página → `src/app/shared/ui/<nombre>/`.
- Directiva reutilizable → `src/app/shared/directives/<nombre>.ts`.
- Chrome de layout (navbar, footer, sidebar) → `src/app/layout/<nombre>/`.
- Sección de la landing → `src/app/sections/<nombre>/`.
- Datos/constantes compartidas (incluidas las secciones data-driven) → `src/app/core/site.ts`.
- Tokens y estilos globales → `src/styles.css` (bloque `@theme`).

Antes de crear un archivo, inspecciona la estructura existente y colócalo en el lugar más
adecuado. Evita utilidades, componentes, hooks o estilos duplicados. Prefiere componentes
pequeños y reutilizables frente a implementaciones grandes y duplicadas. No reorganices
partes no relacionadas del repositorio sin un beneficio claro de mantenibilidad.

**Convenciones:** componentes en `kebab-case` con selector `app-*`; los componentes de
atributo usan `[appX]` sobre un elemento nativo (ver `appButton`). Tipos exportados junto
al componente; nombres de archivo en minúsculas (`hero.ts`, `hero.html`).

## Design

Before creating or modifying frontend or UI code, read `DESIGN.md`.

All new UI should follow the design system documented in `DESIGN.md`.

Prefer existing components and design tokens over creating new ones.

Do not introduce new colors, spacing values, border radii, typography styles or UI
patterns unless there is a clear reason.

If an existing component already solves the problem, reuse or extend it instead of
duplicating it.

Regla práctica: no escribas hexadecimales, `rgba()` ni sombras arbitrarias en plantillas
o componentes. Añade primero el token en `@theme` (`src/styles.css`) y luego úsalo como
utilidad de Tailwind.

## Commands

| Comando                                   | Descripción                                                                  |
| ----------------------------------------- | ---------------------------------------------------------------------------- |
| `npm start`                               | Servidor de desarrollo                                                       |
| `npm run build`                           | Build de producción (incluye type-check de plantillas con `strictTemplates`) |
| `npm run typecheck`                       | Type-check de la app (`tsc -p tsconfig.app.json --noEmit`)                   |
| `npm run typecheck:spec`                  | Type-check de los tests                                                      |
| `npm test`                                | Tests con Vitest                                                             |
| `npm run lint`                            | Análisis con ESLint (`ng lint`)                                              |
| `npm run format` / `npm run format:check` | Formateo con Prettier                                                        |
| `npm run serve:ssr:JuanGzSz`              | Sirve la build SSR                                                           |

## Verification

Antes de dar una tarea por terminada, ejecuta y deja en verde:

1. `npm run typecheck` (y `npm run typecheck:spec` si tocaste tests)
2. `npm run lint`
3. `npm test`
4. `npm run build`

Si algo falla, corrige la causa antes de continuar.

## Constraints

- **No rompas funcionalidad existente:** no cambies lógica de negocio, APIs, contratos de
  datos, endpoints ni rutas públicas.
- No hagas rediseños completos ni reescrituras: cambios pequeños, seguros y justificados.
- No hagas cambios destructivos sin necesidad.
- Mantén la identidad visual (papel cálido + acento naranja).
- Prettier: `printWidth: 100`, `singleQuote: true`; el HTML usa el parser `angular`.
