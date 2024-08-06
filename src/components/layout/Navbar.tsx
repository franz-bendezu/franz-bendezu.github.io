import Link from "next/link";
import React from "react";
import { ROUTES_NAVBAR } from "../../constants/navbar";
import { NavbarNavigation } from "./NavbarNavigation";
import { CodeBracketIcon, CodeBracketSquareIcon } from "@heroicons/react/20/solid";

const Navigation: React.FC<{ locale: string }> = ({ locale }) => {
  const routes = ROUTES_NAVBAR;

  return (
    <nav className="sticky top-0 z-20 border-b-[1px] border-slate-700/90 bg-white !bg-opacity-30 py-2 backdrop-blur-lg backdrop-filter dark:bg-gray-900 md:py-6">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link
          href="/"
          locale={locale}
          className={
            "flex gap-2 font-bold uppercase tracking-wider text-gray-900 transition-colors hover:text-slate-500 dark:text-white"
          }
        >
          <CodeBracketSquareIcon className="h-6 w-6" />
          Franz Bendezu
        </Link>
        <NavbarNavigation locale={locale} routes={routes} />
      </div>
    </nav>
  );
};

export default Navigation;
