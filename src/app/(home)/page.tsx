"use server"

import { cookies } from 'next/headers'

import React, { Suspense, useContext } from "react";
import NcImage from "@/components/NcImage/NcImage";
import KondoGrid from "../../components/Kondos/KondoGrid";
import KondoSearchForm from "../../components/KondoSearch/KondoSearchForm";
import { getCurrentUser } from '../../data/users/users.actions';
import { GlobalContext } from '../../components/GlobalState/GlobalState';

// Tag and category have same data type - we will use one demo data
//const posts: PostDataType[] = DEMO_POSTS.filter((_, i) => i < 16);
export async function getSessionData(req?: any) {
  const encryptedSessionData = cookies().get('session')?.value
  return encryptedSessionData ? JSON.parse(decrypt(encryptedSessionData)) : null
}

// HOME PAGE
// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  const urlParams = Object.assign(params, searchParams);

  let type = urlParams?.type? urlParams.type : 'condomínios';
  let typeFormated = 'condomínios';
  let background = 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

  if (type) {
    if (type == 'casas') {
      typeFormated = 'Casas';
      background = 'https://kondo-medias.s3.amazonaws.com/kondos/kondo/background-casas.jpg';
    }
    if (type == 'chacaras') {
      typeFormated = 'Chácaras';
      //background = 'https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
      background = 'https://kondo-medias.s3.amazonaws.com/kondos/kondo/background-chacaras.jpg';
    }
    if (type == 'predios') {
      typeFormated = 'Prédios';
      background = 'https://kondo-medias.s3.amazonaws.com/kondos/kondo/background-predios.jpg';
    }
  }

  let site_name = "Kondomino AI";

  return (
    <div className="nc-PageHome relative">

      {/* HEADER */}
      <div className="w-screen px-2 xl:max-w-screen-2xl mx-auto">
        <div className="rounded-3xl md:rounded-[40px] relative aspect-w-16 aspect-h-9 lg:aspect-h-5 overflow-hidden z-0">
          <NcImage
            alt="search"
            fill
            containerClassName="absolute inset-0"
            src={background}
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
                Utilize nossa  {" "}
                <strong className="font-medium text-neutral-800 dark:text-neutral-100">
                Inteligência Artificial{" "}
                </strong>
                  para encontrar os  {" "}
                <strong className="font-medium text-neutral-800 dark:text-neutral-100">
                melhores
                condomínios {" "}
                </strong>
              </span>
              
              <KondoSearchForm />
            </header>
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}

      {/* === GRID's Kondos === */}
      <Suspense>
        <KondoGrid urlParams={urlParams} />
      </Suspense>
    </div>
  );
};

 
