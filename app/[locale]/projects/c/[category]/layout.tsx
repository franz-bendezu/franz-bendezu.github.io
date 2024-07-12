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
  params: { locale: string; category?: string };
};

export default function RootLayout({ children, params }: Props) {
  unstable_setRequestLocale(params.locale);
  return <>{children}</>;
}
