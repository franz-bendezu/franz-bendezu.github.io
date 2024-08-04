import { DEFAULT_LOCALE } from "@/constants/locales";
import HomePresentation from "../../components/home/Presentation";
import { unstable_setRequestLocale } from "next-intl/server";
import { Skills } from "@/components/home/Skills";
import LastProjects from "@/components/home/LastProjects";

export default function LocaleRootPage({
  params: { locale = DEFAULT_LOCALE },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <HomePresentation />
      <Skills></Skills>
      <LastProjects></LastProjects>
    </>
  );
}
