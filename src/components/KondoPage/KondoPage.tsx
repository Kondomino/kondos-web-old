"use client"
import SingleHeader from "@/app/(singles)/SingleHeader";
import { POPULATE_KONDOS } from "@/app/redux-store-bkp/actions/types";
import { _populateKondos } from "@/app/redux-store-bkp/reducers/kondo/kondos.reducer";
import { useAppDispatch } from "@/app/redux-store-bkp/store";
import { FC, useState } from "react";
import NcImage from "../NcImage/NcImage";
import ListingImageGallery from "../listing-image-gallery/ListingImageGallery";
import { Route } from "next";
import router, { useRouter } from "next/router";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { imgHigtQualitys } from "@/contains/fakeData";
import { StaticImageData } from "next/image";
import _ from "lodash";
import { getKondoBySlug } from "@/app/redux-store-bkp/actions/kondos.actions";

const IMAGES_GALLERY: (string | StaticImageData)[] = imgHigtQualitys;


export const KondoPage: FC<{kondo: any}> = async ({
    kondo = {},
  }) => {

    console.log('--------- KondoPage as', kondo);
    // const dispatch = useAppDispatch();
  
    // dispatch(_populateKondos({
    //     type: POPULATE_KONDOS,
    //     data: kondos,
    // }));
    
    const router = useRouter();
    const thisPathname = usePathname();
    const searchParams = useSearchParams();
    const modal = searchParams?.get("modal");
    
    const { slug } = useParams();
    // TODO: REDIRECT USER TO HOME IF NO SLUG !!
    const [getKondoState, setKondoState] = useState();

    console.log('------ Kondo Page page props ', kondo);
    console.log('kondo from state is ', getKondoState);
    // If no kondo in state, let's try fetching again
    if (!kondo) {
        console.log('refetching kondo for ', slug);

        // Lets fetch ONLY THE SELECTED KONDO BY SLUG
        kondo = (await getKondoBySlug(slug[0])) ?? [];

        console.log('fetched kondo is ', kondo);
        setKondoState(kondo);
    }
    
    const handleCloseModalImageGallery = () => {
        let params = new URLSearchParams(document.location.search);
        params.delete("modal");
        router.push(`${thisPathname}/?${params.toString()}` as Route);
    };
    const handleOpenModalImageGallery = () => {
        router.push(`${thisPathname}/?modal=PHOTO_TOUR_SCROLLABLE` as Route);
    };
  
    return (
<>
      <div className={`pt-8 lg:pt-16`}>
        {/* SINGLE HEADER */}
        <header className="container rounded-xl">
          <SingleHeader hiddenDesc />
          <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-2 my-10">
            <div
              className="col-span-2 row-span-2 relative rounded-xl overflow-hidden cursor-pointer z-0"
              onClick={handleOpenModalImageGallery}
            >
              <NcImage
                alt="single"
                containerClassName="absolute inset-0"
                className="object-cover w-full h-full rounded-xl"
                fill
                src={IMAGES_GALLERY[0]}
              />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
            </div>
            {IMAGES_GALLERY.filter((_, i) => i >= 1 && i < 5).map(
              (item, index) => (
                <div
                  key={index}
                  className={`relative rounded-xl overflow-hidden z-0 ${
                    index >= 2 ? "hidden sm:block" : ""
                  }`}
                >
                  <NcImage
                    alt="single"
                    fill
                    containerClassName="aspect-w-6 aspect-h-5"
                    className="object-cover w-full h-full rounded-xl"
                    src={item || ""}
                  />

                  {/* OVERLAY */}
                  <div
                    className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                    onClick={handleOpenModalImageGallery}
                  />
                </div>
              )
            )}

            <div
              className="absolute hidden md:flex md:items-center md:justify-center right-3 bottom-3 px-4 py-2 rounded-full bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10"
              onClick={handleOpenModalImageGallery}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <span className="ms-2 text-neutral-800 text-sm font-medium">
                Show all photos
              </span>
            </div>
          </div>
        </header>

        <ListingImageGallery
          isShowModal={modal === "PHOTO_TOUR_SCROLLABLE"}
          onClose={handleCloseModalImageGallery}
          images={IMAGES_GALLERY.map((item, index) => {
            return {
              id: index,
              url: item,
            };
          })}
        />
      </div>
    </>
    )
}