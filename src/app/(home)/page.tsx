import React from "react";
import { DEMO_CATEGORIES, DEMO_TAGS } from "@/data/taxonomies";
import ModalCategories from "../(archives)/ModalCategories";
import ModalTags from "../(archives)/ModalTags";
import ArchiveFilterListBox from "@/components/ArchiveFilterListBox/ArchiveFilterListBox";
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import Card11 from "@/components/Card11/Card11";
import Pagination from "@/components/Pagination/Pagination";
import ButtonCircle from "@/components/Button/ButtonCircle";
import Input from "@/components/Input/Input";
import NcImage from "@/components/NcImage/NcImage";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { connect, useDispatch } from "react-redux";
import { getData, retrieveKONDOs } from "../redux-store-bkp/actions/kondos.actions";
import { POPULATE_KONDOS, RETRIEVE_KONDOS } from "../redux-store-bkp/actions/types";
import CardHomeKondos from "@/components/CardHomeKondos/CardHomeKondos";
import { useAppDispatch } from "../redux-store-bkp/store";
import { _populateKondos } from "../redux-store-bkp/reducers/kondo/kondos.reducer";
import { KondoGrid } from "@/components/Kondos/KondoGrid";

// Tag and category have same data type - we will use one demo data
//const posts: PostDataType[] = DEMO_POSTS.filter((_, i) => i < 16);

// HOME PAGE
// eslint-disable-next-line @next/next/no-async-client-component
const PageHome = async (props: any) => {
  
  const endpoint = 'http://localhost:3003/kondo';
  const kondos = (await getData(endpoint)) ?? [];

  let site_name = "Kondomino";
  let region = "Região de Nova Lima";

  return (
    <div className="nc-PageHome relative">

      {/* HEADER */}
      <div className="w-screen px-2 xl:max-w-screen-2xl mx-auto">
        <div className="rounded-3xl md:rounded-[40px] relative aspect-w-16 aspect-h-9 lg:aspect-h-5 overflow-hidden z-0">
          <NcImage
            alt="search"
            fill
            containerClassName="absolute inset-0"
            src="https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            className="object-cover w-full h-full"
            sizes="(max-width: 1280px) 100vw, 1536px"
          />
        </div>
        {/* CONTENT */}
        <div className="relative container -mt-20 lg:-mt-48">
          <div className=" bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-16 rounded-[40px] shadow-2xl flex items-center">
            <header className="w-full max-w-3xl mx-auto text-center flex flex-col items-center">
              <h2 className="text-2xl sm:text-4xl font-semibold">{site_name}</h2>
              <span className="block text-xs sm:text-sm mt-4 text-neutral-500 dark:text-neutral-300">
                Compare entre {" "}
                <strong className="font-medium text-neutral-800 dark:text-neutral-100">
                  1135
                </strong>{" "}
                {" "}
                <strong className="font-medium text-neutral-800 dark:text-neutral-100">
                condomínios{" "}
                </strong>
              </span>
              <form
                className="relative w-full mt-8 sm:mt-11 text-left"
                method="post"
              >
                <label
                  htmlFor="search-input"
                  className="text-neutral-500 dark:text-neutral-300"
                >
                  <span className="sr-only">Search all icons</span>
                  <Input
                    id="search-input"
                    type="search"
                    placeholder="Type and press enter"
                    sizeClass="pl-14 py-5 pe-5 md:ps-16"
                    defaultValue={region}
                  />
                  <ButtonCircle
                    className="absolute end-2.5 top-1/2 transform -translate-y-1/2"
                    size=" w-11 h-11"
                    type="submit"
                  >
                    <ArrowRightIcon className="w-5 h-5 rtl:rotate-180" />
                  </ButtonCircle>
                  <span className="absolute start-5 top-1/2 transform -translate-y-1/2 text-2xl md:start-6">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                      ></path>
                    </svg>
                  </span>
                </label>
              </form>
            </header>
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}

      {/* === GRID's Kondos === */}
      <KondoGrid kondos={kondos} />
    </div>
  );
};

export default PageHome;
