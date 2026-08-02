import { DEFAULT_LOCALE, dictionaries, LOCALES, type Locale } from "./locales";

type TranslationKeyOf<T> = {
  [Key in keyof T & string]: T[Key] extends string
    ? Key
    : T[Key] extends Record<string, unknown>
      ? `${Key}.${TranslationKeyOf<T[Key]>}`
      : never;
}[keyof T & string];

export type TranslationKey = TranslationKeyOf<typeof dictionaries.en>;
type TranslationValues = Record<string, string | number>;
type Translator = (key: TranslationKey, values?: TranslationValues) => string;

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

const flattenedDictionaries = Object.fromEntries(
  LOCALES.map((locale) => [locale, flattenDictionary(dictionaries[locale])]),
) as Record<Locale, Record<TranslationKey, string>>;

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

const translators = Object.fromEntries(
  LOCALES.map((locale) => [locale, createTranslator(locale)]),
) as Record<Locale, Translator>;

export function useTranslations(locale: Locale): Translator {
  return translators[locale];
}
