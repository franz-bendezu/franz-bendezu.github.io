import Image from "next/image";
import { IProjectTechnology } from "../../interfaces/project";

const TechStackItem: React.FC<{ tech: IProjectTechnology }> = ({ tech: tag }) => {
  return (
    <div className="flex flex-row gap-2 rounded px-2 py-1 text-xs outline outline-1 lg:text-sm">
      {tag.logo && (
        <Image
          src={tag.logo}
          alt={""}
          className="h-4 w-4 "
          width="16"
          height="16"
        />
      )}
      {tag.name}
    </div>
  );
};

const TechStack: React.FC<{ techs: IProjectTechnology[] }> = ({ techs: tags }) => {
  return (
    tags && (
      <div className="mt-2 flex flex-row flex-wrap justify-between gap-2">
        {tags.map((tag) => (
          <TechStackItem key={tag.code} tech={tag} />
        ))}
      </div>
    )
  );
};

export default TechStack;
