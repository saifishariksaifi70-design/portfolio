import React from 'react'
import { useState } from 'react'
// import { Link } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import Resume from '../assets/Sharik_Saifi_Resume.pdf'
import { FaDownload } from 'react-icons/fa';


const Navbar = (props) => {
    const [menuOpen , setMenuOpen ] = useState(false);
  return (
    <div className='text-xl p-5 items-center w-full z-50  from-slate-950 bg-slate-900 to-blue-950 backdrop-blur-md border-b border-slate-800'>
        <nav className='flex justify-around gap-10 items-center h-5 '>
            <h1 className='text-5xl font-bold flex gap-2 items-center text-sky-600'>
                {/* <Link to="/">S.</Link> */}
                <a href="#Home">S.</a>
                <img src="https://img.icons8.com/?size=96&id=nqg2tDAxO1LG&format=gif&color=f7f7f7" alt=""  className='w-[50px] h-[50px]'/>
                </h1>
            <div className=''>
                <ul className='hidden md:flex gap-10 text-gray-300'>
                    <li className='hover:text-sky-500 cursor-pointer text-2xl'>
                        <a href="#Home">Home</a>
                    </li>
                    <li className='hover:text-sky-500 cursor-pointer text-2xl'>
                        {/* <Link to="/About">About</Link> */}
                        <a href="#About">About</a>
                    </li>
                    <li className='hover:text-sky-500 cursor-pointer text-2xl'>
                        {/* <Link to="/Skills">Skills</Link> */}
                        <a href="#Skills">Skills</a>
                    </li>
                    <li className='hover:text-sky-500 cursor-pointe text-2xlr'>
                        {/* <Link to="/Contact">Contact</Link> */}
                        <a href="#Projects">Projects</a>
                    </li>
                     <li className='hover:text-sky-500 cursor-pointe text-2xlr'>
                        {/* <Link to="/Contact">Contact</Link> */}
                        <a href="#Contact">Conatct</a>
                    </li>
                </ul>
               
            </div>
             <button className='md:hidden'
                onClick={()=>setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={30}/> : <Menu size={30} /> }
                    

                </button>
            {menuOpen && (
                <ul className='md:hidden absolute top-20 left-0 w-full bg-slate-900 text-center py-5 space-y-4"'>
                    <li className='hover:text-sky-500 cursor-pointer'>
                        {/* <Link to="/">Home</Link> */}
                        <a href="#Home">Home</a>
                    </li>
                    <li className='hover:text-sky-500 cursor-pointer'>
                        {/* <Link to="/About">About</Link> */}
                        <a href="#About">About</a>
                    </li>
                    <li className='hover:text-sky-500 cursor-pointer'>
                        {/* <Link to="/Skills">Skills</Link> */}
                        <a href="#Skills">Skills</a>
                    </li>
                    <li className='hover:text-sky-500 cursor-pointer'>
                        {/* <Link to="/Contact">Contact</Link> */}
                        <a href="#Projects">Projects</a>
                    </li>
                    <li className='hover:text-sky-500 cursor-pointer'>
                        {/* <Link to="/Contact">Contact</Link> */}
                        <a href="#Contact">Conatct</a>
                    </li>
                </ul>
            )}
            <a href={Resume} target="_blank" rel="noopener noreferrer">
            <button className='flex items-center gap-1 border border-white px-1 rounded-md py-1 cursor-pointer'>
               <h1 className='text-white/80'> Download CV</h1>
               <FaDownload size={20} className='text-white/40'/>
            </button>
            </a>
            
        </nav>
    </div>
  )
}

export default Navbar