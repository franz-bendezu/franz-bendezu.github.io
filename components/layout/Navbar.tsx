import Link from "next/link";
import React, {  useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { ROUTES_NAVBAR } from "../../constants/navbar";
import ThemeSwitch from "../ui/ThemeSwtich";

const Navigation: React.FC = () => {
  const [routes] = useState(ROUTES_NAVBAR);
  
  return (
    <nav className="sticky top-0 z-20 border-b-[1px] border-slate-700/90 bg-white !bg-opacity-30 py-2  backdrop-blur-lg backdrop-filter dark:bg-gray-900 md:py-6">
      <div className="container mx-auto flex items-center justify-between px-4 lg:max-w-4xl">
        <Link
          href="/"
          className={
            "font-medium uppercase tracking-wider text-gray-900 transition-colors hover:text-sky-500 dark:text-white"
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
