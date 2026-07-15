import React from 'react'
import { useState } from 'react'

const Navbar = (props) => {
    const [menuOpen , setMenuOpen ] = useState(false);
  return (
    <div className=' text-2xl p-5 items-center fixed top-0 left-0 w-full z-50 bg-slate-950/60 backdrop-blur-md border-b border-slate-800'>
        <nav className='flex justify-around gap-10 items-center'>
            <h1 className='text-5xl font-bold flex gap-2 items-center text-yellow-600'>S.
                <img src="https://img.icons8.com/?size=96&id=nqg2tDAxO1LG&format=gif&color=f7f7f7" alt=""  className='w-[50px] h-[50px]'/>
                </h1>
            <div>
                <ul className='flex gap-10 text-gray-300'>
                    <li className='hover:text-amber-500 cursor-pointer'><a href="#">Home</a></li>
                    <li className='hover:text-amber-500 cursor-pointer'><a href="#">About</a></li>
                    <li className='hover:text-amber-500 cursor-pointer'><a href="#">Skills</a></li>
                    <li className='hover:text-amber-500 cursor-pointer'><a href="#">Project</a></li>
                    <li className='hover:text-amber-500 cursor-pointer'><a href="#">Contacts</a></li>
                </ul>
            </div>
            <button className='bg-yellow-500 w-[150px] h-[50px] rounded-2xl hover:bg-yellow-700'>
                <h1 className='text-[15px]'><a href="C:\Users\Admin\Downloads\Sharik_Saifi_Resume.pdf">Download Resume</a></h1>
            </button>
        </nav>
    </div>
  )
}

export default Navbar