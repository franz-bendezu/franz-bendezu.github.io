import type { IProject, IProjectTechnology } from "@/interfaces/project";
import ProjectListItemTechStack from "./ListItemTechStack";
interface Props {
  project: IProject;
  selectedTechs?: IProjectTechnology[];
  projectBasePath: string;
  viewProjectLabel: string;
  onClickTech?: (tech: IProjectTechnology) => void;
}
export default function ProjectListItem({
  project,
  selectedTechs,
  projectBasePath,
  viewProjectLabel,
  onClickTech,
}: Props) {
  const label = viewProjectLabel.replace("{title}", project.title);
  const initials = project.title
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
  const period = [project.start?.slice(0, 4), project.end?.slice(0, 4)]
    .filter(Boolean)
    .join("–");
  return (
    <article
      data-testid="card"
      className="border-divider bg-surface-raised shadow-editorial group hover:border-accent flex min-w-0 flex-col overflow-hidden rounded-2xl border hover:-translate-y-1"
    >
      <a
        href={`${projectBasePath}/${project.code}`}
        aria-label={label}
        title={label}
        className="block"
      >
        <div className="border-divider bg-surface-muted aspect-video overflow-hidden border-b">
          {project.banner ? (
            <img
              className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
              src={project.banner.src}
              alt={project.banner.alt}
              width="640"
              height="360"
              loading="lazy"
            />
          ) : (
            <div className="text-accent-strong flex h-full items-center justify-center font-mono text-4xl font-bold">
              {initials}
            </div>
          )}
        </div>
        <div className="p-5 pb-2">
          <div className="text-content-muted flex justify-between gap-3 font-mono text-[0.68rem] tracking-wider uppercase">
            <span>{project.categoryCode}</span>
            <span>{period}</span>
          </div>
          <h2 className="mt-3 text-xl leading-tight font-bold">
            {project.title}
          </h2>
          {project.role && (
            <p className="text-accent-strong mt-2 text-xs font-semibold">
              {project.role}
            </p>
          )}
          <p className="text-content-muted mt-3 line-clamp-3 text-sm leading-relaxed">
            {project.shortDescription}
          </p>
        </div>
      </a>
      <div className="mt-auto p-5 pt-4">
        <ProjectListItemTechStack
          techs={project.technologies.slice(0, 3)}
          onClickTech={onClickTech}
          selectedTechs={selectedTechs}
        />
      </div>
    </article>
  );
}
