
import { AppBar } from "@/components/Appbar";
import { Hero } from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <AppBar></AppBar>
      <Hero></Hero>
      {/* <HeroVideo/> */}
    </div>
  );
}
