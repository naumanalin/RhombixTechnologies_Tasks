import React from 'react'
import './index.css'
import Navbar from './sections/Navbar'

import { Route, Routes } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout'
import ArticalLayout from './layout/ArticalLayout'
import SingleProject from './components/SingleProject'


function App() {
  

  return (
    <>
     <div className='relative z-0 bg-primary'> 
        <Navbar/>
      
      <Routes>
        {/* Home Layout */}
        <Route path='/' element={<HomeLayout/>} ></Route>

        {/* Artical Layout */}
        <Route element={<ArticalLayout/>}>
            <Route path="/project/:id" element={<SingleProject />} />
        </Route>
      </Routes>

        



     </div>
    </>
  )
}

export default App
