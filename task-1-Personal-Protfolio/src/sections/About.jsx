import React from "react";
import Tilt from "react-tilt";
import { motion } from 'framer-motion';
import { services } from '../constants/index.js';




const About = ({parentRef}) => {
  return (
    <>
     <motion.div
     initial={{ opacity:0, x: 100 }}
     transition={{ duration:0.7, ease:"easeIn" }}
     whileInView={{ opacity:1, x:0}}

     className="py-3" id="about">
      <p className="text-secondary tracking-wider text-sm">Intorduction</p>
      <h2 className="text-white font-black text-3xl sm:text-[50px] md:text-[60px] sm:mt-1 md:mt-3 ">Overview</h2>
     </motion.div>

     <motion.p
     initial={{ opacity:0, x:-100}}
     whileInView={{ opacity:1, x:0}}
     transition={{ duration:0.5, ease:"easeInOut"}}

     className="text-secondary max-w-3xl leading-[30px] text-[17px]">
      I am a fresh graduate and aspiring software developer with a strong foundation in HTML5, CSS3, JavaScript, PHP, and MySQL. 
      I am proficient in frameworks like React, Next.js, Node.js, Express, and Three.js, and have hands-on experience with WordPress. 
      I also excel in using UI libraries such as Tailwind CSS, Bootstrap, and Framer Motion, along with Figma for UI/UX design.
     </motion.p>

     <div className="mt-14 mb-20  flex flex-wrap gap-10" >
      {services.map((service, index)=> (
        <ServiceCard key={index} index={index} parentRef={parentRef} {...service} /> 
      ))}
     </div>

    </>
  )
}

export default About



const ServiceCard = ({index, title, icon, parentRef}) =>{
  return (
   <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="xs:w-[250px] z-10">
     <motion.div
     drag dragConstraints={parentRef} // Restrict drag within parent
     initial={{opacity:0, x:50}}
     whileInView={{ opacity:1, x:0 }}
     transition={{ duration:0.2, delay: 0.2 * index }}
 
     
     className={`bg-tertiary min-w-[250px] w-full rounded-[20px] border-2 border-[#804dee] shadow-card cursor-pointer`}>
       <div 
       className="min-h-[280px] flex flex-col justify-evenly items-center p-5 ">
         <img src={icon} alt="loading icon..." className="w-16 h-16 object-contain" />
         <h3 className="text-xl font-bold text-center">{title}</h3>
       </div>
     </motion.div>
   </Tilt>
  )
 }