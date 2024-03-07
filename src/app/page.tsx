"use client";
import { useEffect } from "react";
import { BentoGridSecond } from "./components/abstraction/BentoGrid";
import { FloatingNavbar } from "./components/abstraction/FloatingNav";
import { LayoutGridHome } from "./components/abstraction/LayoutGrid";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 600,
      easing: "ease",
      once: false,
    });
  }, []);
  return (
    <>
      <FloatingNavbar />
      <div className="relative mb-24">
        <LayoutGridHome />
      </div>
      <BentoGridSecond />
    </>
  );
}
