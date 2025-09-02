"use client"

import AboutSRM from "@/components/AboutSrm/AboutSRM";
import AboutVMUN from "@/components/AboutVMUN/AboutVMUN";
import Cards from "@/components/Cards/Cards";
import Home from "@/components/Home/Home";
import Letter from "@/components/Letter/Letter";

export default function Home_Page() {
  return (
    <div className="">
      <div id="home" className="scroll-mt-24">
        <Home/>
      </div>
      <div id="about" className="scroll-mt-24">
        <AboutSRM />
      </div>
      <AboutVMUN />
      
      <Letter />
      <Cards/>
      
      
    </div>
  );
}
