import React, { useState } from 'react';
import './Navbar.css';
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
                            <a
                                className={`nav-link fs-5 ${activeLink === 'home' ? 'active' : ''}`}
                                aria-current="page"
                                href="/home"
                                onClick={() => handleNavLinkClick('home')}
                            >
                                Home
                            </a>
                            <a
                                className={`nav-link fs-5 ${activeLink === 'services' ? 'active' : ''}`}
                                href="/services"
                                onClick={() => handleNavLinkClick('services')}
                            >
                                Services
                            </a>
                            <a
                                className={`nav-link fs-5 ${activeLink === 'about' ? 'active' : ''}`}
                                href="/about"
                                onClick={() => handleNavLinkClick('about')}
                            >
                                About
                            </a>
                            <a
                                className={`nav-link fs-5 ${activeLink === 'contact' ? 'active' : ''}`}
                                href="/contact"
                                onClick={() => handleNavLinkClick('contact')}
                            >
                                Contact
                            </a>
                            <a
                                className={`nav-link fs-5 ${activeLink === 'career' ? 'active' : ''}`}
                                href="/career"
                                onClick={() => handleNavLinkClick('career')}
                            >
                                Career
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
