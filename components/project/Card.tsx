import Image from "next/image";
import TagList from "../ui/TagList";
import Card from "../ui/Card";

interface ProjectCardProps {
  url?: string;
  image: {
    src: string;
    alt: string;
  };
  title?: string;
  description: string;
  tags: string[];
  children?: HTMLElement | HTMLElement[];
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { url, image, title, description, tags } = props;
  return (
    <section className="w-full p-4 md:w-1/2 lg:w-1/3">
      <Card
        data-testId="card"
        className="bg-white dark:bg-gray-800 dark:text-white"
      >
        <a href={url} aria-label="link to project">
          <div className="relative flex items-end overflow-hidden rounded-xl">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={400}
              loading="eager"
            />
          </div>
          <div className="mt-1 p-2">
            <h3 className="text-xl text-blue-500 lg:text-2xl">{title}</h3>
            <p
              className="text-sm text-black dark:text-white lg:text-base
            "
            >
              {description}
            </p>
            <TagList tags={tags} />
          </div>
        </a>
      </Card>
    </section>
  );
};
export default ProjectCard;
