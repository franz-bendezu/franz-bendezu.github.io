import { ThemeProvider } from "next-themes";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { DEFAULT_LOCALE, LOCALES } from "@/constants/locales";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return LOCALES;
}
export const metadata: Metadata = {
  title: {
    template: "%s |  Franz Bendezu - Software Developer",
    default: "Home",
  },
  description: "Welcome to my personal website",
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function LocaleLayout({
  children,
  params: { locale = DEFAULT_LOCALE },
}: Props) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider
          formats={{
            dateTime: {
              short: {
                day: "numeric",
                month: "short",
                year: "numeric",
              },
            },
          }}
          messages={messages}
          locale={locale}
        >
          <ThemeProvider attribute="class" defaultTheme="light">
            <div className="flex min-h-screen flex-col bg-gradient-to-t from-gray-50 to-gray-200 dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-800">
              <Navbar locale={locale} />
              <main className="flex-grow justify-center align-middle">
                <div className="container mx-auto space-y-14 px-4 py-8 antialiased lg:space-y-24">
                  {children}
                </div>
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
