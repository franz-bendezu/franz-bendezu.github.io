import { useMemo, useState } from "react";
import type { IProject, IProjectTechnology } from "@/interfaces/project";
import { ProjectList } from "./List";
import Card from "@/components/ui/Card";

export interface ProjectExplorerLabels {
  filteredBy: string;
  empty: string;
  viewProject: string;
  filterTech?: string;
  clearFilters?: string;
  resultCount?: string;
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
        )
        .sort((a, b) => a.name.localeCompare(b.name)),
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
  const toggleTech = (tech: IProjectTechnology) =>
    setSelectedCodes((current) =>
      current.includes(tech.code)
        ? current.filter((code) => code !== tech.code)
        : [...current, tech.code],
    );

  return (
    <div data-project-explorer className="mt-6 w-full">
      <Card className="p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-content-muted font-mono text-xs font-bold tracking-widest uppercase">
            {labels.filterTech ?? "Filter by technology"}
          </p>
          <p aria-live="polite" className="text-content-muted text-sm">
            {(labels.resultCount ?? "{count} projects").replace(
              "{count}",
              String(projects.length),
            )}
          </p>
        </div>
        <div className="mt-4 flex max-h-28 flex-wrap gap-2 overflow-y-auto pb-1">
          {technologies.map((tech) => (
            <button
              key={tech.code}
              type="button"
              aria-pressed={selectedCodes.includes(tech.code)}
              className="border-divider hover:border-accent aria-pressed:border-accent aria-pressed:bg-accent-soft aria-pressed:text-accent-strong flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold"
              onClick={() => toggleTech(tech)}
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
              {tech.name}
            </button>
          ))}
        </div>
        {!!selectedTechs.length && (
          <div className="border-divider mt-4 flex flex-wrap items-center gap-3 border-t pt-4">
            <span className="text-content-muted text-sm">
              {labels.filteredBy}
            </span>
            <span className="text-sm font-semibold">
              {selectedTechs.map((tech) => tech.name).join(", ")}
            </span>
            <button
              type="button"
              onClick={() => setSelectedCodes([])}
              className="text-accent-strong ml-auto text-sm font-bold hover:underline"
            >
              {labels.clearFilters ?? "Clear filters"}
            </button>
          </div>
        )}
      </Card>
      <ProjectList
        projects={projects}
        projectBasePath={projectBasePath}
        emptyLabel={labels.empty}
        viewProjectLabel={labels.viewProject}
      />
    </div>
  );
}
