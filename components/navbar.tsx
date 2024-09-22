import React from "react";
import { MonetWorkLogo } from "./monet-work-logo";
import { Button } from "./ui/button";

function Navbar({}) {
  return (
    <nav className="w-full bg-transparent fixed z-50 px-4 lg:px-0 top-0 ">
      <div className="w-full max-w-7xl flex items-center justify-between mx-auto py-2 lg:py-4">
        <div className="flex items-center bg-black/70 backdrop-blur-[1px] rounded-full p-3">
          <MonetWorkLogo className="w-16 lg:w-32 h-8" />
        </div>
        <div className="border p-2 bg-black/20 backdrop-blur rounded-full">
          <Button className=" bg-transparent hover:bg-transparent text-white rounded-3xl">
            I&apos;m a customer
          </Button>
          <Button className=" rounded-3xl">I&apos;m an brand</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
