import Image from "next/image";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

import arch_4 from "../../../assets/images/arch_4.jpg";

export function BentoGridSecond() {
  return (
    <>
      <h1
        // data-aos="zoom-in-up"
        data-scroll
        data-scroll-speed="0.08"
        className=" text-center  mb-12 text-4xl md:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
      >
        <span className="text-3xl">Project</span> <br /> Interior Architecture.
      </h1>

      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
          />
        ))}
      </BentoGrid>
      <div className="text-center mt-8">
        <button
          data-scroll
          data-scroll-speed="0.06"
          className="  inline-flex h-12 animate-shimmer  items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          View All Crafts
        </button>
      </div>
    </>
  );
}
const Skeleton = () => (
  <div className="flex cursor-pointer flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2]   border border-transparent ">
    <Image
      className="overlay-content object-cover"
      src={arch_4}
      alt="thumbnail"
    />
  </div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
  },
];
