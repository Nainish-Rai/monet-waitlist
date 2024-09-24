import Image from "next/image";
import React from "react";

function RedeemSection({}) {
  return (
    <div className="w-full  pt-24  px-4 lg:px-0  bg-black mx-auto lg:h-screen">
      <div className="w-full max-w-7xl flex justify-center gap-8 flex-col mx-auto  ">
        <div className="w-full lg:mt-16 gap-8 flex flex-col-reverse lg:flex-row justify-center">
          <div className="w-full lg:w-1/2 flex flex-col lg:pl-8  justify-center ">
            <h1 className=" font-medium leading-[2.5] text-3xl lg:text-6xl text-left ">
              Exchange, <br /> Redeem, Repeat.
            </h1>
            <p className=" text-gray-100/70 text-lg max-w-sm mt-6">
              Earn points from your favorite brands, effortlessly exchange them,
              and redeem wherever you shop!
            </p>
          </div>
          <div className="w-full lg:w-1/2  p-8 flex justify-center">
            <Image
              src="/consumer2.png"
              width={500}
              height={500}
              alt="why-us"
              className="w-full drop-shadow-golden-glow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedeemSection;
