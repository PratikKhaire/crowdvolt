import React from 'react'
import FlavorTitle from '../components/FlavorTitle'
import FlavorSlider from '../components/FlavorSlider'

const Message = () => {
  return (
    <>
      <section className='message-section'>
        <div className=' h-full flex lg:flex-row flex-col items-center relative'>
            <div className='lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0'>
              <FlavorTitle/>
            </div>
            <div className="h-full">
              <FlavorSlider/>
            </div>
        </div>
      </section>
      
      {/* Events Explorer Section */}
      
    </>
  )
}

export default Message
