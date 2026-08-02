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
type TranslationValues = Record<string, string | number>;
type Translator = (key: TranslationKey, values?: TranslationValues) => string;

const flattenedDictionaries = Object.fromEntries(
  LOCALES.map((locale) => [locale, flattenDictionary(dictionaries[locale])]),
) as Record<Locale, Record<TranslationKey, string>>;

const translators = Object.fromEntries(
  LOCALES.map((locale) => [locale, createTranslator(locale)]),
) as Record<Locale, Translator>;

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function getMessages(locale: Locale) {
  return dictionaries[locale];
}

function flattenDictionary(
  dictionary: Record<string, unknown>,
  prefix = "",
  flattened: Record<string, string> = {},
): Record<string, string> {
  for (const [key, value] of Object.entries(dictionary)) {
    const translationKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "string") {
      flattened[translationKey] = value;
    } else if (value && typeof value === "object") {
      flattenDictionary(
        value as Record<string, unknown>,
        translationKey,
        flattened,
      );
    }
  }
  return flattened;
}

function createTranslator(locale: Locale): Translator {
  const localizedUI = flattenedDictionaries[locale];
  const fallbackUI = flattenedDictionaries[DEFAULT_LOCALE];

  return (key, values = {}) => {
    const message = localizedUI[key] ?? fallbackUI[key] ?? key;
    const entries = Object.entries(values);
    if (entries.length === 0) return message;

    return entries.reduce(
      (text, [name, value]) => text.replaceAll(`{${name}}`, String(value)),
      message,
    );
  };
}

export function useTranslations(locale: Locale): Translator {
  return translators[locale];
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
