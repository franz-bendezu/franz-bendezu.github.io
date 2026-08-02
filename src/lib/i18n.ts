import en from "@/messages/en.json";
import es from "@/messages/es.json";
import { getRelativeLocaleUrl } from "astro:i18n";

export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

const dictionaries = { en, es } as const;

type TranslationKeyOf<T> = {
  [Key in keyof T & string]: T[Key] extends string
    ? Key
    : T[Key] extends Record<string, unknown>
      ? `${Key}.${TranslationKeyOf<T[Key]>}`
      : never;
}[keyof T & string];

export type TranslationKey = TranslationKeyOf<typeof en>;

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function getMessages(locale: Locale) {
  return dictionaries[locale];
}

function resolveTranslation(
  locale: Locale,
  key: string,
  values: Record<string, string | number> = {},
): string {
  const localized = getTranslation(dictionaries[locale], key);
  const fallback = getTranslation(dictionaries[DEFAULT_LOCALE], key);
  const message = localized ?? fallback;
  if (!message) return key;

  return Object.entries(values).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, String(value)),
    message,
  );
}

function getTranslation(dictionary: unknown, key: string): string | undefined {
  let current = dictionary;
  for (const segment of key.split(".")) {
    if (!current || typeof current !== "object" || !(segment in current)) {
      return undefined;
    }
    current = (current as Record<string, unknown>)[segment];
  }
  return typeof current === "string" ? current : undefined;
}

export function useTranslations(locale: Locale) {
  return function t(
    key: TranslationKey,
    values: Record<string, string | number> = {},
  ): string {
    return resolveTranslation(locale, key, values);
  };
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
