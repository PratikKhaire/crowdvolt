"use client"

import React from 'react'
import { Header } from './section/header'
import { Hero } from './section/Hero'
import Message from './section/Message'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import ArtistsSection from './section/ArtistsSection'
import EventBrowse from './section/EventBrowse'
import Footer from './section/Footer'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Page = () => {

 useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    })
  })

  return (
    <>
     <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="font-sora">
          <Header/>
          <Hero/>
        </div>  
        <EventBrowse />
        <Message/>
        <ArtistsSection />
        <Footer/>
      </div>
     </div>
    </>
  )
}

export default Page