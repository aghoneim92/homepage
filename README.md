# homepage

Ahmed Ghoneim's personal site, built with Astro and React from the
"Personal Portfolio Homepage" Claude Design project.

## Pages

| Route             | Source                                                                             |
| :---------------- | :--------------------------------------------------------------------------------- |
| `/`               | `src/pages/index.astro`                                                            |
| `/resume`         | `src/pages/resume.astro`                                                           |
| `/gallery`        | `src/pages/gallery.astro`                                                          |
| `/mobile-preview` | `src/pages/mobile-preview.astro` — all three pages in 402px phone frames (noindex) |

Content lives in `src/data/` (profile, jobs, gallery items). The toggles that were
editable props in the design (captions, gallery density, portrait treatment, phone
number, side projects) are in `src/config.ts`.

React is used for the interactive gallery video (`ResumableVideo`, hydrated with
`client:visible`) and the static iPhone frame on the preview page. Everything else is
plain Astro with no client JavaScript.

## Commands

| Command        | Action                                             |
| :------------- | :------------------------------------------------- |
| `pnpm install` | Install dependencies                               |
| `pnpm dev`     | Start the dev server at `localhost:4321`           |
| `pnpm build`   | Type-check, then build the static site to `dist/`  |
| `pnpm preview` | Serve the production build locally                 |
| `pnpm check`   | Run `astro check` (TypeScript + Astro diagnostics) |
| `pnpm lint`    | Lint with oxlint (`pnpm lint:fix` to autofix)      |
| `pnpm format`  | Format with oxfmt (`pnpm format:check` in CI)      |
