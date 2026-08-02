import { getRelativeLocaleUrl } from "astro:i18n";
import { DEFAULT_LOCALE, isLocale, LOCALES, type Locale } from "./locales";

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
  const localized = Object.fromEntries(
    LOCALES.map((locale) => [locale, localizedPath(locale, path)]),
  ) as Record<Locale, string>;

  return {
    ...localized,
    "x-default": localizedPath(DEFAULT_LOCALE, path),
  };
}

export function localeFromUrl(pathname: string): Locale {
  const locale = normalizePath(pathname).split("/")[1];
  return isLocale(locale) ? locale : DEFAULT_LOCALE;
}

export function stripLocale(pathname: string): string {
  const [, firstSegment, ...remainingSegments] =
    normalizePath(pathname).split("/");
  if (!isLocale(firstSegment)) return normalizePath(pathname);
  return normalizePath(remainingSegments.join("/"));
}
