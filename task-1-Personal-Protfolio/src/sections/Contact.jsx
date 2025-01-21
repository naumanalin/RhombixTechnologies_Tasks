import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Model } from '../../public/Model';

const Contact = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleOnChnage = (e) =>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name] : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  }
  return (
     <div className="container mt-32 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden " id="contact">
      {/* form section */}
      <motion.div
      
      className='bg-black-100 p-8 rounded-2xl'>
      <p className="text-secondary tracking-wider text-sm">Get in touch</p>
      <h2 className="text-white font-black text-3xl sm:text-[50px] md:text-[60px] sm:mt-1 md:mt-3 ">Contact.</h2>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          {/* 1 - label */}
          <label className='flex flex-col gap-2'>
            <span className="font-semibold text-[16px]">Your Name</span>
            <input type="text" name="name" value={formData.name} onChange={handleOnChnage} 
            placeholder="What's you good name?"
            className='bg-tertiary py-4 px-6 rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* 2 - label */}
          <label className='flex flex-col gap-2'>
            <span className="font-semibold text-[16px]">Your Email</span>
            <input type="text" name="email" value={formData.email} onChange={handleOnChnage} 
            placeholder="What's you email address?"
            className='bg-tertiary py-4 px-6 rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* 3 - lable */}
          <label className='flex flex-col gap-2'>
            <span className="font-semibold text-[16px]">Your Message</span>
            <textarea name="message" value={formData.message} onChange={handleOnChnage} 
            placeholder="What you want to say?"
            className='bg-tertiary py-4 px-6 rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button type='submit' className='bg-tertiary py-3 w-44 font-bold rounded-[20px] border-2 border-[#804dee]'>
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>


      {/* Rotating Earth 3D-Model */}
      <motion.div
      
      className='h-[350px] md:h-[550px] xl:h-auto xl:flex-1 bg-gray-700'
      >
        <Canvas>
          <ambientLight intensity={0.5} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true} // Keep rotation enabled
            autoRotate={false} // Disable auto rotation
          />
          <Model />
        </Canvas>

      </motion.div>

     </div>
  )
}

export default Contact