import { PROJECT_CATEGORIES } from "@/constants/projects";
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
};

export default function RootLayout({ children }: Props) {
  return <>{children}</>;
}
