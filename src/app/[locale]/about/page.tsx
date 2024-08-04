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
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { DEFAULT_LOCALE } from "@/constants/locales";
import { ExperienceWorkCard } from "@/components/experience/WorkCard";
import { ExperienceEducationCard } from "@/components/experience/EducationCard";

type Props = {
  params: { locale?: string };
};

export async function generateMetadata({
  params: { locale = DEFAULT_LOCALE },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "About" });
  return {
    title: t("title"),
  };
}

const AboutPage: NextPage<Props> = ({
  params: { locale = DEFAULT_LOCALE },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("About");
  return (
    <section
      data-testid="projects"
      className="flex flex-col items-center justify-center gap-4"
    >
      <h1 className="font-monospace flex flex-row items-center gap-4 text-center text-3xl dark:text-white lg:text-4xl">
        <Bars4Icon className="h-8 w-8" />
        {t("title")}
      </h1>
      <div className="mt-4 flex flex-col gap-4 p-4">
        <div className="container">
          <h2 className="mb-6 flex flex-row items-center gap-3 text-left text-2xl font-semibold lg:text-3xl">
            <BuildingLibraryIcon className="h-8 w-8" />
            {t("education.title")}
          </h2>
          <div className="flex grid-cols-12 flex-col md:grid">
            {EDUCATION_EXPERIENCES.map((p) => (
              <ExperienceEducationCard key={p.id} {...p} />
            ))}
          </div>
        </div>
        <div className="container">
          <h2 className="mb-6 flex flex-row items-center gap-3 text-left text-2xl font-semibold lg:text-3xl">
            <BriefcaseIcon className="h-8 w-8" /> 
            {t("work.title")}
          </h2>
          <div className="flex grid-cols-12 flex-col md:grid">
            {WORK_EXPERIENCES.map((p) => (
              <ExperienceWorkCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutPage;
