import type { IProject, IProjectTechnology } from "@/interfaces/project";
import ProjectListItem from "./ListItem";
import { ProjectListEmpty } from "./ListEmpty";

interface Props {
  projects: IProject[];
  projectBasePath: string;
  emptyLabel: string;
  viewProjectLabel: string;
  selectedTechs?: IProjectTechnology[];
  onClickProjectTech?: (project: IProject, tech: IProjectTechnology) => void;
}

export function ProjectList({
  projects,
  projectBasePath,
  emptyLabel,
  viewProjectLabel,
  selectedTechs,
  onClickProjectTech,
}: Props) {
  return (
    <div className="flex w-full flex-col flex-wrap items-stretch md:flex-row">
      {projects.length ? (
        projects.map((project) => (
          <ProjectListItem
            key={project.code}
            code={project.code}
            links={project.links}
            title={project.title}
            description={project.shortDescription}
            image={project.banner}
            technologies={project.technologies}
            selectedTechs={selectedTechs}
            projectBasePath={projectBasePath}
            viewProjectLabel={viewProjectLabel}
            onClickTech={
              onClickProjectTech
                ? (tech) => onClickProjectTech(project, tech)
                : undefined
            }
          />
        ))
      ) : (
        <ProjectListEmpty label={emptyLabel} />
      )}
    </div>
  );
}
