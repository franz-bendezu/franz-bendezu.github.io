import { PROJECTS, PROJECT_CATEGORIES } from "@/constants/projects";
import {
  PROJECT_TECHNOLOGIES,
  PROJECT_TECHNOLOGY_CATEGORY,
} from "@/constants/project-techologies";
import type { IProject, ProjectCategoryCodes } from "@/interfaces/project";
import type { Locale } from "./i18n";

export function getProjects(
  locale: Locale,
  category?: ProjectCategoryCodes,
): IProject[] {
  return PROJECTS.filter(
    (project) =>
      project.lang === locale &&
      (!category || project.categoryCode === category),
  )
    .map((project) => ({
      ...project,
      technologies: PROJECT_TECHNOLOGIES.filter((technology) =>
        project.technologyCodes.includes(technology.code),
      ).map((technology) => ({
        ...technology,
        categories: PROJECT_TECHNOLOGY_CATEGORY.filter((category) =>
          technology.categoryCodes.includes(category.value),
        ),
      })),
    }))
    .sort((a, b) => {
      if (a.priority && b.priority) return b.priority - a.priority;
      if (a.start && b.start) {
        return new Date(b.start).getTime() - new Date(a.start).getTime();
      }
      return 0;
    });
}

export function getProject(locale: Locale, code: string) {
  return getProjects(locale).find((project) => project.code === code);
}

export function isProjectCategory(
  value: string | undefined,
): value is ProjectCategoryCodes {
  return PROJECT_CATEGORIES.some((category) => category.value === value);
}
