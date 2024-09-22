import Link from "next/link";
import React from "react";

function Footer({}) {
  return (
    <footer className="w-full bg-black  border-t  py-4 text-sm">
      <div className="flex justify-between flex-col gap-4 lg:gap-0  lg:flex-row text-center  max-w-7xl  mx-auto w-full items-center  ">
        <div className="max-w-sm lg:text-left w-full">
          Disclaimer : Brand names and logos are for illustrative purposes only
          and do not imply partnerships.
        </div>
        <div className="max-w-sm flex justify-center gap-2 text-center w-full">
          <Link href="/waitlist">Terms & Conditions</Link>|
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
        <div className="max-w-sm lg:text-right w-full">
          © {new Date().getFullYear()} Monet. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
