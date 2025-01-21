import React, { useRef }  from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import ExperienceTimeLine from '../sections/Experience'
import TechSkills from '../sections/TechSkills'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'

const HomeLayout = () => {
    const parentRef = useRef();
  return (
    <>
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
    </div>

    <div className="container" ref={parentRef}>
        <About parentRef={parentRef} />
        <ExperienceTimeLine />
        <TechSkills />
        <Projects />
    </div>

    <div className="relative">
    <Contact />
    </div>
</>
  )
}

export default HomeLayout