"use client";

import { useRef } from "react";
import { CoverFlowGallery } from "../components/CoverFlowGallery";

export const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="pt-4 pb-8 sm:pt-8 sm:pb-12 md:pt-5 md:pb-0 overflow-hidden min-h-[85vh] bg-light flex items-center"
    >
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="md:flex items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          
          {/* 3D Cover Flow Gallery - Right Side on Desktop */}
          <div 
            className="hidden md:flex md:order-2 md:w-[560px] lg:w-[660px] md:h-[380px] lg:h-[448px] relative items-center justify-center flex-shrink-0"
            style={{ background: "transparent" }}
          >
            <CoverFlowGallery />
          </div>

          {/* Hero Content - Left Side on Desktop */}
          <div className="md:order-1 md:flex-1 max-w-full md:max-w-[640px]">
            <div>
              <div className="text-xs sm:text-sm border border-[#222]/10 inline-flex px-3 py-1 rounded-lg tracking-tight">
                Version 2.0 is here
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#6f0080] text-transparent bg-clip-text mt-4 sm:mt-6 leading-tight">
                Buy or Sell <br /> Rave & EDM Tickets
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#010D3E] tracking-tight mt-4 sm:mt-6 leading-relaxed">
                Easy, secure, and hassle-free transactions powered by community-generated reviews and ratings.
              </p>
            </div>

            {/* 3D Cover Flow Gallery for Mobile */}
            <div className="md:hidden h-[280px] sm:h-[320px] w-full my-6 sm:my-8 relative flex items-center justify-center">
              <CoverFlowGallery />
            </div>

            <div className="mt-6 sm:mt-10 w-full flex flex-col sm:flex-row items-center justify-center sm:justify-center gap-3 sm:gap-4">
              <button className="btn btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 w-auto inline-flex items-center justify-center">
                Join the Party
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
