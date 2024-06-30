import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Work from './pages/Works/Work'
import Footer from './components/Footer/Footer'
import {Route,Routes} from 'react-router-dom'
const App = () => {
  return (
   <div className='App'>
     <div className='page' >
    <Navbar/>
    <Home/>
    {/* <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Work' element={<Work/>}></Route>
    </Routes> */}
    </div>
    <About/>
    <Skills/>
    <Work/>
    <Footer/>
    {/* <Routes>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Work' element={<Work/>}></Route>
    </Routes> */}
   </div>
  )
}

export default App
