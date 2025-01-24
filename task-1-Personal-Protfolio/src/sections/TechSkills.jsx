import React from 'react'
import { motion } from 'framer-motion'
import { technologies } from '../constants'

const TechSkills = () => {
  const length = technologies.length;
  const duration = 25;
  const delay =  duration / length 

  return (
    <>
    {/* Info Section */}
         <motion.div
     initial={{ opacity:0, x: 100 }}
     transition={{ duration:0.7, ease:"easeIn" }}
     whileInView={{ opacity:1, x:0}}

     className="py-3" id="about">
      <h2 className="text-white font-black text-3xl sm:text-[50px] md:text-[60px] sm:mt-1 md:mt-3 ">Skills</h2>
     </motion.div>

     <motion.p
     initial={{ opacity:0, x:-100}}
     whileInView={{ opacity:1, x:0}}
     transition={{ duration:0.5, ease:"easeInOut"}}
     className="text-secondary max-w-3xl leading-[30px] text-[17px]">
      I am fresh software engeneer skilled in following technologies currently the website you looking i developer it with reacct, tailwind, framer motion and three.js. That shows my known about programming and
     </motion.p>

    {/* Right to Left Animation */}
    <div className='relative overflow-hidden h-[120px] logo-slider' >
    {technologies.map((skill, index) => (
      <motion.div
      animate={{ x:-1400 }}
      whileHover={{ }}
      transition={{ duration:duration, repeat:'Infinity', ease:'linear', delay: delay * index }}
      className='absolute slider-item left-[100%] w-10  md:w-20 text-center cursor-pointer'
      key={index}
      >
        <img className='w-20 mb-3' src={skill.icon} alt={'${skill.title} image'}  />
        <p className='text-sm text-secondary'>{skill.name}</p>
      </motion.div>
    ))}
    </div>

    {/* Left to Right Animation */}
    <div className='relative overflow-hidden h-[120px] logo-slider md:mt-5 md:mb-28'>
    {technologies.map((skill, index) => (
      <motion.div
      animate={{ x:1400 }}
      whileHover={{ }}
      transition={{ duration:duration, repeat:'Infinity', ease:'linear', delay: delay * index }}
      className='absolute slider-item left-[-10%] w-10 md:w-20 text-center cursor-pointer'
      key={index}
      >
        <img className='w-full' src={skill.icon} alt={'${skill.title} image'}  />
        <p className='text-sm text-secondary'>{skill.name}</p>
      </motion.div>
    ))}
    </div>
    </>
    
  )
}

export default TechSkills