import { NavItemType } from "@/components/Navigation/NavigationItem";
import { Route } from "@/routers/types";
import _ from "lodash";

const randomId = _.uniqueId;

export const MEGAMENU_TEMPLATES: NavItemType[] = [
  // HOME PAGES
  {
    id: randomId(),
    href: "/",
    name: "Home",
  },

  // Condominios
  {
    id: randomId(),
    href: "/single/demo-slug" as Route,
    name: "Condomínios",
    type: "dropdown",
    children: [
      {
        id: randomId(),
        href: "/single/demo-slug" as Route,
        name: "Casas e Lotes",
      },
      {
        id: randomId(),
        href: "/single-2/demo-slug" as Route,
        name: "Chácaras",
      },
    ],
  },

    // ABOUT
    {
      id: randomId(),
      href: "/about",
      name: "Sobre Nós",
    },
];
