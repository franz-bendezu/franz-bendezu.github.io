import { FC } from "react";
import ProjectCard from "./Card";
import { ProjectListEmpty } from "./ListEmpty";
import { IProject, IProjectTechnology } from "@/interfaces/project";

type Props = {
  projects: IProject[];
  onClickProjectTech?: (project: IProject, tech: IProjectTechnology) => void;
  selectedTechs?: IProjectTechnology[];
};

export const ProjectList: FC<Props> = ({
  projects,
  selectedTechs,
  onClickProjectTech: handleClickTech,
}) => {
  return (
    <div className="flex w-full flex-col flex-wrap items-stretch md:flex-row">
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard
            key={project.title}
            code={project.code}
            links={project.links}
            title={project.title}
            description={project.shortDescription}
            image={project.banner}
            technologies={project.technologies}
            selectedTechs={selectedTechs}
            onClickTech={
              handleClickTech
                ? (tech: IProjectTechnology) => handleClickTech(project, tech)
                : undefined
            }
          />
        ))
      ) : (
        <ProjectListEmpty />
      )}
    </div>
  );
};
