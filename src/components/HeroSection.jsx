import React from 'react'

const HeroSection = ({imageProp , Line1 , Line2 ,Line3 ,imageIcon}) => {
  return (
  <section className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white flex items-center justify-between px-20'>
    <div className='mt-16 items-center'>
       <h1 className='text-[20px] mt-16'> I'M <br/>
        <span className='text-5xl font-bold'>SHARIK</span><br/>
       <span className='text-7xl font-bold text-yellow-600'>DEVELOPER</span>
       </h1><br />
       <p>{Line1}</p>
       <p>{Line2}</p>
       <p>{Line3}</p><br /><hr className='text-yellow-500' /><br />
       <button className='bg-white border w-[100px] flex justify-center mt-8 px-8 py-3 border border-amber-500 rounded-lg hover: text-black transition'>
        view <img src={imageIcon} alt="" />
       </button>
    </div>
    <div className='relative'>
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
      <div className="w-80 h-80 bg-blue-500/30 blur-[120px] rounded-full"></div>
    </div>
        <img src={imageProp} alt="" className='w-[450px] h-[550px] object-cover mt-10 drop-shadow-2xl rounded-full
    hover:scale-105
    transition-all
    duration-500'/>
    </div>
  </section>
  )
}

export default HeroSection