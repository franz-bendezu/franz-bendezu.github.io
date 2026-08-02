import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://franzbendezu.me",
  output: "static",
  integrations: [
    react(),
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        return (
          !path.startsWith("/en/") &&
          path !== "/en" &&
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
