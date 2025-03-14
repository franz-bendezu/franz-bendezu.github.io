import { use } from "react";
import { PROJECTS } from "@/constants/projects";
import { PROJECT_TECHNOLOGIES } from "@/constants/project-techologies";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { ProjectSummary } from "@/components/project/Summary";
import { ProjectOverview } from "@/components/project/Overview";
import { ProjectGoals } from "@/components/project/Goals";
import { ProjectTechsList } from "@/components/project/TechsList";
import { ProjectFeatures } from "@/components/project/Features";
import { ProjectImagesCarousel } from "@/components/project/Images";
import { routing } from "../../../../../i18n/routing";
import { Locale } from "next-intl";

export const generateStaticParams = () => {
  const params: { projectCode: string }[] = [];
  for (const project of PROJECTS) {
    params.push({ projectCode: project.code });
  }
  return params;
};

type Props = {
  params: Promise<{
    projectCode: string;
    locale?: Locale;
  }>;
};

export default function ProjectPage({ params }: Props) {
  const { locale = routing.defaultLocale, projectCode } = use(params);
  setRequestLocale(locale);
  const project = PROJECTS.find((project) => project.code === projectCode && project.lang === locale);
  const techs = PROJECT_TECHNOLOGIES.filter((tech) =>
    project?.technologyCodes.includes(tech.code),
  );
  const t = useTranslations("Project");
  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <div className="container flex min-h-[100dvh] flex-col gap-8 md:gap-8 lg:gap-16">
      <ProjectSummary project={project} />

      {project.description && (
        <ProjectOverview description={project.description} />
      )}
      <div>
        <div className="grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
          <ProjectTechsList techs={techs} />
          <ProjectGoals goals={project.projectGoals} />
        </div>
      </div>
      <div>
        <div className="grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
          <ProjectFeatures project={project} />
          {project.images && <ProjectImagesCarousel images={project.images} />}
        </div>
      </div>
    </div>
  );
}
