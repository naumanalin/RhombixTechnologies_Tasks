import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import {  toast } from 'react-toastify';
// import Model from '../../public/Model';

const Contact = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleOnChnage = (e) =>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name] : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    const publicAccessKey = "4585ffc9-f6be-4ed2-b60a-94dfa9dee6be";
  
    // Create FormData instance
    const formPayload = new FormData();
    formPayload.append("access_key", publicAccessKey);
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("message", formData.message);
    formPayload.append(
      "subject",
      `New Contact Message from ${formData.name}` // Custom subject
    );
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });
  
      const result = await response.json();
  
      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        throw new Error(result.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error(error.message || "Failed to send message.");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="container mt-32 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden " id="contact">
      {/* form section */}
      <motion.div className='bg-black-100 p-8 rounded-2xl'>
        <p className="text-secondary tracking-wider text-sm">Get in touch</p>
        <h2 className="text-white font-black text-3xl sm:text-[50px] md:text-[60px] sm:mt-1 md:mt-3 ">Contact.</h2>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          {/* Name Input */}
          <label className='flex flex-col gap-2'>
            <span className="font-semibold text-[16px]">Your Name</span>
            <input type="text" name="name" value={formData.name} onChange={handleOnChnage} 
            placeholder="What's your good name?"
            className='bg-tertiary py-4 px-6 rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Email Input */}
          <label className='flex flex-col gap-2'>
            <span className="font-semibold text-[16px]">Your Email</span>
            <input type="text" name="email" value={formData.email} onChange={handleOnChnage} 
            placeholder="What's your email address?"
            className='bg-tertiary py-4 px-6 rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Message Input */}
          <label className='flex flex-col gap-2'>
            <span className="font-semibold text-[16px]">Your Message</span>
            <textarea name="message" value={formData.message} onChange={handleOnChnage} 
            placeholder="What do you want to say?"
            className='bg-tertiary py-4 px-6 rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button type='submit' className='bg-tertiary py-3 w-44 font-bold rounded-[20px] border-2 border-[#804dee]'>
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Rotating Earth 3D-Model */}
      <motion.div className="w-full h-[350px] sm:h-[450px] md:h-[550px] xl:h-[700px]">
{/*   <video 
    src="/contact.mp4"  // Use '/contact.mp4' if placed in the public folder
    loop 
    autoPlay 
    muted 
    className="w-full h-full object-cover rounded-2xl"
  /> */}
</motion.div>

    </div>
  )
}

export default Contact
