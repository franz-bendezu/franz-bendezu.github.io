import { getRequestConfig } from "next-intl/server";
import { LOCALES } from "./constants/locales";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }) => {
  if (!LOCALES.some((l) => l.locale === locale)) {
    return notFound();
  }
  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
