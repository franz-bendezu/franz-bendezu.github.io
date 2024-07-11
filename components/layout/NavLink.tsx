import React, { ReactNode, forwardRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps {
  href: string;
  className?: string;
  activeClass?: string;
  exact?: boolean;
  children: ReactNode;
}

const DownArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-arrow-down inline-block h-3 w-3"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
    />
  </svg>
);

const NavLink: React.FC<NavLinkProps> = forwardRef(
  function NavLink(props, ref) {
    const {
      href,
      exact = false,
      children,
      activeClass = "text-gray-800 font-bold dark:text-gray-400",
      className = "",
    } = props;
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);
    const currentClass = `${className} flex text-base px-3 py-2 items-center ${
      isActive ? activeClass : "text-gray-600 dark:text-white font-normal"
    }`;

    return (
      <Link href={href} className={currentClass}>
        {children} {isActive && <DownArrowIcon />}
      </Link>
    );
  },
);

export default NavLink;
