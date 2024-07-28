import React, { useEffect, useRef ,createContext ,useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Work from './pages/Works/Work';
import Footer from './components/Footer/Footer';

function App() {
  return ( 
      <div className='App'>
        <div><Navbar /></div> 
        <div><Home/></div>
        <div id="about"><About/></div>
        <div><Skills/></div>
        <div id="work"><Work/></div> 
        <div><Footer/></div>
      </div>
  );
}
export default App;
// #light{
//   background-color: #e07ca9bd;
// }
// #dark{
//   background-color: #000000;
// }
// .switch{
//   position: absolute;
//   left: 92%;
//   top: -7%;
// }
// id={theme}
// import ReactSwitch from 'react-switch';
// export const ThemeContext = createContext(null);
// const [theme, setTheme] = useState("dark");
// const toggleTheme = () =>   setTheme((curr) => (curr === "light" ? "dark" : "light"));
{/* <ThemeContext.Provider value={{ theme, toggleTheme }}>
</ThemeContext.Provider> */}
   {/* <ReactSwitch className='switch' onChange={toggleTheme} checked={theme === "dark"} /> */}
 {/* </div> */}