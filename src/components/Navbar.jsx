import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="container header-inner">
                <Link to="/" className="logo">
                    <div className="logo-wrapper">
                        <span className="logo-text-main">ARUN</span>
                        <span className="logo-text-sub">STUDIO</span>
                    </div>
                </Link>
                <nav className={`main-nav ${isOpen ? 'open' : ''}`} aria-label="Main Navigation">
                    <button
                        className="mobile-menu-toggle"
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                    <ul className="nav-list">
                        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
                        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
