import { LOCALES, type Locale } from "@/lib/i18n";
import type { ProfileContent } from "@/lib/profile-content";

export const SITE_URL = "https://franzbendezu.me";

export function personSchema(profile: ProfileContent, locale: Locale) {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: profile.name,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image.png`,
    jobTitle: profile.headline,
    homeLocation: {
      "@type": "Place",
      name: profile.location,
    },
    knowsLanguage: [locale, ...LOCALES.filter((item) => item !== locale)],
    sameAs: profile.socialLinks.map((link) => link.url),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
