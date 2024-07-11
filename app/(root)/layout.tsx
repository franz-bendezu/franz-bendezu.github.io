import { ReactNode } from "react";
import _RootLayout from "../[locale]/layout";
import { Metadata } from "next";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Franz Bendezu - Desarrollador de Software",
  description: "Bienvenido a mi sitio web personal",
};

export default function RootLayout({ children }: Props) {
  return <_RootLayout params={{ locale: "en" }}>{children}</_RootLayout>;
}
