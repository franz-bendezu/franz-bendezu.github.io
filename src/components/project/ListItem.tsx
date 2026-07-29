import type {
  IProjectImage,
  IProjectLink,
  IProjectTechnology,
} from "@/interfaces/project";
import Card from "@/components/ui/Card";
import ProjectListItemTechStack from "./ListItemTechStack";
import { LinkList } from "./ListItemLinkList";

interface Props {
  image?: IProjectImage;
  title: string;
  description: string;
  selectedTechs?: IProjectTechnology[];
  technologies: IProjectTechnology[];
  links?: IProjectLink[];
  code: string;
  projectBasePath: string;
  viewProjectLabel: string;
  onClickTech?: (tech: IProjectTechnology) => void;
}

export default function ProjectListItem({
  links,
  image,
  title,
  description,
  technologies,
  onClickTech,
  selectedTechs,
  code,
  projectBasePath,
  viewProjectLabel,
}: Props) {
  const label = viewProjectLabel.replace("{title}", title);
  return (
    <section className="w-full p-4 md:w-1/2 lg:w-1/3">
      <Card
        dataTestId="card"
        className="flex h-full flex-col justify-between bg-white dark:bg-gray-800 dark:text-white"
      >
        <a href={`${projectBasePath}/${code}`} aria-label={label} title={label}>
          <div className="relative flex h-40 w-full items-center overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-700">
            {image ? (
              <img
                className="mx-auto max-h-40 w-auto object-cover object-center"
                src={image.src}
                alt={image.alt}
                width="256"
                height="256"
                loading="lazy"
              />
            ) : (
              <div className="h-40 w-full" />
            )}
          </div>
          <div className="mt-1 p-2">
            <h2 className="text-xl font-semibold text-black lg:text-2xl dark:text-white">
              {title}
            </h2>
            <p className="text-sm text-black lg:text-base dark:text-white">
              {description}
            </p>
          </div>
        </a>
        <div className="mt-1 p-2">
          <ProjectListItemTechStack
            techs={technologies}
            onClickTech={onClickTech}
            selectedTechs={selectedTechs}
          />
        </div>
        {!!links?.length && <LinkList links={links} />}
      </Card>
    </section>
  );
}
