import { use } from "react";
import { DEFAULT_LOCALE } from "@/constants/locales";
import HomePresentation from "../../components/home/Presentation";
import { setRequestLocale } from "next-intl/server";
import { Skills } from "@/components/home/Skills";
import { LastProjects } from "@/components/home/LastProjects";
import { getDataByCategory } from "./projects/page";
import { Locale } from "next-intl";

export default function LocaleRootPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale = DEFAULT_LOCALE } = use(params);
  setRequestLocale(locale);
  
  const projects = getDataByCategory(locale).sort((a, b) => a.position - b.position).slice(0, 3);
  return (
    <>
      <HomePresentation />
      <Skills></Skills>
      <LastProjects projects={projects}></LastProjects>
    </>
  );
}
