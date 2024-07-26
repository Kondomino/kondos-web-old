
"use client";
import React, { FC, useState } from "react";
import NavItem from "../NavItem/NavItem";
import Nav from "../Nav/Nav";

const KondoTabsNavigation: FC<{type: string}> = ({type}) => {

    const TABS = ["Casas", "Prédios", "Chácaras"];

    const [tabActive, setTabActive] = useState(TABS[0]);

    //setTabActive(type);
    
    const handleClickTab = (item: string) => {
      if (item === tabActive) {
        return;
      }
      setTabActive(item);
    };
    
  return (
    <Nav
        containerClassName="w-full overflow-x-auto hiddenScrollbar"
        className="sm:space-x-2 rtl:space-x-reverse"
        >
        {TABS.map((item, index) => (
        <NavItem
            isActive={item === tabActive}
            key={index}
            onClick={() => handleClickTab(item)}
        >
            {item}
        </NavItem>
        ))}
    </Nav>
  );
};

export default KondoTabsNavigation;














