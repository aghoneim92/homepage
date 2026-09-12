## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Tooling

Use pnpm. Before finishing a change, run `pnpm check`, `pnpm lint` (oxlint) and `pnpm format` (oxfmt).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Social previews

Open Graph and Twitter card tags live in `src/layouts/BaseLayout.astro`. Pages override
the card with the `image` and `imageAlt` props.

The cards themselves are committed under `public/assets/og/`. Regenerate them after
changing the wording or the design:

```
node scripts/build-og-images.mjs
```

It renders `scripts/og-card.css` in headless Chrome, so it needs Chrome installed and
runs on macOS only.
