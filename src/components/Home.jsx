import React from 'react'
// import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Avator from '../assets/avator.png'
import Git from '../assets/github.png'
import Linkdin from '../assets/linkedin1.png'
import Resume3 from '../assets/Sharik_Saifi_Resume.pdf'
import Email from '../assets/email-2.png'
import Performance from '../assets/rocket.png'
import Responsive from '../assets/responsive.png'
import Layer from '../assets/layers.png'
import { FaDownload } from 'react-icons/fa'



const Home = ({ Line1, Line2, Line3, imageIcon }) => {
  return (
    <div className='h-auto min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden'>

      {/* Hero Section */}
      <section className='w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 px-5 sm:px-8 md:px-12 lg:px-20 py-16 lg:py-10'>

        {/* Left Section */}
        <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start'>

          <motion.div
            className='mt-5 md:mt-10 text-center lg:text-left w-full'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            <h1 className='text-xl sm:text-2xl md:text-3xl text-white'>

              Hi, I'M
              <br />

              <span className='text-5xl sm:text-6xl md:text-7xl font-bold text-white'>
                Sharik

                <span className='text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent'>
                  {' '}Saifi
                </span>

              </span>

            </h1>


            {/* MERN / Full Stack / AI */}
            <div className='flex gap-3 items-center justify-center lg:justify-start py-4 flex-col sm:flex-row'>

              <h1 className='text-xl sm:text-2xl bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent'>
                MERN Stack
              </h1>

              <div className='hidden sm:block border-l-2 border-gray-800 h-7'></div>

              <h1 className='text-xl sm:text-2xl'>
                Full Stack Developer
              </h1>

              <div className='hidden sm:block border-l-2 border-gray-800 h-7'></div>

              <h1 className='text-xl sm:text-2xl bg-gradient-to-r from-blue-300 to-blue-700 bg-clip-text text-transparent'>
                AI
              </h1>

            </div>


            {/* Description */}
            <div className='text-gray-300 text-sm sm:text-base leading-7'>

              <p>{Line1}</p>
              <p>{Line2}</p>
              <p>{Line3}</p>

            </div>

            <hr className='border-gray-800 my-5' />

          </motion.div>


          {/* Buttons */}
          <motion.div
            className='flex gap-4 flex-col sm:flex-row w-full sm:w-auto justify-center lg:justify-start'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            {/* View Project */}
            <button
              className='flex justify-center items-center mt-4 sm:mt-8 px-4 py-2 border border-blue-900 rounded-lg
              bg-gradient-to-r from-sky-500 to-blue-800 shadow-lg
              hover:scale-105 transition-all duration-300'
            >

              <a
                href='#Projects'
                className='flex items-center justify-center gap-1 font-bold'
              >

                View Project

                <img
                  src={imageIcon}
                  alt=''
                  className='w-8 h-8'
                />

              </a>

            </button>


            {/* Download CV */}
            <button
              className='flex justify-center items-center mt-0 sm:mt-8 px-4 py-2 border-2 rounded-2xl
              border-blue-900 hover:bg-blue-900/30
              hover:scale-105 transition-all duration-300'
            >

              <a
                href={Resume3}
                className='flex items-center justify-center gap-2 font-bold'
                target='_blank'
                rel='noopener noreferrer'
              >

                <FaDownload size={20} />

                Download CV

              </a>

            </button>

          </motion.div>


          {/* Social Icons */}
          <div className='flex gap-4 sm:gap-5 items-center justify-center lg:justify-start mt-8'>

            <h1 className='text-gray-500 text-sm sm:text-base'>
              Contact with me
            </h1>

            <a
              href='https://github.com/saifishariksaifi70-design'
              target='_blank'
              rel='noopener noreferrer'
            >

              <img
                src={Git}
                alt='GitHub'
                className='w-7 h-7 sm:w-8 sm:h-8 hover:scale-110 transition-all'
              />

            </a>


            <a
              href='https://www.linkedin.com/in/sharik-saifi-833646373/'
              target='_blank'
              rel='noopener noreferrer'
            >

              <img
                src={Linkdin}
                alt='LinkedIn'
                className='w-7 h-7 sm:w-8 sm:h-8 hover:scale-110 transition-all'
              />

            </a>


            <a href='mailto:saifishariksaifi70@gmail.com'>

              <img
                src={Email}
                alt='Email'
                className='w-7 h-7 sm:w-8 sm:h-8 hover:scale-110 transition-all'
              />

            </a>

          </div>

        </div>


        {/* Right Avatar Section */}
        <div className='w-full lg:w-1/2 relative flex items-center justify-center mt-10 lg:mt-0 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]'>

          {/* Outer Circle */}
          <div
            className='absolute
            w-[270px] h-[270px]
            sm:w-[340px] sm:h-[340px]
            md:w-[400px] md:h-[400px]
            lg:w-[450px] lg:h-[450px]
            rounded-full
            border-1 border-blue-500
            shadow-[0_0_60px_#3b82f6]'
          >
          </div>


          {/* Blur Glow */}
          <div
            className='absolute
            w-52 h-52
            sm:w-64 sm:h-64
            md:w-72 md:h-72
            lg:w-80 lg:h-80
            rounded-full
            bg-blue-500/20
            blur-3xl'
          >
          </div>


          {/* Avatar */}
          <motion.img
            src={Avator}
            alt='Sharik'
            className='relative z-10
            w-[220px] h-[320px]
            sm:w-[270px] sm:h-[390px]
            md:w-[320px] md:h-[460px]
            lg:w-[370px] lg:h-[530px]
            object-contain'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5
            }}
          />

        </div>

      </section>


      {/* Bottom Features */}
      <div className='flex justify-center items-center w-full px-5 sm:px-8 pb-10'>

        <div
          className='w-full max-w-6xl
          flex flex-col md:flex-row
          gap-6 md:gap-4
          border-2 border-gray-800
          rounded-2xl
          justify-center items-center
          px-5 sm:px-8 md:px-6
          py-6 md:py-5'
        >

          {/* MERN */}
          <div
            className='flex gap-4 sm:gap-5 items-center justify-center
            w-full md:w-1/3'
          >

            <img
              src={Layer}
              alt='MERN'
              className='w-12 h-12 sm:w-14 sm:h-14 object-contain'
            />

            <div>

              <h1
                className='text-2xl sm:text-3xl font-bold
                bg-gradient-to-r from-blue-500 to-blue-900
                bg-clip-text text-transparent'
              >
                MERN
              </h1>

              <p className='text-gray-300'>
                Tech Stack
              </p>

            </div>

          </div>


          {/* Divider */}
          <div className='hidden md:block border-r-2 border-gray-800 h-16'></div>


          {/* FAST */}
          <div
            className='flex gap-5 sm:gap-7 items-center justify-center
            w-full md:w-1/3'
          >

            <img
              src={Performance}
              alt='Performance'
              className='w-12 h-12 sm:w-14 sm:h-14 object-contain'
            />

            <div>

              <h1
                className='text-2xl sm:text-3xl font-bold
                bg-gradient-to-r from-blue-500 to-blue-900
                bg-clip-text text-transparent'
              >
                FAST
              </h1>

              <p className='text-gray-300'>
                Performance
              </p>

            </div>

          </div>


          {/* Divider */}
          <div className='hidden md:block border-r-2 border-gray-800 h-16'></div>


          {/* Responsive */}
          <div
            className='flex gap-4 sm:gap-5 items-center justify-center
            w-full md:w-1/3'
          >

            <img
              src={Responsive}
              alt='Responsive'
              className='w-12 h-12 sm:w-14 sm:h-14 object-contain'
            />

            <div>

              <h1
                className='text-2xl sm:text-3xl font-bold
                bg-gradient-to-r from-blue-500 to-blue-900
                bg-clip-text text-transparent'
              >
                100 %
              </h1>

              <p className='text-gray-300'>
                Responsive
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Home