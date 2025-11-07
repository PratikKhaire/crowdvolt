"use client";

import React from 'react';
import FlavorSlider from '../components/FlavorSlider';
import { motion } from "framer-motion";

const Message = () => {
  return (
    <>
      <section className='message-section'>
        {/* Centered Heading with Continuous Scroll Animation */}
        <div className='flex items-center justify-center pt-16 overflow-hidden'>
          <motion.h1 
            className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#6f0080] text-transparent bg-clip-text text-center whitespace-nowrap'
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
        <div className='h-full flex lg:flex-row flex-col items-center relative'>
            {/* <div className='lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0'>
              {/* <FlavorTitle/> */}
            {/* </div> */} 
            <div className="h-full pl-20 ">
              <FlavorSlider/>
            </div>
        </div>
      </section>
     
      
    </>
  )
}

export default Message
