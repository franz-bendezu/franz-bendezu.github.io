import "tailwindcss/tailwind.css";
import { ReactNode } from "react";
import { Metadata } from "next";
const isProd = process.env.NODE_ENV === "production";

type Props = {
  children: ReactNode[];
};

export const metadata: Metadata = {
  metadataBase: isProd ? new URL("https://franzbendezu.me") : undefined,
  alternates: {
    canonical: "/",
    languages: {
      es: "/es",
      en: "/en",
    },
  },
};
export default function RootLayout({ children }: Props) {
  return children;
}
