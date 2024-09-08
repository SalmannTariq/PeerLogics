import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import ServiceCards from '../Services/ServiceCards'


import Footer from '../Footer/Footer';
import Comments from '../Comments/Comments';
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
                        <div className="col-md-5  d-flex justify-content-center align-items-center align-items-md-start flex-column">
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
                    <div className='container text-lg-start text-center'>
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
                    <div className='d-flex flex-md-row flex-column gap-3 gap-md-0 justify-content-sm-between justify-content-center align-items-center'>
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
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-flex flex-column justify-content-center align-items-center align-items-md-start">
                            <p className='happy-text'>HAPPY CLIENT</p>
                            <h1 className='testimonial-text'>Our Testimonial</h1>
                            <p className='text-center text-md-start'>So if you're looking to get a little slogan inspiration of your own,
                                That's So if you'to get are looking to get a little slogan inspiration of your own,
                                take a look at some of your favourite
                            </p>
                            <a href='#' className='view-more'>View More</a>
                        </div>
                        <div className="col-md-7">
                            <Comments />
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <div>
                <Footer />
            </div>

        </>

    )
}

export default Home