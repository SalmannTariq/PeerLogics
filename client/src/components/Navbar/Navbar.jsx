import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
// Logo
import PeerLogics from '../assests/peerlogics.png';

const Navbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const currentPath = location.pathname.split("/")[1];
        setActiveLink(currentPath);
    }, [location]);

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
                            >
                                Home
                            </Link>
                            <Link
                                className={`nav-link fs-5 ${activeLink === 'services' ? 'active' : ''}`}
                                to="/services"
                            >
                                Services
                            </Link>
                            <Link
                                className={`nav-link fs-5 ${activeLink === 'about' ? 'active' : ''}`}
                                to="/about"
                            >
                                About
                            </Link>
                            <Link
                                className={`nav-link fs-5 ${activeLink === 'contact' ? 'active' : ''}`}
                                to="/contact"
                            >
                                Contact
                            </Link>
                            <Link
                                className={`nav-link fs-5 ${activeLink === 'career' ? 'active' : ''}`}
                                to="/career"
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
