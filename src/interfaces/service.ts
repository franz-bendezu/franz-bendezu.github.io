import type { Locale } from "@/lib/i18n";

export interface ServiceItem {
  title: string;
  description: string;
}

export interface Service {
  code: string;
  position: number;
  locale: Locale;
  slug: string;
  title: string;
  navTitle: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  description: string;
  audience: string;
  problems: ServiceItem[];
  outcomes: string[];
  deliverables: string[];
  process: ServiceItem[];
  faqs: ServiceItem[];
  technologyCodes: string[];
  relatedProjects: string[];
}
