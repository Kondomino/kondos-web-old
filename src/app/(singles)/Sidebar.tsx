import React, { FC } from "react";
import { DEMO_AUTHORS } from "@/data/authors";
import { DEMO_CONVENIENCES } from "@/data/posts";
import { DEMO_CATEGORIES, DEMO_TAGS } from "@/data/taxonomies";
import { ConvenienceType, PostDataType } from "@/data/types";
import WidgetConveniences from "@/components/WidgetPosts/WidgetConveniences";
import WidgetConveniencesExtra from "@/components/WidgetPosts/WidgetConveniencesExtra";
import { filterConvenienceByType } from "@/data/kondos/kondo.normalizer";
import { KondoModel } from "@/data/kondos/kondo.model";

export interface SidebarProps {
  className?: string;
  kondo: KondoModel
}


//const widgetConveniences: ConvenienceType[] = DEMO_CONVENIENCES.filter((_, i) => i > 2 && i < 7);
//const widgetBasics: ConvenienceType[] = DEMO_CONVENIENCES.filter((item) => item.type == 'basic');
//const widgetExtra: ConvenienceType[] = DEMO_CONVENIENCES.filter((item) => item.type == 'extra');
const tags = DEMO_TAGS.filter((_, i) => i > 5);
const categories = DEMO_CATEGORIES.filter((_, i) => i > 7 && i < 13);
const authors = DEMO_AUTHORS.filter((_, i) => i < 5);

export const Sidebar: FC<SidebarProps> = ({ 
  className = "space-y-6 ",
  kondo
 }) => {

  const conveniencesBasic = filterConvenienceByType(kondo.conveniences, "basic");
  const conveniencesSecurity = filterConvenienceByType(kondo.conveniences, "security");
  const conveniencesConveniences = filterConvenienceByType(kondo.conveniences, "convenience");
  const conveniencesExtra = filterConvenienceByType(kondo.conveniences, "extra");

  // console.log('conveniences filtered are');
  console.log('basic are', conveniencesBasic);
  // console.log('extra are', conveniencesExtra);
  // console.log('conveniences', conveniencesConveniences);
  // console.log('sec', conveniencesSecurity);
  return (
    <div className={`nc-SingleSidebar ${className}`}>
      {conveniencesBasic?.length > 0 && <WidgetConveniences posts={conveniencesBasic} title="💡 Básicos" />}
      {conveniencesSecurity?.length > 0 && <WidgetConveniences posts={conveniencesSecurity} title="🎯 Segurança "/>}
      {conveniencesConveniences?.length > 0 && <WidgetConveniences posts={conveniencesConveniences} title="🎭 Conveniências"/>}
      {conveniencesExtra?.length > 0 && <WidgetConveniencesExtra posts={conveniencesExtra}/>}
    </div>
  );
};
