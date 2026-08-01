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
    <div className="mt-6 grid w-full gap-5 md:grid-cols-2 lg:grid-cols-3">
      {projects.length ? (
        projects.map((project) => (
          <ProjectListItem
            key={project.code}
            project={project}
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
