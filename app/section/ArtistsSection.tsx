"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { artists } from "@/app/constants/index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ArtistsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  // GSAP Animation for cards entrance
  useGSAP(() => {
    if (cardsRef.current.length === 0) return;

    // Animate each card with stagger
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: sectionRef });

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scrollSpeed = 1.5; // Slightly slower for smoother effect

    const autoScroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Seamless loop
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 280;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="section-wrapper bg-gray-50 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 overflow-hidden"
    >
      {/* Section Header - Centered with max-width */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 mb-6 sm:mb-8 md:mb-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Artists in Crowdvolt
          </h2>
        </div>
      </div>

      {/* Full Width Scrollable Container */}
      <div className="relative group w-full">
        {/* LEFT Edge - Enhanced Smooth Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 z-20 pointer-events-none">
          <div 
            className="absolute inset-0" 
            style={{
              background: 'linear-gradient(to right, rgb(249, 250, 251) 0%, rgb(249, 250, 251) 20%, rgba(249, 250, 251, 0.95) 40%, rgba(249, 250, 251, 0.7) 60%, rgba(249, 250, 251, 0.3) 80%, transparent 100%)'
            }}
          />
          <div className="absolute inset-0 backdrop-blur-[1px]" 
               style={{
                 maskImage: 'linear-gradient(to right, black 0%, black 30%, transparent 100%)',
                 WebkitMaskImage: 'linear-gradient(to right, black 0%, black 30%, transparent 100%)'
               }} 
          />
        </div>
        
        {/* RIGHT Edge - Enhanced Smooth Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 z-20 pointer-events-none">
          <div 
            className="absolute inset-0" 
            style={{
              background: 'linear-gradient(to left, rgb(249, 250, 251) 0%, rgb(249, 250, 251) 20%, rgba(249, 250, 251, 0.95) 40%, rgba(249, 250, 251, 0.7) 60%, rgba(249, 250, 251, 0.3) 80%, transparent 100%)'
            }}
          />
          <div className="absolute inset-0 backdrop-blur-[1px]" 
               style={{
                 maskImage: 'linear-gradient(to left, black 0%, black 30%, transparent 100%)',
                 WebkitMaskImage: 'linear-gradient(to left, black 0%, black 30%, transparent 100%)'
               }} 
          />
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-gray-100 shadow-xl rounded-full p-2 sm:p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 transform border border-gray-200"
          aria-label="Scroll left"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-gray-100 shadow-xl rounded-full p-2 sm:p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 transform border border-gray-200"
          aria-label="Scroll right"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        {/* Artists Scroll Container - FULL WIDTH */}
        <div
          ref={scrollContainerRef}
          className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-3 sm:pb-4 relative w-full px-4 sm:px-6 md:px-16"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Duplicate artists for seamless infinite loop */}
          {[...artists, ...artists].map((artist, index) => (
            <div
              key={`${artist.id}-${index}`}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="flex-none w-[160px] sm:w-[180px] md:w-[220px] lg:w-[240px] group/card cursor-pointer"
            >
              {/* Artist Card */}
              <div className="relative">
                {/* Image Container with Gradient Background */}
                <div
                  className={`relative w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[240px] lg:h-[240px] rounded-full overflow-hidden bg-gradient-to-br ${artist.gradient} shadow-xl group-hover/card:shadow-2xl transition-all duration-500 group-hover/card:scale-110 group-hover/card:rotate-3`}
                >
                  {/* Animated ring effect */}
                  <div className="absolute inset-0 rounded-full border-4 border-gray-300/0 group-hover/card:border-gray-400/40 transition-all duration-500 group-hover/card:scale-110" />
                  
                  {/* Rotating gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover/card:from-blue-500/10 group-hover/card:via-purple-500/10 group-hover/card:to-pink-500/10 transition-all duration-700" />
                  
                  {/* Artist Image */}
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover transition-all duration-500 group-hover/card:scale-110"
                    sizes="(max-width: 768px) 220px, 240px"
                  />
                  
                  {/* Multi-layer overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/20 group-hover/card:from-black/20 group-hover/card:to-black/40 transition-all duration-500" />
                  
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000" />
                  </div>
                  
                  {/* Pulsing glow ring */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover/card:opacity-20 blur-md transition-all duration-500 group-hover/card:animate-pulse -z-10" />
                </div>

                {/* Artist Name with enhanced animation */}
                <div className="mt-3 sm:mt-4 text-center transform transition-all duration-300 group-hover/card:-translate-y-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 tracking-tight group-hover/card:text-purple-600 transition-colors duration-300">
                    {artist.name}
                  </h3>
                  
                  {/* Animated underline on hover */}
                  <div className="h-0.5 w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-2 group-hover/card:w-full transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator - Optional */}
      <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-600 md:hidden">
        Swipe to see more artists →
      </div>
    </section>
  );
};

export default ArtistsSection;