import React from "react";
import SectionHero from "@/components/SectionHero/SectionHero";
import rightImg from "@/images/about-hero-right.png";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import SectionSubscribe2 from "@/components/SectionSubscribe2/SectionSubscribe2";
import BgGlassmorphism from "@/components/BgGlassmorphism/BgGlassmorphism";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionKondoHero from "../../components/SectionHero/SectionKondoHero";
import PageSponsorship from "../(others)/subscription/sponsorship";

const PageAbout = ({}) => {
  return (
    <div className={`nc-PageAbout relative`}>
      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionKondoHero
          rightImg={rightImg}
          heading="👋 Sobre Nós"
          btnText=""
          subHeading="Nosso objetivo é facilitar a sua vida, criando ferramentas para você encontrar seu imóvel com mais facilidade, transparência e agilidade."
          text="Não somos uma imobiliária. Somos a mais nova Startup de BH, formada por colegas líderes em diferentes áreas como Tecnologia, Engenharia Ambiental e Direito."
        />

        <SectionFounder />

        {/* <div className="relative py-16">
          <BackgroundSection />
          <PageSponsorship />
        </div> */}
      </div>
    </div>
  );
};

export default PageAbout;
