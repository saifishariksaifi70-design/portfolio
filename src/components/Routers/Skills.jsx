import React, { useEffect } from 'react'
import Frontend from '../../assets/Frontend.png'
import Backend from '../../../src/assets/Backend.png'
import Tool from '../../../src/assets/Tools.png'
import reactImage from '../../assets/React.png'
import tailwind from '../../assets/Tailwind.png'
import html from '../../assets/HTML.png'
import CSS from '../../assets/CSS3.png'
import { useState } from 'react'
import Node from '../../assets/node-js.png'
import Express from '../../assets/express-js.png'
import MongoDB from '../../assets/mongoDB.png'
import API from '../../assets/api.png'
import git from '../../assets/github.png'
import Code from '../../assets/vs-code.png'
import Vercel from '../../assets/vercel.png'
import Script from '../../assets/javaScript.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {

  const [active, setActive] = useState("frontend")

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    })
  }, [])

  return (

    <div
      className='
      min-h-screen
      w-full
      py-12
      sm:py-16
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-blue-950
      text-white
      overflow-hidden
      '
      data-aos="zoom-out"
    >

      {/* ================= SKILLS HEADING ================= */}

      <div
        className='
        flex
        items-center
        justify-center
        gap-3
        sm:gap-6
        md:gap-10
        px-4
        '
      >

        <hr className='border-blue-900 w-12 sm:w-20 md:w-32' />

        <h1
          className='
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-bold
          bg-gradient-to-r
          from-sky-400
          to-blue-600
          bg-clip-text
          text-transparent
          '
        >
          Skills
        </h1>

        <hr className='border-blue-900 w-12 sm:w-20 md:w-32' />

      </div>

      <br />


      {/* ================================================= */}
      {/* TOP SKILL CARDS */}
      {/* ================================================= */}

      <div
        className='
        w-full
        flex
        justify-center
        items-stretch
        mt-8
        sm:mt-10
        gap-5
        sm:gap-6
        lg:gap-8
        flex-col
        md:flex-row
        px-4
        sm:px-6
        md:px-10
        lg:px-16
        '
      >

        {/* ================= FRONTEND ================= */}

        <div
          className='
          w-full
          max-w-sm
          md:max-w-xs
          lg:max-w-sm
          mx-auto
          border
          border-blue-950
          min-h-[270px]
          rounded-3xl
          drop-shadow-2xl
          hover:scale-105
          transition-all
          duration-500
          '
        >

          <ul className='list-disc list-inside m-5 text-white'>

            <h1
              className='
              text-xl
              sm:text-2xl
              font-bold
              flex
              gap-2
              text-gray-300
              items-center
              '
            >

              <img
                src={Frontend}
                alt="Frontend"
                className='w-10 h-10 sm:w-12 sm:h-12'
              />

              <span className='flex-1'>
                Frontend
                <hr className='border-sky-400 mt-1' />
              </span>

            </h1>

            <br />

            <li className='flex items-center gap-3 mb-3'>

              <img
                src={html}
                alt="HTML"
                className='w-8 h-8'
              />

              HTML/CSS3

            </li>

            <li className='flex items-center gap-3 mb-3'>

              <img
                src={Script}
                alt="JavaScript"
                className='w-8 h-8'
              />

              JavaScript(ES6+)

            </li>

            <li className='flex items-center gap-3 mb-3'>

              <img
                src={reactImage}
                alt="React"
                className='w-8 h-8'
              />

              React.js

            </li>

            <li className='flex items-center gap-3 mb-3'>

              <img
                src={tailwind}
                alt="Tailwind"
                className='w-8 h-8'
              />

              Tailwind CSS

            </li>

            <li className='mb-3'>
              Bootstrap
            </li>

          </ul>

        </div>


        {/* ================= BACKEND ================= */}

        <div
          className='
          w-full
          max-w-sm
          md:max-w-xs
          lg:max-w-sm
          mx-auto
          min-h-[270px]
          border
          border-blue-950
          rounded-3xl
          drop-shadow-2xl
          hover:scale-105
          transition-all
          duration-500
          '
        >

          <ul className='list-disc list-inside m-5 text-white'>

            <h1
              className='
              text-xl
              sm:text-2xl
              font-bold
              flex
              gap-2
              items-center
              '
            >

              <img
                src={Backend}
                alt="Backend"
                className='w-10 h-10 sm:w-12 sm:h-12'
              />

              <span className='flex-1'>
                Backend
                <hr className='border-sky-300 mt-1' />
              </span>

            </h1>

            <br />

            <li className='flex gap-3 items-center mb-3'>

              <img
                src={Node}
                alt="Node"
                className='w-8 h-8'
              />

              NODE.JS

            </li>

            <li className='flex items-center gap-3 mb-3'>

              <img
                src={Express}
                alt="Express"
                className='w-8 h-8'
              />

              EXPRESS.JS

            </li>

            <li className='flex items-center gap-3 mb-3'>

              <img
                src={API}
                alt="API"
                className='w-8 h-8'
              />

              API'S

            </li>

            <li className='flex items-center gap-3 mb-3'>

              <img
                src={MongoDB}
                alt="MongoDB"
                className='w-8 h-8'
              />

              MongoDB

            </li>

          </ul>

        </div>


        {/* ================= TOOLS ================= */}

        <div
          className='
          w-full
          max-w-sm
          md:max-w-xs
          lg:max-w-sm
          mx-auto
          min-h-[270px]
          border
          border-blue-950
          rounded-3xl
          drop-shadow-2xl
          hover:scale-105
          transition-all
          duration-500
          '
        >

          <ul className='list-disc list-inside m-5 text-white'>

            <h1
              className='
              text-xl
              sm:text-2xl
              font-bold
              flex
              gap-2
              items-center
              '
            >

              <img
                src={Tool}
                alt="Tools"
                className='w-10 h-10 sm:w-12 sm:h-12'
              />

              <span className='flex-1'>
                Tool'S
                <hr className='border-sky-400 mt-1' />
              </span>

            </h1>

            <br />

            <li className='flex items-center gap-3 mb-3'>

              <img
                src={git}
                alt="GitHub"
                className='w-8 h-8'
              />

              Git/GitHub

            </li>

            <li className='flex items-center gap-3 mb-3'>

              <img
                src={Vercel}
                alt="Vercel"
                className='w-8 h-8'
              />

              Vercel

            </li>

            <li className='flex items-center gap-3 mb-3'>

              <img
                src={Code}
                alt="VS Code"
                className='w-8 h-8'
              />

              VS Code

            </li>

          </ul>

        </div>

      </div>


      <br />
      <br />


      {/* ================================================= */}
      {/* CATEGORY BUTTONS */}
      {/* ================================================= */}

      <div
        className='
        flex
        justify-center
        items-center
        gap-3
        sm:gap-5
        flex-wrap
        px-4
        '
      >

        <button
          className='
          border-b-2
          rounded-2xl
          w-28
          sm:w-32
          h-10
          text-white
          font-bold
          cursor-pointer
          hover:scale-105
          hover:border-sky-400
          transition-all
          duration-500
          '
          onClick={() => setActive("frontend")}
        >
          Frontend
        </button>


        <button
          className='
          border-b-2
          rounded-2xl
          w-28
          sm:w-32
          h-10
          text-white
          font-bold
          cursor-pointer
          hover:scale-105
          hover:border-sky-400
          transition-all
          duration-500
          '
          onClick={() => setActive("backend")}
        >
          Backend
        </button>


        <button
          className='
          border-b-2
          rounded-2xl
          w-28
          sm:w-32
          h-10
          text-white
          font-bold
          cursor-pointer
          hover:scale-105
          hover:border-sky-400
          transition-all
          duration-500
          '
          onClick={() => setActive("Tools")}
        >
          Tools
        </button>

      </div>


      <br />
      <br />


      {/* ================================================= */}
      {/* FRONTEND */}
      {/* ================================================= */}

      {active === "frontend" && (

        <div className='w-full px-4 sm:px-6'>

          <h1
            className='
            text-center
            text-3xl
            sm:text-4xl
            text-gray-400
            font-bold
            '
          >
            Front-End
          </h1>

          <br />
          <br />

          <div
            className='
            flex
            justify-center
            items-center
            gap-5
            sm:gap-8
            lg:gap-10
            flex-wrap
            '
          >

            {/* React */}

            <div
              className='
              border-2
              border-blue-950
              rounded-2xl
              w-40
              sm:w-44
              h-40
              px-6
              sm:px-8
              hover:animate-bounce
              '
            >

              <img
                src={reactImage}
                alt="React"
                className='w-full h-24 object-contain'
              />

              <h1 className='text-center text-xl sm:text-2xl text-gray-400'>
                React.js
              </h1>

            </div>


            {/* Tailwind */}

            <div
              className='
              border-2
              border-blue-950
              rounded-2xl
              w-40
              sm:w-44
              h-40
              px-6
              sm:px-8
              hover:animate-bounce
              '
            >

              <img
                src={tailwind}
                alt="Tailwind"
                className='w-full h-24 object-contain p-2'
              />

              <h1 className='text-center text-xl sm:text-2xl text-gray-400'>
                TailwindCSS
              </h1>

            </div>


            {/* HTML */}

            <div
              className='
              border-2
              border-blue-950
              rounded-2xl
              w-40
              sm:w-44
              h-40
              px-6
              sm:px-8
              hover:animate-bounce
              '
            >

              <img
                src={html}
                alt="HTML"
                className='w-full h-24 object-contain p-2'
              />

              <h1 className='text-center text-xl sm:text-2xl text-gray-400'>
                HTML5
              </h1>

            </div>


            {/* CSS */}

            <div
              className='
              border-2
              border-blue-950
              rounded-2xl
              w-40
              sm:w-44
              h-40
              px-6
              sm:px-8
              hover:animate-bounce
              '
            >

              <img
                src={CSS}
                alt="CSS"
                className='w-full h-24 object-contain p-2'
              />

              <h1 className='text-center text-xl sm:text-2xl text-gray-400'>
                CSS3
              </h1>

            </div>
            <div
              className='
              border-2
              border-blue-950
              rounded-2xl
              w-40
              sm:w-44
              h-40
              px-6
              sm:px-8
              hover:animate-bounce
              '
            >

              <img
                src={Script}
                alt="Script"
                className='w-full h-24 object-contain p-2'
              />

              <h1 className='text-center text-xl sm:text-2xl text-gray-400'>
                JavaScript
              </h1>

            </div>
            {/* <div
              className='
              border-2
              border-blue-950
              rounded-2xl
              w-40
              sm:w-44
              h-40
              px-6
              sm:px-8
              hover:animate-bounce
              '
            >

              <img
                src={Boots}
                alt="Script"
                className='w-full h-24 object-contain p-2'
              />

              <h1 className='text-center text-xl sm:text-2xl text-gray-400'>
                JavaScript
              </h1>

            </div> */}

          </div>

        </div>

      )}


      {/* ================================================= */}
      {/* BACKEND */}
      {/* ================================================= */}

      {active === "backend" && (

        <div className='w-full px-4 sm:px-6'>

          <h1
            className='
            text-center
            text-3xl
            sm:text-4xl
            text-gray-400
            font-bold
            '
          >
            Back-End
          </h1>

          <br />
          <br />

          <div
            className='
            flex
            justify-center
            items-center
            gap-5
            sm:gap-8
            lg:gap-10
            flex-wrap
            '
          >

            {/* Node */}

            <div
              className='
              border-2
              border-blue-950
              rounded-2xl
              w-40
              sm:w-44
              h-40
              px-6
              sm:px-8
              hover:animate-bounce
              '
            >

              <img
                src={Node}
                alt="Node"
                className='w-full h-24 object-contain p-2'
              />

              <h1 className='text-center text-xl sm:text-2xl text-gray-400'>
                Node.js
              </h1>

            </div>


            {/* Express */}

            <div
              className='
              border-2
              border-blue-950
              rounded-2xl
              w-40
              sm:w-44
              h-40
              px-6
              sm:px-8
              hover:animate-bounce
              '
            >

              <img
                src={Express}
                alt="Express"
                className='w-full h-24 object-contain p-2'
              />

              <h1 className='text-center text-xl sm:text-2xl text-gray-400'>
                Express.js
              </h1>

            </div>


            {/* MongoDB */}

            <div
              className='
              border-2
              border-blue-950
              rounded-2xl
              w-40
              sm:w-44
              h-40
              px-6
              sm:px-8
              hover:animate-bounce
              '
            >

              <img
                src={MongoDB}
                alt="MongoDB"
                className='w-full h-24 object-contain p-2'
              />

              <h1 className='text-center text-xl sm:text-2xl text-gray-400'>
                MongoDB
              </h1>

            </div>


            {/* API */}

            <div
              className='
              border-2
              border-blue-950
              rounded-2xl
              w-40
              sm:w-44
              h-40
              px-6
              sm:px-8
              hover:animate-bounce
              '
            >

              <img
                src={API}
                alt="API"
                className='w-full h-24 object-contain p-2'
              />

              <h1 className='text-center text-xl sm:text-2xl text-gray-400'>
                API's
              </h1>

            </div>

          </div>

        </div>

      )}


      {/* ================================================= */}
      {/* TOOLS */}
      {/* ================================================= */}

      {active === "Tools" && (

        <div className='w-full px-4 sm:px-6'>

          <h1
            className='
            text-center
            text-3xl
            sm:text-4xl
            text-gray-400
            font-bold
            '
          >
            Tool'S
          </h1>

          <br />
          <br />

          <div
            className='
            flex
            justify-center
            items-center
            gap-5
            sm:gap-8
            lg:gap-10
            flex-wrap
            '
          >

            {/* GitHub */}

            <div
              className='
              border-2
              border-blue-950
              rounded-2xl
              w-40
              sm:w-44
              h-40
              px-6
              sm:px-8
              hover:animate-bounce
              '
            >

              <img
                src={git}
                alt="GitHub"
                className='w-full h-24 object-contain p-4'
              />

              <h1 className='text-center text-xl sm:text-2xl text-gray-400'>
                GitHub
              </h1>

            </div>


            {/* VS Code */}

            <div
              className='
              border-2
              border-blue-950
              rounded-2xl
              w-40
              sm:w-44
              h-40
              px-6
              sm:px-8
              hover:animate-bounce
              '
            >

              <img
                src={Code}
                alt="VS Code"
                className='w-full h-24 object-contain p-4'
              />

              <h1 className='text-center text-xl sm:text-2xl text-gray-400'>
                VS Code
              </h1>

            </div>


            {/* Vercel */}

            <div
              className='
              border-2
              border-blue-950
              rounded-2xl
              w-40
              sm:w-44
              h-40
              px-6
              sm:px-8
              hover:animate-bounce
              '
            >

              <img
                src={Vercel}
                alt="Vercel"
                className='w-full h-24 object-contain p-3'
              />

              <h1 className='text-center text-xl sm:text-2xl text-gray-400'>
                Vercel
              </h1>

            </div>

          </div>

        </div>

      )}

      <br />
      <br />
      <br />

    </div>
  )
}

export default Skills