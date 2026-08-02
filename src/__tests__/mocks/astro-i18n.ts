export function getRelativeLocaleUrl(locale: string, path = "") {
  const route = path.replace(/^\/+|\/+$/g, "");
  return `/${locale}${route ? `/${route}` : ""}`;
}
