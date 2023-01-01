import './navbar.css'
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';

export function Navbar() {

    const [darkMode, setDarkMode] = useState(false); //darkmode setup stuff 

    return (
        <nav className={darkMode ? 'dark-mode' : 'light-mode'}>
            <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
            <Link to="/" className="site-title">Home</Link>
            <ul>
                <li>
                    <a href="https://github.com/michaelc143" target='_blank' rel='noreferrer'>Github</a>
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/1y0dF7CcdRCKjVBYazP95FnjD1F4WcUVm/view?usp=sharing" target='_blank' rel='noreferrer'>Resume</a>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
    
}

export function getDarkMode() {
    if(Navbar().darkMode === 'dark-mode')
        return true;
    else if(Navbar().darkMode === 'light-mode')
        return false;
}

