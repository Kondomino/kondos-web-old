import { PostDataType } from "@/data/types";
import Image from "next/image";
import React, { FC } from "react";

export interface KondoProps {
  kondo: PostDataType;
}

export const SingleKondoContentDetails: FC<KondoProps> = ({ kondo }) => {
  return (
    <>
      {/* THIS IS THE DEMP CONTENT - YOU CAN USE MARKDOWN, JSON ...*/}
      <p>
        {kondo.description}
      </p>
      <h2>Proximidade</h2>
      <p>
        A proximidade à BH é de {" "}
        <strong>{kondo.address?.minutes_from_bh} minutos</strong>. 
      </p>
      <p>
        {kondo.address?.address_street_and_numbers}
      </p>
      <figure>
        <Image
          src="/maps2.png"
          alt="A funcionalidade de mapas ainda não está disponível na sua região"
          sizes="(max-width: 1024px) 100vw, 1240px"
          className="rounded-2xl blurriedImage"
          width={1635}
          height={774}
        />
        <figcaption>
          O Condomínio {kondo.title} fica no município de {kondo.address?.city}, a {kondo.address?.minutes_from_bh} de BH
        </figcaption>
      </figure>
      <p>
        Valor do condomínio: {kondo.details?.condo_rent}
      </p>
      {/* <h2>Lotes</h2>
      <p>
        Preço médio dos lotes: {kondo.details?.lot_avg_price}
      </p> */}
    </>
  );
};

export default SingleKondoContentDetails;
