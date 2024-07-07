import type {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { PROJECTS, PROJECT_CATEGORIES } from "../../constants/projects";
import {
  CodeBracketIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import ProjectCard from "../../components/project/Card";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PROJECT_TECHNOLOGIES,
  PROJECT_TECHNOLOGY_CATEGORY,
} from "../../constants/projects/techologies";
import { useEffect, useState } from "react";
import { IProject, IProjectTechnology } from "../../interfaces/project";
import Image from "next/image";

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const category = ctx.params?.category;
  return {
    props: {
      projects: (category
        ? PROJECTS.filter((project) => project.categoryCode === category)
        : PROJECTS
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
        }),
      categories: PROJECT_CATEGORIES,
    },
  };
};

const ProjectsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props,
) => {
  const { categories } = props;
  const pathname = usePathname();
  const [projects, setProjects] = useState(props.projects);
  const [filterTechs, setFilterTech] = useState<IProjectTechnology[]>([]);

  const handleClickTech = (tech: IProjectTechnology) => {
    if (filterTechs.some((t) => t.code === tech.code)) {
      setFilterTech(filterTechs.filter((t) => t.code !== tech.code));
    } else {
      setFilterTech([...filterTechs, tech]);
    }
  };

  useEffect(() => {
    if (filterTechs.length > 0) {
      setProjects(
        props.projects.filter((project) =>
          project.technologies.some((tech) =>
            filterTechs.some((filterTech) => filterTech.code === tech.code),
          ),
        ),
      );
    } else {
      setProjects(props.projects);
    }
  }, [filterTechs, props.projects]);

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
                ? "bg-blue-500 text-white"
                : "text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-500"
            } rounded px-2 py-1`}
            aria-label={`link to ${category.name} projects`}
            href={`/projects/c/${category.value}`}
          >
            {category.name}
          </Link>
        ))}
      </div>
      <div className="mt-4 flex flex-row flex-wrap justify-center gap-2">
        {filterTechs.length > 0 && (
          <div className="flex flex-row flex-wrap items-center justify-center gap-2">
            <span className="text-sm dark:text-white">Filtrado por:</span>
            {filterTechs.map((tech) => (
              <button
                key={tech.code}
                className="flex flex-row gap-2 rounded px-2 py-1 text-xs outline outline-1 lg:text-sm"
                onClick={() => handleClickTech(tech)}
              >
                {tech.logo && (
                  <Image
                    src={tech.logo}
                    alt={""}
                    className="h-4 w-4"
                    width="16"
                    height="16"
                  />
                )}
                {tech.name}
                <XCircleIcon className="h-4 w-4" />
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="mb-10 flex w-full flex-col flex-wrap items-stretch md:flex-row">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard
              key={project.title}
              links={project.links}
              title={project.title}
              description={project.shortDescription}
              image={project.image}
              technologies={project.technologies}
              selectedTechs={filterTechs}
              onClickTech={handleClickTech}
            />
          ))
        ) : (
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <ExclamationTriangleIcon className="h-12 w-12 text-yellow-500 dark:text-yellow-500" />
            <p className="text-2xl dark:text-white">
              No hay proyectos para mostrar
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
export default ProjectsPage;
