import { ArrowRightIcon } from "@heroicons/react/20/solid";
import {
  GetStaticProps,
  NextPage,
  InferGetStaticPropsType,
  GetStaticPaths,
} from "next";
import ProjectCard from "../../../components/project/Card";
import { PROJECTS, PROJECT_CATEGORIES } from "../../../constants/projects";
import { IProject } from "../../../interfaces/project";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const getStaticPaths = (async () => {
  return {
    paths: PROJECT_CATEGORIES.map((category) => ({
      params: { category: category.value },
    })),
    fallback: false, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export const getStaticProps: GetStaticProps<{
  projects: IProject[];
  categories: { name: string; value: string }[];
}> = async (ctx) => {
  const category = ctx.params?.category;
  return {
    props: {
      projects: PROJECTS.filter((project) => project.categoryCode === category),
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
      className="my-5 flex flex-col items-center justify-center"
    >
      <h1 className="font-monospace text-3xl dark:text-white lg:text-4xl">
        Proyectos
      </h1>
      <span className="mb-5 h-1 w-32 bg-blue-500"></span>{" "}
      <div className="mx-10 flex w-full flex-row flex-wrap items-center  justify-center gap-2">
        <Link
          className={`link ${
            pathname === `/projects`
              ? "bg-blue-500 text-white  "
              : "text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-500"
          } rounded px-2 py-1 `}
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
      <div className="mb-10 flex w-full flex-col flex-wrap items-center md:flex-row">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            url={project.link}
            title={project.title}
            description={project.shortDescription}
            image={project.image}
            tags={project.tags}
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
