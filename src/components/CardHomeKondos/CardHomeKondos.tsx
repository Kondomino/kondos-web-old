"use client";

import React, { FC, Key } from "react";
import { _populateKondos } from "@/app/redux-store-bkp/reducers/kondo/kondos.reducer";
import Card11 from "../Card11/Card11";
import { normalizeKondos } from "@/app/redux-store-bkp/selectors/kondos.selector";

const CardHomeKondos: FC<{kondos:[]}> = ({
  kondos = [],
}) => {
  // We need the kondos normalized for FE
  const kondosNormalized = normalizeKondos(kondos);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8 mt-8 lg:mt-10">
      {kondosNormalized?.map((kondo: { name: string, id: Key }, key: Number) => (
        <Card11 key={kondo.id} post={kondo} />
      ))}
    </div>
  );
};

export default CardHomeKondos;
