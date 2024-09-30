"use client";
import { slideIn } from "@/lib/anims";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function RedeemSection({}) {
  return (
    <div className="w-full  py-24 lg:pb-0  px-4 lg:px-0 overflow-hidden bg-black mx-auto lg:h-screen">
      <div className="w-full max-w-7xl flex justify-center gap-8 flex-col mx-auto  ">
        <div className="w-full lg:mt-16 gap-8 flex flex-col lg:flex-row justify-center">
          <div className="w-full lg:w-1/2 flex flex-col lg:pl-8  justify-center ">
            <motion.h1
              initial="hidden"
              whileInView="show"
              variants={slideIn("left", "spring", 0, 1.2)}
              className=" font-medium leading-tight lg:leading-[1.1] text-[2rem] lg:text-6xl text-left "
            >
              Exchange, <br className="hidden lg:block" /> Redeem, Repeat.
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="show"
              variants={slideIn("left", "spring", 0, 1)}
              className=" text-gray-100/70 text-base lg:text-lg max-w-sm mt-2 lg:mt-6"
            >
              Earn points from your favorite brands, effortlessly exchange them,
              and redeem wherever you shop!
            </motion.p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={slideIn("right", "spring", 0.1, 1.2)}
            className="w-full lg:w-1/2  lg:p-8 flex justify-center"
          >
            <Image
              src="/consumer2.png"
              width={500}
              height={500}
              alt="why-us"
              className="w-full drop-shadow-golden-glow-sm-mobile lg:drop-shadow-golden-glow-sm"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default RedeemSection;
