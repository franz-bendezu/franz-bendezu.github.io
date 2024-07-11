import { ReactNode } from "react";
import _RootLayout from "../[locale]/layout";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <_RootLayout params={{ locale: "en" }}>{children}</_RootLayout>;
}
