"use client";
import CardCarousel from "@/components/CardCarousel";
import Contactus from "@/components/Contactus";
import Explore from "@/components/Explore";
import Findclinics from "@/components/Findclinics";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Howmaia from "@/components/Howmaia";
import Learn from "@/components/Learn";
import Login from "@/components/Login";
import Image from "next/image";

export default function Home() {
  return (
    <div id="main" className=" bg-white">
      <Hero />
      <Howmaia />
      <Explore />
      <Findclinics />
      <Learn />
      <Contactus />
      {/* <CardCarousel /> */}
    </div>
  );
}
