# Juan González Landing Page

Landing page profesional desarrollada con **Angular 21**, **TypeScript** y **Tailwind CSS 4** para presentar la propuesta artística de **Juan González**.
El proyecto está orientado a comunicar identidad, estilo y vías de contacto dentro de una experiencia visual inspirada en el universo **jazz / blues**.

## 1. Índice

- [Juan González Landing Page](#juan-gonzález-landing-page)
  - [1. Índice](#1-índice)
  - [2. Descripción general](#2-descripción-general)
  - [3. Objetivos del proyecto](#3-objetivos-del-proyecto)
  - [4. Stack tecnológico](#4-stack-tecnológico)
  - [5. Arquitectura del proyecto](#5-arquitectura-del-proyecto)
    - [5.1. Estructura principal](#51-estructura-principal)
    - [5.2. Organización por apartados](#52-organización-por-apartados)
    - [5.3. Enfoque arquitectónico](#53-enfoque-arquitectónico)
  - [6. Puesta en marcha local](#6-puesta-en-marcha-local)
    - [6.1. Requisitos previos](#61-requisitos-previos)
    - [6.2. Instalación](#62-instalación)
    - [6.3. Entorno de desarrollo](#63-entorno-de-desarrollo)
  - [7. Scripts disponibles](#7-scripts-disponibles)
  - [8. Despliegue](#8-despliegue)
    - [8.1. Flujo de publicación](#81-flujo-de-publicación)
  - [9. Buenas prácticas aplicadas](#9-buenas-prácticas-aplicadas)
  - [10. Autoría](#10-autoría)

---

## 2. Descripción general

Esta aplicación se concibe como una **single-page application** de presentación profesional, diseñada para:

- reforzar la identidad y la presencia digital del artista,
- comunicar su propuesta musical de forma clara, atractiva y estructurada,
- facilitar el contacto para actuaciones, colaboraciones y nuevas oportunidades profesionales.

---

## 3. Objetivos del proyecto

1. **Transmitir identidad visual** con una estética cálida, elegante y coherente.
2. **Estructurar el contenido por secciones** para mejorar la navegación y la lectura.
3. **Mantener una arquitectura simple y escalable** basada en componentes reutilizables.
4. **Preparar el despliegue web** con renderizado del lado del servidor y publicación en Netlify.

---

## 4. Stack tecnológico

| Tecnología | Uso principal |
| --- | --- |
| `Angular 21` | Framework principal de la aplicación |
| `TypeScript` | Tipado y mantenimiento del código |
| `Tailwind CSS 4` | Estilado y maquetación visual |
| `Angular SSR` | Renderizado del lado del servidor |
| `Express` | Soporte para la capa server en SSR |
| `Netlify` | Despliegue y publicación |

---

## 5. Arquitectura del proyecto

La aplicación sigue una arquitectura **modular y orientada a componentes**, adecuada para una landing page mantenible.

### 5.1. Estructura principal

```text
src/
├── app/
│   ├── app.ts
│   ├── app.html
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── components/
│       ├── navbar/
│       ├── hero/
│       ├── about/
│       └── footer/
├── styles.css
├── main.ts
├── main.server.ts
└── server.ts
```

### 5.2. Organización por apartados

| Apartado | Responsabilidad |
| --- | --- |
| `Navbar` | Navegación principal y acceso rápido a secciones/contacto |
| `Hero` | Presentación inicial e impacto visual de la marca artística |
| `About` | Información descriptiva del proyecto musical o del artista |
| `Footer` | Cierre de página, enlaces y datos de contacto |
| `App` | Composición general de toda la landing |

### 5.3. Enfoque arquitectónico

- **Composición central desde `App`**: la página principal ensambla todos los bloques visuales.
- **Separación por componentes**: cada sección tiene su propio HTML, CSS y lógica.
- **Escalabilidad sencilla**: permite añadir nuevas secciones sin romper la estructura actual.
- **SSR preparado**: la aplicación está configurada para renderizado híbrido y despliegue optimizado.

---

## 6. Puesta en marcha local

### 6.1. Requisitos previos

- `Node.js`
- `npm`

### 6.2. Instalación

```bash
npm install
```

### 6.3. Entorno de desarrollo

```bash
npm start
```

La aplicación quedará disponible en:

```text
http://localhost:4200/
```

---

## 7. Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm start` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la build de producción |
| `npm run watch` | Compila en modo observación |
| `npm test` | Ejecuta las pruebas del proyecto |
| `npm run serve:ssr:JuanGzSz` | Sirve la versión SSR generada |

---

## 8. Despliegue

El proyecto está preparado para desplegarse en **Netlify** mediante la configuración definida en `netlify.toml`.

### 8.1. Flujo de publicación

1. Construir la aplicación con `npm run build`.
2. Publicar la salida generada en `dist/JuanGzSz/browser`.
3. Utilizar el runtime de Angular configurado para asegurar la compatibilidad con SSR.

---

## 9. Buenas prácticas aplicadas

- Estructura clara basada en responsabilidades.
- Componentes reutilizables y desacoplados.
- Base preparada para mantenimiento, evolución y escalabilidad.
- Documentación orientada tanto al desarrollo como al despliegue.

---

## 10. Autoría

**Diseño y desarrollo:** Aleixo Fdez Cuevas

