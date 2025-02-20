import { ReactNode } from "react";
import { Metadata } from "next";
const isProd = process.env.NODE_ENV === "production";

type Props = {
  children: ReactNode[];
};

export const metadata: Metadata = {
  metadataBase: isProd ? new URL("https://franzbendezu.me") : undefined,
  title: {
    template: "%s | Franz Bendezu - Desarrollador de Software",
    default: "Inicio",
  },
  category: "website",
  alternates: {
    canonical: "/",
    languages: {
      es: "/es",
      en: "/en",
    },
  },
  keywords: [
    "Desarollador de Software",
    "Software Developer",
    "Vue.js",
    "React.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Next.js",
    "Nuxt.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "AWS",
    "Azure",
    "Google Cloud",
  ],
};
export default function RootLayout({ children }: Props) {
  return children;
}
