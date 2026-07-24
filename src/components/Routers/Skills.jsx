import React  from 'react'
import Frontend from '../../../public/Frontend.png'
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

const Skills = () => {
  const [active, setActive] = useState("frontend");
  
  return (
    
    <div className='min-h-screen py-16 bg-gradient-to-br from-slate-950 bg-slate-900 to-blue-950 items-center'>
      
      
      <div className='flex justify-center items-center mt-10 gap-5 flex flex-col md:flex-row'>
        
      <div className='border w-2xs h-72 object-cover md:ml-32 
      drop-shadow-2xl bg-blue-900/20 gap-5
        rounded-3xl hover:
        hover:scale-105
    transition-all
    duration-500'>
        <ul className='list-disc list-inside text-sky-400 m-5 text-white items-center'>
          <h1 className='text-2xl font-bold flex gap-1'>
            <img src={Frontend} alt="" />Frontend Development</h1><br />
          <li>HTML/CSS3</li>
          <li>JavaScript(ES6+)</li>
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
      </ul>
      </div>
      <div className='border w-2xs h-60 border w-2xs h-72 object-cover md:ml-32 
      drop-shadow-2xl bg-blue-900/20
        rounded-3xl hover:
        hover:scale-105
    transition-all
    duration-500'>
        <ul className='list-disc list-inside text-sky-400  m-5 text-white items-center'>
          <h1 className='text-2xl font-bold flex gap-2'>
            <img src={Backend} alt="" />Backend Development</h1> <br />
          <li>NODE.JS</li>
          <li>EXPRESS.JS</li>
          <li>API'S</li>
          <li>MongoDB</li>
      </ul>
      </div>
      <div className='border w-2xs h-60 border w-2xs h-72 object-cover md:ml-32 
      drop-shadow-2xl bg-blue-900/20
        rounded-3xl hover:
        hover:scale-105
    transition-all
    duration-500'>
        <ul className='list-disc list-inside text-sky-400  m-5 text-white items-center'>
          <h1 className='text-2xl font-bold flex gap-1'>
            <img src={Tool} alt="" />Tool'S & Platfroms</h1> <br />
          <li>Git/GitHub</li>
          <li>Vercel Deployment</li>
          <li>VS Code</li>
          
      </ul>
      </div>
      
      </div>
      <br /><br /><br />
      <div className='flex gap-32 items-center justify-center'>
        <hr className='text-gray-500 w-2xs' />
        <h1 className='text-5xl text-gray-500 font-bold'>Skills</h1>
        <hr className='text-gray-500 w-2xs'/>
      </div><br />
      <div className='flex justify-center items-center gap-5 flex flex-col md:flex-row'>
        <button className='border-2 rounded-2xl w-32 h-10 
        bg-gradient-to-r from-blue-300 to-gray-500
        hover:scale-105
    transition-all
    duration-500
        'onClick={() => setActive("frontend")} 
        >
          <span className='text-black-500'>Frontend</span>
          </button>
        <button className='border-2 rounded-2xl w-32 h-10
        bg-gradient-to-r from-blue-300 to-gray-500
        hover:scale-105
    transition-all
    duration-500
        'onClick={() => setActive("backend")}>
          <span className='text-black-500'>Backend</span>
          </button>
        <button className='border-2 rounded-2xl w-32 h-10
        bg-gradient-to-r from-blue-300 to-gray-500
        hover:scale-105
    transition-all
    duration-500
        'onClick={() => setActive("Tools")}>
          <span className='text-black-500'>Tools</span>
          </button>
      </div>
      <br />
        
        <br />

        <div>
          
        
          
          {active === "frontend" && (
            <>
            <h1 className='text-center text-4xl text-gray-400 font-bold'>Front-End</h1><br /><br />
            <div className='flex justify-center items-center gap-10 flex flex-col md:flex-row'>
            
            <div className='border-2 border-blue-950 rounded-2xl w-44 h-40 px-8
          hover:animate-bounce
          '>
            <img src={reactImage} alt="" className='' />
            <h1 className='px-4 text-2xl text-gray-400'>React.js</h1>
          </div>
          <div className='border-2 border-blue-950 rounded-2xl w-44 h-40 px-8
          hover:animate-bounce
          '>
            <img src={tailwind} alt="" className='px-4 py-3' />
            <h1 className='text-center text-2xl text-gray-400'>TailwindCSS</h1>
          </div>
          <div className='border-2 border-blue-950 rounded-2xl w-44 h-40 px-8
          hover:animate-bounce'>
            <img src={html} alt="" className='px-6 py-3 w-28 h-22s' />
            <h1 className='text-center px-4 text-2xl text-gray-400'>HTML5</h1>
          </div>
          <div className='border-2 border-blue-950 rounded-2xl w-44 h-40 px-8
          hover:animate-bounce
          '>
            <img src={CSS} alt="" className='px-6 py-3 w-28 h-22s' />
            <h1 className='text-center px-4 text-2xl text-gray-400'>CSS3</h1>
          </div>
          </div>
            </>
          )}
          
          
        </div>

        <div>
          
        
          
          {active === "backend" && (
            <>
            <h1 className='text-center text-4xl text-gray-400 font-bold'>Back-End</h1><br /><br />
            <div className='flex justify-center items-center gap-10 flex flex-col md:flex-row'>
            
            <div className='border-2 border-blue-950 rounded-2xl w-44 h-40 px-8
          hover:animate-bounce
          '>
            <img src={Node} alt="" className='p-6' />
            <h1 className='px-4 text-2xl text-gray-400'>Node.js</h1>
          </div>
          <div className='border-2 border-blue-950 rounded-2xl w-44 h-40 px-8
          hover:animate-bounce
          '>
            <img src={Express} alt="" className='px-4 py-3' />
            <h1 className='text-center text-2xl text-gray-400'>Express.js</h1>
          </div>
          <div className='border-2 border-blue-950 rounded-2xl w-44 h-40 px-8
          hover:animate-bounce'>
            <img src={MongoDB} alt="" className='px-6 py-3 w-28 h-22' />
            <h1 className='text-center py-2 text-2xl text-gray-400'>MongoDB</h1>
          </div>
          <div className='border-2 border-blue-950 rounded-2xl w-44 h-40 px-8
          hover:animate-bounce
          '>
            <img src={API} alt="" className='px-6 py-3 w-28 h-22s' />
            <h1 className='text-center px-4 text-2xl text-gray-400'>API's</h1>
          </div>
          </div>
            </>
          )}
          
          
        </div>
        <div>
          
        
          
          {active === "Tools" && (
            <>
            <h1 className='text-center text-4xl text-gray-400 font-bold'>Tool'S</h1><br /><br />
            <div className='flex justify-center items-center gap-10 flex flex-col md:flex-row'>
            
            <div className='border-2 border-blue-950 rounded-2xl w-44 h-40 px-8
          hover:animate-bounce
          '>
            <img src={git} alt="" className='p-6' />
            <h1 className='px-4 text-2xl text-gray-400'>GitHub</h1>
          </div>
          <div className='border-2 border-blue-950 rounded-2xl w-44 h-40 px-8
          hover:animate-bounce
          '>
            <img src={Code} alt="" className='px-4 py-6 h-28' />
            <h1 className='text-center text-2xl text-gray-400'>VS Code</h1>
          </div>
          <div className='border-2 border-blue-950 rounded-2xl w-44 h-40 px-8
          hover:animate-bounce'>
            <img src={Vercel} alt="" className='px-6 py-3 w-28 h-22' />
            <h1 className='text-center py-3 text-2xl text-gray-400'>Vercel</h1>
          </div>
          
          </div>
            </>
          )}
          
          
        </div>
      
      </div>
        
    
  )
}

export default Skills