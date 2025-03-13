import { use } from "react";
import { Metadata, NextPage } from "next";
import {
  WORK_EXPERIENCES,
  EDUCATION_EXPERIENCES,
} from "../../../constants/experiences";
import {
  Bars4Icon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/20/solid";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { DEFAULT_LOCALE } from "@/constants/locales";
import { ExperienceWorkCard } from "@/components/experience/WorkCard";
import { ExperienceEducationCard } from "@/components/experience/EducationCard";
import Certifications from "@/components/about/Certifications";

type Props = {
  params: Promise<{ locale?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale = DEFAULT_LOCALE } = await params;
  const t = await getTranslations({ locale, namespace: "About" });
  return {
    title: t("title"),
  };
}

export default function AboutPage({ params }: Props) {
  const { locale = DEFAULT_LOCALE } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("About");

  const translatedWorkExperiences = WORK_EXPERIENCES.map((experience) => ({
    ...experience,
    company: t(`work.experiences.${experience.id}.company`),
    location: t(`work.experiences.${experience.id}.location`),
    position: t(`work.experiences.${experience.id}.position`),
    start: t(`work.experiences.${experience.id}.start`),
    end: t(`work.experiences.${experience.id}.end`),
    tasks: experience.tasks.map((task, index) => t(`work.experiences.${experience.id}.tasks.${index}`)),
  }));

  const translatedEducationExperiences = EDUCATION_EXPERIENCES.map((experience) => ({
    ...experience,
    institution: t(`education.experiences.${experience.id}.institution`),
    location: t(`education.experiences.${experience.id}.location`),
    degree: t(`education.experiences.${experience.id}.degree`),
    start: t(`education.experiences.${experience.id}.start`),
    end: t(`education.experiences.${experience.id}.end`),
  }));

  return (
    <section
      data-testid="projects"
      className="container flex flex-col items-center justify-center gap-4"
    >
      <h1 className="font-monospace flex flex-row items-center gap-4 text-center text-3xl dark:text-white lg:text-4xl">
        <Bars4Icon className="h-8 w-8" />
        {t("title")}
      </h1>
      <div className="mt-4 flex flex-col gap-4 p-4">
        <div className="container">
          <h2 className="mb-6 flex flex-row items-center gap-3 text-left text-2xl font-semibold lg:text-3xl">
            <BriefcaseIcon className="h-8 w-8" />
            {t("work.title")}
          </h2>
          <div className="flex grid-cols-12 flex-col md:grid">
            {translatedWorkExperiences.map((p) => (
              <ExperienceWorkCard key={p.id} {...p} />
            ))}
          </div>
        </div>
        <div className="container">
          <h2 className="mb-6 flex flex-row items-center gap-3 text-left text-2xl font-semibold lg:text-3xl">
            <BuildingLibraryIcon className="h-8 w-8" />
            {t("education.title")}
          </h2>
          <div className="flex grid-cols-12 flex-col md:grid">
            {translatedEducationExperiences.map((p) => (
              <ExperienceEducationCard key={p.id} {...p} />
            ))}
          </div>
        </div>
        <div className="container">
          <h2 className="mb-6 flex flex-row items-center gap-3 text-left text-2xl font-semibold lg:text-3xl">
            <BuildingLibraryIcon className="h-8 w-8" />
            {t("courseCertifications.title")}
          </h2>
          <Certifications/>
        </div>
      </div>
    </section>
  );
}
