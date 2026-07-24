import React from 'react'
import image2 from '../../../src/my image.png'
import { Link } from 'react-router-dom'
import Resume2 from '../../../public/Sharik_Saifi_Resume.pdf'

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen py-20 bg-gradient-to-r from-slate-950 bg-slate-900 to-blue-950">
  <div className="flex flex-col md:flex-row justify-center items-center md: max-w-full md:mx-16">
      <div className='w-full relative object-cover mt-10 drop-shadow-2xl shadow-sky-300
       md:mx-16 ml-0 md:ml-32 items-center justify-center 
      
      shadow-sky-300 md:w-1/2'>
        <img src={image2} alt="" className='border-4 border-none rounded-2xl w-60 h-72
      md:w-[350px] md:h-[350px]
      shadow-2xl shadow-sky-300/100 
      hover:scale-105
      transition-all
      duration-500 ' />
      </div>
      <div className='w-full md:w-1/2 text-white'>
        <h1 className='text-3xl md:text-5xl font-bold'>About <span className='text-sky-500 text-3xl'>Me</span></h1><br />
        <h1 className='text-[20px] font-bold'><span className='text-sky-300 text-3xl'>Web</span> Developer</h1>
        <p>Hi, I'm Sharik Saifi, a passionate web developer currently learning MERN Stack with AI.
           I have completed Frontend Development using HTML, CSS, JavaScript, React, and Tailwind CSS. Currently,
            I am expanding my skills by learning Backend Development with Node.js, Express.js, and MongoDB.
            My goal is to become a Full Stack Developer and build modern, scalable, and AI-powered web applications.</p>
            <div className="flex flex-col sm:flex-row gap-5 mt-10">          
              
           <button className='border-2 w-[150px] h-[40px] rounded-4xl
           
           
            hover:bg-sky-600
           object-cover mt-10 drop-shadow-2xl rounded-full
            hover:scale-105
            transition-all
            duration-500
            shadow-2xl shadow-sky-300/50'>
            <h1 className='text-[15px]'><a href={Resume2}>Resume View</a></h1>
          </button>
          <button className='bg-sky-400 w-[150px] h-[40px] rounded-4xl
           from-sky-300 bg-sky-400 to-sky-600 hover:bg-sky-600
           object-cover mt-10 drop-shadow-2xl rounded-full
            hover:scale-105
            transition-all
            duration-500'>
            <Link to="/Contact">Contact Me</Link>
          </button>
          </div>

      </div>
    </div>
    </div>
  )
}

export default About