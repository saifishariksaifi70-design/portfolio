import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center items-center pb-10 pt-5 bg-slate-900 sm:max-h-full md:max-h-full'>
        <div className='items-center'>
        <h1 className='text-white text-2xl text-center'>@ 2026  
            <span className='bg-gradient-to-r from-sky-500 to-purple-300 bg-clip-text text-transparent font-semibold'> Sharik Saifi.</span>
            All right Reserved</h1>
            <p className='text-center text-white/60'>Design & Developer</p>
            <p className='text-center text-white/80 font-semibold'>Build with React.js & TailwindCSS ❤️</p>
            </div>
        
    </div>
  )
}

export default Footer