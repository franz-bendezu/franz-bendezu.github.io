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
PUBLIC_UMAMI_WEBSITE_ID=your-umami-website-id
```

These values are intentionally exposed to the browser. GitHub Actions maps the
existing `NEXT_PUBLIC_SPREE_ID` and `NEXT_PUBLIC_RECAPTCHA_ID` repository
secrets to these Astro variable names. Umami is optional and is loaded through
Partytown's web worker only in production when `PUBLIC_UMAMI_WEBSITE_ID` is set.
Configure the public website ID as a GitHub Actions repository variable. The
official Umami tracker URL is hardcoded in the layout so deployments cannot
substitute an arbitrary script.

## Routes

Astro's native i18n routing generates canonical English pages under `/en` and
Spanish pages under `/es`. Root English pages remain accessible as duplicates,
but their links and canonical metadata point to `/en`. Page paths and slugs stay
identical between languages, so services use `/en/services` and `/es/services`.
Project, service, and category pages are generated from typed Astro collections
through the dynamic `[locale]` route tree. Only `/en` and `/es` pages are
included in the generated sitemap.

## Search rollout

After deployment, verify `franzbendezu.me` in Google Search Console through DNS
and submit `https://franzbendezu.me/sitemap-index.xml`. In Umami, verify the
`Lead Form Submitted` event after a successful test inquiry. The event includes
only locale and selected service; contact details and project descriptions are
never sent to analytics.

## Deployment

Pushes to `main` run type checks, unit tests, a production build, and Playwright
tests before uploading `dist` to GitHub Pages. The custom domain declaration is
stored in `public/CNAME`.
