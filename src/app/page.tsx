"use client";
import { useEffect, useRef } from "react";
import { BentoGridSecond } from "./components/abstraction/BentoGrid";
import { FloatingNavbar } from "./components/abstraction/FloatingNav";
import { LayoutGridHome } from "./components/abstraction/LayoutGrid";
import AOS from "aos";
import "aos/dist/aos.css";
import { Parallax } from "./components/abstraction/Parallax";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

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
      <div className="relative py-20 ">
        <LayoutGridHome />
      </div>
      <BentoGridSecond />
      <Parallax />
    </>
  );
}
