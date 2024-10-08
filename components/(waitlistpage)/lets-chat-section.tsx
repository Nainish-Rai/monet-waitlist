"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BrandContactDialog } from "../brand-waitlist-dialog";
import { motion } from "framer-motion";
import { textVariant } from "@/lib/anims";
import { socialLinks } from "../(customerWaitlist)/customer-cta";

function LetsChatSection({}) {
  return (
    <section className="w-full mb-0 lg:mt-24  bg-black lg:pb-8 pb-8 px-4 lg:px-0 ">
      <div className="flex flex-col max-w-7xl mt-32 mx-auto w-full items-center text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="self-center text-5xl font-medium text-white sm:text-6xl"
        >
          Let&apos;s Chat
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-gray-100/70 text-base lg:text-lg  max-w-lg"
        >
          Struggling with loyalty program engagement? Let’s explore how Monet
          can solve your pain points and transform your loyalty strategy.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={textVariant(0.5)}
          transition={{ duration: 0.5, delay: 0.6 }}
          className=" mt-10   "
        >
          <Image
            src="/coin.svg"
            width={1200}
            height={1200}
            alt="hero"
            className=" max-w-xs lg:max-w-lg drop-shadow-golden-glow "
          />
        </motion.div>

        <div className="w-full mt-12  bg-transparent  sm:w-1/2">
          <BrandContactDialog />
        </div>
        <div className="w-full mt-24  flex  gap-2 justify-center sm:w-1/2">
          {socialLinks.map((link, index) => (
            <Link key={index} target="_blank" href={link.href}>
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
