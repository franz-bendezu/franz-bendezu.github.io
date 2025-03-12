import { notFound } from "next/navigation";
import { PROJECTS } from "@/constants/projects";
import { IBaseProject } from "@/interfaces/project";
import { Project } from "@/components/project/Project";
import { Metadata } from "next";
import { getDictionary } from "@/utils/get-dictionary";
import { Locale } from "@/i18n-config";

interface Props {
  params: {
    projectCode: string;
    locale: Locale;
  };
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const { projectCode, locale } = params;
  const dict = await getDictionary(locale);

  const project = PROJECTS.find(
    (project) => project.code === projectCode && project.lang === locale
  );

  if (!project) {
    return;
  }

  return {
    title: {
      default: project.title,
      template: `%s | ${dict.Metadata.title.template}`,
    },
    description: project.shortDescription,
  };
}

export default function ProjectPage({ params }: Props) {
  const { projectCode, locale } = params;

  const project = PROJECTS.find(
    (project) => project.code === projectCode && project.lang === locale
  );

  if (!project) {
    notFound();
  }

  return <Project project={project as IBaseProject} />;
}
