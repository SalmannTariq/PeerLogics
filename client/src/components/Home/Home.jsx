import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import ServiceCards from '../Services/ServiceCards'
import Footer from '../Footer/Footer';
import Testimonials from '../Testimonials/Testimonials'
import GetInTouch from '../GetInTouch/GetInTouch'
const Home = () => {
    return (
        <>
            <div className='main-section'>
                <Navbar />
                <div className='container main-headline-section'>
                    <h1 className='text-white'><span className='headline'>Innovative Solutions</span><br />for Your Business <span className='headline'>Needs.</span></h1>
                    <p className='text-white'>Innovative Solutions for Your Business Needs.</p>
                    <div className='w-50 position-relative d-flex justify-content-center justify-content-lg-start'>
                        <button className='learn-btn position-absolute'>Learn More</button>
                    </div>
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
                            <div className='position-relative d-flex justify-content-center justify-content-lg-start'>
                                <button className='read-btn position-absolute'>Read More</button>
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
            <div>
                <GetInTouch />
            </div>
            {/* Testimonial */}
            <div>
                <Testimonials />
            </div>
            {/* Footer */}
            <div>
                <Footer />
            </div>

        </>

    )
}

export default Home