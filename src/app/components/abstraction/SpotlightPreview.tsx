import React from "react";
import { cn } from "../../util/cn";
import { Spotlight } from "../ui/Spotlight";
import banner from "../../../assets/images/arch_1.jpg";
import Image from "next/image";

export function SpotlightPreview() {
  return (
    <div className="h-[40rem] text-center w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden overlay">
      <Image className="overlay-content" src={banner} alt="thumbnail" />

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-10"
        fill="orange"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1
          // data-aos="zoom-in-up"
          data-scroll
          data-scroll-speed="0.1"
          className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
        >
          कृथ्या Studio <br />
        </h1>
        <p
          // data-aos="fade-up"
          data-scroll
          data-scroll-speed="0.02"
          className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto"
        >
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page.
        </p>
        <button
          // data-aos="fade-up"
          data-scroll
          data-scroll-speed="0.06"
          className="inline-flex h-12 animate-shimmer mt-12 items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Work with us?
        </button>
      </div>
    </div>
  );
}
