"use client";
import { useEffect } from "react";
import { BentoGridSecond } from "./components/abstraction/BentoGrid";
import { FloatingNavbar } from "./components/abstraction/FloatingNav";
import { LayoutGridHome } from "./components/abstraction/LayoutGrid";

import { Parallax } from "./components/abstraction/Parallax";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <main>
        <FloatingNavbar />
        <div className="relative py-20 ">
          <LayoutGridHome />
        </div>
        <BentoGridSecond />
        <Parallax />
      </main>
    </>
  );
}
