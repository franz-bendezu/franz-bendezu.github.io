import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://franzbendezu.me",
  output: "static",
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
    sitemap({
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
