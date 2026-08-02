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
PUBLIC_PLAUSIBLE_SCRIPT_SRC=your-site-specific-plausible-script-url
```

These values are intentionally exposed to the browser. GitHub Actions maps the
existing `NEXT_PUBLIC_SPREE_ID` and `NEXT_PUBLIC_RECAPTCHA_ID` repository
secrets to these Astro variable names. Plausible is optional and is loaded only
in production when `PUBLIC_PLAUSIBLE_SCRIPT_SRC` is set. Configure that value as
a GitHub Actions repository variable using the site-specific script URL shown in
Plausible's installation settings.

## Routes

English is canonical without a prefix. Compatibility pages remain available
under `/en`, and Spanish pages use `/es`. Page paths and slugs stay identical
between languages, so services use `/services`, `/en/services`, and
`/es/services`. Project, service, and category pages are generated from typed
Astro collections in `src/content`. Only canonical English and Spanish pages are
included in the generated sitemap.

## Search rollout

After deployment, verify `franzbendezu.me` in Google Search Console through DNS
and submit `https://franzbendezu.me/sitemap-index.xml`. In Plausible, enable
outbound-link and file-download measurements and add `Lead Form Submitted` as a
custom event goal. The event includes only locale and selected service; contact
details and project descriptions are never sent to analytics.

## Deployment

Pushes to `main` run type checks, unit tests, a production build, and Playwright
tests before uploading `dist` to GitHub Pages. The custom domain declaration is
stored in `public/CNAME`.
