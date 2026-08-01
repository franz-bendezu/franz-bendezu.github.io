# Franz Bendezu — Portfolio

A bilingual portfolio built with Astro, React islands, Tailwind CSS, and typed
TypeScript content. The statically generated production site is deployed to
GitHub Pages at [franzbendezu.me](https://franzbendezu.me).

## Requirements

- Node.js 22.12 or newer
- pnpm 10.x

## Local development

```bash
pnpm install --frozen-lockfile
pnpm dev
```

The development server is available at `http://localhost:4321`.

## Validation

```bash
pnpm check
pnpm exec playwright install chromium
pnpm build
pnpm test:e2e
```

`pnpm test` runs the unit tests, production build, and browser tests together.
The production build uses Astro static file endpoints and Playwright to generate
the typed English and Spanish CV PDFs directly in `dist`.

## Environment variables

Create `.env.local` when testing the contact form locally:

```dotenv
PUBLIC_FORMSPREE_ID=your-form-id
PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
```

Both values are intentionally exposed to the browser. GitHub Actions maps the
existing `NEXT_PUBLIC_SPREE_ID` and `NEXT_PUBLIC_RECAPTCHA_ID` repository
secrets to these Astro variable names.

## Routes

English is canonical without a prefix. Compatibility pages remain available
under `/en`, and Spanish pages use `/es`. Project and category pages are
generated from the typed Astro collections in `src/content`.

## Deployment

Pushes to `main` run type checks, unit tests, a production build, and Playwright
tests before uploading `dist` to GitHub Pages. The custom domain declaration is
stored in `public/CNAME`.
