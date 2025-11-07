"use client";

import React from 'react';
import FlavorSlider from '../components/FlavorSlider';
import { motion } from "framer-motion";

const Message = () => {
  return (
    <>
      <section className='message-section overflow-hidden'>
        {/* Centered Heading with Continuous Scroll Animation */}
        <div className='flex items-center justify-center pt-8 sm:pt-12 md:pt-16 overflow-hidden px-4'>
          <motion.h1 
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#6f0080] text-transparent bg-clip-text text-center whitespace-nowrap'
            animate={{
              x: [0, -100, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Trending Events
          </motion.h1>
        </div>

        {/* Slider Section */}
        <div className='h-full flex lg:flex-row flex-col items-center relative overflow-hidden'>
            <div className="h-full w-full lg:overflow-visible overflow-x-auto lg:pl-20 pl-4 scrollbar-hide">
              <FlavorSlider/>
            </div>
        </div>
      </section>
     
      
    </>
  )
}

export default Message
