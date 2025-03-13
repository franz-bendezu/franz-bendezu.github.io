import { ThemeProvider } from "next-themes";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { routing } from "../../../i18n/routing";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale = routing.defaultLocale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: {
      template: t("title.template"),
      default: t("title.default"),
    },
    description: t("description"),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale = routing.defaultLocale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
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
        >
          <ThemeProvider attribute="class" defaultTheme="light">
            <div className="flex min-h-screen flex-col bg-gradient-to-t from-gray-50 to-gray-200 dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-800">
              <Navbar locale={locale} />
              <main className="flex flex-grow flex-col items-center align-middle antialiased">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
