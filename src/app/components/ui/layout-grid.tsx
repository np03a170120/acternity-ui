"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../util/cn";
import Image, { StaticImageData } from "next/image";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: StaticImageData;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <>
      <div
        data-aos-easing="linear"
        data-aos-duration="200"
        data-aos="fade-down"
        className="w-full  mr-24 h-[65vh] p-10 grid grid-cols-1 md:grid-cols-6 max-w-7xl mx-auto gap-4 "
      >
        {cards.map((card, i) => (
          <div key={i} className={cn(card.className, "")}>
            <motion.div
              onClick={() => handleClick(card)}
              className={cn(
                card.className,
                "relative cursor-pointer  hover:bg-red overflow-hidden  ",
                selected?.id === card.id
                  ? " cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                  : lastSelected?.id === card.id
                  ? "z-40 bg-white  h-full w-full"
                  : "bg-white  h-full w-full"
              )}
              layout
            >
              {selected?.id === card.id && <SelectedCard selected={selected} />}
              <BlurImage card={card} />
            </motion.div>
          </div>
        ))}
        <motion.div
          onClick={handleOutsideClick}
          className={cn(
            "absolute h-full w-full left-0 top-0  bg-black opacity-0 z-10",
            selected?.id ? "pointer-events-auto" : "pointer-events-none"
          )}
          animate={{ opacity: selected?.id ? 0.3 : 0 }}
        />
      </div>
      <button className="float-right mr-32 inline-flex h-12 animate-shimmer  items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        View All Crafts
      </button>
    </>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={card.thumbnail}
      height="400"
      width="00"
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
