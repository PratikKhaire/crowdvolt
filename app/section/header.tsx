"use client";

import Image from "next/image";
import { useState } from "react";
import FullLogo from "@/assets/full_logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky z-50 top-0 backdrop-blur-sm bg-white/80">
      <div className="py-4 md:py-5">
        {/* Centered Container with Max Width */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32">
          <div className="flex items-center justify-between">
            <Image 
              src={FullLogo} 
              alt="CrowdVolt Logo" 
              height={100} 
              width={100} 
              className="h-8 w-auto sm:h-10 md:h-12" 
            />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex text-base lg:text-lg text-black/60 gap-6 lg:gap-8 xl:gap-10 items-center">
              <a href="#" className="hover:text-black transition-colors">Events</a>
              <a href="#" className="hover:text-black transition-colors">About</a>
              <a href="#" className="hover:text-black transition-colors">Help</a>
              
              <button className="bg-black text-white px-5 lg:px-6 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-black/90 transition-colors">
                Login
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[60px] bg-white/95 backdrop-blur-lg z-40 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col px-6 py-8 gap-6">
          <a 
            href="#" 
            className="text-xl font-medium text-black/70 hover:text-black transition-colors py-3 border-b border-black/10"
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </a>
          <a 
            href="#" 
            className="text-xl font-medium text-black/70 hover:text-black transition-colors py-3 border-b border-black/10"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#" 
            className="text-xl font-medium text-black/70 hover:text-black transition-colors py-3 border-b border-black/10"
            onClick={() => setIsMenuOpen(false)}
          >
            Help
          </a>
          
          <button 
            className="bg-black text-white px-6 py-3 rounded-lg font-medium text-lg mt-4 hover:bg-black/90 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </button>
        </nav>
      </div>
    </header>
  );
};
