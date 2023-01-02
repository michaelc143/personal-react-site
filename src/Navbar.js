import './navbar.css'
import { Link } from 'react-router-dom';

export function Navbar() {


    return (
        <nav className='site-nav'>
            <Link to="/" className="site-title">Michael Corbishley</Link>
            <ul>
                <li>
                    <Link to="/GraphicsProj">Graphics Proj</Link>
                </li>
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


