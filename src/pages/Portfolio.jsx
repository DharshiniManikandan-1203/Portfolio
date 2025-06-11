import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { isAuthenticated, logoutUser } from '../utils/auth';
import ThemeToggle from '../components/ThemeToggle';
import './Portfolio.css';

function Portfolio() {
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/login', { replace: true });
        }
    }, [navigate]);

    const handleLogout = () => {
        logoutUser();
        navigate('/login');
    };

    return (
        <div className="portfolio-layout">
            <nav className="portfolio-navbar">
                <h2 className="logo">DHARSHINI MANIKANDAN</h2>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="nav-actions">
                    <ThemeToggle />
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
            </nav>

            <main className="portfolio-content">
                <Outlet />
            </main>
        </div>
    );
}

export default Portfolio;
