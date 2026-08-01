import React from 'react'
// import { Link } from 'react-router-dom'
import { MdEmail } from "react-icons/md"
import { motion } from 'framer-motion'
import Avator from '../assets/avator.png'
import Git from '../assets/github.png'
import Linkdin from '../assets/linkedin1.png'
import Resume3 from '../assets/Sharik_Saifi_Resume.pdf'
import my from '../assets/About1.png'
import Cv from '../assets/download.png'
import Email from '../assets/email-2.png'
import Performance from '../assets/rocket.png'
import Responsive from '../assets/responsive.png'
import Layer from '../assets/layers.png'

const Home = ({ Line1, Line2, Line3, imageIcon }) => {
  return (
    <div className='h-auto md:min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white'>
    <section className='flex items-center
  justify-between md:justify-center gap-20 px-5 md:px-20 flex-col sm:flex-row md:flex-row'>
    <div>
      <motion.div className='mt-8 md:mt-16 text-center md:text-left'
       initial={{ opacity: 0 , y : -50}}
      animate={{ opacity : 1 , y : 0}}
      transition={{ duration: 0.5}}
      >
        <h1 className='text-2xl mt-16 text-white'
        
        >Hi, I'M <br />
          <span className='text-6xl md:text-7xl font-bold text-white'>Sharik
          <span className='text-6xl font-bold 
          bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent
          '> Saifi</span></span>
        </h1>
        <div className='flex gap-3 items-center py-3 flex flex-col md:flex-row '>
          <h1 className='text-2xl bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent'>MERN Stack</h1>
          <div className='border-2 border-gray-800 w-0 h-7'></div>
          <h1 className='text-2xl'> Full Stack Developer</h1>
          <div className='border-2 border-gray-800 w-0 h-7'></div>
          <h1 className='text-2xl bg-gradient-to-r from-blue-300 to-blue-700 bg-clip-text text-transparent'> AI </h1>
        </div>
        <p className='text-gray-300'>{Line1}</p>
        <p className='text-gray-300'>{Line2}</p>
        <p className='text-gray-300'>{Line3}</p><br /><hr className='text-gray-800' />
        </motion.div>
        <motion.div className='flex gap-5 flex-col md:flex-row flex-col sm:flex-row' 
        initial={{ opacity: 0 , y : -50}}
      animate={{ opacity : 1 , y : 0}}
      transition={{ duration: 0.5}}>
          <button className='bg-white border m flex mt-8 px-3 py-2 border border-blue-900 rounded-lg 
        bg-gradient-to-r from-sky-500 to-blue-800 shadow-lg
        hover: transition-all
         scale-105
         '>
          <a href="#Project" className='flex items-center gap-1 font-bold'>View Project <img src={imageIcon} alt="" className='w-8 h-8' />
          </a>
        </button>
        <button className='flex mt-8 px-4 py-2 border-2 rounded-2xl border-blue-900
        hover: transition-all scale-105'>
          <a href={Resume3} className='flex items-center gap-1 font-bold'>
            <img src={Cv} alt="" className='w-8 h-8' />Download CV
          </a>
        </button>
        </motion.div> <br />
        <div className='flex gap-5 items-center'>
          <h1 className='text-gray-500 '>Contact with me</h1>
          <a href="https://github.com/saifishariksaifi70-design">
            <img src={Git} alt="" className='w-8 h-8'/>
          </a>
           <a href="https://www.linkedin.com/in/sharik-saifi-833646373/">
            <img src={Linkdin} alt="" className='w-8 h-8' />
          </a>
          <a href="mailto:saifishariksaifi70@gmail.com">
            <img src={Email} alt="" className='w-8 h-8' />
          </a>
        </div>
        </div>
       
        <div className='relative flex gap-10 items-center justify-center '
      
        >
          <div className="items-center justify-center absolute w-110 h-110 rounded-full border-4 border-blue-500 shadow-[0_0_60px_#3b82f6]"></div>

  {/* Blur Glow */}
  <div className="absolute w-72 h-72 rounded-full bg-blue-500/20 blur-3xl items-center justify-center"></div>
             <motion.img src={Avator} alt="" className='relative z-10 w-100 h-150' 
              initial={{ opacity: 0 , y : -50}}
      animate={{ opacity : 1 , y : 0}}
      transition={{delay:0.2, duration: 0.5}}

      
              />
        </div>
      
      {/* <div className='relative'>
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="w-80 h-80 bg-blue-500/30 blur-[120px] rounded-full"></div>
        </div>
     
      </div> */}
       
      <br /><br />
    </section><br />
    <div className='flex justify-center items-center'>
          <div className='flex gap-10 border-2 border-gray-800 h-30 rounded-2xl justify-center items-center px-10
          flex-col md:flex-row'>

            <div className='relative flex gap-5 items-center justify-center'>
              
            <img src={Layer} alt="" className='relative items-center justify-center'/>
           
            <div className='items-center'>
              <h1 className='text-3xl font-bold items-center bg-gradient-to-r
               from-blue-500 to-blue-900 bg-clip-text text-transparent '>MERN</h1>
              <p className='text-gray-300'>Tech Stack</p>
            </div>
            </div>
             <div className="border-r-2 border-gray-800 h-15"></div>
             <div className='flex gap-7 items-center justify-center w-80'>
            <img src={Performance} alt="" />
            <div className='items-center'>
              <h1 className='text-3xl font-bold items-center bg-gradient-to-r
               from-blue-500 to-blue-900 bg-clip-text text-transparent '>FAST</h1>
              <p className='text-gray-300'>Performance</p>
            </div>
            </div>
            <div className="border-r-2 border-gray-800 h-15"></div>
             <div className='flex gap-5 items-center justify-center'>
            <img src={Responsive} alt="" />
            <div className='items-center'>
              <h1 className='text-3xl font-bold items-center bg-gradient-to-r
               from-blue-500 to-blue-900 bg-clip-text text-transparent '>100 %</h1>
              <p className='text-gray-300'>Responsive</p>
            </div>
            </div>
            

          </div>
        </div>
        <br /><br />
    </div>
  )
}

export default Home;