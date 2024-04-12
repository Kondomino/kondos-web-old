import React, { FC } from "react";
import NavigationItem from "./NavigationItem";
import { MEGAMENU_TEMPLATES } from "@/data/navigation";

interface Props {
  className?: string;
}

const Navigation: FC<Props> = ({ className = "flex" }) => {
  return (
    <ul className={`nc-Navigation items-center ${className}`}>
      {MEGAMENU_TEMPLATES.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
};

export default Navigation;
