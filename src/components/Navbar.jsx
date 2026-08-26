import React from 'react'
import { useState } from 'react'
import { Menu, X } from "lucide-react";
import Resume from '../assets/Sharik_Saifi_Resume.pdf'
import { FaDownload } from 'react-icons/fa';


const Navbar = (props) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <div className='sticky top-0 text-xl p-4 md:p-5 items-center w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800'>

            <nav className='max-w-7xl mx-auto flex justify-between gap-5 items-center min-h-[60px]'>

                {/* Logo */}
                <h1 className='text-4xl md:text-5xl font-bold flex gap-2 items-center text-sky-600'>

                    <a href="#Home" onClick={closeMenu}>
                        S.
                    </a>

                    <img
                        src="https://img.icons8.com/?size=96&id=nqg2tDAxO1LG&format=gif&color=f7f7f7"
                        alt="logo"
                        className='w-[40px] h-[40px] md:w-[50px] md:h-[50px]'
                    />

                </h1>


                {/* Desktop Menu */}
                <div className='hidden md:block'>

                    <ul className='flex gap-6 lg:gap-10 text-gray-300'>

                        <li className='hover:text-sky-500 cursor-pointer text-lg lg:text-2xl transition duration-300'>
                            <a href="#Home">Home</a>
                        </li>

                        <li className='hover:text-sky-500 cursor-pointer text-lg lg:text-2xl transition duration-300'>
                            <a href="#About">About</a>
                        </li>

                        <li className='hover:text-sky-500 cursor-pointer text-lg lg:text-2xl transition duration-300'>
                            <a href="#Skills">Skills</a>
                        </li>

                        <li className='hover:text-sky-500 cursor-pointer text-lg lg:text-2xl transition duration-300'>
                            <a href="#Projects">Projects</a>
                        </li>

                        <li className='hover:text-sky-500 cursor-pointer text-lg lg:text-2xl transition duration-300'>
                            <a href="#Contact">Contact</a>
                        </li>

                    </ul>

                </div>


                {/* Mobile Menu Button */}
                <button
                    className='md:hidden text-white p-2'
                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    {menuOpen
                        ? <X size={30} />
                        : <Menu size={30} />
                    }

                </button>


                {/* CV Button */}
                <a
                    href={Resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='hidden sm:block'
                >

                    <button className='flex items-center gap-2 border border-white/40 px-3 md:px-4 rounded-md py-2 cursor-pointer hover:bg-sky-600 hover:border-sky-600 transition duration-300'>

                        <h1 className='text-white/90 text-sm md:text-base'>
                            Download CV
                        </h1>

                        <FaDownload
                            size={18}
                            className='text-white/70'
                        />

                    </button>

                </a>


                {/* Mobile Menu */}
                {menuOpen && (

                    <div className='md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 shadow-lg'>

                        <ul className='flex flex-col items-center text-gray-300 py-5 gap-5'>

                            <li className='hover:text-sky-500 cursor-pointer transition duration-300'>
                                <a
                                    href="#Home"
                                    onClick={closeMenu}
                                >
                                    Home
                                </a>
                            </li>

                            <li className='hover:text-sky-500 cursor-pointer transition duration-300'>
                                <a
                                    href="#About"
                                    onClick={closeMenu}
                                >
                                    About
                                </a>
                            </li>

                            <li className='hover:text-sky-500 cursor-pointer transition duration-300'>
                                <a
                                    href="#Skills"
                                    onClick={closeMenu}
                                >
                                    Skills
                                </a>
                            </li>

                            <li className='hover:text-sky-500 cursor-pointer transition duration-300'>
                                <a
                                    href="#Projects"
                                    onClick={closeMenu}
                                >
                                    Projects
                                </a>
                            </li>

                            <li className='hover:text-sky-500 cursor-pointer transition duration-300'>
                                <a
                                    href="#Contact"
                                    onClick={closeMenu}
                                >
                                    Contact
                                </a>
                            </li>


                            {/* Mobile CV */}
                            <li className='sm:hidden pt-2'>

                                <a
                                    href={Resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >

                                    <button className='flex items-center gap-2 border border-white/40 px-4 rounded-md py-2 hover:bg-sky-600 hover:border-sky-600 transition duration-300'>

                                        <span className='text-white/90 text-sm'>
                                            Download CV
                                        </span>

                                        <FaDownload
                                            size={17}
                                            className='text-white/70'
                                        />

                                    </button>

                                </a>

                            </li>

                        </ul>

                    </div>

                )}

            </nav>

        </div>
    )
}

export default Navbar