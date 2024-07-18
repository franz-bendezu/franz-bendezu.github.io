import Image from "next/image";
import TechStack from "./TechStack";
import Card from "../ui/Card";
import { IProjectLink, IProjectTechnology } from "../../interfaces/project";
import { LinkList } from "./LinkList";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  image?: {
    src: string;
    alt: string;
  };
  title?: string;
  description: string;
  selectedTechs?: IProjectTechnology[];
  technologies: IProjectTechnology[];
  links?: IProjectLink[];
  children?: HTMLElement | HTMLElement[];
  code?: string;
  onClickTech: (tech: IProjectTechnology) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const {
    links,
    image,
    title,
    description,
    technologies,
    onClickTech,
    selectedTechs,
    code,
  } = props;
  const t = useTranslations("Projects");
  return (
    <section className="w-full p-4 md:w-1/2 lg:w-1/3">
      <Card
        data-testId="card"
        className="flex h-full flex-col justify-between bg-white dark:bg-gray-800 dark:text-white"
      >
        <Link
          aria-label="link to project"
          href={`/projects/${code}`}
          title={t("viewProjectLink", { title })}
        >
          <div className="relative flex h-40 w-full items-center overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-700">
            {image ? (
              <Image
                className="mx-auto max-h-40 w-full object-cover object-center"
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                loading="eager"
              />
            ) : (
              <div className="h-40 w-full"></div>
            )}
          </div>
          <div className="mt-1 p-2">
            <h3 className="text-xl text-blue-500 lg:text-2xl">{title}</h3>
            <p className="text-sm text-black dark:text-white lg:text-base">
              {description}
            </p>
          </div>
        </Link>
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
