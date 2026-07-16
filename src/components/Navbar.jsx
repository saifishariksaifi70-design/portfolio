import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Menu, X } from "lucide-react";


const Navbar = (props) => {
    const [menuOpen , setMenuOpen ] = useState(false);
  return (
    <div className='text-2xl p-5 items-center w-full z-50  from-slate-950 bg-slate-900 to-blue-950 backdrop-blur-md border-b border-slate-800'>
        <nav className='flex justify-around gap-10 items-center h-[30px]'>
            <h1 className='text-5xl font-bold flex gap-2 items-center text-sky-600'>
                <Link to="/">S.</Link>
                <img src="https://img.icons8.com/?size=96&id=nqg2tDAxO1LG&format=gif&color=f7f7f7" alt=""  className='w-[50px] h-[50px]'/>
                </h1>
            <div className=''>
                <ul className='flex gap-10 text-gray-300 md:hidden flex gap-8 text-lg'>
                    <li className='hover:text-sky-500 cursor-pointer'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='hover:text-sky-500 cursor-pointer'>
                        <Link to="/About">About</Link>
                    </li>
                    <li className='hover:text-sky-500 cursor-pointer'>
                        <Link to="/Skills">Skills</Link>
                    </li>
                    <li className='hover:text-sky-500 cursor-pointer'>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
                <button className='md:hidden'
                onClick={()=>setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={30}/> : <Menu size={30} /> }

                </button>
            </div>
            {menuOpen && (
                <ul className='flex gap-10 text-gray-300 md:hidden flex gap-8 text-lg'>
                    <li className='hover:text-sky-500 cursor-pointer'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='hover:text-sky-500 cursor-pointer'>
                        <Link to="/About">About</Link>
                    </li>
                    <li className='hover:text-sky-500 cursor-pointer'>
                        <Link to="/Skills">Skills</Link>
                    </li>
                    <li className='hover:text-sky-500 cursor-pointer'>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            )}
            <button className='bg-sky-500 w-[150px] h-[50px] rounded-2xl hover:bg-sky-700'>
                <h1 className='text-[15px]'><a href="C:\Users\Admin\Downloads\Sharik_Saifi_Resume.pdf">Download Resume</a></h1>
            </button>
        </nav>
    </div>
  )
}

export default Navbar