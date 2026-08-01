import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Weather from '../../assets/Weather.png'
import IncomeTracker from '../../assets/Income.png'
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt, FaFolderOpen, FaSun } from 'react-icons/fa'
import Portfolio from '../../assets/Portfolio.png'
import Git from '../../assets/github.png'

const Projects = () => {

  // useEffect(()=>{
  //   AOS.init({
  //     duration : 1000,
  //     once : false
  //   })
  // },[])

  
  return (
    <div className='bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white' data-aos="zoom-in">
        <div className='flex justify-center items-center gap-10 py-10'>
        <hr className='text-sky-400 w-25' />
        <h1 className='bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent
        text-3xl font-bold'>
            My Work</h1>
            <hr className='text-sky-400 w-25' />
        </div>
        <div className='flex justify-center items-center gap-10'>
           
        <h1 className='text-4xl font-bold'>Features 
        <span className='bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-5xl font-bold'> Projects</span>
            </h1>
            </div>
          
            <h1 className='text-center text-gray-400 py-3 font-bold'>Some of the Project live Built
            </h1><br />
            <div className='flex justify-center items-center gap-10 flex-col md:flex-row'>
                <div className='max-w-sm justify-center items-center gap-5 overflow-hidden border-1 border-gray-600
                rounded-2xl
                hover:scale-105
                transition-all
                duration-500'>
                    <img src={Weather} alt="Projects" className='object-cover' />
                    <div className='px-3 py-4'>
                      <h1 className='text-4xl text-white/60 font-semibold'>Weather App</h1>
                      <p className='text-white/40 py-2'>A weather application that show real-time weather using OpenWeather API</p>
                    </div>
                    <div className='flex gap-7 py-5 px-3'>
                      <span className='text-blue-300 border-1 border-blue-900 rounded-lg px-5'>React.JS</span>
                      <span className='text-blue-300 border-1 border-blue-900 rounded-lg px-5'>TailwindCSS</span>
                      <span className='text-blue-300 border-1 border-blue-900 rounded-lg px-5'>API</span>
                    </div>
                    <div className='flex justify-between items-center px-5 border-t-1 border-gray-600 py-1'>
                      
                   <a href="https://weather-app-seven-orpin-45.vercel.app/"
                   target='_blank'
                    rel="noopener noreferrer">
                     <div className='flex gap-2 items-center'>
                      <h1 className='text-blue-800'>Live Demo</h1>
                      <FaExternalLinkAlt size={15} />
                      </div>
                   </a>
                    
                    <a href="https://github.com/saifishariksaifi70-design/WeatherApp"
                    target='_blank'
                    rel='noopener noreferrer'>
                    <div className='flex gap-2 items-center'>
                      <h1 className='text-blue-800'>GitHub</h1>
                      <FaExternalLinkAlt size={15} />
                    </div>
                    </a>
                    </div>
                </div>
                <div className='max-w-sm justify-center items-center gap-5 overflow-hidden border-1 border-gray-600
                rounded-2xl
                hover:scale-105
                transition-all
                duration-500'> 
                    <img src={IncomeTracker} alt="Projects" className='object-cover' />
                    <div className='px-3 py-4'>
                      <h1 className='text-4xl text-white/60 font-semibold'>Income-Tracker</h1>
                      <p className='text-white/40 py-2'>
                      A React-based finance management application for tracking 
                      income, expenses, and real-time balance with an intuitive user interface.
                      </p>
                    </div>
                    <div className='flex gap-7 py-3 px-3'>
                      <span className='text-blue-300 border-1 border-blue-900 rounded-lg px-5'>React.JS</span>
                      <span className='text-blue-300 border-1 border-blue-900 rounded-lg px-5'>TailwindCSS</span>
                      <span className='text-blue-300 border-1 border-blue-900 rounded-lg px-3'>Logic's</span>
                    </div>
                    <div className='flex justify-between items-center px-5 border-t-1 border-gray-600 py-1'>
                      <a href="https://income-blond-eight.vercel.app/"
                      target='_blank'
                      rel='noopener noreferrer'>
                    <div className='flex gap-2 items-center'>
                      <h1 className='text-blue-800'>Live Demo</h1>
                      <FaExternalLinkAlt size={15} />
                    </div>
                    </a>
                    <a href="https://github.com/saifishariksaifi70-design/Income" 
                    target="_blank" rel="noopener noreferrer"></a>
                    <div className='flex gap-2 items-center'>
                      <h1 className='text-blue-800'>GitHub</h1>
                      <FaExternalLinkAlt size={15} />
                    </div>
                    </div>
                </div>

                <div className='max-w-sm justify-center items-center gap-5 overflow-hidden border-1 border-gray-600
                rounded-2xl 
                hover:scale-105
                transition-all
                duration-500'>
                    <img src={Portfolio} alt="Projects" className='object-cover' />
                    <div className='px-3 py-2'>
                      <h1 className='text-4xl text-white/60 font-semibold'>My Portfolio</h1>
                      <p className='text-white/40 py-2'>
                      A professional portfolio website built using React.js to highlight my development skills, 
                      featured projects, and experience with a clean, responsive, and user-friendly design.
                      </p>
                    </div>
                    <div className='flex gap-7 py-3 px-3'>
                      <span className='text-blue-300 border-1 border-blue-900 rounded-lg px-5'>React.JS</span>
                      <span className='text-blue-300 border-1 border-blue-900 rounded-lg px-5'>TailwindCSS</span>
                      <span className='text-blue-300 border-1 border-blue-900 rounded-lg px-5'>API</span>
                    </div>
                    <div className='flex justify-between items-center px-5 border-t-1 border-gray-600 py-1'>
                      <a href="https://income-blond-eight.vercel.app/"
                      target='_blank'
                      rel='noopener noreferrer'>
                    <div className='flex gap-2 items-center'>
                      <h1 className='text-blue-800'>Live Demo</h1>
                      <FaExternalLinkAlt size={15} />
                    </div>
                    </a>
                    <a href="https://github.com/saifishariksaifi70-design/Income" 
                    target="_blank" rel="noopener noreferrer"></a>
                    <div className='flex gap-2 items-center'>
                      <h1 className='text-blue-800'>GitHub</h1>
                      <FaExternalLinkAlt size={15} />
                    </div>
                    </div>
                </div>
                </div>
                <a href="https://github.com/saifishariksaifi70-design" target="_blank" rel="noopener noreferrer">
                <div className='flex justify-center items-center py-8 gap-2'>
                  <img src={Git} alt="" className='w-6 h-6' />
                  <h1 className='text-blue-800 font-semibold'>View more Projects on GitHub</h1>
                  <FaArrowRight size={15} className='items-center' />
                </div>
                </a>
          
            
           
            
    </div>
  )
}

export default Projects