import type { IProject } from "@/interfaces/project";
import Card from "@/components/ui/Card";

export type ProjectCardVariant = "featured" | "compact";

export interface ProjectCardLabels {
  viewProject: string;
  impact?: string;
  caseStudy?: string;
}

interface Props {
  project: IProject;
  href: string;
  labels: ProjectCardLabels;
  variant?: ProjectCardVariant;
}

function ProjectImage({ project }: { project: IProject }) {
  const initials = project.title
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <div className="border-divider bg-surface-muted aspect-video overflow-hidden border-b">
      {project.banner ? (
        <img
          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
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
  );
}

function TechnologyList({
  project,
  featured = false,
}: {
  project: IProject;
  featured?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.technologies.slice(0, 3).map((tech) => (
        <span
          key={tech.code}
          className={`border-divider flex items-center rounded-full border py-1 font-mono text-[0.68rem] ${
            featured ? "px-2" : "gap-1.5 px-2.5"
          }`}
        >
          {!featured && tech.logo && (
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

export default function ProjectCard({
  project,
  href,
  labels,
  variant = "compact",
}: Props) {
  const label = labels.viewProject.replace("{title}", project.title);
  const period = [project.start?.slice(0, 4), project.end?.slice(0, 4)]
    .filter(Boolean)
    .join("–");
  const featured = variant === "featured";

  return (
    <Card
      variant="interactive"
      dataTestId={featured ? undefined : "card"}
      data-featured-project={project.featured ? "true" : undefined}
      className="group flex min-w-0 flex-col overflow-hidden"
    >
      <a
        href={href}
        aria-label={label}
        title={featured ? undefined : label}
        className={featured ? "flex h-full flex-col" : "block"}
      >
        <ProjectImage project={project} />
        <div className={featured ? "flex flex-1 flex-col p-5" : "p-5 pb-2"}>
          <div
            className={`text-content-muted flex items-center justify-between gap-3 font-mono tracking-wider uppercase ${
              featured ? "text-xs" : "text-[0.68rem]"
            }`}
          >
            <span>{project.categoryCode}</span>
            <span>{period}</span>
          </div>
          <h3
            className={`${featured ? "mt-4" : "mt-3"} text-xl leading-tight font-bold`}
          >
            {project.title}
          </h3>
          {project.role && (
            <p
              className={`text-accent-strong mt-2 font-semibold ${featured ? "text-sm" : "text-xs"}`}
            >
              {project.role}
            </p>
          )}
          <p className="text-content-muted mt-3 line-clamp-3 text-sm leading-relaxed">
            {project.shortDescription}
          </p>
          {featured && project.outcomes[0] && (
            <div className="border-accent mt-5 border-l-2 pl-3">
              {labels.impact && (
                <span className="text-accent-strong font-mono text-xs font-bold tracking-[0.12em] uppercase">
                  {labels.impact}
                </span>
              )}
              <p className="mt-1 text-sm font-medium">{project.outcomes[0]}</p>
            </div>
          )}
          {featured && (
            <>
              <div className="mt-auto pt-6">
                <TechnologyList project={project} featured />
              </div>
              <span className="text-accent-strong mt-6 inline-flex items-center gap-2 text-sm font-bold">
                {labels.caseStudy ?? label}
                <span aria-hidden="true">→</span>
              </span>
            </>
          )}
        </div>
      </a>
      {!featured && (
        <div className="mt-auto p-5 pt-4">
          <TechnologyList project={project} />
        </div>
      )}
    </Card>
  );
}
