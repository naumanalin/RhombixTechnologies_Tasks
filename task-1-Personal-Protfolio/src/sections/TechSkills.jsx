import React from 'react'
import { motion } from 'framer-motion'
import { technologies } from '../constants'

const TechSkills = () => {
  return (
    <>
    <div className='flex justify-start gap-10'>
    {technologies.map((skill, index) => (
      <motion.div
      key={index}
      className='flex-ic-jc flex-col gap-3 text-secondary cursor-grab'>
        <img className='w-20' src={skill.icon} alt={'${skill.title} image'}  />
        <p className='text-sm'>{skill.name}</p>
      </motion.div>
    ))}
  </div>

  <div className='flex flex-row overflow-hidden justify-center gap-10 mt-10'>
    {technologies.map((skill, index) => (
      <motion.div
       key={index}
      className='flex-ic-jc flex-col gap-3 text-secondary cursor-crosshair'>
        <img className='w-20' src={skill.icon} alt={'${skill.title} image'}  />
        <p className='text-sm'>{skill.name}</p>
      </motion.div>
    ))}
  </div>
    </>
    
  )
}

export default TechSkills