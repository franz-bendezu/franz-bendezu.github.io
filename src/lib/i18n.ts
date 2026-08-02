import en from "@/messages/en.json";
import es from "@/messages/es.json";
import { getRelativeLocaleUrl } from "astro:i18n";

export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

const dictionaries = { en, es } as const;

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function getMessages(locale: Locale) {
  return dictionaries[locale];
}

export function translate(
  locale: Locale,
  key: string,
  values: Record<string, string | number> = {},
): string {
  let current: unknown = dictionaries[locale];
  for (const segment of key.split(".")) {
    if (!current || typeof current !== "object" || !(segment in current)) {
      return key;
    }
    current = (current as Record<string, unknown>)[segment];
  }
  if (typeof current !== "string") return key;
  return Object.entries(values).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, String(value)),
    current,
  );
}

export function normalizePath(path = "/"): string {
  const normalized = `/${path}`.replace(/\/+/g, "/");
  return normalized.length > 1 ? normalized.replace(/\/$/, "") : normalized;
}

export function localizedPath(locale: Locale, path = "/"): string {
  const normalized = normalizePath(path);
  const route = normalized === "/" ? undefined : normalized.slice(1);
  return normalizePath(getRelativeLocaleUrl(locale, route));
}

export function canonicalPath(locale: Locale, path = "/"): string {
  return localizedPath(locale, path);
}

export function alternatePaths(path = "/") {
  return {
    en: localizedPath("en", path),
    es: localizedPath("es", path),
    "x-default": localizedPath("en", path),
  } as const;
}

export function localeFromUrl(pathname: string): Locale {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}

export function stripLocale(pathname: string): string {
  const stripped = pathname.replace(/^\/(?:en|es)(?=\/|$)/, "");
  return normalizePath(stripped || "/");
}
