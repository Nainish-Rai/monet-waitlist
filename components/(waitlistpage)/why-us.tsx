import Image from "next/image";
import React from "react";
import { FeatureList } from "../feature-list";

function WhyUs({}) {
  return (
    <div className="w-full bg-gradient-to-br from-[#D6AF503D]/15 from-0% via-black to-[#D6AF503D]/15 pt-24 lg:pt-0 px-4 lg:px-0  mx-auto lg:h-screen">
      <div className="w-full max-w-7xl flex justify-center gap-8 flex-col mx-auto  ">
        <h1 className=" font-medium text-3xl lg:text-4xl text-left lg:text-center">
          Why Partner with us ?
        </h1>
        <div className="w-full lg:mt-16 gap-8 flex flex-col-reverse lg:flex-row justify-center">
          <div className="w-full lg:w-1/2 flex justify-center">
            <FeatureList />
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/why-us.png"
              width={500}
              height={500}
              alt="why-us"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
