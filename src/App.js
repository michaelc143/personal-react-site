import logo from './logo.svg';
import './App.css';
import {Navbar, getDarkMode} from "./Navbar.js";
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
import {Route, Routes} from "react-router-dom";
import {useState, useEffect} from 'react';

function App() {
  const [darkMode, getDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}> 
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
