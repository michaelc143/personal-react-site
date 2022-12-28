import './navbar.css'
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';

export default function Navbar() {

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
        <div className="nav">
            <button className='darkModeBtn' onClick={toggleTheme}>Toggle DarkMode</button>
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
        </div>
    );
    
}
