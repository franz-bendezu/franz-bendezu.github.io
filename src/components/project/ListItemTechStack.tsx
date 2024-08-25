import Image from "next-image-export-optimizer";
import { IProjectTechnology } from "../../interfaces/project";

const TechStackItem: React.FC<{
  tech: IProjectTechnology;
  onClick?: () => void;
  isSelected?: boolean;
}> = ({ tech: tag, onClick, isSelected }) => {
  return (
    <button
      className={
        "flex flex-row gap-2 rounded px-2 py-1 text-xs outline outline-1 lg:text-sm" +
        (isSelected
          ? " bg-slate-500 text-white"
          : " text-black hover:text-slate-500 dark:text-white dark:hover:text-slate-500")
      }
      onClick={onClick}
    >
      {tag.logo && (
        <Image
          src={tag.logo}
          alt={""}
          className="h-4 w-4"
          width="16"
          height="16"
        />
      )}
      {tag.name}
    </button>
  );
};

const ProjectListItemTechStack: React.FC<{
  techs: IProjectTechnology[];
  selectedTechs?: IProjectTechnology[];
  onClickTech?: (tech: IProjectTechnology) => void;
}> = ({ techs: tags, onClickTech, selectedTechs }) => {
  return (
    tags && (
      <div className="mt-2 flex flex-row flex-wrap justify-between gap-2">
        {tags.map((tag) => (
          <TechStackItem
            key={tag.code}
            tech={tag}
            isSelected={selectedTechs?.some((t) => t.code === tag.code)}
            onClick={onClickTech ? () => onClickTech(tag) : undefined}
          />
        ))}
      </div>
    )
  );
};

export default ProjectListItemTechStack;
