"use client";
import { ParallaxScroll } from "../ui/parallax-scroll";
import arch_1 from "../../../assets/images/arch_1.jpg";
import arch_2 from "../../../assets/images/arch_2.jpg";
import arch_3 from "../../../assets/images/arch_3.jpg";
import arch_4 from "../../../assets/images/arch_4.jpg";

export function Parallax() {
  return <ParallaxScroll images={images} />;
}

const images = [arch_1, arch_2, arch_3, arch_4, arch_1, arch_2];
