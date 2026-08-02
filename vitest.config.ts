import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "astro:content": path.resolve(
        __dirname,
        "./src/__tests__/mocks/astro-content.ts",
      ),
      "astro:i18n": path.resolve(
        __dirname,
        "./src/__tests__/mocks/astro-i18n.ts",
      ),
    },
  },
});
