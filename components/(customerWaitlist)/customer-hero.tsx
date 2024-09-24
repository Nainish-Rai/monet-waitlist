import Image from "next/image";
import React from "react";
import { CustomerWaitlistDialog } from "../customer-waitlist-dialog";

function CustomerHero({}) {
  return (
    <div className="flex mx-auto flex-col text-center lg:text-left px-4 lg:px-0 justify-center bg-black items-center   w-full  mt-24 lg:mt-0 lg:h-screen ">
      <div className="w-full max-w-7xl mx-auto flex lg:py-48 lg:mt-24  flex-col items-center text-center ">
        <div className="w-full flex flex-col justify-center z-10 items-center text-center  ">
          <h1 className="  text-4xl text-center mt-8 lg:mt-0  lg:text-7xl leading-tight max-w-2xl">
            Spend Points Like Never Before
          </h1>
        </div>

        <Image
          src="/consumerHeroGradient.png"
          width={800}
          height={800}
          alt="hero"
          className="w-full lg:w-[70%] hidden lg:block  -mt-16 lg:-mt-36"
        />
        <Image
          src="/consumerHero.png"
          width={800}
          height={800}
          alt="hero"
          className="w-full lg:w-[70%] lg:hidden  mt-5 drop-shadow-golden-glow"
        />
        <p className="mt-4 text-gray-100/70 px-2 lg:px-0 max-w-md">
          Say goodbye to restrictive loyalty programs. Seamlessly convert and
          use your points with Monet!
        </p>
        <CustomerWaitlistDialog />
      </div>
    </div>
  );
}

export default CustomerHero;
