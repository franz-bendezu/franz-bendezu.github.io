import { PROJECTS, PROJECT_CATEGORIES } from "../../../constants/projects";
import { CodeBracketIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import {
  PROJECT_TECHNOLOGIES,
  PROJECT_TECHNOLOGY_CATEGORY,
} from "../../../constants/projects/techologies";
import { IProject, IProjectTechnology } from "../../../interfaces/project";
import { ProjectList } from "@/components/project/List";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

const getDataByCategory = (category?: string) => {
  return (
    category
      ? [...PROJECTS.filter((project) => project.categoryCode === category)]
      : [...PROJECTS]
  )
    .map<IProject>((project) => ({
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
      if (a.priority && b.priority) {
        return b.priority - a.priority;
      }
      if (a.start && b.start) {
        return new Date(b.start).getTime() - new Date(a.start).getTime();
      }
      return 0;
    });
};

type Props = {
  params: { category?: string; locale?: string };
};

export default function ProjectsPage({ params }: Props) {
  if (params.locale)
  unstable_setRequestLocale(params.locale);
  const categories = PROJECT_CATEGORIES;
  const initialProjects = getDataByCategory(params.category);
  const t = useTranslations("Projects");

  return (
    <section
      data-testid="projects"
      className="flex flex-col items-center justify-center gap-4"
    >
      <h1 className="font-monospace flex flex-row items-center gap-4 text-3xl dark:text-white lg:text-4xl">
        <CodeBracketIcon className="h-8 w-8" />
        { t('title')}
      </h1>
      <div className="mx-10 flex w-full flex-row flex-wrap items-center justify-center gap-2">
        <Link
          className={`link ${
            !params.category
              ? "bg-blue-500 text-white"
              : "text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-500"
          } rounded px-2 py-1`}
          aria-label={`link to all projects`}
          href={`/projects`}
          locale={params.locale}
        >
          Todos
        </Link>
        {categories.map((category) => (
          <Link
            key={category.value}
            className={`link ${
              params.category === category.value
                ? "bg-blue-500 text-white"
                : "text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-500"
            } rounded px-2 py-1`}
            aria-label={`link to ${category.name} projects`}
            href={`/projects/c/${category.value}`}
            locale={params.locale}
          >
            {category.name}
          </Link>
        ))}
      </div>
      <ProjectList projects={initialProjects} />
    </section>
  );
}
