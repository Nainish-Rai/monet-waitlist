"use client";
import Image from "next/image";
import React from "react";
import { FeatureList } from "../feature-list";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/anims";

function WhyUs({}) {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-br from-[#D6AF503D]/15 from-0% via-black to-[#D6AF503D]/15 pt-24 lg:pt-0 px-4 lg:px-0  mx-auto lg:h-screen">
      <div className="w-full max-w-7xl flex justify-center gap-8 flex-col mx-auto  ">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className=" font-medium text-3xl lg:text-4xl text-left lg:text-center"
        >
          Why Partner with us ?
        </motion.h1>
        <div className="w-full lg:mt-16 gap-8 flex flex-col-reverse items-center lg:flex-row justify-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={slideIn("left", "spring", 0, 1.2)}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <FeatureList />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={slideIn("right", "spring", 0, 1.2)}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <Image
              src="/why-us.png"
              width={1200}
              height={1200}
              alt="why-us"
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
