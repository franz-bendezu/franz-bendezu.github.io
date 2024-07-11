"use client";
import Link from "next/link";
import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { ROUTES_NAVBAR } from "../../constants/navbar";
import ThemeSwitch from "../ui/ThemeSwtich";
import { LanguageIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { LOCALES } from "@/constants/locales";

const Navigation: React.FC<{ locale: string }> = ({ locale }) => {
  const routes = ROUTES_NAVBAR;
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const otherLocale = LOCALES?.map((cur) => ({
    key: cur.locale,
    value: cur.lang.toUpperCase(),
  })).find((cur) => cur.key !== locale);
  const otherPath = pathname.startsWith(`/${locale}`)
    ? pathname.replace(`/${locale}`, `/${otherLocale?.key}`)
    : `/${otherLocale?.key}${pathname}`;

  return (
    <nav className="sticky top-0 z-20 border-b-[1px] border-slate-700/90 bg-white !bg-opacity-30 py-2 backdrop-blur-lg backdrop-filter dark:bg-gray-900 md:py-6">
      <div className="container mx-auto flex items-center justify-between px-4 ">
        <Link
          href="/"
          locale={locale}
          className={
            "font-medium uppercase tracking-wider text-gray-900 transition-colors hover:text-sky-500 dark:text-white"
          }
        >
          Franz Bendezu
        </Link>
        <div className="flex items-center">
          <NavbarDesktop routes={routes} />
          <div className="mr-2 flex items-center">
            <Link
              className="mr-2 flex items-center rounded bg-amber-400/80 px-3 py-2 font-bold text-white hover:bg-amber-400"
              href={otherPath}
              locale={otherLocale?.key}
            >
              <span className="mr-1">
                <LanguageIcon className="h-5 w-5" />
              </span>
              {t("switchLocale", { locale: otherLocale?.value })}
            </Link>
            <ThemeSwitch></ThemeSwitch>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
          <NavbarMobile routes={routes} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
