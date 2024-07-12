export { generateStaticParams } from "@/app/[locale]/projects/c/[category]/layout";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <>{children}</>;
}
