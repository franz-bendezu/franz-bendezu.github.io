import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import NavLink from "./NavLink";
import { Bars4Icon } from "@heroicons/react/20/solid";
import { IRouteNavbar } from "../../interfaces/routes";

const NavbarMobile: React.FC<{
  routes: IRouteNavbar[];
}> = ({ routes }) => {
  return (
    <Menu as={Fragment}>
      <div className="-mr-2 flex items-center md:hidden">
        <Menu.Button className=" p-2 inline-flex items-center justify-center text-gray-600 dark:text-white     focus:outline-none  ">
          <span className="sr-only">Open main menu</span>
          <Bars4Icon className="h-6 w-6" aria-hidden="true" />
        </Menu.Button>
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
        <Menu.Items className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-md bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {routes.map((route) => (
                <Menu.Item key={route.title}>
                  {({ active }) => (
                    <NavLink
                      activeClass="dark:bg-gray-700 font-bold bg-gray-200 dark:hover:text-white"
                      className="block px-3 py-2 rounded-md text-base font-medium dark:text-white dark:hover:text-gray-600                  text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                      href={route.path}
                      exact={route.exact}
                    >
                      {route.title}
                    </NavLink>
                  )}
                </Menu.Item>
              ))}
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavbarMobile;
