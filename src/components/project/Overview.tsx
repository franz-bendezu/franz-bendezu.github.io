import { useTranslations } from "next-intl";
import { FC } from "react";

export const ProjectOverview: FC<{ description: string }> = ({
    description,
  }) => {
    const t = useTranslations("Project");
    return (
      <section>
        <div className="space-y-12 px-4 md:px-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {t("overview")}
            </h2>
            <p className="mt-4 md:text-xl">{description}</p>
          </div>
        </div>
      </section>
    );
  };