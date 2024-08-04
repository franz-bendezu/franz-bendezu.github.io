"use client";
import { IProject, IProjectTechnology } from "@/interfaces/project";
import { XCircleIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ProjectList } from "./List";

type Props = {
  projects: IProject[];
};

export const ProjectExplorerList: React.FC<Props> = ({
  projects: initialProjects,
}) => {
  const [projects, setProjects] = useState(initialProjects);
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
        initialProjects.filter((project) =>
          project.technologies.some((tech) =>
            filterTechs.some((filterTech) => filterTech.code === tech.code),
          ),
        ),
      );
    } else {
      setProjects(initialProjects);
    }
  }, [filterTechs, initialProjects]);
  return (
    <>
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
      <ProjectList
        projects={projects}
        onClickProjectTech={(_project: IProject, tech: IProjectTechnology) =>
          handleClickTech(tech)
        }
        selectedTechs={filterTechs}
      />
    </>
  );
};
