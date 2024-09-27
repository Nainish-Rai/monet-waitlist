"use client";
import Image from "next/image";
import React from "react";
import { CustomerWaitlistDialog } from "../customer-waitlist-dialog";
import { motion } from "framer-motion";
import { textVariant } from "@/lib/anims";

function CustomerHero({}) {
  return (
    <div className="flex mx-auto flex-col text-center lg:text-left px-4 lg:px-0 justify-center bg-black items-center   w-full   lg:mt-0 h-screen ">
      <div className="w-full max-w-7xl mx-auto flex lg:py-48 lg:mt-24  flex-col items-center text-center ">
        <div className="w-full flex flex-col justify-center z-10 items-center text-center  ">
          <motion.h1
            initial="hidden"
            whileInView="show"
            variants={textVariant(0.5)}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="  text-4xl text-center mt-8 lg:mt-0  lg:text-6xl  lg:leading-tight max-w-2xl"
          >
            Spend Points Like <br /> Never Before
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[72%]  hidden lg:block  -mt-16 lg:-mt-40"
        >
          {" "}
          <Image
            src="/consumerHeroGradient.png"
            width={1200}
            height={1200}
            alt="hero"
            className="w-full "
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full    lg:hidden  "
        >
          <Image
            src="/consumerHero.png"
            width={1200}
            height={1200}
            alt="hero"
            className="w-full lg:w-[70%] lg:hidden  mt-5 drop-shadow-golden-glow-hero-mobile"
          />
        </motion.div>
        <motion.p
          initial="hidden"
          whileInView="show"
          variants={textVariant(0.8)}
          className="mt-6 lg:mb-6 lg:-mt-2 text-base text-gray-100/70 px-2 lg:text-lg lg:px-0 max-w-md"
        >
          Say goodbye to restrictive loyalty programs. Seamlessly convert and
          use your points with Monet!
        </motion.p>
        <CustomerWaitlistDialog />
      </div>
    </div>
  );
}

export default CustomerHero;
