import React from 'react'
import Weather from '../../assets/Weather.png'
import IncomeTracker from '../../assets/Income.png'
import Portfolio from '../../assets/Portfolio.png'
import Git from '../../assets/github.png'
import ecomerce from '../../assets/E-commerce.png'

import {
  FaArrowRight,
  FaExternalLinkAlt
} from 'react-icons/fa'


const Projects = () => {

  return (

    <div
      className='min-h-screen w-full
      px-4 sm:px-6 md:px-10 lg:px-16
      py-8 sm:py-10 md:py-12
      bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950
      text-white overflow-hidden'
      data-aos='zoom-in'
    >

      {/* ================= HEADING ================= */}

      <div
        className='flex justify-center items-center
        gap-3 sm:gap-5 md:gap-10
        py-5 sm:py-8 md:py-10'
      >

        <hr className='border-sky-400 w-10 sm:w-16 md:w-25' />

        <h1
          className='
          bg-gradient-to-r
          from-blue-500
          to-purple-600
          bg-clip-text
          text-transparent
          text-2xl
          sm:text-3xl
          font-bold
          whitespace-nowrap'
        >
          My Work
        </h1>

        <hr className='border-sky-400 w-10 sm:w-16 md:w-25' />

      </div>


      {/* ================= TITLE ================= */}

      <div className='flex justify-center items-center text-center'>

        <h1
          className='
          text-2xl
          sm:text-3xl
          md:text-4xl
          font-bold'
        >

          Features

          <span
            className='
            bg-gradient-to-r
            from-blue-500
            to-purple-600
            bg-clip-text
            text-transparent
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold'
          >
            {' '}Projects
          </span>

        </h1>

      </div>


      {/* ================= SUBTITLE ================= */}

      <h1
        className='
        text-center
        text-gray-400
        py-3
        font-bold
        text-sm
        sm:text-base'
      >
        Some of the Project live Built
      </h1>


      <br />


      {/* ================= PROJECT CARDS ================= */}

      <div
        className='
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        md:gap-8
        lg:gap-10'
      >


        {/* ================================================= */}
        {/* WEATHER APP */}
        {/* ================================================= */}

        <div
          className='
          w-full
          overflow-hidden
          border
          border-gray-600
          rounded-2xl
          hover:scale-[1.02]
          sm:hover:scale-105
          transition-all
          duration-500
          bg-slate-950/30'
        >

          <img
            src={Weather}
            alt='Weather App'
            className='
            w-full
            h-52
            sm:h-48
            md:h-52
            object-cover'
          />


          <div className='px-3 sm:px-4 py-4'>

            <h1
              className='
              text-2xl
              sm:text-3xl
              md:text-4xl
              text-white/60
              font-semibold'
            >
              Weather App
            </h1>

            <p
              className='
              text-white/40
              text-sm
              sm:text-base
              py-2
              leading-6'
            >
              A weather application that show real-time weather
              using OpenWeather API
            </p>

          </div>


          {/* Technologies */}

          <div
            className='
            flex
            flex-wrap
            gap-2
            px-3 sm:px-4
            py-3'
          >

            <span
              className='
              text-blue-300
              border
              border-blue-900
              rounded-lg
              px-3
              py-1
              text-xs
              sm:text-sm'
            >
              React.JS
            </span>

            <span
              className='
              text-blue-300
              border
              border-blue-900
              rounded-lg
              px-3
              py-1
              text-xs
              sm:text-sm'
            >
              TailwindCSS
            </span>

            <span
              className='
              text-blue-300
              border
              border-blue-900
              rounded-lg
              px-3
              py-1
              text-xs
              sm:text-sm'
            >
              API
            </span>

          </div>


          {/* Links */}

          <div
            className='
            flex
            justify-between
            items-center
            px-3 sm:px-5
            border-t
            border-gray-600
            py-3'
          >

            <a
              href='https://weather-app-seven-orpin-45.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-sky-400 transition'
            >

              <div className='flex gap-2 items-center'>

                <h1 className='text-blue-500 text-sm sm:text-base'>
                  Live Demo
                </h1>

                <FaExternalLinkAlt size={13} />

              </div>

            </a>


            <a
              href='https://github.com/saifishariksaifi70-design/WeatherApp'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-sky-400 transition'
            >

              <div className='flex gap-2 items-center'>

                <h1 className='text-blue-500 text-sm sm:text-base'>
                  GitHub
                </h1>

                <FaExternalLinkAlt size={13} />

              </div>

            </a>

          </div>

        </div>


        {/* ================================================= */}
        {/* INCOME TRACKER */}
        {/* ================================================= */}

        <div
          className='
          w-full
          overflow-hidden
          border
          border-gray-600
          rounded-2xl
          hover:scale-[1.02]
          sm:hover:scale-105
          transition-all
          duration-500
          bg-slate-950/30'
        >

          <img
            src={IncomeTracker}
            alt='Income Tracker'
            className='
            w-full
            h-52
            sm:h-48
            md:h-52
            object-cover'
          />


          <div className='px-3 sm:px-4 py-4'>

            <h1
              className='
              text-2xl
              sm:text-3xl
              md:text-4xl
              text-white/60
              font-semibold'
            >
              Income-Tracker
            </h1>

            <p
              className='
              text-white/40
              text-sm
              sm:text-base
              py-2
              leading-6'
            >
              A React-based finance management application for
              tracking income, expenses, and real-time balance
              with an intuitive user interface.
            </p>

          </div>


          {/* Technologies */}

          <div
            className='
            flex
            flex-wrap
            gap-2
            px-3 sm:px-4
            py-3'
          >

            <span
              className='
              text-blue-300
              border
              border-blue-900
              rounded-lg
              px-3
              py-1
              text-xs
              sm:text-sm'
            >
              React.JS
            </span>

            <span
              className='
              text-blue-300
              border
              border-blue-900
              rounded-lg
              px-3
              py-1
              text-xs
              sm:text-sm'
            >
              TailwindCSS
            </span>

            <span
              className='
              text-blue-300
              border
              border-blue-900
              rounded-lg
              px-3
              py-1
              text-xs
              sm:text-sm'
            >
              Logic's
            </span>

          </div>


          {/* Links */}

          <div
            className='
            flex
            justify-between
            items-center
            px-3 sm:px-5
            border-t
            border-gray-600
            py-3'
          >

            <a
              href='https://income-blond-eight.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-sky-400 transition'
            >

              <div className='flex gap-2 items-center'>

                <h1 className='text-blue-500 text-sm sm:text-base'>
                  Live Demo
                </h1>

                <FaExternalLinkAlt size={13} />

              </div>

            </a>


            <a
              href='https://github.com/saifishariksaifi70-design/Income'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-sky-400 transition'
            >

              <div className='flex gap-2 items-center'>

                <h1 className='text-blue-500 text-sm sm:text-base'>
                  GitHub
                </h1>

                <FaExternalLinkAlt size={13} />

              </div>

            </a>

          </div>

        </div>


        {/* ================================================= */}
        {/* PORTFOLIO */}
        {/* ================================================= */}

        <div
          className='
          w-full
          overflow-hidden
          border
          border-gray-600
          rounded-2xl
          hover:scale-[1.02]
          sm:hover:scale-105
          transition-all
          duration-500
          bg-slate-950/30'
        >

          <img
            src={Portfolio}
            alt='My Portfolio'
            className='
            w-full
            h-52
            sm:h-48
            md:h-52
            object-cover'
          />


          <div className='px-3 sm:px-4 py-4'>

            <h1
              className='
              text-2xl
              sm:text-3xl
              md:text-4xl
              text-white/60
              font-semibold'
            >
              My Portfolio
            </h1>

            <p
              className='
              text-white/40
              text-sm
              sm:text-base
              py-2
              leading-6'
            >
              A professional portfolio website built using React.js
              to highlight my development skills, featured projects,
              and experience with a clean, responsive, and
              user-friendly design.
            </p>

          </div>


          {/* Technologies */}

          <div
            className='
            flex
            flex-wrap
            gap-2
            px-3 sm:px-4
            py-3'
          >

            <span
              className='
              text-blue-300
              border
              border-blue-900
              rounded-lg
              px-3
              py-1
              text-xs
              sm:text-sm'
            >
              React.JS
            </span>

            <span
              className='
              text-blue-300
              border
              border-blue-900
              rounded-lg
              px-3
              py-1
              text-xs
              sm:text-sm'
            >
              TailwindCSS
            </span>

            <span
              className='
              text-blue-300
              border
              border-blue-900
              rounded-lg
              px-3
              py-1
              text-xs
              sm:text-sm'
            >
              API
            </span>

          </div>


          {/* Links */}

          <div
            className='
            flex
            justify-between
            items-center
            px-3 sm:px-5
            border-t
            border-gray-600
            py-3'
          >

            <a
              href='https://income-blond-eight.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-sky-400 transition'
            >

              <div className='flex gap-2 items-center'>

                <h1 className='text-blue-500 text-sm sm:text-base'>
                  Live Demo
                </h1>

                <FaExternalLinkAlt size={13} />

              </div>

            </a>


            <a
              href='https://github.com/saifishariksaifi70-design/Income'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-sky-400 transition'
            >

              <div className='flex gap-2 items-center'>

                <h1 className='text-blue-500 text-sm sm:text-base'>
                  GitHub
                </h1>

                <FaExternalLinkAlt size={13} />

              </div>

            </a>

          </div>

        </div>
        {/* ================================================= */}
        {/* E-commerce */}
        {/* ================================================= */}

        <div
          className='
          w-full
          overflow-hidden
          border
          border-gray-600
          rounded-2xl
          hover:scale-[1.02]
          sm:hover:scale-105
          transition-all
          duration-500
          bg-slate-950/30'
        >

          <img
            src={ecomerce}
            alt='My Portfolio'
            className='
            w-full
            h-52
            sm:h-48
            md:h-52
            object-cover'
          />


          <div className='px-3 sm:px-4 py-4'>

            <h1
              className='
              text-2xl
              sm:text-3xl
              md:text-4xl
              text-white/60
              font-semibold'
            >
              E-Commerce
            </h1>

            <p
              className='
              text-white/40
              text-sm
              sm:text-base
              py-2
              leading-6'
            >
             A modern and fully responsive E-commerce website built with React.js, 
             featuring product browsing, search & filtering, product details, and a 
             smooth shopping cart experience. The project focuses on clean UI, 
             reusable components, and a seamless user experience across all devices.
            </p>

          </div>


          {/* Technologies */}

          <div
            className='
            flex
            flex-wrap
            gap-2
            px-3 sm:px-4
            py-3'
          >

            <span
              className='
              text-blue-300
              border
              border-blue-900
              rounded-lg
              px-3
              py-1
              text-xs
              sm:text-sm'
            >
              React.JS
            </span>

            <span
              className='
              text-blue-300
              border
              border-blue-900
              rounded-lg
              px-3
              py-1
              text-xs
              sm:text-sm'
            >
              TailwindCSS
            </span>

            <span
              className='
              text-blue-300
              border
              border-blue-900
              rounded-lg
              px-3
              py-1
              text-xs
              sm:text-sm'
            >
              API
            </span>
            <span
              className='
              text-blue-300
              border
              border-blue-900
              rounded-lg
              px-3
              py-1
              text-xs
              sm:text-sm'
            >
              Context APi
            </span>

          </div>


          {/* Links */}

          <div
            className='
            flex
            justify-between
            items-center
            px-3 sm:px-5
            border-t
            border-gray-600
            py-3'
          >

            <a
              href='https://e-commerce-iota-three-29.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-sky-400 transition'
            >

              <div className='flex gap-2 items-center'>

                <h1 className='text-blue-500 text-sm sm:text-base'>
                  Live Demo
                </h1>

                <FaExternalLinkAlt size={13} />

              </div>

            </a>


            <a
              href='https://github.com/saifishariksaifi70-design/E-commerce'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-sky-400 transition'
            >

              <div className='flex gap-2 items-center'>

                <h1 className='text-blue-500 text-sm sm:text-base'>
                  GitHub
                </h1>

                <FaExternalLinkAlt size={13} />

              </div>

            </a>

          </div>

        </div>

      </div>


      {/* ================= GITHUB ================= */}

      <a
        href='https://github.com/saifishariksaifi70-design'
        target='_blank'
        rel='noopener noreferrer'
      >

        <div
          className='
          flex
          justify-center
          items-center
          flex-wrap
          py-8
          gap-2
          text-center'
        >

          <img
            src={Git}
            alt='GitHub'
            className='w-6 h-6'
          />

          <h1
            className='
            text-blue-500
            font-semibold
            text-sm
            sm:text-base'
          >
            View more Projects on GitHub
          </h1>

          <FaArrowRight size={15} />

        </div>

      </a>


    </div>
    
  )
}

export default Projects