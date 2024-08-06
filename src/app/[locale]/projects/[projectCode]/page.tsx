import { DEFAULT_LOCALE } from "@/constants/locales";
import { PROJECTS } from "@/constants/projects";
import { PROJECT_TECHNOLOGIES } from "@/constants/project-techologies";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { ProjectSummary } from "@/components/project/Summary";
import { ProjectOverview } from "@/components/project/Overview";
import { ProjectGoals } from "@/components/project/Goals";
import { ProjectTechs } from "@/components/project/Techs";
import { ProjectFeatures } from "@/components/project/Features";

export const generateStaticParams = () => {
  const params: { projectCode: string }[] = [];
  for (const project of PROJECTS) {
    params.push({ projectCode: project.code });
  }
  return params;
};

type Props = {
  params: {
    projectCode: string;
    locale?: string;
  };
};

export default function ProjectPage({
  params: { locale = DEFAULT_LOCALE, projectCode },
}: Props) {
  unstable_setRequestLocale(locale);
  const project = PROJECTS.find((project) => project.code === projectCode);
  const techs = PROJECT_TECHNOLOGIES.filter((tech) =>
    project?.technologyCodes.includes(tech.code),
  );
  const t = useTranslations("Project");
  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <div className="flex min-h-[100dvh] flex-col gap-8 md:gap-8 lg:gap-16">
      <ProjectSummary project={project} />

      {project.description && (
        <ProjectOverview description={project.description} />
      )}
      <div>
        <div className="grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
          <ProjectTechs techs={techs} />
          <ProjectGoals goals={project.projectGoals} />
        </div>
      </div>

      <ProjectFeatures project={project} />
    </div>
  );
}
