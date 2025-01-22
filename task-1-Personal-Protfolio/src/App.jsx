import React from 'react'
import { ToastContainer } from 'react-toastify';
import './index.css'
import Navbar from './sections/Navbar'

import { Route, Routes } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout'
import ArticalLayout from './layout/ArticalLayout'
import SingleProject from './components/SingleProject'


function App() {
  

  return (
    <>
     <div className='relative overflow-hidden z-0 bg-primary'> 
        <Navbar/>
      
      <Routes>
        {/* Home Layout */}
        <Route path='/' element={<HomeLayout/>} ></Route>

        {/* Artical Layout */}
        <Route element={<ArticalLayout/>}>
            <Route path="/project/:id" element={<SingleProject />} />
        </Route>
      </Routes>

      <ToastContainer position="top-right" autoClose={5000} draggable pauseOnHover theme="light"/>

     </div>
    </>
  )
}

export default App
