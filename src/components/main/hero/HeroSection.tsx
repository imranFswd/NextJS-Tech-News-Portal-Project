import React from 'react'
import HeroBigTitle from './HeroBigTitle'
import { HeroParagraph } from './HeroParagraph'
import HeroBtn from './HeroBtn'
// import { Spotlight } from '../ui/Spotlight'


function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>

        {/* <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="red"
        /> */}

        <div className='p-4 relative z-10 w-full text-center'>

            
            <HeroBigTitle />

            <HeroParagraph />

            <HeroBtn />
            

            
        </div>
    </div>
  )
}

export default HeroSection