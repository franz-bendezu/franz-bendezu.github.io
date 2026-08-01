import { describe, expect, it } from "vitest";
import {
  alternatePaths,
  canonicalPath,
  localizedPath,
  localeFromUrl,
  stripLocale,
  translate,
} from "@/lib/i18n";

describe("i18n routing", () => {
  it("keeps canonical English unprefixed and Spanish prefixed", () => {
    expect(canonicalPath("en", "/projects")).toBe("/projects");
    expect(canonicalPath("es", "/projects")).toBe("/es/projects");
    expect(localizedPath("en", "/projects", true)).toBe("/en/projects");
  });

  it("builds language alternatives", () => {
    expect(alternatePaths("/about")).toEqual({
      en: "/about",
      es: "/es/about",
      "x-default": "/about",
    });
  });

  it("detects and strips locale prefixes", () => {
    expect(localeFromUrl("/es/projects/example")).toBe("es");
    expect(localeFromUrl("/en/projects")).toBe("en");
    expect(stripLocale("/en/projects/example")).toBe("/projects/example");
  });

  it("looks up, interpolates, and reports missing translations", () => {
    expect(translate("en", "Navigation.projects")).toBe("Projects");
    expect(translate("en", "Projects.viewProjectLink", { title: "Demo" })).toBe(
      "View Project Demo",
    );
    expect(translate("en", "Missing.key")).toBe("Missing.key");
  });

  it("resolves the About eyebrow in both locales", () => {
    expect(translate("en", "About.eyebrow")).toBe("Profile");
    expect(translate("es", "About.eyebrow")).toBe("Perfil");
  });
});
