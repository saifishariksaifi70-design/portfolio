import React from 'react'
import image2 from '../../../src/my image.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className=' from-slate-950 bg-slate-900 to-blue-950'>
    <div className='flex justify-center items-center gap-16 max-w-full max-h-screen
    mx-16'>
      <div className='w-[50%] relative object-cover mt-10 drop-shadow-2xl rounded-full shadow-sky-300
      hover:scale-105
      transition-all
      duration-500
      shadow-sky-300'>
        <img src={image2} alt="" className='border-4 border-sky-300 rounded-full h-[600px] m-3' />
      </div>
      <div className='w-[50%] text-white'>
        <h1 className='text-5xl font-bold'>About <span className='text-sky-500 text-3xl'>Me</span></h1><br />
        <h1 className='text-[20px] font-bold'><span className='text-sky-300 text-3xl'>Web</span> Developer</h1>
        <p>I'm a passionate Full Stack Developer who enjoys creating modern, responsive, and user-friendly web applications. 
          I love learning new technologies and improving my problem-solving skills through real-world projects. 
          My goal is to build high-quality digital solutions that provide a great user experience. 
          I believe in continuous learning, clean code, and turning creative ideas into functional applications.</p>
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
  )
}

export default About