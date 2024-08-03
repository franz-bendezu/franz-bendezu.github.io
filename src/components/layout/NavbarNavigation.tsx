"use client";
import ThemeSwitch from "../ui/ThemeSwtich";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { NavbarToggleLang } from "./NavbarToggleLang";

export const NavbarNavigation: React.FC<{
  locale: string;
  routes: {
    title: string;
    path: string;
    exact: boolean;
  }[];
}> = ({ locale, routes }) => {
  return (
    <div className="flex items-center">
      <NavbarDesktop routes={routes} locale={locale} />
      <div className="mr-2 flex items-center">
        <NavbarToggleLang locale={locale} />
        <ThemeSwitch />
      </div>
      <NavbarMobile routes={routes} locale={locale} />
    </div>
  );
};
