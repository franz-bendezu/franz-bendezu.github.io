import { getCollection, type CollectionEntry } from "astro:content";
import { PROJECT_CATEGORIES } from "@/constants/project-categories";
import {
  PROJECT_TECHNOLOGIES,
  PROJECT_TECHNOLOGY_CATEGORY,
} from "@/constants/project-techologies";
import type { IProject, ProjectCategoryCodes } from "@/interfaces/project";
import type { Locale } from "./i18n";

function localizeProject(
  entry: CollectionEntry<"projects">,
  locale: Locale,
): IProject {
  const { data } = entry;
  const localized = data.locales[locale];

  return {
    translationKey: entry.id,
    position: data.position,
    status: data.status,
    tags: [...data.tags],
    categoryCode: data.categoryCode,
    technologyCodes: [...data.technologyCodes],
    ...(data.priority !== undefined && { priority: data.priority }),
    ...(data.featured !== undefined && { featured: data.featured }),
    ...(data.start && { start: data.start }),
    ...(data.end && { end: data.end }),
    ...(data.banner && {
      banner: {
        src: data.banner.src,
        ...data.banner.locales[locale],
      },
    }),
    ...(data.links && {
      links: data.links.map((link) => ({
        type: link.type,
        url: link.url,
        ...link.locales[locale],
      })),
    }),
    ...(data.images && {
      images: data.images.map((image) => ({
        src: image.src,
        ...image.locales[locale],
      })),
    }),
    code: localized.code,
    title: localized.title,
    shortDescription: localized.shortDescription,
    ...(localized.description && { description: localized.description }),
    ...(localized.role && { role: localized.role }),
    ...(localized.challenge && { challenge: localized.challenge }),
    ...(localized.approach && { approach: localized.approach }),
    ...(localized.outcomes && { outcomes: [...localized.outcomes] }),
    projectGoals: localized.projectGoals.map((goal) => ({ ...goal })),
    keyFeatures: localized.keyFeatures.map((feature) => ({ ...feature })),
    lang: locale,
    technologies: PROJECT_TECHNOLOGIES.filter((technology) =>
      data.technologyCodes.includes(technology.code),
    ).map((technology) => ({
      ...technology,
      categories: PROJECT_TECHNOLOGY_CATEGORY.filter((category) =>
        technology.categoryCodes.includes(category.value),
      ),
    })),
  };
}

export async function getProjects(
  locale: Locale,
  category?: ProjectCategoryCodes,
): Promise<IProject[]> {
  const entries = await getCollection(
    "projects",
    category ? ({ data }) => data.categoryCode === category : undefined,
  );

  return entries
    .map((entry) => localizeProject(entry, locale))
    .sort((a, b) => {
      if (a.priority && b.priority) return b.priority - a.priority;
      if (a.start && b.start) {
        return new Date(b.start).getTime() - new Date(a.start).getTime();
      }
      return 0;
    });
}

export async function getProject(locale: Locale, code: string) {
  return (await getProjects(locale)).find((project) => project.code === code);
}

export function isProjectCategory(
  value: string | undefined,
): value is ProjectCategoryCodes {
  return PROJECT_CATEGORIES.some((category) => category.value === value);
}
