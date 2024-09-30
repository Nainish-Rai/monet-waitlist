"use client";
import * as React from "react";
import SolutionCard from "../solution-card";
import { motion } from "framer-motion";
import { textVariant } from "@/lib/anims";

interface Solution {
  icon: string;
  title: string;
  description: string;
}

const solutions: Solution[] = [
  {
    icon: "/s1.svg",
    title: "Enhance Customer Experience",
    description:
      "Boost retention and engagement with focused analytics and tailored AI driven recommendations",
  },
  {
    icon: "/s2.svg",
    title: "Power Loyalty-led Growth",
    description:
      "Scale customer acquisition with Monet’s cross-brand loyalty platform. Unlock new opportunities to acquire customers with seamless points conversions.",
  },
];

export function SolutionsSection() {
  return (
    <section className="w-full px-4 lg:pt-12  lg:px-0 bg-gradient-to-bl from-[#D6AF503D]/15 from-0% via-black to-black ">
      <div className="flex flex-col max-w-7xl mt-32 mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="self-center text-3xl lg:text-5xl font-medium text-white sm:text-4xl"
        >
          What we offer
        </motion.h2>
        <div className="mt-6 lg:mt-12 w-full sm:mt-10 sm:max-w-full">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={textVariant(0.1)}
            className="flex gap-5 lg:flex-row flex-col"
          >
            {solutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
