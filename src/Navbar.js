import './navbar.css'
import { Link } from 'react-router-dom';

export function Navbar() {


    return (
        <nav className='site-nav'>
            <Link to="/personal-react-site/" className="site-title">Michael Corbishley</Link>
            <ul>
                <li>
                    <a href="https://github.com/michaelc143" target='_blank' rel='noreferrer'>Github</a>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
    
}


