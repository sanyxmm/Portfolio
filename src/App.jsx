import React, { useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Work from './pages/Works/Work';
import Footer from './components/Footer/Footer';
import { createContext } from "react";
import { useState } from 'react';
import ReactSwitch from 'react-switch';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
export const ThemeContext = createContext(null);

const ScrollToElement = ({ id }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return <div ref={elementRef} id={id}></div>;
};

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='App' id={theme}>
        <div className='page' id="home">
          <Navbar />
          <ReactSwitch className='switch' onChange={toggleTheme} checked={theme === "dark"} />
          <Home/>
        </div>
        <div id="about"><About/></div>
        <div id="skill"><Skills/></div>
        <div id="work"><Work/></div>
        <div id="footer"><Footer/></div>
      </div>
    </ThemeContext.Provider>
  );
}

export default function WrappedApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="#home" element={<ScrollToElement id="home" />} />
          <Route path="#about" element={<ScrollToElement id="about" />} />
          <Route path="#skill" element={<ScrollToElement id="skills" />} />
          <Route path="#work" element={<ScrollToElement id="work" />} />
          <Route path="#footer" element={<ScrollToElement id="footer" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// import React from 'react'
// import './App.css'
// import Navbar from './components/Navbar/Navbar'
// import Home from './pages/Home/Home'
// import About from './pages/About/About'
// import Skills from './pages/Skills/Skills'
// import Work from './pages/Works/Work'
// import Footer from './components/Footer/Footer'
// import { createContext } from "react";
// import { useState } from 'react';
// import ReactSwitch from 'react-switch'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// export const ThemeContext = createContext(null);


// function App()  {
//   const [theme,setTheme] = useState("dark");
//   const toggleTheme = () => {
//     setTheme((curr) => (curr==="light" ? "dark" : "light"));
//   };
//   return (
//     <BrowserRouter>
//     <ThemeContext.Provider value={{theme,toggleTheme}}>
//     <Routes>
//     <Route path="/" element={<Home/>}></Route>
//     <Route path="/about" element={<About/>}></Route>
//     <Route path="/skill" element={<Skills/>}></Route>
//     <Route path="/work" element={<Work/>}></Route>
//     <Route path="/footer" element={<Footer/>}></Route>
//   </Routes>
//    <div className='App'  id={theme}>
//      <div className='page' >
//     <Navbar/>
//     <ReactSwitch className='switch' onChange={toggleTheme} checked={theme === "dark"}/>
//     <Home/>
//     </div>
//     <About/>
//     <Skills/>
//     <Work/>
//     <Footer/>
//    </div>
//    </ThemeContext.Provider>
//    </BrowserRouter>
//   );
// }
// export default App;
   