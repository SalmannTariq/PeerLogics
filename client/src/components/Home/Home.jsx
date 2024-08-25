import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import ServiceCards from '../Services/ServiceCards'
// Logo in Footer
import PeerLogics from '../assests/peerlogics.png';
// icons
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <>
            <div className='main-section'>
                <Navbar />
                <div className='container main-headline-section'>
                    <h1 className='text-white'><span className='headline'>Innovative Solutions</span><br />for Your Business <span className='headline'>Needs.</span></h1>
                    <p className='text-white'>Innovative Solutions for Your Business Needs.</p>
                    <button className='learn-btn'>Learn More</button>
                </div>
            </div>
            {/* ABout */}
            <section className=' py-5 about-section'>
                <div className='container'>
                    <div className='row py-3'>
                        <div className="col-md-5 d-flex justify-content-center align-items-center align-items-sm-start flex-column">
                            <p className='about-text'>ABOUT US</p>
                            <h1 className='how-work-text'>How We Work</h1>
                        </div>
                        <div className="col-md-7">
                            <p className='text-center text-md-start'>At PeerLogics, we are dedicated to delivering exceptional technology solutions tailored to your business needs.
                                With years of industry experience, our team of experts provides innovative and reliable services that drive success.
                            </p>
                            <div className='text-center text-md-start'>
                                <button className='read-btn'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* Services */}
            <section >
                <div className='services-section'>
                    <div className='container'>
                        <p className='expertise-text'>Expertise</p>
                        <h1 className='services-text'>Our Services</h1>
                    </div>
                </div>
                <div className='service-cards'>
                    <ServiceCards />
                </div>
            </section>
            {/* Get In Touch */}
            <section className='bg-black py-5'>
                <div className='container'>
                    <div className='d-flex flex-sm-row flex-column gap-3 gap-sm-0 justify-content-sm-between justify-content-center align-items-center'>
                        <div>
                            <h5 className='contact-text'>Contact Us</h5>
                            <h1 className='text-white fw-bold get-text'>GET IN CALL TO <span className='action-text'>ACTION</span></h1>
                        </div>
                        <div className='me-sm-5'>
                            <button className='get-btn'>Get In Touch</button>
                        </div>
                    </div>
                </div>

            </section>
            {/* Testimonial */}
            <section>
                <h1>testimonial space</h1>
            </section>
            {/* Footer */}
            <div>
            <Footer />
            </div>

        </>

    )
}

export default Home