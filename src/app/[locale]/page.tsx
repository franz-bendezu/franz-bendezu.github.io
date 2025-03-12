import { use } from "react";
import { DEFAULT_LOCALE } from "@/constants/locales";
import HomePresentation from "../../components/home/Presentation";
import { unstable_setRequestLocale } from "next-intl/server";
import { Skills } from "@/components/home/Skills";
import { LastProjects } from "@/components/home/LastProjects";
import { getDataByCategory } from "./projects/page";

export default function LocaleRootPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale = DEFAULT_LOCALE } = use(params);

  unstable_setRequestLocale(locale);
  const projects = getDataByCategory(locale).sort((a, b) => a.position - b.position).slice(0, 3);
  return (
    <>
      <HomePresentation />
      <Skills></Skills>
      <LastProjects projects={projects}></LastProjects>
    </>
  );
}
