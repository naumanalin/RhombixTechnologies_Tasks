import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navLinks } from '../constants'
import logo from '../assets/logo.svg'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const path = useLocation().pathname;

  return (
    <>

    <nav className="fixed z-40" style={{ width:'100vw'}}>
      <div className="bg-tertiary" style={{ width:'100vw' }}>
       <div className="container py-2 flex items-center justify-between ">

      {/* Dynamically update the 'a' and 'Link' tag on the bases on current path... */}
      {path === '/'? 
          (<a href="#hero">
            <img src={logo}  alt="logo" className='w-12 sm:w-16' />
          </a>) 
          : 
          ( <Link to='/' className="cursor-pointer">
              <img src={logo}  alt="logo" className='w-12 sm:w-16' />
            </Link>) }
         

          {/* Nav Links */}
          <div className="hidden sm:block cursor-pointer">
            <ul className="flex-ic-jc gap-6">
              {navLinks.map((nav, index)=>(
                <li> <a href={`#${nav.id}`}>{nav.name}</a> </li>
              ))}
            </ul>
          </div>

          {/* Toggle Button  */}
          <button className="sm:hidden" onClick={()=> setToggle(!toggle)}>
            <img src={toggle? close : menu } alt="toggle image" />
          </button>

        </div>
      </div>
    </nav>


        {/* Responsive Menu */}
       {toggle && 
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0}}
        transition={{duration:0.25, ease:'linear'}}
        className='absolute top-14 right-0 z-50 min-w-[310px] rounded-2xl bg-[#693bccea] py-4 px-2 m-2 '
        >
            <ul className='flex-ic-jc flex-col gap-2'>
              {
                navLinks.map((nav, index)=>(
                  <li className='hover:font-bold'> <a href={`#${nav.id}`} > {nav.name} </a> </li>
                ))
              }
            </ul>

        </motion.div>
      }

    </>
  )
}

export default Navbar