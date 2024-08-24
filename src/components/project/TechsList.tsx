import { IBaseProjectTechnology } from "@/interfaces/project";
import { useTranslations } from "next-intl";
import { FC } from "react";
import Image from "next/image";

export const ProjectTechsList: FC<{ techs: IBaseProjectTechnology[] }> = ({
    techs,
  }) => {
    const t = useTranslations("Project");
    return (
      <section>
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
      </section>
    );
  };
  