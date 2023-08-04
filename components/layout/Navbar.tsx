import Link from "next/link";
import React, { Fragment, useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { ROUTES_NAVBAR } from "../../constants/navbar";
import ThemeSwitch from "../ui/ThemeSwtich";

const Navigation: React.FC = () => {
  const [routes] = useState(ROUTES_NAVBAR);

  return (
    <nav className="sticky top-0 z-20 py-2 bg-white md:py-6 border-b-[1px] border-slate-700/90  dark:bg-gray-900 backdrop-filter backdrop-blur-lg !bg-opacity-30">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link
          href="/"
          className={
            "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
          }
        >
          Franz Bendezu
        </Link>
        <div className="flex items-center">
          <NavbarDesktop routes={routes} />
          <div className="mr-2 flex items-center">
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
