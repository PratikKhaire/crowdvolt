"use client"


import { useRef } from "react";
import { LogoTicker } from "./LogoTicker";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Hero = () => {

  const heroRef = useRef(null);
  const coverflowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const orbsRef = useRef<(HTMLDivElement | null)[]>([]);

  // GSAP animations for smooth cursor following
  useGSAP(() => {
    // Initialize card positions on mount
    const initialPositions = [
      { x: -280, z: -200, rotationY: 45 },
      { x: -140, z: -100, rotationY: 25 },
      { x: 0, z: 50, rotationY: 0 },
      { x: 140, z: -100, rotationY: -25 },
      { x: 280, z: -200, rotationY: -45 }
    ];

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.set(card, {
          x: initialPositions[index].x,
          z: initialPositions[index].z,
          rotationY: initialPositions[index].rotationY,
          scale: 1
        });

        // Add hover listeners for smooth GSAP hover effect
        const handleCardMouseEnter = () => {
          gsap.to(card, {
            x: 0,
            z: 200,
            rotationY: 0,
            scale: 1.15,
            duration: 0.5,
            ease: "back.out(1.3)",
            overwrite: true
          });
        };

        const handleCardMouseLeave = () => {
          gsap.to(card, {
            x: initialPositions[index].x,
            z: initialPositions[index].z,
            rotationY: initialPositions[index].rotationY,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
            overwrite: true
          });
        };

        card.addEventListener('mouseenter', handleCardMouseEnter);
        card.addEventListener('mouseleave', handleCardMouseLeave);

        // Store cleanup function
        (card as HTMLDivElement & { _hoverCleanup?: () => void })._hoverCleanup = () => {
          card.removeEventListener('mouseenter', handleCardMouseEnter);
          card.removeEventListener('mouseleave', handleCardMouseLeave);
        };
      }
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!coverflowRef.current) return;
      
      const rect = coverflowRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1

      // Animate container tilt with GSAP
      gsap.to(containerRef.current, {
        rotationY: x * 5,
        rotationX: -y * 5,
        duration: 0.5,
        ease: "power2.out"
      });

      // Animate cards with GSAP - smooth parallax (only if not being hovered)
      cardsRef.current.forEach((card, index) => {
        if (!card || card.matches(':hover')) return;
        
        const multipliers = [
          { tx: -280, tz: -200, rx: 45, mx: 15, mz: 20, mr: 3 },  // Card 1
          { tx: -140, tz: -100, rx: 25, mx: 10, mz: 15, mr: 2 },  // Card 2
          { tx: 0, tz: 50, rx: 0, mx: 5, mz: 10, mr: 1 },          // Card 3
          { tx: 140, tz: -100, rx: -25, mx: 10, mz: 15, mr: 2 },   // Card 4
          { tx: 280, tz: -200, rx: -45, mx: 15, mz: 20, mr: 3 }    // Card 5
        ];

        const mult = multipliers[index];
        
        gsap.to(card, {
          x: mult.tx + x * mult.mx,
          z: mult.tz + y * mult.mz,
          rotationY: mult.rx + x * mult.mr,
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto"
        });
      });

      // Animate orbs
      if (orbsRef.current[0]) {
        gsap.to(orbsRef.current[0], {
          x: x * 30,
          y: y * 30,
          duration: 0.6,
          ease: "power2.out"
        });
      }
      if (orbsRef.current[1]) {
        gsap.to(orbsRef.current[1], {
          x: x * -20,
          y: y * -20,
          duration: 0.6,
          ease: "power2.out"
        });
      }
      if (orbsRef.current[2]) {
        gsap.to(orbsRef.current[2], {
          x: x * 40,
          y: y * -30,
          duration: 0.6,
          ease: "power2.out"
        });
      }

      // Animate cursor follower - REMOVED
    };

    const handleMouseEnter = () => {
      // Just for future use if needed
    };
    
    const handleMouseLeave = () => {
      
      // Reset all animations smoothly
      gsap.to(containerRef.current, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "power2.out"
      });

      // Reset cards to original positions (only non-hovered cards)
      cardsRef.current.forEach((card, index) => {
        if (!card || card.matches(':hover')) return;
        
        const positions = [
          { x: -280, z: -200, rotationY: 45 },
          { x: -140, z: -100, rotationY: 25 },
          { x: 0, z: 50, rotationY: 0 },
          { x: 140, z: -100, rotationY: -25 },
          { x: 280, z: -200, rotationY: -45 }
        ];

        gsap.to(card, {
          x: positions[index].x,
          z: positions[index].z,
          rotationY: positions[index].rotationY,
          duration: 0.8,
          ease: "power2.out"
        });
      });

      // Reset orbs
      orbsRef.current.forEach(orb => {
        if (orb) {
          gsap.to(orb, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          });
        }
      });
    };

    const coverflowElement = coverflowRef.current;
    if (coverflowElement) {
      coverflowElement.addEventListener('mousemove', handleMouseMove);
      coverflowElement.addEventListener('mouseenter', handleMouseEnter);
      coverflowElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      // Clean up card hover listeners
      cardsRef.current.forEach(card => {
        if (card) {
          const cardWithCleanup = card as HTMLDivElement & { _hoverCleanup?: () => void };
          if (cardWithCleanup._hoverCleanup) {
            cardWithCleanup._hoverCleanup();
          }
        }
      });

      if (coverflowElement) {
        coverflowElement.removeEventListener('mousemove', handleMouseMove);
        coverflowElement.removeEventListener('mouseenter', handleMouseEnter);
        coverflowElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return <section  ref={heroRef} className="pt-0 pb-0 md:pt-5 overflow-hidden min-h-[85vh] bg-light flex items-center">
    {/* Centered Container with Max Width */}
    <div className="max-w-[1400px] mx-auto w-full px-8 md:px-16 lg:px-24 xl:px-32 py-16 md:py-20">
      <div className="md:flex items-center justify-between gap-12 lg:gap-16">

        {/* 3D Cover Flow Gallery - Order 2 on desktop */}
        <div className="hidden md:flex md:order-2 md:w-[660px] md:h-[448px] relative items-center justify-center flex-shrink-0" style={{ background: 'transparent' }}>
          {/* 3D Perspective Container */}
          <div 
            ref={coverflowRef}
            className="relative w-full h-full" 
            style={{ perspective: '1200px', background: 'transparent' }}
          >
            {/* Animated Background Gradient Orbs - HIDDEN to remove background color */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none hidden">
              <div 
                ref={(el) => { orbsRef.current[0] = el; }}
                className="coverflow-orb coverflow-orb-1"
              />
              <div 
                ref={(el) => { orbsRef.current[1] = el; }}
                className="coverflow-orb coverflow-orb-2"
              />
              <div 
                ref={(el) => { orbsRef.current[2] = el; }}
                className="coverflow-orb coverflow-orb-3"
              />
            </div>

            {/* Cards Container - NO BACKGROUND */}
            <div 
              ref={containerRef}
              className="absolute inset-0 flex items-center justify-center coverflow-cards-container" 
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Card 1 - Far Left */}
              <div 
                ref={(el) => { cardsRef.current[0] = el; }}
                className="coverflow-card coverflow-card-1 group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Events/image_2.png"
                  alt="Event 1"
                  className="coverflow-image"
                />
              </div>

              {/* Card 2 - Mid Left */}
              <div 
                ref={(el) => { cardsRef.current[1] = el; }}
                className="coverflow-card coverflow-card-2 group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Events/image_4.png"
                  alt="Event 2"
                  className="coverflow-image"
                />
              </div>

              {/* Card 3 - Center (Featured) */}
              <div 
                ref={(el) => { cardsRef.current[2] = el; }}
                className="coverflow-card coverflow-card-center coverflow-card-3 group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Events/image_6.png"
                  alt="Event 3"
                  className="coverflow-image"
                />
              </div>

              {/* Card 4 - Mid Right */}
              <div 
                ref={(el) => { cardsRef.current[3] = el; }}
                className="coverflow-card coverflow-card-4 group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Events/image_8.png"
                  alt="Event 4"
                  className="coverflow-image"
                />
              </div>

              {/* Card 5 - Far Right */}
              <div 
                ref={(el) => { cardsRef.current[4] = el; }}
                className="coverflow-card coverflow-card-5 group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Events/image_10.png"
                  alt="Event 5"
                  className="coverflow-image"
                />
              </div>
            </div>

            {/* Floor Reflection */}
            <div className="absolute inset-0 flex items-center justify-center top-[50%]" style={{ transformStyle: 'preserve-3d', transform: 'scaleY(-1)', opacity: 0.3 }}>
              {/* Reflected Cards */}
              <div 
                className="coverflow-card-reflection"
                style={{ 
                  transform: 'translateX(-280px) translateZ(-200px) rotateY(45deg)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Events/image_2.png" alt="" className="coverflow-image-reflection" />
              </div>

              <div 
                className="coverflow-card-reflection"
                style={{ 
                  transform: 'translateX(-140px) translateZ(-100px) rotateY(25deg)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Events/image_4.png" alt="" className="coverflow-image-reflection" />
              </div>

              <div 
                className="coverflow-card-reflection"
                style={{ 
                  transform: 'translateX(0) translateZ(50px) rotateY(0deg)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Events/image_6.png" alt="" className="coverflow-image-reflection" />
              </div>

              <div 
                className="coverflow-card-reflection"
                style={{ 
                  transform: 'translateX(140px) translateZ(-100px) rotateY(-25deg)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Events/image_8.png" alt="" className="coverflow-image-reflection" />
              </div>

              <div 
                className="coverflow-card-reflection"
                style={{ 
                  transform: 'translateX(280px) translateZ(-200px) rotateY(-45deg)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Events/image_10.png" alt="" className="coverflow-image-reflection" />
              </div>
            </div>
          </div>
        </div>

        {/* Text Content - Shows first on mobile, Order 1 on desktop */}
        <div className="md:order-1 md:flex-1 max-w-[640px]">
          <div>
            <div className="text-sm border border-[#222]/10 inline-flex px-3 py-1 rounded-lg tracking-tight">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#6f0080] text-transparent bg-clip-text mt-6"> 
              Buy or Sell <br /> Rave & EDM Tickets
            </h1>
            
            <p className="text-xl text-[#010D3E] tracking-tight mt-6 leading-relaxed">
              Easy, secure, and hassle-free transactions powered by community-generated reviews and ratings.
            </p>
          </div>
          
          {/* Logo Ticker for mobile - appears after description - Full width */}
          <div className="md:hidden h-[350px] w-full my-8 relative flex items-center justify-center overflow-hidden">
            <LogoTicker/>
          </div>
          
          <div className="mt-8 flex items-center">
            <button className="btn btn-primary">Join the Party</button>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
