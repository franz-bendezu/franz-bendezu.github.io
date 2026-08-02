import { getCollection, type CollectionEntry } from "astro:content";
import type { Service } from "@/interfaces/service";
import type { Locale } from "@/lib/i18n";

function localizeService(
  entry: CollectionEntry<"services">,
  locale: Locale,
): Service {
  return {
    code: entry.id,
    position: entry.data.position,
    locale,
    slug: entry.data.slug,
    technologyCodes: [...entry.data.technologyCodes],
    relatedProjects: [...entry.data.relatedProjects],
    ...entry.data.locales[locale],
  };
}

export async function getServices(locale: Locale): Promise<Service[]> {
  return (await getCollection("services"))
    .map((entry) => localizeService(entry, locale))
    .sort((a, b) => a.position - b.position);
}

export async function getService(locale: Locale, slug: string) {
  return (await getServices(locale)).find((service) => service.slug === slug);
}
