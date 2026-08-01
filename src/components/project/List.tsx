import type { IProject } from "@/interfaces/project";
import ProjectCard from "./ProjectCard";
import { ProjectListEmpty } from "./ListEmpty";
interface Props {
  projects: IProject[];
  projectBasePath: string;
  emptyLabel: string;
  viewProjectLabel: string;
}
export function ProjectList({
  projects,
  projectBasePath,
  emptyLabel,
  viewProjectLabel,
}: Props) {
  return (
    <div className="mt-6 grid w-full gap-5 md:grid-cols-2 lg:grid-cols-3">
      {projects.length ? (
        projects.map((project) => (
          <ProjectCard
            key={project.code}
            project={project}
            href={`${projectBasePath}/${project.code}`}
            labels={{ viewProject: viewProjectLabel }}
            variant="compact"
          />
        ))
      ) : (
        <ProjectListEmpty label={emptyLabel} />
      )}
    </div>
  );
}
