/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_FORMSPREE_ID?: string;
  readonly PUBLIC_RECAPTCHA_SITE_KEY?: string;
  readonly PUBLIC_UMAMI_WEBSITE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
