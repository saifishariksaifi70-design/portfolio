import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import Resume2 from '../../assets/Sharik_Saifi_Resume.pdf'
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
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaLocationDot, FaUser } from 'react-icons/fa6'
import { FaEnvelope, FaUserAlt } from 'react-icons/fa'

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    })
  }, [])

  return (

    <div
      className='min-h-screen py-10 px-4 sm:px-6 md:px-10 lg:px-16
      bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950
      text-white overflow-hidden'
      data-aos='zoom-in'
    >

      {/* Heading */}

      <br />

      <h3 className='text-center text-sky-600 text-xl sm:text-2xl'>
        Get To Know me
      </h3>

      <h1 className='text-3xl sm:text-4xl text-center font-bold mt-2'>
        About
        <span className='text-sky-500'>
          {' '}Me.
        </span>
      </h1>

      <br />
      <br />


      {/* Main Container */}

      <div
        className='max-w-7xl mx-auto flex flex-col
        lg:flex-row gap-10 lg:gap-8
        items-center justify-center'
      >


        {/* PROFILE CARD */}

        <div
          className='w-full sm:w-[400px] max-w-full
          px-3 py-3 relative
          border-2 border-gray-900
          rounded-2xl
          flex flex-col items-center
          mx-auto'
        >

          {/* Blue Glow Circle */}

          <div
            className='absolute
            w-[250px] h-[250px]
            sm:w-[280px] sm:h-[280px]
            md:w-[300px] md:h-[300px]
            rounded-full
            border-4 border-blue-500
            shadow-[0_0_60px_#3b82f6]'
          >
          </div>


          {/* Blur Glow */}

          <div
            className='absolute
            w-[260px] h-[260px]
            sm:w-[300px] sm:h-[300px]
            rounded-full
            bg-blue-500/20
            blur-3xl'
          >
          </div>


          {/* Profile Image */}

          <motion.img
            src={About1}
            alt='About'
            className='relative z-10
            w-[240px]
            sm:w-[280px]
            md:w-[300px]
            object-contain'
            initial={{
              opacity: 0,
              x: -100
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8
            }}
            viewport={{
              once: false
            }}
          />


          {/* Personal Details */}

          <div
            className='relative z-20
            w-full
            px-2 sm:px-3
            border-2 border-gray-800
            rounded-2xl
            text-gray-300
            bg-slate-950/50
            backdrop-blur-sm'
          >

            {/* Name */}

            <div className='flex gap-3 items-center py-2'>

              <FaUserAlt size={25} className='object-contain'/>

              <h4 className='text-sm sm:text-base'>
                Sharik Saifi
              </h4>

            </div>

            <hr className='border-gray-800' />


            {/* User */}

            <div className='flex gap-3 items-center py-2'>

              <FaUser size={25}  className='object-contain text-white/60'/>

              <h4 className='text-sm sm:text-base'>
                Software Developer
              </h4>

            </div>

            <hr className='border-gray-800' />


            {/* Email */}

            <div className='flex gap-3 items-center py-2'>

            <FaEnvelope size={25} className='object-contain text-white/60'/>

              <h4 className='text-xs sm:text-sm break-all'>
                saifishariksaifi70@gmail.com
              </h4>

            </div>

            <hr className='border-gray-800' />


            {/* Location */}

            <div className='flex gap-3 items-center py-2'>

             <FaLocationDot size={25} className='object-contain' />

              <h4 className='text-sm sm:text-base'>
                Faridabad
              </h4>

            </div>

          </div>

          <br />

        </div>


        {/* ABOUT CONTENT */}

        <div
          className='w-full max-w-2xl
          rounded-2xl px-2 sm:px-4 md:px-6'
        >

          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>

            Hi, I'm

            <span
              className='bg-gradient-to-r
              from-blue-500 to-purple-600
              bg-clip-text text-transparent'
            >
              {' '}Sharik
            </span>

            👋

          </h1>

          <br />


          {/* Description */}

          <p
            className='text-gray-400
            text-sm sm:text-base
            leading-7'
          >

          Hi, I'm Sharik, a passionate Full Stack Developer with a strong
          interest in building modern and scalable web applications.
          I specialize in the MERN Stack and enjoy creating responsive,
          interactive, and user-friendly digital experiences.
          I continuously enhance my skills through real-world projects
          and hands-on development. My goal is to combine Full Stack
          development with AI to build innovative and impactful applications.

          </p>

          <br />


          {/* Buttons */}

          <div className='flex flex-col sm:flex-row gap-4'>

            {/* Download CV */}

            <button
              className='font-bold
              px-3 py-1
              border-2 border-sky-400
              rounded-2xl
              min-h-11
              w-full sm:w-48
              bg-gradient-to-r
              from-blue-600 to-sky-600
              hover:scale-105
              transition-all duration-300'
            >

              <a
                href={Resume2}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center
                justify-center gap-2'
              >

                <img
                  src={CV}
                  alt='CV'
                  className='w-8 h-8 object-contain'
                />

                <h1>
                  Download CV
                </h1>

              </a>

            </button>


            {/* Hire Me */}

            <button
              className='flex
              items-center
              justify-center
              font-bold
              border-2 border-gray-800
              px-5 py-1
              rounded-2xl
              min-h-11
              w-full sm:w-40
              gap-3
              hover:border-sky-500
              hover:bg-sky-500/10
              hover:scale-105
              transition-all duration-300'
            >

              <img
                src={hire}
                alt='Hire'
                className='w-8 h-8 object-contain'
              />

              <h1>
                Hire Me
              </h1>

            </button>

          </div>

          <br />

        </div>


        {/* Desktop Divider */}

        <div
          className='hidden lg:block
          border-r-2 border-gray-800
          h-80'
        >
        </div>


        {/* FEATURES */}

        <motion.div
          className='w-full lg:w-64'
          initial={{
            opacity: 0,
            x: 100
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8
          }}
          viewport={{
            once: false
          }}
        >

          {/* Clean Code */}

          <div className='flex gap-4 items-start'>

            <img
              src={Goal}
              alt='Clean Code'
              className='w-8 h-8 flex-shrink-0'
            />

            <div>

              <h1 className='font-bold text-lg'>
                Clean Code
              </h1>

              <p className='text-gray-400 text-sm leading-6'>
                I write clean, readable and efficient code.
              </p>

            </div>

          </div>

          <br />


          {/* Responsive Design */}

          <div className='flex gap-4 items-start'>

            <img
              src={Responsive}
              alt='Responsive Design'
              className='w-8 h-8 flex-shrink-0'
            />

            <div>

              <h1 className='font-bold text-lg'>
                Responsive Design
              </h1>

              <p className='text-gray-400 text-sm leading-6'>
                I build website that look great on all devices
              </p>

            </div>

          </div>

          <br />


          {/* Performance */}

          <div className='flex gap-4 items-start'>

            <img
              src={Performance}
              alt='Performance'
              className='w-8 h-8 flex-shrink-0'
            />

            <div>

              <h1 className='font-bold text-lg'>
                Performance
              </h1>

              <p className='text-gray-400 text-sm leading-6'>
                I optimize website for speed and performance.
              </p>

            </div>

          </div>

          <br />


          {/* Problem Solving */}

          <div className='flex gap-4 items-start'>

            <img
              src={Problem}
              alt='Problem Solving'
              className='w-8 h-8 flex-shrink-0'
            />

            <div>

              <h1 className='font-bold text-lg'>
                Problem Solving
              </h1>

              <p className='text-gray-400 text-sm leading-6'>
                I enjoy solving Problems and building solution.
              </p>

            </div>

          </div>

          <br />

        </motion.div>

      </div>

    </div>
  )
}

export default About