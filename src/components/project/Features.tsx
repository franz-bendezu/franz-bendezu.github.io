import { IBaseProject } from "@/interfaces/project";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { ProjectImagesCarousel } from "./Images";


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
          <ProjectImagesCarousel project={project} />
        </div>
      </div>
    </section>
  );
};
