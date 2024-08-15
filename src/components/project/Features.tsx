import { IBaseProject } from "@/interfaces/project";
import { TabGroup, TabPanels, TabPanel, TabList, Tab } from "@headlessui/react";
import { useTranslations } from "next-intl";
import { FC } from "react";
import Image from "next/image";
import { ProjectFullScreeImg } from "./FullScreenImg";

export const ProjectFeatures: FC<{ project: IBaseProject }> = ({ project }) => {
  const t = useTranslations("Project");
  return (
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

        <div className="relative">
          <TabGroup className="flex flex-col gap-4">
            <TabPanels className="mt-3">
              {project.images?.map(({ src, description }) => (
                <TabPanel
                  key={src}
                  className="relative aspect-video rounded-xl bg-gray-200 p-3 dark:bg-slate-700"
                >
                  <div className="absolute right-0 top-0 p-2">
                    <ProjectFullScreeImg src={src} description={description} />
                  </div>
                  <Image
                    src={src}
                    alt={project.title}
                    width="800"
                    height="450"
                    className="aspect-video overflow-hidden rounded-xl object-contain object-center"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-center text-white">
                    {description}
                  </div>
                </TabPanel>
              ))}
            </TabPanels>
            <TabList className="flex gap-4">
              {project.images?.map(({ src }) => (
                <Tab
                  key={src}
                  className="max-h-20 rounded-lg bg-slate-200 p-2 dark:bg-slate-700"
                >
                  <Image
                    className="h-full w-full object-contain"
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
  );
};
