import { DEFAULT_LOCALE } from "@/constants/locales";
import { PROJECTS } from "@/constants/projects";
import { PROJECT_TECHNOLOGIES } from "@/constants/project-techologies";
import { CheckIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";

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
      <section className="border-b">
        <div className="grid gap-10 px-4 py-6 md:px-6 md:py-8 lg:grid-cols-2 lg:gap-20 lg:py-12">
          <div className="order-2 space-y-4 lg:order-1">
            <div className="inline-block rounded-lg bg-slate-200 px-3 py-1 text-sm dark:bg-slate-700">
              {project.categoryCode}
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {project.shortDescription}
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {project.links?.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  className="inline-block rounded-md bg-slate-500 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600 dark:bg-slate-700 dark:hover:bg-slate-800"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          {project.banner && (
            <div className="relative order-1 flex items-center justify-center lg:order-2">
              <Image
                src={project.banner.src}
                alt={project.banner.alt}
                width="800"
                height="450"
                className="mx-auto aspect-video w-max overflow-hidden rounded-xl object-cover object-center"
              />
            </div>
          )}
        </div>
      </section>
      <section>
        <div className="space-y-12 px-4 md:px-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {t("overview")}
            </h2>
            <p className="mt-4 md:text-xl">{project.description}</p>
          </div>
        </div>
      </section>
      <section>
        <div className="grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("technologies")}
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {techs.map((tech) => (
                <div
                  key={tech.code}
                  className="rounded-lg bg-slate-200 p-4 text-center dark:bg-slate-700"
                >
                  {tech?.logo && (
                    <Image
                      src={tech.logo}
                      alt={""}
                      className="mx-auto h-8 w-8"
                      width="32"
                      height="32"
                    />
                  )}
                  <p className="mt-2 text-sm font-medium">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("goals")}
            </h2>
            <ul className="mt-6 space-y-4">
              {project.projectGoals.map((goal) => (
                <li key={goal.title}>
                  <div className="flex flex-row items-start gap-4">
                    <CheckIcon className="mt-1 h-8 w-8 text-slate-500" />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-bold">{goal.title}</h3>
                      <p className="">{goal.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("features")}
            </h2>
            <div className="flex flex-col gap-2">
              {project.keyFeatures.map((feature) => (
                <div
                  className="flex flex-col gap-1 rounded-lg bg-slate-200 p-6 dark:bg-slate-700"
                  key={feature.title}
                >
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative ">
            <TabGroup className="flex flex-col gap-4">
              <TabPanels className="mt-3">
                {project.images?.map(({ src, description }) => (
                  <TabPanel
                    key={src}
                    className="aspect-video rounded-xl p-3 dark:bg-slate-700 bg-gray-200 relative"
                  >
                    <Image
                      src={src}
                      alt={project.title}
                      width="800"
                      height="450"
                      className="aspect-video  overflow-hidden rounded-xl object-contain object-center"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-center">
                      {description}
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
              <TabList className="flex gap-4">
                {project.images?.map(({ src }) => (
                  <Tab
                    key={src}
                    className="rounded-lg bg-slate-200 p-2 dark:bg-slate-700"
                  >
                    <Image
                      className="h-full w-full"
                      src={src}
                      alt={project.title}
                      width="200"
                      height="200"
                    />
                  </Tab>
                ))}
              </TabList>
            </TabGroup>
          </div>
        </div>
      </section>
    </div>
  );
}
