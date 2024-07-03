import Heading from "@/components/Heading/Heading";
import NcImage from "@/components/NcImage/NcImage";
import React from "react";

export interface People {
  id: string;
  name: string;
  job: string;
  avatar: string;
}

const FOUNDER_DEMO: People[] = [
  {
    id: "1",
    name: `Victor Vieira Souto`,
    job: "Co-founder and CTO",
    avatar:
      "https://kondo-medias.s3.amazonaws.com/users/team/victor-souto/victor.png",
  },
  {
    id: "4",
    name: `Leonardo Oliveira`,
    job: "Co-founder and CFO",
    avatar:
      "https://kondo-medias.s3.amazonaws.com/users/team/victor-souto/leo.jpg",
  },
  {
    id: "3",
    name: `Thiago Fonseca`,
    job: "Co-founder and CEO",
    avatar:
      "https://kondo-medias.s3.amazonaws.com/users/team/victor-souto/thiago.jpg",
  },
  {
    id: "2",
    name: `Regison Melo`,
    job: "Co-Founder, IT Infra Manager",
    avatar:
      "https://kondo-medias.s3.amazonaws.com/users/team/victor-souto/regis.png",
  },
];

const SectionFounder = () => {
  return (
    <div className="nc-SectionFounder relative">
      <Heading
        description="Somos imparciais e independentes, e criamos diariamente ferramentas exclusivas, para sua melhor experiência.
          "
      >
        ⛱ Fundadores
      </Heading>
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
        {FOUNDER_DEMO.map((item) => (
          <div key={item.id} className="max-w-sm">
            <NcImage
              alt="founder"
              fill
              containerClassName="relative h-0 aspect-h-1 aspect-w-1 rounded-full overflow-hidden z-0"
              className="absolute inset-0 object-cover"
              src={item.avatar}
            />
            <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
              {item.name}
            </h3>
            <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
              {item.job}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFounder;
