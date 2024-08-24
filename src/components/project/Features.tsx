import { IBaseProject } from "@/interfaces/project";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const ProjectFeatures: FC<{ project: IBaseProject }> = ({ project }) => {
  const t = useTranslations("Project");

  return (
    <section className="space-y-6">
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
    </section>
  );
};
