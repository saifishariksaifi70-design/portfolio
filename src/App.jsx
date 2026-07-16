
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
// import heroImage4 from './assets/heroImage4.png'
import arrowRight from './assets/arrowRight.png'
import Image1 from '../src/my image.png'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './components/Routers/About'
import Skills from './components/Routers/Skills'
import Contact from './components/Routers/Contact'

function App() {
  const userName = "SHARIK"
  const Para ="Frontend Developer passionate about building modern,\n responsive, and user-friendly websites using \n React.js, JavaScript, and Tailwind CSS."

  return (
    <>
     <BrowserRouter> 
     <Navbar />
     <Routes>
     <Route path='/' element={
      <Home imageProp={Image1}
     imageIcon={arrowRight} 
     Line1="Frontend Developer passionate about building modern,"
     Line2="responsive, and user-friendly websites using"
     Line3="React.js, JavaScript, and Tailwind CSS."
     />
     }/>
     <Route path='/About' element={<About/>}/>
     <Route path='/Skills'element={<Skills/>}/>
     <Route path='/Contact' element={<Contact/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
