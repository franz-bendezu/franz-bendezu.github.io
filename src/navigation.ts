import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { LOCALES } from "./constants/locales";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales: LOCALES.map((locale) => locale.locale),
  });
