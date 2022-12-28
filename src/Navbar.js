import './navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Michael Corbishley</Link>
        <ul>
            <li>
                <a href="https://github.com/michaelc143" target='_blank' rel='noreferrer'>Github</a>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
    </nav>
}

function customLink({href, children, ...props}) {
    const path = window.location.pathname;
    return(
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>
            
            </a>
        </li>
    );
}