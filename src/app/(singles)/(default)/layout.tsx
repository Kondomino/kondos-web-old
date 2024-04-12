import React, { ReactNode } from "react";
import SingleContent from "../SingleContent";
import SingleRelatedPosts from "../SingleRelatedPosts";
import Image from "next/image";
import { Sidebar } from "../Sidebar";

// KONDO INTERNAL PAGE LAYOUT
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>

      {/* HEADER */}
      <div className="w-full px-2 xl:max-w-screen-2xl mx-auto">
        <div className="relative aspect-w-16 aspect-h-13 sm:aspect-h-9 lg:aspect-h-8 xl:aspect-h-5 rounded-3xl md:rounded-[40px] overflow-hidden z-0">
          <Image
            alt="archive"
            fill
            src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            className="object-cover w-full h-full rounded-3xl md:rounded-[40px]"
            sizes="(max-width: 1280px) 100vw, 1536px"
          />
          <div className="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center">
            <h2 className="inline-block align-middle text-5xl font-semibold md:text-7xl ">
              Ville des Lacs
            </h2>
            <span className="block mt-4 text-neutral-300">Frase marcante.</span>
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}

      {children}

      <div className="container flex flex-col my-10 lg:flex-row ">
        <div className="w-full lg:w-3/5 xl:w-2/3 xl:pe-20">
          <SingleContent />
        </div>
        <div className="w-full mt-12 lg:mt-0 lg:w-2/5 lg:ps-10 xl:ps-0 xl:w-1/3">
          <Sidebar />
        </div>
      </div>
      
    </div>
  );
};

export default layout;
