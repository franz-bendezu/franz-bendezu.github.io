import { DEFAULT_LOCALE } from "@/constants/locales";
import HomePresentation from "../../components/home/Presentation";
import { unstable_setRequestLocale } from "next-intl/server";

export default function LocaleRootPage({
  params: { locale = DEFAULT_LOCALE },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <HomePresentation />;
}
