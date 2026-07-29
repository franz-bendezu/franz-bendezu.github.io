import { useMemo, useState } from "react";
import type { IProject, IProjectTechnology } from "@/interfaces/project";
import { ProjectList } from "./List";

export interface ProjectExplorerLabels {
  filteredBy: string;
  empty: string;
  viewProject: string;
}

interface Props {
  projects: IProject[];
  projectBasePath: string;
  labels: ProjectExplorerLabels;
}

export function ProjectExplorerList({
  projects: initialProjects,
  projectBasePath,
  labels,
}: Props) {
  const [selectedCodes, setSelectedCodes] = useState<string[]>([]);
  const technologies = useMemo(
    () =>
      initialProjects
        .flatMap((project) => project.technologies)
        .filter(
          (tech, index, all) =>
            all.findIndex((item) => item.code === tech.code) === index,
        ),
    [initialProjects],
  );
  const selectedTechs = technologies.filter((tech) =>
    selectedCodes.includes(tech.code),
  );
  const projects = selectedCodes.length
    ? initialProjects.filter((project) =>
        project.technologies.some((tech) => selectedCodes.includes(tech.code)),
      )
    : initialProjects;

  const toggleTech = (tech: IProjectTechnology) => {
    setSelectedCodes((current) =>
      current.includes(tech.code)
        ? current.filter((code) => code !== tech.code)
        : [...current, tech.code],
    );
  };

  return (
    <div data-project-explorer className="w-full">
      {!!selectedTechs.length && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm dark:text-white">{labels.filteredBy}</span>
          {selectedTechs.map((tech) => (
            <button
              key={tech.code}
              type="button"
              className="flex items-center gap-2 rounded bg-slate-500 px-2 py-1 text-xs text-white outline outline-1 lg:text-sm"
              onClick={() => toggleTech(tech)}
              aria-pressed="true"
            >
              {tech.logo && (
                <img
                  src={tech.logo}
                  alt=""
                  className="h-4 w-4"
                  width="16"
                  height="16"
                />
              )}
              {tech.name} <span aria-hidden="true">×</span>
            </button>
          ))}
        </div>
      )}
      <ProjectList
        projects={projects}
        projectBasePath={projectBasePath}
        emptyLabel={labels.empty}
        viewProjectLabel={labels.viewProject}
        selectedTechs={selectedTechs}
        onClickProjectTech={(_, tech) => toggleTech(tech)}
      />
    </div>
  );
}
