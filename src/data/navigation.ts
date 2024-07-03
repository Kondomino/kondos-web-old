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
    href: "/" as Route,
    name: "Condomínios",
    type: "dropdown",
    children: [
      {
        id: randomId(),
        href: "/" as Route,
        query: "type=casas",
        name: "Casas",
      },
      {
        id: randomId(),
        href: "/" as Route,
        query: "type=chacaras",
        name: "Chácaras",
      },
      {
        id: randomId(),
        href: "/" as Route,
        query: "type=predios",
        name: "Prédios",
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
