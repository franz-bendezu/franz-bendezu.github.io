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
        <Menu.Button className=" inline-flex items-center justify-center p-2 text-gray-600 focus:outline-none     dark:text-white  ">
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
        <Menu.Items className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 dark:bg-gray-800">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {routes.map((route) => (
                <Menu.Item key={route.title}>
                  {({ active }) => (
                    <NavLink
                      activeClass="dark:bg-gray-700 font-bold bg-gray-200 dark:hover:text-white"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50                  hover:text-gray-800 dark:text-white dark:hover:text-gray-600"
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
