import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CustomerWaitlistDialog } from "../customer-waitlist-dialog";

function CustomerCta({}) {
  const socialLinks = [
    { href: "/waitlist", src: "/fb.svg", alt: "Facebook" },

    { href: "/waitlist", src: "/twitter.svg", alt: "Twitter" },

    { href: "/waitlist", src: "/linkedin.svg", alt: "Linkedin" },
  ];
  return (
    <section className="w-full  bg-black pb-6 px-4 lg:px-0 ">
      <div className="flex flex-col max-w-7xl mt-32 mx-auto w-full items-center text-center">
        <h2 className="self-center text-5xl font-medium text-white max-w-lg sm:text-6xl">
          Crafted for Ultimate Rewards
        </h2>

        <p className="mt-6 text-gray-100/70 text-base  max-w-lg ">
          Your points, your rules. Unlock a seamless experience where your
          loyalty points work harder for you. Join now and enjoy flexible,
          rewarding conversions!
        </p>
        <div className=" mt-20   ">
          <Image
            src="/coin.png"
            width={500}
            height={500}
            alt="hero"
            className=" drop-shadow-golden-glow "
          />
        </div>

        <div className="w-full mt-6  bg-transparent  sm:w-1/2">
          <CustomerWaitlistDialog />
        </div>
        <div className="w-full mt-24  flex  gap-2 justify-center sm:w-1/2">
          {socialLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <div className="flex gap-5 lg:flex-row flex-col bg-white rounded-full w-fit p-3">
                <Image
                  src={link.src}
                  width={20}
                  height={20}
                  alt={link.alt}
                  className=" text-body-medium bg-white"
                />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-14">
          <p className="text-sm lg:text-lg font-thin">
            Not a Consumer ? Switch to our{" "}
            <Link
              href="/"
              className="underline text-yellow-500 text-sm lg:text-lg font-thin"
            >
              Brands Page{" "}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default CustomerCta;
