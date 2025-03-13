"use client";
import React, { MouseEvent, ReactNode, forwardRef } from "react";
import { Link, usePathname } from "../../../i18n/navigation";
import { DownArrowIcon } from "../icon/DownIcon";
import { Locale } from "next-intl";
import { routing } from "../../../i18n/routing";

interface NavLinkProps {
  href: string;
  className?: string;
  activeClass?: string;
  exact?: boolean;
  children: ReactNode;
  locale?: Locale;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink: React.FC<NavLinkProps> = forwardRef(
  function NavLink(props, ref) {
    const {
      href,
      exact = false,
      children,
      activeClass = "text-gray-800 font-bold dark:text-gray-400",
      className = "",
      locale = routing.defaultLocale,
      onClick,
    } = props;
    const pathname = usePathname();
    const isActive = exact ? pathname === href : pathname.startsWith(href);
    const currentClass = `${className} text-base px-3 py-2 ${
      isActive ? activeClass : "text-gray-600 dark:text-white font-normal"
    }`;

    return (
      <Link
        href={href}
        className={currentClass}
        locale={locale}
        onClick={onClick}
      >
        {children} {isActive && <DownArrowIcon />}
      </Link>
    );
  },
);

export default NavLink;
