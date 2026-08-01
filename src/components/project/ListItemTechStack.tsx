import type { IProjectTechnology } from "@/interfaces/project";

export default function ProjectListItemTechStack({
  techs,
}: {
  techs: IProjectTechnology[];
  selectedTechs?: IProjectTechnology[];
  onClickTech?: (tech: IProjectTechnology) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {techs.map((tech) => (
        <span
          key={tech.code}
          className="border-divider flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.68rem]"
        >
          {tech.logo && (
            <img
              src={tech.logo}
              alt=""
              className="h-3.5 w-3.5"
              width="14"
              height="14"
            />
          )}
          {tech.name}
        </span>
      ))}
    </div>
  );
}
