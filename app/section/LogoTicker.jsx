"use client"
import acme from "@/assets/logo-acme.png";
import Image from "next/image";
import apex from "@/assets/logo-apex.png";
import echo from "@/assets/logo-pulse.png";
import quantum from "@/assets/logo-quantum.png";
import { motion } from "framer-motion";


export const LogoTicker = () => {
  return <div className="w-full h-full flex overflow-hidden" >
    <motion.div 
      className="flex flex-none gap-2 sm:gap-4" 
      animate={{ x: "-100%" }} 
      transition={{ duration: 55, repeat: Infinity, ease: "linear", repeatType: "loop" }}
    >
      <div className="w-[280px] sm:w-[400px] md:w-[648px] h-[180px] sm:h-[200px] md:h-[220px] flex items-center justify-center flex-shrink-0 rounded-2xl sm:rounded-3xl">
        <Image src={acme} alt="acme" className="logo-ticker-image" />
      </div>
      <div className="w-[280px] sm:w-[400px] md:w-[648px] h-[180px] sm:h-[200px] md:h-[220px] flex items-center justify-center flex-shrink-0 rounded-2xl sm:rounded-3xl">
        <Image src={echo} alt="echo" className="logo-ticker-image" />
      </div>
      <div className="w-[280px] sm:w-[400px] md:w-[648px] h-[180px] sm:h-[200px] md:h-[220px] flex items-center justify-center flex-shrink-0 rounded-2xl sm:rounded-3xl">
        <Image src={quantum} alt="quantum" className="logo-ticker-image" />
      </div>
      <div className="w-[280px] sm:w-[400px] md:w-[648px] h-[180px] sm:h-[200px] md:h-[220px] flex items-center justify-center flex-shrink-0 rounded-2xl sm:rounded-3xl">
        <Image src={apex} alt="apex" className="logo-ticker-image" />
      </div>

      {/* Duplicate for seamless loop */}
      <div className="w-[280px] sm:w-[400px] md:w-[648px] h-[180px] sm:h-[200px] md:h-[220px] flex items-center justify-center flex-shrink-0 rounded-2xl sm:rounded-3xl">
        <Image src={acme} alt="acme" className="logo-ticker-image" />
      </div>
      <div className="w-[280px] sm:w-[400px] md:w-[648px] h-[180px] sm:h-[200px] md:h-[220px] flex items-center justify-center flex-shrink-0 rounded-2xl sm:rounded-3xl">
        <Image src={echo} alt="echo" className="logo-ticker-image" />
      </div>
      <div className="w-[280px] sm:w-[400px] md:w-[648px] h-[180px] sm:h-[200px] md:h-[220px] flex items-center justify-center flex-shrink-0 rounded-2xl sm:rounded-3xl">
        <Image src={quantum} alt="quantum" className="logo-ticker-image" />
      </div>
      <div className="w-[280px] sm:w-[400px] md:w-[648px] h-[180px] sm:h-[200px] md:h-[220px] flex items-center justify-center flex-shrink-0 rounded-2xl sm:rounded-3xl">
        <Image src={apex} alt="apex" className="logo-ticker-image" />
      </div>
    </motion.div>
  </div>;
};
