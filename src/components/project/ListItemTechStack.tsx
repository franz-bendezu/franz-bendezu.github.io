import type { IProjectTechnology } from "@/interfaces/project";

function TechStackItem({
  tech,
  onClick,
  isSelected,
}: {
  tech: IProjectTechnology;
  onClick?: () => void;
  isSelected?: boolean;
}) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      className={
        "flex flex-row gap-2 rounded px-2 py-1 text-xs outline outline-1 lg:text-sm" +
        (isSelected
          ? " bg-slate-500 text-white"
          : " text-black hover:text-slate-500 dark:text-white dark:hover:text-slate-500")
      }
      onClick={onClick}
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
  );
}

export default function ProjectListItemTechStack({
  techs,
  selectedTechs,
  onClickTech,
}: {
  techs: IProjectTechnology[];
  selectedTechs?: IProjectTechnology[];
  onClickTech?: (tech: IProjectTechnology) => void;
}) {
  return (
    <div className="mt-2 flex flex-row flex-wrap justify-between gap-2">
      {techs.map((tech) => (
        <TechStackItem
          key={tech.code}
          tech={tech}
          isSelected={selectedTechs?.some(
            (selected) => selected.code === tech.code,
          )}
          onClick={onClickTech ? () => onClickTech(tech) : undefined}
        />
      ))}
    </div>
  );
}
