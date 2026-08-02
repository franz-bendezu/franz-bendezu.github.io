import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://franzbendezu.me",
  output: "static",
  build: {
    // The shared stylesheet is small enough that a separate request costs more
    // than the bytes saved by caching it independently.
    inlineStylesheets: "always",
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: ["100 900"],
      styles: ["normal"],
      subsets: ["latin"],
      formats: ["woff2"],
      fallbacks: ["system-ui", "sans-serif"],
    },
  ],
  prefetch: {
    defaultStrategy: "hover",
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    partytown({
      config: {
        forward: ["umami.track"],
      },
    }),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          es: "es",
        },
      },
      filter: (page) => {
        const path = new URL(page).pathname;
        const localized =
          path === "/en" ||
          path.startsWith("/en/") ||
          path === "/es" ||
          path.startsWith("/es/");
        return (
          localized &&
          path !== "/404" &&
          !path.startsWith("/cv/") &&
          !path.includes("/projects/c/")
        );
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
