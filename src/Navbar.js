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

    if(theme === 'light') {
        return (
            <div className='light'>
            <div className="nav">
                <Link to="/" className="site-title">Michael Corbishley</Link>
                <ul>
                    <li>
                        <a href="https://github.com/michaelc143" target='_blank' rel='noreferrer'>Github</a>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
            </div>
            );
    }

    if(theme === 'dark') {
        return (
            <div className='dark'>
            <div className="nav">
                <Link to="/" className="site-title">Michael Corbishley</Link>
                <ul>
                    <li>
                        <a href="https://github.com/michaelc143" target='_blank' rel='noreferrer'>Github</a>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
            </div>
        );
    }

    
}
