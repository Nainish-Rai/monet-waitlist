import Image from "next/image";
import React from "react";
import { BrandContactDialog } from "../brand-waitlist-dialog";
function Hero({}) {
  return (
    <div className="flex mx-auto flex-col text-center lg:text-left px-4 lg:px-0 justify-center bg-gradient-to-tr from-[#D6AF503D]/15 from-0% via-black to-black  lg:flex-row w-full  mt-24 lg:mt-0 lg:h-screen ">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row">
        <div className="w-full flex flex-col lg:pl-16 justify-center items-center lg:items-start  lg:w-1/2">
          <h1 className="  text-4xl text-center mt-8 lg:mt-0 lg:text-left lg:text-[60px] leading-tight max-w-lg">
            Redefine Loyalty with Monet
          </h1>
          <p className="mt-4 text-gray-100/70 max-w-md">
            When have constraints ever worked? Unleash the true potential of
            rewards with Monet and create a loyalty experience like never
            before.
          </p>
          <BrandContactDialog />
        </div>
        <div className="w-full flex justify-center items-center lg:w-1/2">
          <Image src="/hero.png" width={500} height={500} alt="hero" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
