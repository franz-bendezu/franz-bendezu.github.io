import type {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { PROJECTS, PROJECT_CATEGORIES } from "../../constants/projects";
import { ArrowRightIcon, CodeBracketIcon } from "@heroicons/react/20/solid";
import ProjectCard from "../../components/project/Card";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PROJECT_TECHNOLOGIES,
  PROJECT_TECHNOLOGY_CATEGORY,
} from "../../constants/projects/techologies";

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const category = ctx.params?.category;
  return {
    props: {
      projects: (category
        ? PROJECTS.filter((project) => project.categoryCode === category)
        : PROJECTS
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
          if (a.priority && b.priority) {
            return b.priority - a.priority;
          }
          if (a.start && b.start) {
            return new Date(b.start).getTime() - new Date(a.start).getTime();
          }
          return 0;
        }),
      categories: PROJECT_CATEGORIES,
    },
  };
};

const ProjectsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props,
) => {
  const { projects, categories } = props;
  const pathname = usePathname();
  return (
    <section
      data-testid="projects"
      className="flex flex-col items-center justify-center gap-4"
    >
      <h1 className="font-monospace flex flex-row items-center gap-4 text-3xl dark:text-white lg:text-4xl">
        <CodeBracketIcon className="h-8 w-8" /> Proyectos
      </h1>
      <div className="mx-10 flex w-full flex-row flex-wrap items-center justify-center gap-2">
        <Link
          className={`link ${
            pathname === `/projects`
              ? "bg-blue-500 text-white"
              : "text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-500"
          } rounded px-2 py-1`}
          aria-label={`link to all projects`}
          href={`/projects`}
        >
          Todos
        </Link>
        {categories.map((category) => (
          <Link
            key={category.value}
            className={`link ${
              pathname === `/projects/c/${category.value}`
                ? "text-blue-500 dark:text-blue-500"
                : "text-black dark:text-white"
            } hover:text-blue-500 dark:hover:text-blue-500`}
            aria-label={`link to ${category.name} projects`}
            href={`/projects/c/${category.value}`}
          >
            {category.name}
          </Link>
        ))}
      </div>
      <div className="mb-10 flex w-full flex-col flex-wrap items-stretch md:flex-row">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            links={project.links}
            title={project.title}
            description={project.shortDescription}
            image={project.image}
            technologies={project.technologies}
          />
        ))}
      </div>
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener"
        className="flex flex-row text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-500"
        aria-label="link to repository"
      >
        Ver más en GitHub
        <ArrowRightIcon className="ml-1 h-6 w-6"></ArrowRightIcon>
      </a>
    </section>
  );
};
export default ProjectsPage;
