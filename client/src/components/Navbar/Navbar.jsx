import React, { useState } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'
// Logo
import PeerLogics from '../assests/peerlogics.png';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');

    const handleNavLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={PeerLogics} alt="PeerLogics" width="150" height="37" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link
                                className={`nav-link fs-5 ${activeLink === 'home' ? 'active' : ''}`}
                                aria-current="page"
                                to="/home"
                                onClick={() => handleNavLinkClick('home')}
                            >
                                Home
                            </Link>
                            <Link
                                className={`nav-link fs-5 ${activeLink === 'services' ? 'active' : ''}`}
                                to="/services"
                                onClick={() => handleNavLinkClick('services')}
                            >
                                Services
                            </Link>
                            <Link
                                className={`nav-link fs-5 ${activeLink === 'about' ? 'active' : ''}`}
                                to="/about"
                                onClick={() => handleNavLinkClick('about')}
                            >
                                About
                            </Link>
                            <Link
                                className={`nav-link fs-5 ${activeLink === 'contact' ? 'active' : ''}`}
                                to="/contact"
                                onClick={() => handleNavLinkClick('contact')}
                            >
                                Contact
                            </Link>
                            <Link
                                className={`nav-link fs-5 ${activeLink === 'career' ? 'active' : ''}`}
                                to="/career"
                                onClick={() => handleNavLinkClick('career')}
                            >
                                Career
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
