import { useTranslations } from "next-intl";
import { ProjectList } from "../project/List";

export default function LastProjects() {
  const t = useTranslations("Home.lastProjects");
  return (
    <section id="projects" className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {t("title")}
            </h2>
            <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("description")}
            </p>
          </div>
        </div>
        <ProjectList projects={[]} />
      </div>
    </section>
  );
}
