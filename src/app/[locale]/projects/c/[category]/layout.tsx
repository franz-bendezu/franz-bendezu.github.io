import { use } from "react";
import { DEFAULT_LOCALE } from "@/constants/locales";
import { PROJECT_CATEGORIES } from "@/constants/projects";
import { unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
export const generateStaticParams = () => {
  const params: { category: string }[] = [];
  for (const category of PROJECT_CATEGORIES) {
    params.push({ category: category.value });
  }
  return params;
};

type Props = {
  children: ReactNode;
  params:Promise< { locale: string; category?: string }>;
};

export default function ProjectCategoryLayout({
  children,
  params,
}: Props) {
  const { locale = DEFAULT_LOCALE}  = use(params)
  unstable_setRequestLocale(locale);
  return <>{children}</>;
}
