import React from "react";
import Tilt from "react-tilt";
import { motion } from 'framer-motion';
import { projects } from '../constants/index.js';
import { github } from "../assets";
import { Link, useLocation } from "react-router-dom";

const Projects = () => {
  const location = useLocation();
  return (
    <>
    <motion.div
     initial={{ opacity:0, x: 100 }}
     transition={{ duration:0.7, ease:"easeIn" }}
     whileInView={{ opacity:1, x:0}}

     className="py-3" id="projects">
      <p className="text-secondary tracking-wider text-sm">My Work</p>
      <h2 className="text-white font-black text-3xl sm:text-[50px] md:text-[60px] sm:mt-1 md:mt-3 ">Projects.</h2>
     </motion.div>

      {location.pathname === '/' &&
     <motion.p
     initial={{ opacity:0, x:-100}}
     whileInView={{ opacity:1, x:0}}
     transition={{ duration:0.5, ease:"easeInOut"}}

     className="text-secondary max-w-3xl leading-[30px] text-[17px]">
      Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
     </motion.p>
     }

     <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
     
     </>
  )
}

export default Projects


const ProjectCard = ({index, name, id, description, tags, image, source_code_link}) => {
  return (
    <Tilt options={{ max: 45, scale: 1, speed: 450 }} >
    <motion.div 
    
    className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
    >
      {/* image section */}
      <div className='relative w-full h-[230px]' >
        <img src={image} alt='image' className='w-full h-full object-fit rounded-2xl' />
        <div title="view source code" onClick={()=> window.open(source_code_link, "_blank")}
        className='bg-black absolute top-2 right-2
        w-[40px] rounded-full cursor-pointer' >
          <img src={github} alt='view code' />
        </div>
      </div>

      {/* info section */}
      <Link to={`/project/${id}`} className='mt-5' >
        <h3 className='font-bold text-2xl'>{name}</h3>
        <p className='text-secondary text-[14px]'>{description}</p>
      </Link>

      {/* tag name section */}
      <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
    </motion.div>
    </Tilt>
  )
}