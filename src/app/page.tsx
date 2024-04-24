import React from "react";
import Hero from "@/components/home/Hero/Hero";
import About from "@/components/home/About/About";
import Services from "@/components/home/Services/Services";
import Brands from "@/components/home/Brands/Brands";
import Contacts from "@/components/home/Contacts/Contacts";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Services />
      <Brands />
      <Contacts />
    </div>
  );
}
