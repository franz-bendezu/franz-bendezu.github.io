"use client";
import Link from "next/link";
import React from "react";
import { LanguageIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { LOCALES } from "@/constants/locales";

export const NavbarToggleLang: React.FC<{ locale: string }> = ({ locale }) => {
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
    <Link
      className="mr-2 flex items-center rounded bg-amber-400/80 px-3 py-2 font-bold text-white hover:bg-amber-400"
      href={otherPath}
      locale={otherLocale?.key}
      scroll={false}
    >
      <span className="mr-1">
        <LanguageIcon className="h-5 w-5" />
      </span>
      {t("switchLocale", { locale: otherLocale?.value })}
    </Link>
  );
};
