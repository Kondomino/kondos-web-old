import React, { FC } from "react";
import { DEMO_AUTHORS } from "@/data/authors";
import { DEMO_CONVENIENCES } from "@/data/posts";
import { DEMO_CATEGORIES, DEMO_TAGS } from "@/data/taxonomies";
import { ConvenienceType } from "@/data/types";
import WidgetConveniences from "@/components/WidgetPosts/WidgetConveniences";
import WidgetConveniencesExtra from "@/components/WidgetPosts/WidgetConveniencesExtra";

export interface SidebarProps {
  className?: string;
}

const widgetConveniences: ConvenienceType[] = DEMO_CONVENIENCES.filter((_, i) => i > 2 && i < 7);
const widgetBasics: ConvenienceType[] = DEMO_CONVENIENCES.filter((item) => item.type == 'basic');
const widgetExtra: ConvenienceType[] = DEMO_CONVENIENCES.filter((item) => item.type == 'extra');
const tags = DEMO_TAGS.filter((_, i) => i > 5);
const categories = DEMO_CATEGORIES.filter((_, i) => i > 7 && i < 13);
const authors = DEMO_AUTHORS.filter((_, i) => i < 5);

export const Sidebar: FC<SidebarProps> = ({ className = "space-y-6 " }) => {
  return (
    <div className={`nc-SingleSidebar ${className}`}>
      <WidgetConveniences posts={widgetConveniences} title="Conveniências"/>
      <WidgetConveniencesExtra posts={widgetExtra}/>
      <WidgetConveniences posts={widgetBasics} title="Básicos" />
    </div>
  );
};
