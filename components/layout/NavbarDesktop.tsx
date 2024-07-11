import React from "react";
import NavLink from "./NavLink";
import { IRouteNavbar } from "../../interfaces/routes";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import Link from "next/link";
import { LanguageIcon } from "@heroicons/react/20/solid";

const NavbarDesktop: React.FC<{
  routes: IRouteNavbar[];
}> = ({ routes }) => {
  const t = useTranslations("Navigation");


  return (
    <div className="hidden md:gap-2 md:flex lg:gap-3">
      {routes.map((route) => (
        <NavLink
          href={route.path}
          key={route.title}
          exact={route.exact}
          activeClass=" font-bold dark:white bg-gray-300 dark:bg-gray-800 rounded-md"
        >
          {t(route.title)}
        </NavLink>
      ))}
    </div>
  );
};

export default NavbarDesktop;
