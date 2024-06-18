"use client"
import ModalCategories from "@/app/(archives)/ModalCategories"
import ModalTags from "@/app/(archives)/ModalTags"
import { DEMO_CATEGORIES, DEMO_TAGS } from "@/data/taxonomies"
import { FC } from "react"
import ArchiveFilterListBox from "../ArchiveFilterListBox/ArchiveFilterListBox"
import ButtonPrimary from "../Button/ButtonPrimary"
import CardHomeKondos from "../CardHomeKondos/CardHomeKondos"
import Pagination from "../Pagination/Pagination"


export const KondoGrid: FC<{kondos:[]}> = ({
    kondos = [],
  }) => {

    const FILTERS = [
        { name: "Most Recent" },
        { name: "Curated by Admin" },
        { name: "Most Appreciated" },
        { name: "Most Discussed" },
        { name: "Most Viewed" },
      ];
    
    return (
        <div className="container pt-10 pb-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <div>
          <div className="flex flex-col sm:justify-between sm:flex-row">
            <div className="flex space-x-2.5 rtl:space-x-reverse">
              <ModalCategories categories={DEMO_CATEGORIES} />
              <ModalTags tags={DEMO_TAGS} />
            </div>
            <div className="block my-4 border-b w-full border-neutral-300 dark:border-neutral-500 sm:hidden"></div>
            <div className="flex justify-end">
              <ArchiveFilterListBox lists={FILTERS} />
            </div>
          </div>

          {/* LOOP ITEMS */}
          <CardHomeKondos kondos={kondos} />

          {/* PAGINATIONS */}
          <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination />
            <ButtonPrimary>Show me more</ButtonPrimary>
          </div>
        </div>

      </div>
    );
}
