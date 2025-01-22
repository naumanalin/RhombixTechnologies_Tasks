import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants/index.js'

const ExperienceCard = ({ key, experience }) => {
  return (
    <VerticalTimelineElement key={key}
    contentStyle={{
      background: '#1d1836',
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date= {experience.date}
    iconStyle={{ background: experience.iconBg}}
    icon = {
      <div className='flex-ic-jc w-full h-full'>
        <img src={experience.icon} alt="image" className="object-container w-[60%] h-[60%] " />
      </div>
    }
    >
      {/* Innner Info Section */}
      <div>
        <h3 className="text-[24px] font-bold">{experience.title}</h3>
        <ul className="list-disc mt-5 ml-5 space-y-2">
          {experience.points.map((point, index)=>(
            <li className="text-white-100 text-[14px] pl-1 tracking-wider">
              {point}
            </li>
          ))}
        </ul>
      </div>

    </VerticalTimelineElement>
  )
}

const ExperienceTimeLine = () => {
  return (
    <>
    {/* Title Section */}
    <motion.div
    initial={{ opacity:0, y:-100 }}
    whileInView={{ opacity:1, y:0 }}
    transition={{ duration:0.7, ease:"easeIn" }}
    className='text-center my-28 '
    id='work'>  

      <p className="text-secondary tracking-wider text-sm">What I have done so far</p>
      <h2 className="text-white font-black text-3xl sm:text-[50px] md:text-[60px] sm:mt-1 md:mt-3 ">Work Experience.</h2>
      
    </motion.div>

    {/* Card Section */}
    <div className="flex flex-col mb-32">
      <VerticalTimeline>
        { experiences.map((experience, index)=> (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default ExperienceTimeLine