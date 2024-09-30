"use client";
import Image from "next/image";
import React from "react";
import { BrandContactDialog } from "../brand-waitlist-dialog";
import { motion } from "framer-motion";
import { textVariant } from "@/lib/anims";
function Hero({ }) {
  return (
    <div className="flex mx-auto flex-col text-center lg:text-left px-4 lg:px-0 justify-center bg-gradient-to-tr from-[#D6AF503D]/15 from-0% via-black to-black  lg:flex-row w-full  mt-24 lg:mt-0 lg:h-screen ">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row">
        <div className="w-full flex flex-col lg:pl-16 justify-center items-center lg:items-start  lg:w-1/2">
          <motion.h1
            initial="hidden"
            whileInView="show"
            variants={textVariant(0.1)}
            className="  text-4xl text-center mt-8 lg:mt-0 lg:text-left lg:text-[60px] lg:leading-tight font-medium max-w-lg"
          >
            Redefine Loyalty with Monet
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="show"
            variants={textVariant(0.2)}
            className="mt-4 text-gray-100/70 text-base lg:text-lg max-w-md"
          >
            Break Free from Restrictive Loyalty Programs — Empower Your Customers with Unlimited Choices.
          </motion.p>
          <BrandContactDialog />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full flex justify-center items-center lg:w-1/2"
        >
          <Image
            src="/hero.svg"
            className=""
            width={2000}
            height={2000}
            alt="hero"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
