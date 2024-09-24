import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BrandContactDialog } from "../brand-waitlist-dialog";

function LetsChatSection({}) {
  const socialLinks = [
    { href: "/waitlist", src: "/fb.svg", alt: "Facebook" },

    { href: "/waitlist", src: "/twitter.svg", alt: "Twitter" },

    { href: "/waitlist", src: "/linkedin.svg", alt: "Linkedin" },
  ];
  return (
    <section className="w-full  bg-black pb-24 px-4 lg:px-0 ">
      <div className="flex flex-col max-w-7xl mt-32 mx-auto w-full items-center text-center">
        <h2 className="self-center text-5xl font-medium text-white sm:text-6xl">
          Let&apos;s Chat
        </h2>

        <p className="mt-4 text-gray-100/70 text-lg  max-w-md">
          Struggling with loyalty program engagement? Let’s explore how Monet
          can solve your pain points and transform your loyalty strategy.
        </p>
        <div className=" mt-10   ">
          <Image
            src="/coin.png"
            width={500}
            height={500}
            alt="hero"
            className=" drop-shadow-golden-glow "
          />
        </div>

        <div className="w-full mt-12  bg-transparent  sm:w-1/2">
          <BrandContactDialog />
        </div>
        <div className="w-full mt-12  flex  gap-2 justify-center sm:w-1/2">
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
        <div className="mt-8">
          <p className="text-sm lg:text-lg font-thin">
            Not a brand ? Switch to our{" "}
            <Link
              href="/customer"
              className="underline text-yellow-500 text-sm lg:text-lg font-thin"
            >
              Customer Page{" "}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LetsChatSection;
