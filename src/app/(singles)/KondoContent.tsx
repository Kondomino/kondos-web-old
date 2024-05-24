import Image from "next/image";
import React from "react";
import { useAppSelector } from "../redux-store-bkp/store";
import StupidButton from "./stupid.button";

const KondoContent = () => {
  return (
    <>
      {/* THIS IS THE DEMP CONTENT - YOU CAN USE MARKDOWN, JSON ...*/}
      <p>
        Descrição lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel
        officiis ipsum placeat itaque neque dolorem modi perspiciatis dolor
        distinctio veritatis sapiente, minima corrupti dolores necessitatibus
        suscipit accusantium dignissimos culpa cumque.
      </p>
      <h2>Proximidade</h2>
      <StupidButton></StupidButton>
      <p>
        A proximidade à BH é de {" "}
        <strong>25 minutos</strong>. 
      </p>
      <p>
        {` Rua Fernando de Noronha 123, Nova Lima`}
      </p>
      <figure>
        <Image
          src="/maps2.png"
          alt="nc blog"
          sizes="(max-width: 1024px) 100vw, 1240px"
          className="rounded-2xl"
          width={1635}
          height={774}
        />
        <figcaption>
          O Condomínio Ville des Lacs fica no município de Nova Lima, a 15km de BH
        </figcaption>
      </figure>
      <p>
        {` Valor do condomínio: R$ 350,00`}
      </p>
      <h2>Lotes</h2>
      <p>
        Tamanho mínimo dos lotes: 200m²
      </p>
      <p>
        Possui lotes disponíveis? Sim
      </p>
      <p>
        Preço médio dos lotes: R$ 120.000,00
      </p>
    </>
  );
};

export default KondoContent;
