/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_FORMSPREE_ID?: string;
  readonly PUBLIC_RECAPTCHA_SITE_KEY?: string;
  readonly PUBLIC_PLAUSIBLE_SCRIPT_SRC?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
