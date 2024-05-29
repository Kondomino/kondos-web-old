import { NavItemType } from "@/components/Navigation/NavigationItem";
import { Route } from "@/routers/types";
import _ from "lodash";

const randomId = _.uniqueId;

export const MEGAMENU_TEMPLATES: NavItemType[] = [
  // home pages ---------
  {
    id: randomId(),
    href: "/",
    name: "Home",
  },

  // single pages ---------
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
];
