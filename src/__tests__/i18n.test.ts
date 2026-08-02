import { describe, expect, it } from "vitest";
import {
  alternatePaths,
  canonicalPath,
  localizedPath,
  localeFromUrl,
  stripLocale,
  useTranslations,
} from "@/lib/i18n";

describe("i18n routing", () => {
  it("uses Astro's locale prefixes for canonical routes", () => {
    expect(canonicalPath("en", "/projects")).toBe("/en/projects");
    expect(canonicalPath("es", "/projects")).toBe("/es/projects");
    expect(localizedPath("en", "/projects")).toBe("/en/projects");
  });

  it("builds language alternatives", () => {
    expect(alternatePaths("/about")).toEqual({
      en: "/en/about",
      es: "/es/about",
      "x-default": "/en/about",
    });
  });

  it("detects and strips locale prefixes", () => {
    expect(localeFromUrl("/es/projects/example")).toBe("es");
    expect(localeFromUrl("/en/projects")).toBe("en");
    expect(stripLocale("/en/projects/example")).toBe("/projects/example");
  });

  it("looks up and interpolates translations", () => {
    const t = useTranslations("en");

    expect(t("Navigation.projects")).toBe("Projects");
    expect(t("Projects.viewProjectLink", { title: "Demo" })).toBe(
      "View Project Demo",
    );
  });

  it("resolves the About eyebrow in both locales", () => {
    expect(useTranslations("en")("About.eyebrow")).toBe("Profile");
    expect(useTranslations("es")("About.eyebrow")).toBe("Perfil");
  });

  it("creates a locale-bound UI translator", () => {
    const t = useTranslations("es");

    expect(t("Navigation.openMenu")).toBe("Abrir menú principal");
    expect(t("Projects.viewProjectLink", { title: "Demo" })).toBe(
      "Ver Proyecto Demo",
    );
  });
});
