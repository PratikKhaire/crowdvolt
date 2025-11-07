"use client"
import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef();

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    // Only apply horizontal scroll animation on desktop
    if (!isTablet) {
      const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".message-section",
          start: "2% top",
          end: `+=${scrollAmount + 100}px`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          markers: false,
          anticipatePin: 1,
        },
      });

      tl.to(".slider-wrapper", {
        x: `-${scrollAmount + 100}px`,
        ease: "power1.inOut",
      });

      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".message-section",
          start: "top top",
          end: "bottom 80%",
          scrub: true,
        },
      });

      titleTl
        .to(".first-text-split", {
          xPercent: -30,
          ease: "power1.inOut",
        })
        .to(
          ".flavor-text-scroll",
          {
            xPercent: -22,
            ease: "power1.inOut",
          },
          "<"
        )
        .to(
          ".second-text-split",
          {
            xPercent: -10,
            ease: "power1.inOut",
          },
          "<"
        );
    }
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative w-[280px] sm:w-[340px] md:w-[420px] lg:w-[50vw] h-64 sm:h-72 md:h-80 lg:h-[70vh] flex-none overflow-hidden ${flavor.rotation || ''}`}
          >
            <img
              src={`/images/Events/image_${flavor.num}.png`}
              alt=""
              className="absolute inset-0 w-full h-full object-contain object-bottom z-0 rounded-2xl sm:rounded-3xl"
            />

            
            <h1 className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 md:bottom-10 md:left-10 text-[#F5F5DC] text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold uppercase tracking-tighter z-30">
              {flavor.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;