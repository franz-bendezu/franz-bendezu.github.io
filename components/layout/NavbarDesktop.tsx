import React from "react";
import NavLink from "./NavLink";
import { IRouteNavbar } from "../../interfaces/routes";

const NavbarDesktop: React.FC<{
  routes: IRouteNavbar[];
}> = ({ routes }) => {
  return (
    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
      {routes.map((route) => (
        <NavLink href={route.path} key={route.title} exact={route.exact}>
          {route.title}
        </NavLink>
      ))}
    </div>
  );
};

export default NavbarDesktop;
