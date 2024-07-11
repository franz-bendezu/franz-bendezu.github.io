import React from "react";
import NavLink from "./NavLink";
import { IRouteNavbar } from "../../interfaces/routes";
import { useTranslations } from "next-intl";

const NavbarDesktop: React.FC<{
  routes: IRouteNavbar[];
}> = ({ routes }) => {
  const t = useTranslations("Navigation");
  return (
    <div className="hidden md:mx-2 md:block md:space-x-4 lg:mx-3">
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
