"use client";
import { useCallback, useRef } from "react";
import Image from "next/image";

import { useMousePosition } from "@/lib/usePosition";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export default function CardShiny({
  className,
  icon,
  title,
  description,
}: FeatureCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    if (!overlayRef.current) {
      return;
    }

    const { width, height } = overlayRef.current?.getBoundingClientRect() ?? {};
    const xOffset = x - width / 2;
    const yOffset = y - height / 2;

    overlayRef.current?.style.setProperty("--x", `${xOffset}px`);
    overlayRef.current?.style.setProperty("--y", `${yOffset}px`);
  }, []);

  useMousePosition(containerRef, update);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative w-96 min-w-fit max-w-full overflow-hidden rounded-md border border-border bg-zinc-700 p-6 text-zinc-200 shadow-lg",
        className
      )}
    >
      <div
        ref={overlayRef}
        // Adjust height & width as required
        className="-z-1 absolute h-64 w-64 rounded-full bg-white opacity-0 bg-blend-soft-light blur-3xl transition-opacity group-hover:opacity-20"
        style={{
          transform: "translate(var(--x), var(--y))",
        }}
      />

      <div className="flex flex-col w-full  lg:w-1/3 border rounded-3xl border  bg-gradient-to-t from-[#0F0D00]/40 to-[#2D2500]/40 backdrop-blur-[10px]  sm:mt-6 px-2 rounded-[20px] border-[1px] border-[#FFCC12]/10 ">
        <div className="flex flex-col grow items-start p-8 rounded-3xl sm:px-5">
          <Image
            src={icon}
            alt=""
            width={63}
            height={60}
            className="object-contain"
          />
          <h3 className="mt-12 text-lg lg:text-2xl font-medium text-white sm:mt-10">
            {title}
          </h3>
          <p className="mt-2 text-base lg:text-sm leading-6 text-zinc-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
