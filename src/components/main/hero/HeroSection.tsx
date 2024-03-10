
"use client";
import HeroBigTitle from './HeroBigTitle'
import { HeroParagraph } from './HeroParagraph'
import HeroBtn from './HeroBtn'


function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>

        <div className='p-4 relative z-10 w-full text-center mt-10'>

            <HeroBigTitle />

            <HeroParagraph />

            <HeroBtn />
            
        </div>

    </div>
  )
}

export default HeroSection
