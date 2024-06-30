import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Work from './pages/Works/Work'
import Footer from './components/Footer/Footer'
import {Route,Routes} from 'react-router-dom'
import { createContext } from "react";
import { useState } from 'react';
import ReactSwitch from 'react-switch'
export const ThemeContext = createContext(null);


function App()  {
  const [theme,setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr==="light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
   <div className='App'  id={theme}>
     <div className='page' >
    <Navbar/>
    <ReactSwitch className='switch' onChange={toggleTheme} checked={theme === "dark"}/>
    <Home/>
      </div>
    <About/>
    <Skills/>
    <Work/>
    <Footer/>
   </div>
   </ThemeContext.Provider>
  );
}
export default App;
   {/* <Routes>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Work' element={<Work/>}></Route>
    </Routes> */}
        {/* <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Work' element={<Work/>}></Route>
    </Routes> */}
    






