import { PROJECT_CATEGORIES } from "@/constants/projects";
import { setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { routing } from "../../../../../../i18n/routing";
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

export default async function ProjectCategoryLayout({
  children,
  params,
}: Props) {
  const { locale = routing.defaultLocale}  = await params
  setRequestLocale(locale);
  return <>{children}</>;
}
