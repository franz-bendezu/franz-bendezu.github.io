import { CheckIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const ProjectGoals: FC<{
    goals: { title: string; description: string }[];
  }> = ({ goals }) => {
    const t = useTranslations("Project");
    return (
      <section>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {t("goals")}
        </h2>
        <ul className="mt-6 space-y-4">
          {goals.map((goal) => (
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
      </section>
    );
  };