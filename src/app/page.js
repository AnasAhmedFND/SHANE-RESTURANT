
import Cafe from "@/Compunents/Home_/Cafe";
import Curbside from "@/Compunents/Home_/Curbside";
import Hero from "@/Compunents/Home_/Hero";
import Menu from "@/Compunents/Home_/Menu";
import Stories from "@/Compunents/Home_/Stories";
import Image from "next/image";

export default function Home() {
  return (
   <div>

    <Hero />
    <Curbside />
    <Stories />
    <Menu />
    <Cafe />

   </div>
  );
}
