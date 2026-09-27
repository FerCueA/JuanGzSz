# Design System

Sistema visual de la landing de **Juan González** (jazz / blues, Tenerife).
Stack: **Angular 21** (standalone, zoneless, SSR) + **Tailwind CSS v4**.

La fuente de verdad de los tokens es `src/styles.css` (bloque `@theme`). Cualquier
color, tipografía, radio o sombra nueva debe declararse ahí primero y consumirse
después como utilidad de Tailwind o como `var(--token)`.

> Regla base: **no escribir valores hexadecimales, `rgba()` ni sombras arbitrarias
> en plantillas o componentes.** Si algo no tiene token, primero se añade el token.

---

## Design Principles

1. **Estética de cartel de jazz.** Cálida, editorial, con papel envejecido y acentos
   naranjas. La interfaz es discreta; el contenido y la fotografía mandan.
2. **Contraste de dos tipografías.** Cormorant Garamond (display, serif) para títulos;
   Source Sans 3 (sans) para texto, etiquetas y UI.
3. **Pocos acentos, muy intencionados.** El naranja `ember` marca acción/énfasis.
   El resto son neutros cálidos.
4. **Reutilizar antes de crear.** Existe una base de componentes (`appButton`) y de
   contenido (`core/site.ts`). Se extienden, no se duplican.
5. **Consistencia sobre novedad.** Los valores salen de la escala documentada aquí.
6. **Accesible por defecto.** Contraste alto, foco visible, jerarquía semántica de
   encabezados y `lang="es"`.

---

## Colors

Todos los tokens viven en `@theme` (`src/styles.css`) y se exponen como utilidades
Tailwind (`bg-*`, `text-*`, `border-*`, `from-*`, `via-*`, …).

| Rol                  | Token                  | Valor     | Utilidad ejemplo            | Uso                                                                     |
| -------------------- | ---------------------- | --------- | --------------------------- | ----------------------------------------------------------------------- |
| Primary (decorativo) | `--color-ember`        | `#df5a24` | `bg-ember` / `text-ember`   | Formas y acentos decorativos (póster). **No** poner texto blanco encima |
| Primary (con texto)  | `--color-ember-strong` | `#c94f1e` | `bg-ember-strong`           | Botones y badges: 4.55:1 con blanco (AA)                                |
| Primary (hover)      | `--color-ember-deep`   | `#a83f14` | `hover:bg-ember-deep`       | Estado hover/activo del primario                                        |
| Secondary            | `--color-amber`        | `#e49b4a` | `bg-amber` / `border-amber` | Acento secundario, detalles del póster                                  |
| Secondary (neutro)   | `--color-steel`        | `#46565f` | `text-steel`                | Texto secundario, botón secundario                                      |
| Secundario oscuro    | `--color-steel-deep`   | `#38484f` | `bg-steel-deep`             | Bloques oscuros, detalles                                               |
| Background           | `--color-paper`        | `#f7f0e2` | `bg-paper`                  | Fondo base de la página                                                 |
| Background (gama)    | `--color-paper-deep`   | `#f3ead8` | `from-paper-deep`           | Degradados de fondo                                                     |
| Background (claro)   | `--color-paper-soft`   | `#efe6d5` | `from-paper-soft/70`        | Velo superior                                                           |
| Surface              | `--color-surface`      | `#f5ead7` | `bg-surface`                | Tarjetas / póster                                                       |
| Surface claro        | `--color-cream`        | `#f8f1e3` | `bg-cream/90`               | Capas claras sobre surface                                              |
| Text                 | `--color-ink`          | `#2b3742` | `text-ink`                  | Títulos y texto principal                                               |
| Muted text           | `--color-muted`        | `#556474` | `text-muted`                | Párrafos y texto de apoyo                                               |
| Muted text (cálido)  | `--color-clay`         | `#7d5e46` | `text-clay`                 | Eyebrows / etiquetas (oscurecido para AA)                               |
| Borders              | `--color-border`       | `#d8cbbb` | `border-border`             | Separadores y bordes                                                    |
| Border/divider suave | `--color-sand`         | `#baa88f` | `via-sand/16`               | Líneas verticales decorativas                                           |
| Link/underline       | `--color-mist`         | `#9fb3c8` | `decoration-mist`           | Subrayados y selección                                                  |
| Success              | `--color-success`      | `#3f7d5a` | `text-success`              | Feedback positivo (reservado)                                           |
| Warning              | `--color-warning`      | `#c98a1e` | `text-warning`              | Avisos (reservado)                                                      |
| Error                | `--color-error`        | `#b23b2e` | `text-error`                | Errores (reservado)                                                     |
| Info                 | `--color-info`         | `#4a6f8a` | `text-info`                 | Información (reservado)                                                 |

> `success`/`warning`/`error`/`info` ya están tokenizados para que formularios o
> alertas futuras no inventen rojos/verdes nuevos. Todavía no se usan en pantalla.

**Regla de contraste:** texto principal (`ink`) sobre `paper`; nunca `clay`/`muted`
para textos largos pequeños sin comprobar el contraste. **Nunca texto blanco sobre
`ember`** (3.73:1): para superficies con texto usa `ember-strong` (4.55:1) y
`ember-deep` para el hover. Los estados persistentes (p. ej. enlace activo de la
navegación) también deben cumplir AA, no solo el hover.

---

## Typography

**Familias**

- `--font-display`: `'Cormorant Garamond', ui-serif, Georgia, serif` — títulos (`h1`–`h4`
  la aplican automáticamente desde `@layer base`). `tracking: -0.02em`, `text-wrap: balance`.
- `--font-sans`: `'Source Sans 3', ui-sans-serif, system-ui, sans-serif` — cuerpo, UI,
  etiquetas y botones (aplicada en `body`).

**Escala y pesos**

| Rol              | Clase(s)                                  | Tamaño                       | Peso                  | Line-height           |
| ---------------- | ----------------------------------------- | ---------------------------- | --------------------- | --------------------- |
| H1 (hero)        | `text-5xl md:text-6xl lg:text-7xl`        | 3rem → 4.5rem                | `font-semibold` (600) | `leading-[0.86]`      |
| H2 (sección)     | `text-4xl md:text-5xl`                    | 2.25rem → 3rem               | `font-semibold` (600) | por defecto           |
| H3 (artículo)    | `text-2xl`                                | 1.5rem                       | `font-semibold` (600) | por defecto           |
| Body             | `text-base md:text-lg`                    | 1rem → 1.125rem              | 400                   | `leading-8` (2rem)    |
| Small / apoyo    | `text-sm`                                 | 0.875rem                     | 400–600               | `leading-7` (1.75rem) |
| Labels / eyebrow | `text-xs` o `text-[10px]` / `text-[11px]` | 0.75rem / 10–11px            | 400–600               | —                     |
| Buttons          | ver Components                            | 0.875rem (md) / 0.75rem (sm) | 600                   | por defecto           |

**Tracking de etiquetas:** `uppercase` con `tracking-[0.25em]` … `tracking-[0.42em]`
según jerarquía (a menor tamaño, mayor tracking). Reutilizar estos valores, no crear otros.

---

## Spacing

Tailwind v4 usa la escala base de **0.25rem (4px)**. El proyecto no redefine `--spacing`,
así que toda utilidad numérica (`p-4`, `gap-8`, `pb-20`, …) sigue esa escala.

Valores de referencia ya usados:

| Necesidad                 | Clases habituales                                         |
| ------------------------- | --------------------------------------------------------- |
| Padding de sección        | `px-6`, `pb-20`, `pt-6`, `pt-8`                           |
| Padding de tarjeta/póster | `p-*` internos por posicionamiento absoluto               |
| Gaps                      | `gap-3` (botones), `gap-4` (bloques), `gap-12` (columnas) |
| Ritmo vertical interno    | `space-y-5`, `space-y-8`                                  |
| Separaciones menores      | `mt-1`, `mt-2`, `mt-3`, `mt-8`                            |

Evitar valores arbitrarios (`p-[13px]`) salvo decoración explícita (p. ej. el póster).
Si aparece el mismo arbitrario 2+ veces, conviértelo en token o utilidad.

---

## Layout

- **Container:** `mx-auto max-w-6xl px-6`. Es el ancho máximo estándar de sección.
- **Página raíz:** `app.html` envuelve todo en `relative min-h-screen overflow-x-hidden bg-paper text-ink`
  con capa decorativa `pointer-events-none absolute inset-0`.
- **Landmarks:** `<app-navbar>` (header) → `<main>` (`app-hero` + `app-about`) → `<app-footer>`.
  No anidar `<main>` dentro de secciones.
- **Grids de dos columnas:** `grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start`
  (hero) y `lg:grid-cols-[0.9fr_1.1fr]` (about). Reutilizar este patrón para nuevas
  secciones de contenido.
- **Separación entre secciones:** `pb-20` por sección; el espaciado vertical se gestiona
  arriba/abajo con el padding de cada sección, no con márgenes entre componentes.

---

## Breakpoints

Se usan los breakpoints por defecto de Tailwind v4:

| Prefijo | Min-width      | Uso en el proyecto                        |
| ------- | -------------- | ----------------------------------------- |
| `sm`    | 40rem (640px)  | Rejillas de 3 columnas (bloques del hero) |
| `md`    | 48rem (768px)  | Escala tipográfica, layout del footer     |
| `lg`    | 64rem (1024px) | Layout de dos columnas (hero, about)      |
| `xl`    | 80rem (1280px) | Disponible, sin uso actual                |
| `2xl`   | 96rem (1536px) | Disponible, sin uso actual                |

No introducir breakpoints personalizados sin justificarlo aquí.

---

## Borders and Radius

- **Border color:** `border-border` (`#d8cbbb`) para separadores visibles; `border-t`
  para el separador del footer. Líneas decorativas usan `sand` con opacidad.
- **Border width:** `1px` (por defecto), salvo el aro decorativo del póster (`border-[22px] border-amber`).
- **Radius permitidos:**
  - `rounded-pill` (`--radius-pill: 9999px`) → botones y badges redondeados. **Preferido para CTA.**
  - `rounded-sm` → detalles del póster (chinchetas).
  - `rounded-full` → formas circulares decorativas.
  - Evitar radios intermedios arbitrarios (`rounded-[7px]`).

---

## Shadows

Declaradas en `@theme`:

| Token               | Utilidad          | Valor                             | Cuándo                   |
| ------------------- | ----------------- | --------------------------------- | ------------------------ |
| `--shadow-ember`    | `shadow-ember`    | `0 12px 24px rgba(217,77,28,.18)` | CTA primario (botones)   |
| `--shadow-ember-sm` | `shadow-ember-sm` | `0 8px 20px rgba(217,77,28,.18)`  | Badge/botón pequeño      |
| `--shadow-poster`   | `shadow-poster`   | `0 24px 50px rgba(83,66,47,.18)`  | Tarjeta/póster principal |

`shadow-sm` (Tailwind) se usa para el botón secundario y detalles. No crear sombras
nuevas para agrupaciones normales; reservar sombras para elementos elevados o de acento.

---

## Components

### Buttons

**Directiva `appButton`** (`src/app/shared/ui/button/`). Se aplica sobre un `<a>` o un
`<button>` nativo para conservar su semántica. No duplicar clases de botón en
plantillas; usa `appButton`.

```html
<a appButton href="#contacto">Reservar actuación</a>
<a appButton size="sm" variant="secondary" href="#inicio">Volver arriba</a>
<button appButton type="submit" [loading]="saving()">Enviar</button>
```

- **Variantes:** `variant="primary"` (por defecto) y `variant="secondary"`.
  - `primary`: `bg-ember-strong text-white shadow-ember hover:bg-ember-deep`.
  - `secondary`: `bg-white/75 text-steel shadow-sm hover:bg-white`.
- **Tamaños:** `size="md"` (por defecto, `px-5 py-3 text-sm`) y `size="sm"`
  (`px-4 py-2 text-xs uppercase tracking-[0.25em]`, para footer).
- **Semántica:** usa `<a appButton>` para navegación y `<button appButton>` para acciones.
  `href`, `target`, `rel` y `type` son atributos nativos. En enlaces externos añade
  `target="_blank" rel="noopener noreferrer"`.
- **Icon buttons:** no existen todavía. Si se necesitan, crear `appIconButton` con área
  mínima 40×40px y `aria-label` obligatorio.
- **Estados:** `[disabled]="true"` desactiva (atributo nativo en `<button>`,
  `pointer-events-none opacity-60` en ambos) y `[loading]="true"` aplica el mismo bloqueo
  y expone `aria-busy`. Al no tener plantilla, si necesitas spinner añádelo en el contenido.
  Todo botón debe seguir teniendo foco visible.
- **Contenido:** es una directiva, así que el texto (o un icono) va directamente entre las
  etiquetas del elemento.

### Inputs and Forms

Hay un formulario real en `sections/booking/` (reserva que compone un mensaje de WhatsApp).
Sigue este sistema:

- **Input / select / textarea:** fondo `bg-white/75`, borde `border-border`, radio `rounded-sm`,
  padding `px-4 py-3`, texto `text-ink`, placeholder `text-clay`, y en focus
  `focus:border-ember focus:bg-white`.
- **Label:** `text-xs uppercase tracking-[0.25em] text-clay`, asociada con `for`/`id`.
- **Focus:** el anillo global `:focus-visible` (`outline` `ember`). Nunca `outline: none` sin
  sustituto; el cambio de borde es solo refuerzo para ratón.
- **Error:** borde `border-error`, mensaje `text-xs text-error` y `aria-invalid`/`aria-describedby`.
- **Validación:** `ReactiveFormsModule`; los campos obligatorios bloquean el envío y muestran
  error al intentar enviar. Usa `novalidate` para no duplicar la validación nativa.

### Cards

El único patrón tipo tarjeta es el **póster** del hero: `bg-surface`, `shadow-poster`,
decoración absoluta y sin radio (estética de cartel). Para tarjetas de contenido nuevas:
`bg-surface`, `border border-border`, padding `p-6`, shadow solo si están elevadas.
Mantener el borde o la sombra, no ambos a la vez salvo necesidad.

### Tables

No hay tablas. Si se añaden: cabeceras `text-xs uppercase tracking-[0.25em] text-clay`
con `border-b border-border`; filas con `border-b border-border` y separación vertical
`py-3`; alineación numérica a la derecha y texto a la izquierda; acciones al final de
la fila como icon buttons; en móvil, scroll horizontal o tarjetas apiladas.

### Navigation

- **Navbar** (`src/app/layout/navbar/`): `header` con container `max-w-6xl`, marca a la
  izquierda y `nav aria-label="Navegación principal"` a la derecha.
- **Links:** `text-[11px] uppercase tracking-[0.30em] text-steel`, `transition hover:text-ember`.
  Los enlaces de navegación se definen en `core/site.ts` (`NAV_LINKS`) y se renderizan con `@for`.
- **Badge:** "Booking open" es un `<span>` `rounded-pill bg-ember text-white shadow-ember-sm`.
- **Sidebar:** no existe.
- **Breadcrumbs:** no existen (una sola página).
- **Móvil:** la navegación hace `flex-wrap`; no hay menú hamburguesa. Si el número de
  enlaces crece, añadir un menú móvil accesible (botón con `aria-expanded`).

### Modals and Dialogs

No existen. Si se crean: overlay oscuro semitransparente, panel `bg-paper` o `bg-surface`
con `shadow-poster`, foco atrapado dentro del diálogo, cierre con `Esc` y botón visible,
`role="dialog"` + `aria-modal="true"` + `aria-labelledby`.

### Alerts and Notifications

No existen. Cuando se creen, usar los tokens de estado:

| Tipo    | Token     | Sugerencia visual                                             |
| ------- | --------- | ------------------------------------------------------------- |
| Success | `success` | Fondo `success/10`, texto/icono `success`, borde `success/30` |
| Warning | `warning` | Fondo `warning/10`, texto/icono `warning`                     |
| Error   | `error`   | Fondo `error/10`, texto/icono `error`                         |
| Info    | `info`    | Fondo `info/10`, texto/icono `info`                           |

Usar `role="status"` (info/success) o `role="alert"` (warning/error).

---

## States

| Estado   | Regla                                                                                                         |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Default  | Valores base del componente/token                                                                             |
| Hover    | `transition`; primario → `hover:bg-ember-strong`; secundario → `hover:bg-white`; links → `hover:text-ember`   |
| Active   | Reutilizar el color de hover; evitar transformaciones de escala                                               |
| Focus    | Foco visible por defecto del navegador; si se añade `ring`, usar `ring-ember`. Nunca eliminarlo sin sustituto |
| Disabled | `pointer-events-none opacity-60` + atributo `disabled`/`aria-disabled`                                        |
| Loading  | Bloqueo de interacción (`pointer-events-none opacity-60`) y `aria-busy`                                       |
| Empty    | Aún no aplica (sin listados). Cuando exista: mensaje `text-muted` centrado, sin ilustraciones pesadas         |
| Error    | Ver Alerts; en formularios, `border-error` + mensaje `text-error`                                             |

---

## Responsive Design

- **Móvil (< 640px):** una columna. Tipografía a su escala menor (`text-5xl` en `h1`).
  El póster del hero mantiene su proporción y se centra.
- **Tablet (640–1023px):** rejillas de 3 columnas activas (`sm:grid-cols-3`); el layout
  principal sigue en una columna hasta `lg`.
- **Escritorio (≥ 1024px):** layout de dos columnas en hero y about; se aprovecha
  `max-w-6xl`. Filas del footer alineadas por la base (`md:items-end`).

Regla: móvil primero; los tweaks se añaden con prefijos `sm:`, `md:`, `lg:`.

---

## Accessibility

- **Contraste:** texto principal `ink` sobre `paper`; `muted`/`clay` solo para textos
  cortos o de apoyo. Verificar cualquier texto nuevo.
- **Focus visible:** no eliminar el foco del navegador; cualquier anillo propio debe usar
  `ring-ember` y ser perceptible.
- **Labels:** todo control interactivo tiene texto o `aria-label`. Inputs con `<label>` asociada.
- **Jerarquía de encabezados:** un solo `h1` (hero), `h2` por sección, `h3` en artículos.
  No saltar niveles.
- **Teclado:** navegación y acciones alcanzables con Tab; los diálogos futuros deben
  atrapar y restaurar el foco.
- **Áreas de interacción:** mínimo recomendado ~40×40px en móvil (los CTA actuales lo cumplen
  con `px-5 py-3`/`px-4 py-2`).
- **Idioma:** `index.html` usa `lang="es"`.
- **Landmarks:** `header`, `nav`, `main`, `footer` correctamente usados.

---

## Icons

- **No hay librería de iconos.** Se prefieren formas CSS/tipográficas y decoración con
  `div`s (póster, chinchetas, líneas).
- Si en el futuro se necesitan iconos, elegir **una sola** librería (por ejemplo `lucide-angular`),
  documentarla aquí y no mezclarla con SVGs sueltos.
- **Tamaños:** 16 / 20 / 24px según contexto.
- **Stroke:** consistente dentro de la librería elegida (evitar mezclar relleno y trazo).
- **Accesibilidad:** iconos decorativos con `aria-hidden="true"`; iconos con significado,
  con `aria-label` o texto visible.

---

## Animations

- **Transiciones:** `transition` (Tailwind) para color de fondo, color de texto y sombra.
  No animar `width`/`height`/`top`/`left` salvo decoración.
- **Duración:** por defecto de Tailwind (150ms) para hover/focus.
- **Easing:** por defecto; `scroll-behavior: smooth` a nivel global para anclas.
- **Reveal al hacer scroll:** usa la directiva `appReveal`. Fade + `translateY(18px)` de 0.7s
  con `--ease-poster`. Solo se activa con JS (`.js` en `<html>`) y se desactiva con
  `prefers-reduced-motion`.
- **Permitidas:** reveal, hover de botones/links, `group-open` en acordeones.
- **Evitar:** animaciones llamativas, parallax agresivo, rebotes o movimientos que distraigan
  del contenido. Cualquier animación nueva debe respetar `prefers-reduced-motion`.

---

## Component Reuse

Antes de crear algo nuevo, revisa y reutiliza:

1. **`appButton`** para cualquier acción. No escribir clases de botón a mano.
2. **`app-section`** para el contenedor estándar de sección (`max-w-6xl px-6 pb-20`).
3. **`app-poster-card`** para el póster decorativo del hero.
4. **`appReveal`** para animar la entrada de una sección.
5. **Tokens de color/tipografía/sombra/radio** de `src/styles.css` (`@theme`).
6. **`core/site.ts`** para datos del sitio (navegación, contacto, FAQ y secciones
   data-driven). Añade ahí, no en plantillas.
7. **Eyebrow/label:** `text-xs uppercase tracking-[0.xxem] text-clay`.

Si algo se repite 2+ veces, conviértelo en componente o token en lugar de copiarlo.

---

## Do

- Usa tokens (`bg-ember`, `text-ink`, `shadow-poster`…) en vez de valores crudos.
- Reutiliza `appButton` y `core/site.ts`.
- Mantén la jerarquía semántica (`h1` → `h2` → `h3`).
- Usa `OnPush` en componentes nuevos y `input()`/`signal()` para estado.
- Coloca componentes reutilizables en `shared/ui/` y secciones en `sections/`.
- Mantén la estética cálida de papel + acento naranja.

## Don't

- ❌ Escribir hex/`rgba()` o sombras arbitrarias en plantillas.
- ❌ Duplicar clases de botón o crear variantes casi iguales.
- ❌ Introducir una segunda librería de iconos o una fuente nueva sin documentarlo.
- ❌ Crear radios, sombras o paddings fuera de la escala.
- ❌ Añadir `<main>` dentro de secciones o romper la jerarquía de encabezados.
- ❌ Reorganizar partes no relacionadas del proyecto sin beneficio de mantenibilidad.
- ❌ Cambiar lógica, rutas o contratos de datos para “ordenar” estilos.

---

## Existing Design Debt

Pendiente y consciente (no bloqueante):

- **Fondos globales sin tokenizar:** los `radial-gradient`/`linear-gradient` de `body` en
  `styles.css` usan `rgba()` literales y hex sueltos (centralizados, pero no como tokens).
- **Secciones sin datos:** `Agenda`, `Música` y `Galería` se alimentan de
  `UPCOMING_SHOWS`, `TRACKS` y `GALLERY` en `core/site.ts`; mientras estén vacíos, Agenda
  muestra un estado vacío y Música/Galería no se renderizan.
- **Formulario sin backend:** el formulario compone un enlace de WhatsApp (no envía datos a
  un servidor).
- **SEO:** falta el dominio final para `canonical`, `og:url` y las URLs absolutas de
  `og:image`/JSON-LD (marcado con `TODO` en `index.html`).
- **Sin modo oscuro:** `color-scheme: light` fijo; el diseño asume papel claro.
- **Sin i18n:** textos en español hardcodeados en plantillas.
- **Assets:** `juan-gonzalez-guitar.jpg` es la única imagen; no hay sistema de variantes.
