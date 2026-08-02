import en from "@/messages/en.json";
import es from "@/messages/es.json";

export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const dictionaries = { en, es } as const;

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function getMessages(locale: Locale) {
  return dictionaries[locale];
}
