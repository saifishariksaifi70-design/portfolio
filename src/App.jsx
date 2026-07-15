
import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import heroImage4 from './assets/heroImage4.png'
import arrowRight from './assets/arrowRight.png'

function App() {
  const userName = "SHARIK"
  const Para ="Frontend Developer passionate about building modern,\n responsive, and user-friendly websites using \n React.js, JavaScript, and Tailwind CSS."

  return (
    <>
      
     <Navbar />
     <HeroSection imageProp={heroImage4}
     imageIcon={arrowRight} 
     Line1="Frontend Developer passionate about building modern,"
     Line2="responsive, and user-friendly websites using"
     Line3="React.js, JavaScript, and Tailwind CSS."
     />
    </>
  )
}

export default App
