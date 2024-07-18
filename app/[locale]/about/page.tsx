import { Metadata, NextPage } from "next";
import {
  WORK_EXPERIENCES,
  EDUCATION_EXPERIENCES,
} from "../../../constants/experiences";
import Card from "../../../components/ui/Card";
import {
  Bars4Icon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/20/solid";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { DEFAULT_LOCALE } from "@/constants/locales";

export const metadata: Metadata = {
  title: "About",
};

type Props = {
  params: { locale?: string };
};

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
      <div className="mt-4 p-4">
        <h2 className="mb-6 flex flex-row items-center gap-3 text-left text-2xl font-semibold lg:text-3xl">
          <BuildingLibraryIcon className="h-8 w-8" />
          Educación
        </h2>
        <div className="container">
          <div className="flex grid-cols-12 flex-col text-gray-50 md:grid">
            {EDUCATION_EXPERIENCES.map((p) => (
              <div key={p.id} className="flex md:contents">
                <div className="relative col-start-2 col-end-4 mr-10 md:mx-auto">
                  <div className="flex h-full w-6 items-center justify-center">
                    <div className="pointer-events-none h-full w-1 bg-blue-500"></div>
                  </div>
                  <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-blue-500 text-center shadow">
                    <i className="fas fa-check-circle text-white"></i>
                  </div>
                </div>
                <Card className="col-start-4 col-end-12 my-4 mr-auto w-full bg-blue-500 px-4 py-3">
                  <h3 className="mb-1 text-lg font-semibold">{p.degree}</h3>
                  <a
                    href={p.link ?? ""}
                    className={`font-semibold ${p?.link ? "text-primary" : "text-foreground"}`}
                  >
                    {p.institution}
                  </a>
                  <div className="mb-4 text-sm uppercase">{p.location}</div>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <h2 className="mb-6 flex flex-row items-center gap-3 text-left text-2xl font-semibold lg:text-3xl">
          <BriefcaseIcon className="h-8 w-8" /> Experiencia Laboral
        </h2>
        <div className="container">
          <div className="flex grid-cols-12 flex-col text-gray-50 md:grid">
            {WORK_EXPERIENCES.map((p) => (
              <div key={p.id} className="flex md:contents">
                <div className="relative col-start-2 col-end-4 mr-10 md:mx-auto">
                  <div className="flex h-full w-6 items-center justify-center">
                    <div className="pointer-events-none h-full w-1 bg-blue-500"></div>
                  </div>
                  <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-blue-500 text-center shadow">
                    <i className="fas fa-check-circle text-white"></i>
                  </div>
                </div>
                <Card className="col-start-4 col-end-12 my-4 mr-auto w-full bg-blue-500 px-4 py-3">
                  <h3 className="mb-1 text-lg font-semibold">{p.position}</h3>
                  <a
                    href={p.link ?? ""}
                    className={`font-semibold ${p?.link ? "text-primary" : "text-foreground"}`}
                  >
                    {p.company}
                  </a>
                  <div className="mb-4 text-sm uppercase">
                    {p.start} - {p.end}
                  </div>
                  <div className="pl-3 text-justify leading-tight">
                    <ul className="prose dark:prose-invert list-disc text-sm">
                      {p.tasks.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutPage;
