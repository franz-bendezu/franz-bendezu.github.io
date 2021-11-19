import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import ThemeSwitch from "../ThemeSwtich";
import NavLink from "./NavLink";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { Popover, Transition } from "@headlessui/react";

const Navigation: React.FC = () => {
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [routes] = useState([
    {
      title: "Inicio",
      path: "/",
      exact: true,
    },
    {
      title: "Proyectos",
      path: "/projects",
      exact: true,
    },
    {
      title: "Experiencia",
      path: "/experience",
      exact: true,
    },
    {
      title: "Contacto",
      path: "/contact",
      exact: true,
    },
  ]);

  return (
    <nav className="sticky top-0 z-20 py-2 bg-white md:py-6  dark:bg-black">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link href="/">
          <a
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
            }
          >
            Franz Bendezu
          </a>
        </Link>
        <div className=" flex items-center ">
          <Popover as={Fragment}>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              {routes.map((route) => (
                <NavLink
                  href={route.path}
                  key={route.title}
                  exact={route.exact}
                >
                  {" "}
                  {route.title}
                </NavLink>
              ))}
            </div>
            <div className="mr-2 flex items-center">
              <ThemeSwitch></ThemeSwitch>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button
                className="  p-2 inline-flex items-center 
              justify-center 
              text-gray-600
              dark:text-white
              focus:outline-none  "
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {routes.map((route) => (
                      <NavLink
                        activeClass="dark:bg-gray-400 font-bold "
                        className="block px-3 py-2 rounded-md text-base font-medium 
                        dark:text-white
                        dark:hover:text-gray-700
                        text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        href={route.path}
                        key={route.title}
                        exact={route.exact}
                      >
                        {" "}
                        {route.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
