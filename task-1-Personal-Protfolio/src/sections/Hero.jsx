import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const heroHeading = 'font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] ';
  const heroText = 'font-medium text-[#dfd9ff] lg:text[30px] sm:text-[26px] text-[16px] lg:leading-[40px]'
  return (
    <>
    <section className= 'container pt-[90px] relative top-3 p-0' id='hero'>
      {/* Hero Info Section */}
      <div className='flex'>
        {/* line */}
        <div className="flex-ic-jc flex-col">
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        {/* text info */}
        <div className="">
          <h1 className={heroHeading}>Hi, I'm <span className="text-[#915EFF]">Nouman</span></h1>
          <p className={heroText}> I develop 3D visuals, user <br className='sm:block hidden' />
          interfaces and business logic web applications</p>
        </div>
      </div>

      {/* Hero 3D Model here */}


      {/* Animated self build Icon */}
      <div className="absolute -bottom-1 w-full flex-ic-jc ">
        <a href="#about">
          <div className="w-[30px] h-[60px] rounded-3xl border-4 border-secondary p-1">
            <motion.div
            animate={{ y:[0, 24, 0]}}
            transition={{ duration:1.5, repeat:Infinity, repeatType:"loop"}} 
            className='w-3 h-3 rounded-full bg-secondary'
            
            />
          </div>
        </a>
      </div>

     
    </section>
    </>
  )
}

export default Hero


