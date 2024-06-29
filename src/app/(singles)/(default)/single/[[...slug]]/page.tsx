import { Sidebar } from "@/app/(singles)/Sidebar";
import SingleKondoContent from "@/app/(singles)/SingleKondoContent";
import { KondoSingleHeader } from "@/components/Kondos/KondoSingleHeader";
import NcImage from "@/components/NcImage/NcImage";
import { normalizeKondo } from "@/data/kondos/kondo.normalizer";
import { getKondoBySlug, getKondoMedias } from "@/data/kondos/kondos.actions";
import { getCDN } from "@/utils/getCDN";
import React, { Suspense } from "react";
import { prepareImages } from "../../../../../data/kondos/kondo.model";


// KONDO INTERNAL PAGE CONTENT
// eslint-disable-next-line @next/next/no-async-client-component
const PageSingle = async (props: any) => {

  //const { slug } = useParams();
  let kondo = await getKondoBySlug(props.params.slug[0]) ?? [];
  kondo = normalizeKondo(kondo);

  //let IMAGES_GALLERY = await getKondoMedias(kondo.id.toString());
  let IMAGES_GALLERY = await getKondoMedias('98');
  IMAGES_GALLERY = prepareImages(kondo.slug, IMAGES_GALLERY);

  console.log('images are', IMAGES_GALLERY);
  return (
    <div>

      {/* HEADER */}
      <div className="w-full px-2 xl:max-w-screen-2xl mx-auto">
        <div className="relative aspect-w-16 aspect-h-13 sm:aspect-h-9 lg:aspect-h-8 xl:aspect-h-5 rounded-3xl md:rounded-[40px] overflow-hidden z-0">
          <NcImage
            alt="archive"
            fill
            src={kondo.featuredImage}
            className="object-cover w-full h-full rounded-3xl md:rounded-[40px]"
            sizes="(max-width: 1280px) 100vw, 1536px"
          />
          <div className="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center">
            <h2 className="inline-block align-middle text-5xl font-semibold md:text-7xl ">
              {kondo?.name}
            </h2>
            <span className="block mt-4 text-neutral-300">Frase marcante.</span>
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}
      <div className={`pt-8 lg:pt-16`}>
        <Suspense>
          <KondoSingleHeader kondo={kondo} images={IMAGES_GALLERY} />
        </Suspense>
      </div>

      <div className="container flex flex-col my-10 lg:flex-row ">
        <div className="w-full lg:w-3/5 xl:w-2/3 xl:pe-20">
          <SingleKondoContent kondo={kondo} />
        </div>
        <div className="w-full mt-12 lg:mt-0 lg:w-2/5 lg:ps-10 xl:ps-0 xl:w-1/3">
          <Sidebar kondo={kondo} />
        </div>
      </div>
    </div>
  );
};

export default PageSingle;