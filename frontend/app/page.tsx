
import { AppBar } from "@/components/Appbar";
import { Hero } from "@/components/Hero";
import { HeroVideo } from "@/components/HeroVideo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pb-48">
      <AppBar></AppBar>
      <Hero></Hero>
      <div className="pt-4">
      <HeroVideo/>
      </div>
    </div>
  );
}
