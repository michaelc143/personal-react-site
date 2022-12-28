import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar.js";
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
import {Route, Routes} from "react-router-dom";
import {useState, useEffect} from 'react';

function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light')
      setTheme('dark');
    else
      setTheme('light');
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
    <button onClick={toggleTheme}>Toggle DarkMode</button>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
