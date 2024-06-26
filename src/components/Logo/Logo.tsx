import React from "react";
import logoImg from "@/images/logo.png";
import logoLightImg from "@/images/logo-light.png";
import LogoSvg from "./LogoSvg";
import Link from "next/link";
import Image from "next/image";
import KondoLogo from "@/images/kondo-logo.png";
import { px } from "framer-motion";

export interface LogoProps {
  img?: string;
  imgLight?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
}) => {
  return (
    <Link
      href="/"
      className="ttnc-logo inline-block text-primary-6000 flex-shrink-0"
    >
      {/* THIS USE FOR MY MULTI DEMO */}
      {/* IF YOU ARE MY CLIENT. PLESE DELETE THIS CODE AND YOU YOUR IMAGE PNG BY BELLOW CODE */}
      {/* <LogoSvg /> */}
      <Image
          className="object-cover w-full h-full rounded-2xl md:border-neutral-100"
          src={KondoLogo}
          alt=""
          width={40}
        />
    </Link>
  );
};

export default Logo;
