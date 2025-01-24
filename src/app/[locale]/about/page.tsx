import { useTranslations } from "next-intl";
import { WORK_EXPERIENCES, EDUCATION_EXPERIENCES } from "@/constants/experiences";
import { ExperienceWorkCard } from "@/components/experience/WorkCard";
import { ExperienceEducationCard } from "@/components/experience/EducationCard";

export default function AboutPage() {
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
    <div>
      <h1>{t("title")}</h1>
      <section>
        <h2>{t("work.title")}</h2>
        {translatedWorkExperiences.map((experience) => (
          <ExperienceWorkCard key={experience.id} {...experience} />
        ))}
      </section>
      <section>
        <h2>{t("education.title")}</h2>
        {translatedEducationExperiences.map((experience) => (
          <ExperienceEducationCard key={experience.id} {...experience} />
        ))}
      </section>
    </div>
  );
}
