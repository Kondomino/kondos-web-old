'use client'
import { Description, Dialog, DialogPanel, DialogTitle } from "@/app/headlessui";
import { useState } from 'react'
import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import ButtonSecondary from "@/components/Button/ButtonSecondary";
import Heading2 from "@/components/Heading/Heading2";
import Button from "../../../components/Button/Button";
import ModalConveniences from "../../(archives)/ModalConveniences";
import { DEMO_CATEGORIES } from "../../../data/taxonomies";
import ModalKondoInvestments from "../../../components/Kondos/ModalKondoInvestments";

export interface PricingItem {
  isPopular: boolean;
  name: string;
  pricing: string;
  description: string;
  per: string;
  features: string[];
}

const pricings: PricingItem[] = [
  {
    isPopular: false,
    name: "Unlock the Basics",
    pricing: "R$ 19",
    per: "/mês",
    features: ["Participa dos Debates", "Proporciona o Investimento Básico", "Badge de Apoiador"],
    description: ` Você apoia com o mínimo para que o projeto ganhe força`,
  },
  {
    isPopular: true,
    name: "Believer",
    pricing: "R$ 85",
    per: "/mês",
    features: [
      "Tudo do Básico",
      "Newsletter de progresso do projeto",
      "Notificado de novos condomínios Premium em destaque",
      "Badge de Believer",
    ],
    description: ` Seus esforços começam a ganhar notoriedade.`,
  },
  {
    isPopular: false,
    name: "Investor",
    pricing: "R$ 1.200",
    per: "/mês",
    features: [
      "Tudo do Believer",
      "Camiseta personalizada do projeto",
      "Acesso TOTAL na plataforma",
      "Acesso BETA às novas features",
      "Badge de Investidor",
    ],
    description: ` Você é visto como um dos Investidores do projeto.`,
  },
];

const PageSponsorship = ({}) => {

  const renderPricingItem = (pricing: PricingItem, index: number) => {
    return (
      <div
        key={index}
        className={`h-full relative px-6 py-8 rounded-3xl border-2 flex flex-col overflow-hidden ${
          pricing.isPopular
            ? "border-primary-500"
            : "border-zinc-400 dark:border-indigo-500"
        }`}
      >
        {pricing.isPopular && (
          <span className="bg-primary-500 text-white px-3 py-1 tracking-widest text-xs absolute end-3 top-3 rounded-full z-10">
            POPULAR
          </span>
        )}
        <div className="mb-8">
          <h3 className="block text-sm uppercase tracking-widest text-neutral-6000 dark:text-neutral-300 mb-2 font-medium">
            {pricing.name}
          </h3>
          <h2 className="text-5xl leading-none flex items-center text-neutral-700 dark:text-neutral-300">
            <span>{pricing.pricing}</span>
            <span className="text-lg ms-1 font-normal text-neutral-500 dark:text-neutral-300">
              {pricing.per}
            </span>
          </h2>
        </div>
        <nav className="space-y-4 mb-8">
          {pricing.features.map((item, index) => (
            <li className="flex items-center" key={index}>
              <span className="me-4 inline-flex flex-shrink-0 text-primary-6000">
                <CheckIcon className="w-5 h-5" aria-hidden="true" />
              </span>
              <span className="text-neutral-700 dark:text-neutral-300">
                {item}
              </span>
            </li>
          ))}
        </nav>
        <div className="flex flex-col mt-auto">
          {pricing.isPopular ? (
            <ButtonPrimary
            >Quero Este</ButtonPrimary>
          ) : (
            <ModalKondoInvestments plan={pricing.name}/>
          )}
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-3">
            {pricing.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <header className="text-center max-w-2xl mx-auto - mb-14 sm:mb-16 lg:mb-20 relative">
        <Heading2 emoji="💎">Apoiadores</Heading2>
        <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200">
          Temos planos especiais para aqueles que querem <b>investir</b> em nosso projeto.
        </span>
      </header>

      <section className="text-neutral-600 text-sm md:text-base overflow-hidden">
        <div className="grid lg:grid-cols-3 gap-5 xl:gap-8">
          {pricings.map(renderPricingItem)}
        </div>
      </section>
    </>
  );
};

export default PageSponsorship;
