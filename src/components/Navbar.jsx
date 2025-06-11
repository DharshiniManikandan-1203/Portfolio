
import './Navbar.css';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom'

export default function Navbar() {


    return (
        <header className="navbar">
            <div className="navbar-left">DHARSHINI MANIKANDAN</div>
            <nav className="navbar-center">
                <a><Link to="/">Home</Link></a>
                <a ><Link to="/about">About</Link></a>
                <a download><Link to="/resume">Resume</Link></a>
                <a ><Link to="/skills">Skills</Link></a>
                <a ><Link to="/projects">Projects</Link></a>
                <a ><Link to="/contact">Contact</Link></a>
            </nav>
            <div className="navbar-right">
                <ThemeToggle />

            </div>
        </header>
    );
}
