import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { LOCALES } from "@/constants/locales";

export default getRequestConfig(async ({ locale }) => {
  if (!LOCALES.some((l) => l.locale === locale)) {
    return notFound();
  }
  return {
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
