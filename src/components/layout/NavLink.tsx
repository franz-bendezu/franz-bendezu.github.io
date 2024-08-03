"use client";
import React, { MouseEvent, ReactNode, forwardRef } from "react";
import { Link, usePathname } from "@/navigation";
import { DownArrowIcon } from "../icon/DownIcon";

interface NavLinkProps {
  href: string;
  className?: string;
  activeClass?: string;
  exact?: boolean;
  children: ReactNode;
  locale?: string;
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
      locale = "",
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
