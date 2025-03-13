import { IRouteNavbar } from "@/interfaces/routes";

export const ROUTES_NAVBAR = [
  {
    title: "index",
    path: "/",
    exact: true,
  },
  {
    title: "projects",
    path: "/projects",
    exact: true,
  },
  {
    title: "about",
    path: "/about",
    exact: true,
  },
  {
    title: "contact",
    path: "/contact",
    exact: true,
  },
] satisfies IRouteNavbar[];
