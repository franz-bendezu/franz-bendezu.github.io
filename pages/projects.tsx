import { NextPage } from "next";
import { PROJECTS } from "../constants/projects";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import ProjectCard from "../components/project/Card";

const Projects: NextPage = () => {
  return (
    <section
      data-testid="projects"
      className="my-5 flex flex-col items-center justify-center"
    >
      <h1 className="font-monospace text-3xl dark:text-white lg:text-4xl">
        Proyectos
      </h1>
      <span className="mb-5 h-1 w-32 bg-blue-500"></span>
      <div className="mb-10 flex w-full flex-col flex-wrap items-center md:flex-row">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            url={project.link}
            title={project.title}
            description={project.description}
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
export default Projects;
