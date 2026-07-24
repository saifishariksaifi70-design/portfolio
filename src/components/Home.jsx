import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Avator from '../assets/avator.png'
import Git from '../assets/github.png'
import Linkdin from '../assets/icon-linkedin.png'

const HeroSection = ({ imageProp, Line1, Line2, Line3, imageIcon }) => {
  return (
    <section className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white flex items-center
  justify-between md:justify-center gap-10 px-5 md:px-20 flex-col sm:flex-row md:flex-row'>
    <div>
      <motion.div className='mt-8 md:mt-16 text-center md:text-left'
       initial={{ opacity: 0 , y : -50}}
      animate={{ opacity : 1 , y : 0}}
      transition={{ duration: 0.5}}
      >
        <h1 className='text-[20px] mt-16 text-sky-400'
        
        > I'M <br />
          <span className='text-4xl md:text-5xl font-bold text-white'>SHARIK</span><br />
          <span className='text-5xl md:text-7xl font-bold text-sky-600'>DEVELOPER</span>
        </h1><br />
        <p>{Line1}</p>
        <p>{Line2}</p>
        <p>{Line3}</p><br /><hr className='text-yellow-500' /><br />
        </motion.div>
       

        
        <motion.div 
        initial={{ opacity: 0 , y : -50}}
      animate={{ opacity : 1 , y : 0}}
      transition={{ duration: 0.5}}
        >
           <div className='flex gap-3'>
        <a href="https://github.com/saifishariksaifi70-design"><img src={Git} alt="" className='w-8 h-10'/></a>
        <a href="https://www.linkedin.com/in/sharik-saifi-833646373/">
        <img src={Linkdin} alt="" className='w-8 h-10 bg-white rounded-2xl' /></a>
        </div>
        <button className='bg-white border flex mt-8 px-8 py-3 border border-amber-500 rounded-lg 
        bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg
        hover: transition-all scale-105'>
          <Link to="/About">About view </Link> <img src={imageIcon} alt="" />
        </button><br />
        </motion.div>
        </div>
        <div className='inset-0 z-10 flex items-center justify-center ml-32'
      
        >
             <motion.img src={Avator} alt="" className='h-160 mx-16 
              hover:scale-105
              transition-all
              duration-500' 
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
    </section>
  )
}

export default HeroSection