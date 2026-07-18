import React from 'react'
import image2 from '../../../src/my image.png'
import { Link } from 'react-router-dom'
import Resume2 from '../../../public/Sharik_Saifi_Resume.pdf'

const About = () => {
  return (
    <div className='flex from-slate-950 bg-slate-900 to-blue-950 flex-col md:flex-row h-[620px] '>
    <div className='flex justify-center items-center gap-16 max-w-full max-h-screen
    mx-16 flex col md:flex-row'>
      <div className='w-[50%] relative object-cover mt-10 drop-shadow-2xl rounded-full shadow-sky-300
      ml-32 items-center justify-center
      
      shadow-sky-300'>
        <img src={image2} alt="" className='border-4 border-sky-300 rounded-full h-[350px] w-[350px]
        shadow-2xl shadow-sky-300/100 
        hover:scale-105
      transition-all
      duration-500 ' />
      </div>
      <div className='w-[50%] text-white'>
        <h1 className='text-5xl font-bold'>About <span className='text-sky-500 text-3xl'>Me</span></h1><br />
        <h1 className='text-[20px] font-bold'><span className='text-sky-300 text-3xl'>Web</span> Developer</h1>
        <p>Hi, I'm Sharik Saifi, a passionate web developer currently learning MERN Stack with AI.
           I have completed Frontend Development using HTML, CSS, JavaScript, React, and Tailwind CSS. Currently,
            I am expanding my skills by learning Backend Development with Node.js, Express.js, and MongoDB.
            My goal is to become a Full Stack Developer and build modern, scalable, and AI-powered web applications.</p>
            <div className='flex gap-5'>          
              
           <button className='border-2 w-[150px] h-[40px] rounded-4xl
           
            hover:bg-sky-600
           object-cover mt-10 drop-shadow-2xl rounded-full
            hover:scale-105
            transition-all
            duration-500
            shadow-2xl shadow-sky-300/50'>
            <h1 className='text-[15px]'><a href={Resume2}>Download Resume</a></h1>
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