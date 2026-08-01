import React, { useEffect } from 'react'
import image2 from '../../../src/my image.png'
// import { Link } from 'react-router-dom'
import Resume2 from '../../assets/Sharik_Saifi_Resume.pdf'
import Image from '../../../src/my image.png'
import About1 from '../../assets/About1.png'
import Name from '../../assets/name.png'
import User from '../../assets/user.png'
import Email from '../../assets/email-2.png'
import Location1 from '../../assets/location.png'
import CV from '../../assets/download.png'
import hire from '../../assets/job.png'
import Goal from '../../assets/goal.png'
import Responsive from '../../assets/responsive.png'
import Performance from '../../assets/rocket.png'
import Problem from '../../assets/light.png'
import { motion } from 'framer-motion'
import { MdOpacity } from 'react-icons/md'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect(()=>{
    AOS.init({
      duration : 1000,
      once : false
    })
  },[])
  return (
    <div className='py-10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white' data-aos="zoom-in">
      <br />
      <h3 className='text-center text-sky-600 text-2xl'>Get To Know me</h3>
      <h1 className='text-4xl text-center font-bold'>About 
        <span className='text-sky-500'> Me.</span></h1><br /><br />
        <div className='flex gap-8 h-scr flex-col lg:flex-row items-center justify-center'>
        <div className="mx-16 px-3 py-3 relative max-w-80 justify-center items-center border-2 border-gray-900 rounded-2xl
        flex-col md:flex-row sm:flex-row">

  {/* Blue Glow Circle */}
  <div className="absolute w-72 h-72 items-center justify-center rounded-full border-4 border-blue-500 shadow-[0_0_60px_#3b82f6]"></div>

  {/* Blur Glow */}
  <div className="absolute w-80 h-80 rounded-full bg-blue-500/20 blur-3xl"></div>

  {/* Profile Image */}
  <motion.img
    src={About1}
    alt=""
    className="relative z-10 w-72"
    initial={{ opacity : 0, x : -100}}
    whileInView={{ opacity : 1 , x : 0 }}
    transition={{duration : 0.8}}
    viewport={{ once : false}}

  />



<div className='px-2 border-2 border-gray-800 rounded-2xl text-gray-300'>
  <div className='flex gap-2 items-center'>
  <img src={Name} alt="" className='w-10 h-10 ' />
  <p></p>
  <h4 className=''>Sharik Saifi</h4>
  </div>
  <hr  className='text-blue-900'/>
   <div className='flex gap-2 items-center'>
  <img src={User} alt="" className='w-10 h-10' />
  <p></p>
  <h4 className=''>Frontend Developer</h4>
  </div>
  <hr  className='text-blue-900'/>
   <div className='flex gap-2 items-center'>
  <img src={Email} alt="" className='w-10 h-10' />
  <p></p>
  <h4 className=''>saifishariksaifi70@gmail.com</h4>
  </div>
  <hr  className='text-blue-900'/>
   <div className='flex gap-2 items-center'>
  <img src={Location1} alt=""  className='w-10 h-10'/>
  <p></p>
  <h4 className=''>Faridabad</h4>
  </div>
  <hr  className='text-blue-900'/><br />
  </div>
  <br />
  </div> <br /><br />
  <div className='max-w-105 rounded-2xl px-3'>
    <div className=''>
      <h1 className='text-4xl font-bold'>Hi, I'm 
        <span className='bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'> Sharik</span>👋</h1><br />
      <p className='text-gray-400'>Hi, I'm Sarik, a passionate Frontend Developer currently learning MERN Stack with AI. 
        I have a strong interest in web development and enjoy building modern, 
        responsive websites using HTML, CSS, JavaScript, and React.js. 
        I am continuously improving my skills through projects and hands-on practice. 
        My goal is to build innovative AI-powered applications and establish my own identity in the tech industry.</p><br />
        <div className='flex'>
          <div className='flex gap-3'>
          
          <button className='font-bold px-3 py-1 border-2 border-sky-400 rounded-2xl h-10 w-48  
          bg-gradient-to-r from-blue-600 to-sky-600'>
            
            <a href={Resume2} className='flex items-center gap-2'>
              <img src={CV} alt="" className='w-8 h-8' />
            <h1>Download CV</h1> </a>
            
          
          </button>
        
          
          <button className='flex font-bold border-2 border-gray-800 px-5 py-1 rounded-2xl h-10 w-40 gap-3'>
            <img src={hire} alt=""  className='w-8 h-8'/>
            <h1>Hire Me</h1>
          </button>
          </div>
     
        
        </div><br />
        
    </div>
    
    

    </div>
    <div className="border-r-2 border-gray-800 h-80"></div>
    <motion.div className='gap-5 w-60'
    initial={{MdOpacity : 0 , x : 100}}
    whileInView={{MdOpacity : 1 , x : 0}}
    transition={{duration : 0.8}}
    viewPort={{ once : false}}>
       <div className='flex gap-5'
       >
       <img src={Goal} alt="" className='w-8 h-8' />
        <motion.div 
        initial={{ x : -100}}
    animate={{ x : 0}}
    transition={{duration : 1}}>
          <h1 className='font-bold'>Clean Code</h1>
          <p>I write clean, readable and efficient code.</p>        
      </motion.div>
      </div><br />
    <div className='flex gap-5'>
        <img src={Responsive} alt="" className='w-8 h-8' />
        <div className=''>
          <h1 className='font-bold items-center'>Responsive Design</h1>
          <p>I build website that look great on all devices</p>        
      </div>
      </div><br />
      <div className='flex gap-5'>
       <img src={Performance} alt="" className='w-8 h-8' />
        <div>
          <h1 className=' font-bold'>Performance</h1>
          <p>I optimize website for speed and performance.</p>        
      </div>
      </div><br />
      <div className='flex gap-5'>
       <img src={Problem} alt="" className='w-8 h-8'/>
        <div>
          <h1 className='font-bold'>Problem Solving</h1>
          <p>I enjoy solving Problems and building solution.</p>        
      </div>
      </div><br />
     
      </motion.div>

  </div>
  </div>
  
  )
}

export default About