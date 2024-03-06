import Image from "next/image";
import { SpotlightPreview } from "./components/abstraction/SpotlightPreview";
import { FloatingNavbar } from "./components/abstraction/FloatingNav";
import { LayoutGridHome } from "./components/abstraction/LayoutGrid";

export default function Home() {
  return (
    <>
      <FloatingNavbar />
      <div className="relative">
        <LayoutGridHome />
      </div>
    </>
  );
}
