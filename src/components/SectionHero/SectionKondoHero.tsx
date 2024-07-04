import ButtonPrimary from "@/components/Button/ButtonPrimary";
import Image, { StaticImageData } from "next/image";
import React, { FC, ReactNode, useMemo } from "react";

export interface SectionKondoHeroProps {
  className?: string;
  rightImg: string | StaticImageData;
  heading: ReactNode;
  subHeading: string;
  btnText: string;
  text: string;
}

const SectionKondoHero: FC<SectionKondoHeroProps> = ({
  className = "",
  rightImg,
  heading,
  subHeading,
  btnText,
  text
}) => {

  const formattedSubHeading = useMemo(() => {
    return subHeading.replace(new RegExp('\r?\n','g'), '<br />');
  }, [subHeading]);
  
  console.log('formattedSubHeading', formattedSubHeading);
  return (
    <div className={`nc-SectionKondoHero relative ${className}`}>
      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 rtl:space-x-reverse items-center relative text-center lg:text-left">
        <div className="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
            {heading}
          </h2>
          <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
            {formattedSubHeading}
          </span>
          <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
            {text}
          </span>
          {!!btnText && <ButtonPrimary href="/">{btnText}</ButtonPrimary>}
        </div>
        <div className="flex-grow">
          <Image className="w-full" src={rightImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionKondoHero;