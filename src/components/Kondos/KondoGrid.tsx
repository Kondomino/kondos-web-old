import { DEMO_CATEGORIES } from "@/data/taxonomies"
import { FC } from "react"
import ArchiveFilterListBox from "../ArchiveFilterListBox/ArchiveFilterListBox"
import CardHomeKondos from "../CardHomeKondos/CardHomeKondos"
import Pagination from "../Pagination/Pagination"
import { serializeKondos } from "../../data/kondos/kondo.normalizer"
import { getData } from "../../data/kondos/kondos.actions"
import ModalConveniences from "../../app/(archives)/ModalConveniences"
import KondoTabsNavigation from "./KondoTabsNavigation"


const KondoGrid: FC<{urlParams:any}> = async ({urlParams}) => {

  const page = urlParams?.page? urlParams.page : 0;
  const search = urlParams?.search? urlParams.search : false;
  const type = urlParams?.type? urlParams.type : '';
  
  var endpoint = 'http://localhost:3003/kondo';

  if (page)
    endpoint = endpoint.concat(`?page=${page}`);

  if (search)
    endpoint = endpoint.concat(`?phrase=${search}`);

  const data = (await getData(endpoint)) ?? [];
  var kondos = serializeKondos(data);

    const FILTERS = [
        { name: "Most Recent" },
        // { name: "Curated by Admin" },
        // { name: "Most Appreciated" },
        // { name: "Most Discussed" },
        // { name: "Most Viewed" },
      ];
      
    return (
        <div className="container pt-10 pb-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <div>
          <div className="flex flex-col sm:justify-between sm:flex-row">
            <div className="flex space-x-2.5 rtl:space-x-reverse">
              <ModalConveniences categories={DEMO_CATEGORIES} />              
            </div>

            <div className="flex space-x-2.5 rtl:space-x-reverse">
              <KondoTabsNavigation type={type} />
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
            {/* <ButtonPrimary>Show me more</ButtonPrimary> */}
          </div>
        </div>

      </div>
    );
}

export default KondoGrid;