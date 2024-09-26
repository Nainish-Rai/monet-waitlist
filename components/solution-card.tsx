import * as React from "react";
import Image from "next/image";

interface SolutionCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function SolutionCard({
  icon,
  title,
  description,
}: SolutionCardProps) {
  return (
    <div className="flex flex-col w-full  lg:w-1/3 border rounded-3xl border  bg-gradient-to-t from-[#0F0D00]/40 to-[#2D2500]/40 backdrop-blur-[10px]  sm:mt-6 lg:px-4 py-4 rounded-[20px] border-[1px] border-[#FFCC12]/10 ">
      <div className="flex flex-col grow items-start p-8 rounded-3xl sm:px-5">
        <Image
          src={icon}
          alt=""
          width={63}
          height={60}
          className="object-contain"
        />
        <h3 className="mt-12 text-lg lg:text-[1.6rem] font-medium text-white sm:mt-16">
          {title}
        </h3>
        <p className="mt-2 text-base lg:text-sm leading-6 text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  );
}
