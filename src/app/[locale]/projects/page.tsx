import { PROJECTS, PROJECT_CATEGORIES } from "../../../constants/projects";
import { CodeBracketIcon } from "@heroicons/react/20/solid";
import {
  PROJECT_TECHNOLOGIES,
  PROJECT_TECHNOLOGY_CATEGORY,
} from "../../../constants/projects/techologies";
import { IProject } from "../../../interfaces/project";
import { ProjectList } from "@/components/project/List";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { DEFAULT_LOCALE } from "@/constants/locales";
import { Link } from "@/navigation";
import { Metadata } from "next";

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


export async function generateMetadata({
  params: { locale = DEFAULT_LOCALE },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Projects" });
  return {
    title: t("title"),
  };
}


export default function ProjectsPage({
  params: { locale = DEFAULT_LOCALE, category },
}: Props) {
  unstable_setRequestLocale(locale);
  const categories = PROJECT_CATEGORIES;
  const initialProjects = getDataByCategory(category);
  const t = useTranslations("Projects");

  return (
    <section
      data-testid="projects"
      className="flex flex-col items-center justify-center gap-4"
    >
      <h1 className="font-monospace flex flex-row items-center gap-4 text-3xl dark:text-white lg:text-4xl">
        <CodeBracketIcon className="h-8 w-8" />
        {t("title")}
      </h1>
      <div className="mx-10 flex w-full flex-row flex-wrap items-center justify-center gap-2">
        <Link
          className={`link ${
            !category
              ? "bg-blue-500 text-white"
              : "text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-500"
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
                ? "bg-blue-500 text-white"
                : "text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-500"
            } rounded px-2 py-1`}
            aria-label={`link to ${item.name} projects`}
            href={`/projects/c/${item.value}`}
            locale={locale}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <ProjectList projects={initialProjects} />
    </section>
  );
}
