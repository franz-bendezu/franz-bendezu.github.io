import Image from "next/image";
import TechStack from "./TechStack";
import Card from "../ui/Card";
import { IProjectLink, IProjectTechnology } from "../../interfaces/project";
import { LinkList } from "./LinkList";

interface ProjectCardProps {
  image: {
    src: string;
    alt: string;
  };
  title?: string;
  description: string;
  selectedTechs?: IProjectTechnology[];
  technologies: IProjectTechnology[];
  links?: IProjectLink[];
  children?: HTMLElement | HTMLElement[];
  onClickTech: (tech: IProjectTechnology) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { links, image, title, description, technologies, onClickTech, selectedTechs } = props;
  return (
    <section className="w-full p-4 md:w-1/2 lg:w-1/3">
      <Card
        data-testId="card"
        className="flex h-full flex-col justify-between bg-white dark:bg-gray-800 dark:text-white"
      >
        <a aria-label="link to project">
          <div className="relative flex items-end overflow-hidden rounded-xl">
            <Image
              className="mx-auto"
              src={image.src}
              alt={image.alt}
              width={400}
              height={400}
              loading="eager"
            />
          </div>
          <div className="mt-1 p-2">
            <h3 className="text-xl text-blue-500 lg:text-2xl">{title}</h3>
            <p className="text-sm text-black dark:text-white lg:text-base">
              {description}
            </p>
          </div>
        </a>
        <div className="mt-1 p-2">
          <TechStack
            techs={technologies}
            onClickTech={onClickTech}
            selectedTechs={selectedTechs}
          />
        </div>

        {links?.length && <LinkList links={links} />}
      </Card>
    </section>
  );
};
export default ProjectCard;
