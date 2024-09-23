import React from "react";
import { MonetWorkLogo } from "./monet-work-logo";
import { Button } from "./ui/button";

function Navbar({}) {
  return (
    <nav className="w-[90%] lg:w-full bg-black/70 rounded-full p-0 lg:bg-transparent my-2 fixed z-50 mx-5 lg:px-0 top-0 ">
      <div className="w-full max-w-7xl flex items-center justify-between mx-auto  lg:py-4">
        <div className="flex items-center lg:bg-black/20 backdrop-blur-[1px] rounded-full p-3">
          <MonetWorkLogo className="w-16 lg:w-32 h-8" />
        </div>
        <div className="border p-2  bg-black/20 backdrop-blur rounded-full">
          <Button className=" bg-transparent  text-xs lg:text-base hover:bg-transparent text-white rounded-3xl">
            I&apos;m a customer
          </Button>
          <Button className=" rounded-3xl text-xs lg:text-base ">
            I&apos;m an brand
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
