import './navbar.css'
import { Link } from 'react-router-dom';

export function Navbar() {


    return (
        <nav className='site-nav'>
            <Link to="/personal-react-site/" className="site-title">Michael Corbishley</Link>
            <ul>
                <li>
                    <Link to="/Projects">Projects</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );

}


