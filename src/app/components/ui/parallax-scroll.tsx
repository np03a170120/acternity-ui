"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { cn } from "../../util/cn";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: Array<any>;
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div className={cn("h-[80vh] items-start w-full", className)} ref={gridRef}>
      <div
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 items-start  max-w-8xl mx-auto gap-10 py-40  px-12"
        ref={gridRef}
      >
        <div className="grid col-span-3 gap-10">
          <h1
            // data-aos="fade-up"
            data-scroll
            data-scroll-speed="0.05"
            className=" z-10  text-left text-4xl md:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
          >
            <span className="text-3xl">Memories</span> <br /> All that we share
          </h1>
          <p
            // data-aos="fade-up"
            data-scroll
            data-scroll-speed="0.08"
            className=" font-normal text-base text-neutral-300 max-w-lg  mr-12"
          >
            कृथ्या , translating to stories is an architecture and design firm
            based in Kathmandu started in 2019 by a young group of architects
            with a common vision to redefine architecture and design
          </p>
        </div>
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              data-scroll
              data-scroll-speed="0.1"
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top  gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              data-scroll
              data-scroll-speed="0.2"
              style={{ y: translateThird }}
              key={"grid-3" + idx}
            >
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top  gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
