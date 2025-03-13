import { use } from "react";
import { PROJECTS, PROJECT_CATEGORIES } from "../../../constants/projects";
import { CodeBracketIcon } from "@heroicons/react/20/solid";
import {
  PROJECT_TECHNOLOGIES,
  PROJECT_TECHNOLOGY_CATEGORY,
} from "../../../constants/project-techologies";
import { IProject } from "../../../interfaces/project";
import { ProjectExplorerList } from "@/components/project/ExplorerList";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Locale, useTranslations } from "next-intl";
import { Link } from "../../../../i18n/navigation";
import { Metadata } from "next";
import { ProjectListEmpty } from "@/components/project/ListEmpty";
import { routing } from "../../../../i18n/routing";

export const getDataByCategory = (lang:string, category?: string) => {
  return (
    category
      ? [...PROJECTS.filter((project) => project.categoryCode === category && project.lang === lang)]
      : [...PROJECTS.filter((project) => project.lang === lang)]
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
  params: Promise<{ category?: string; locale?: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale = routing.defaultLocale } = await params;
  const t = await getTranslations({ locale, namespace: "Projects" });
  return {
    title: t("title"),
  };
}

export default function ProjectsPage({
  params
}: Props) {
  const { locale = routing.defaultLocale, category }  = use(params)
  setRequestLocale(locale);
  const categories = PROJECT_CATEGORIES;
  const initialProjects = getDataByCategory(locale, category);
  const t = useTranslations("Projects");

  return (
    <section
      data-testid="projects"
      className="container flex flex-col items-center justify-center gap-4"
    >
      <h1 className="font-monospace flex flex-row items-center gap-4 text-3xl dark:text-white lg:text-4xl">
        <CodeBracketIcon className="h-8 w-8" />
        {t("title")}
      </h1>
      <div className="mx-10 flex w-full flex-row flex-wrap items-center justify-center gap-2">
        <Link
          className={`link ${
            !category
              ? "bg-slate-500 text-white"
              : "text-black hover:text-slate-500 dark:text-white dark:hover:text-slate-500"
          } rounded px-2 py-1`}
          aria-label={`link to all projects`}
          href={`/projects`}
          locale={locale}
        >
          {t("categories.all")}
        </Link>
        {categories.map((item) => (
          <Link
            key={item.value}
            className={`link ${
              category === item.value
                ? "bg-slate-500 text-white"
                : "text-black hover:text-slate-500 dark:text-white dark:hover:text-slate-500"
            } rounded px-2 py-1`}
            aria-label={`link to ${item.name} projects`}
            href={`/projects/c/${item.value}`}
            locale={locale}
          >
            {item.name}
          </Link>
        ))}
      </div>
      {initialProjects.length ? (
        <ProjectExplorerList projects={initialProjects} />
      ) : (
        <ProjectListEmpty />
      )}
    </section>
  );
}
