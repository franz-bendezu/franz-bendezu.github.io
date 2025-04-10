"use client";
import React, { Fragment } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import NavLink from "./NavLink";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { Locale, useTranslations } from "next-intl";
import { IRouteNavbar } from "@/interfaces/routes";

const NavbarMobile: React.FC<{
  routes: IRouteNavbar[];
  locale: Locale;
}> = ({ routes, locale }) => {
  const t = useTranslations("Navigation");
  return (
    <Menu as={Fragment}>
      <div className="-mr-2 flex items-center md:hidden">
        <MenuButton className="inline-flex items-center justify-center p-2 text-gray-600 focus:outline-none dark:text-white">
          {({ active }) => (
            <>
              <span className="sr-only">
                {active ? "Open main menu" : "Close main menu"}
              </span>
              {active ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars4Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </>
          )}
        </MenuButton>
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
        <MenuItems
          anchor="bottom end"
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 dark:bg-gray-800">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {routes.map((route) => (
                <MenuItem key={route.title}>
                  {({ close }) => (
                    <NavLink
                      activeClass="dark:bg-gray-700 font-bold bg-gray-200 dark:hover:text-white"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-800 dark:text-white dark:hover:text-gray-600"
                      href={route.path}
                      exact={route.exact}
                      locale={locale}
                      onClick={close}
                    >
                      {t(route.title)}
                    </NavLink>
                  )}
                </MenuItem>
              ))}
            </div>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default NavbarMobile;
