import React from 'react'
import { FaCircle, FaComment, FaMousePointer, FaRegComments, FaCommentDots, FaTelegramPlane, FaVoicemail, FaPhone, FaLocationArrow, FaLinkedin, FaGithub, FaHandshake, FaArrowRight } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white'>
      <div className='py-5 text-center'>
      
        <h1 className='bg-gradient-to-r from-sky-400 to-purple-300 bg-clip-text text-transparent text-2xl py-3'>Get IN Touch</h1>
        <h1 className='text-3xl font-bold'>Let'S Work 
          <span className='bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent text-3xl font-bold'> Together</span>
          </h1>
          <p className='text-white/70 py-3'>
            Have a project in mind or just want to say hi? I'd love to hear from you. <br />
            Fill out the form below or reach me via the contact deatils. 
          </p>
          <div className='flex justify-center gap-8 items-center py-3'>
            <hr className='w-20 text-sky-700' />
            <FaCircle size={15}  className='text-sky-400'/>
            <hr className='w-20 text-sky-700' />
          </div>
          
      </div>

      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-start gap-8 px-5'>
        <div className='gap-5 items-center border-1 border-gray-800 w-full lg:w-[380px] h-auto py-8 px-5 rounded-xl
        hover:scale-105
        transition-all
        duration-500'>
          <div className='flex gap-5 py-3'>
          <FaTelegramPlane size={50} className='text-sky-500' />
          <div>
            <h1 className='text-2xl font-bold'>Contact Information</h1>
            <p className='text-white/60'>Feel free to reach out through any of these platform</p>
            </div>
            </div><br /><br />
            <div className='flex gap-3 items-center py-2'>
            <FaVoicemail  size={30} className='text-white/70'/>
            <div>
              <h1 className='text-lg font-semibold'>Email</h1>
              <p className='text-white/70'>saifishariksaifi70@gamil.com</p>
            </div>
            
            </div>
            <div className='flex gap-5 items-center py-2'>
            <FaPhone  size={20} className='text-white/70'/>
            <div>
              <h1 className='text-lg font-semibold'>Phone</h1>
              <p className='text-white/70'>8178439166</p>
            </div>
            
            </div>
            <div className='flex gap-5 items-center py-2'>
            <FaLocationArrow  size={20} className='text-white/70'/>
            <div>
              <h1 className='text-lg font-semibold'>Location</h1>
              <p className='text-white/70'>Faridabad, haryana ,India</p>
            </div>
            
            </div>
            <div className='flex gap-5 items-center py-2'>
            <FaLinkedin  size={20} className='text-white/70'/>
            <div>
              <h1 className='text-lg font-semibold'>Telegram</h1>
              <p className='text-white/70'>linkedin.com/in/sharik-saifi</p>
            </div>
            
            </div>
            <div className='flex gap-5 items-center py-2'>
            <FaGithub  size={20} className='text-white/70'/>
            <div>
              <h1 className='text-lg font-semibold'>GitHub</h1>
              <p className='text-white/70'>github.com/saifishariksaifi70-design</p>
            </div>
            
            </div>
            
           
        </div>
         
        <div className='border-1 border-gray-800 w-full lg:flex-1 h-auto items-center rounded-xl p-6'>
          <div className='flex gap-5 items-center'>
          <FaCommentDots size={40} className='text-sky-500' />
          <div>
          <h1 className='text-2xl font-bold'>Send Me a Message</h1>
          <p className='text-white/60'>I Usually respond within 24 hour's </p>
          </div>
          </div><br />
          <div>
            <div className='flex flex-col md:flex-row gap-5'>
              <input type="text" placeholder='your Name' 
              className='w-full border border-white/40 rounded-md p-3'  />
              <input type="text" placeholder='your Email' 
              className='w-full border border-white/40 rounded-md p-3'/>
            </div><br />
            <div>
              <input type="text" placeholder='subject'
              className='w-full border border-white/40 rounded-md p-3' />
            </div><br />
            <div className=''>
            <textarea placeholder='your Message'
            className='w-full h-52 border border-white/40 rounded-md p-3 resize-none'>

            </textarea>
            </div><br />
            <button className='rounded-lg border-1 border-sky-400 w-full p-2
            bg-gradient-to-r from-sky-500 to-blue-500'>
              <div className='flex items-center justify-center gap-3'>
              <FaTelegramPlane size={15} />
              <h1>Send Message</h1>
              </div>
            </button>

          </div>
          
        </div>
        
        
      </div><br /><br />  
      <div className="max-w-full mx-auto h-[350px] px-5 rounded-2xl overflow-hidden border-gray-800 
       flex justify-center items-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25422.842671301532!2d77.3053352530502!3d28.339359575354127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdb98e43a52c7%3A0xa3688094e68c35b2!2sBallabhgarh%2C%20Faridabad%2C%20Haryana!5e1!3m2!1sen!2sin!4v1785568399105!5m2!1sen!2sin" 
        width="100%" height="100%" style={{ border : 0 }} 
        allowfullscreen="" loading="lazy" 
        referrerpolicy="strict-origin-when-cross-origin"
        title='location'
        className='w-full h-full border border-gray-500 rounded-2xl'>

        </iframe>
 
</div>
      <br />
      <div className='w-[80%] h-auto'>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 border border-gray-800 rounded-2xl p-8 mx-5">
        <div className='flex gap-5 items-center'>
          <FaHandshake size={40} className='text-sky-500' />
          <div>
          <h1 className='text-2xl font-semibold'>Let's build something amazing together !</h1>
          <p className='text-white/40'>I'm available for freelance work and opportunities</p>
          </div>
        </div>
        <div className='flex items-center gap-3 border border-sky-500 rounded-lg px-6 py-2 hover:bg-sky-500 transition'>
          <span>Hire Me</span>
          <FaArrowRight size={15} />
        </div>
      </div>
      </div>
      <br /><br />
      
    </div>
  )
}

export default Contact