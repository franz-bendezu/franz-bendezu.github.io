import React from "react";
import NavLink from "./NavLink";
import { IRouteNavbar } from "../../interfaces/routes";

const NavbarDesktop: React.FC<{
  routes: IRouteNavbar[];
}> = ({ routes }) => {
  return (
    <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
      {routes.map((route) => (
        <NavLink
          href={route.path}
          key={route.title}
          exact={route.exact}
          activeClass=" font-bold dark:white bg-gray-300 dark:bg-gray-800 rounded-md"
        >
          {route.title}
        </NavLink>
      ))}
    </div>
  );
};

export default NavbarDesktop;
