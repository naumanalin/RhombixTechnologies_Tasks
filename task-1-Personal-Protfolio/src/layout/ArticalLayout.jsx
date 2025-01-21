import React from 'react'
import { Outlet } from 'react-router-dom'
import Projects from '../sections/Projects'

const ArticalLayout = () => {
  return (
    <div className="pt-[90px] container">
        <Outlet />
    <Projects/>
    </div>
  )
}

export default ArticalLayout