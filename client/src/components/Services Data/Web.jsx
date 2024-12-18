import React from 'react'
import Navbar from '../Navbar/Navbar'
import './servicesData.css'
import { Link } from 'react-router-dom'
import { FaCheckCircle } from "react-icons/fa";
import web from '../assests/web-serviceData.jpg'
import billing from '../assests/Billing-2.jpg'
import GetInTouch from '../GetInTouch/GetInTouch';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';
const Web = () => {
    return (
        <>
            <div>
                <div className='servicename-section'>
                    <Navbar />
                    <div className='service-category d-flex flex-column justify-content-center align-items-center'>
                        <h1 className='text-white our-services-text'>Website Development</h1>
                        <p className='web'><Link className='text-decoration-none text-white' to="/home">Home</Link><span className='text-white'> &gt; </span> Web Development</p>
                    </div>
                </div>

                {/*  */}
                <div className='container'>
                    <div className='text-center py-5'>
                        <img src={web} className='rounded servicedata-img' />
                    </div>
                    {/* Powering Your Web Experience & What we deliver */}
                    <div className='row py-5'>
                        <div className="col-lg-8 lh-lg">
                            <h2 className='fw-bold heading-color'>Powering Your Web Experience</h2>
                            <p>At Peerlogics we specialize in creating visually appealing, high-performance websites that drive business growth.
                                Our team focuses on crafting responsive, scalable, and secure websites tailored to meet your unique needs.
                                Whether you're looking for a simple portfolio or a dynamic e-commerce platform, we ensure seamless user experience,
                                optimized performance, and modern design trends to enhance your digital presence.</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="card servicedata-cards" style={{ width: '25rem' }}>
                                <h5 className="card-title fw-bold p-3 text-center">What We Deliver</h5>
                                <ul className='list-style-none list-bullets p-0 text-center'>
                                    <li className='border-bottom p-2 fw-bold'>Cutting-edge technology implementation</li>
                                    <li className='border-bottom p-2 fw-bold'>Conversion-focused layouts and UI</li>
                                    <li className='p-2 fw-bold'>Full-stack development for end-to-end solutions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className='row mt-5'>
                        <div className="col-lg-9 ">
                            <h4 className='fw-bold heading-color mb-4'>Why Choose Us?</h4>
                            <ul className='p-0'>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Custom Solutions:</span>Tailored websites to suit your business requirements.
                                </li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Responsive Design:</span>Optimized for all devices, ensuring seamless access across platforms.</li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>SEO-Friendly:</span>Built with best practices for higher visibility on search engines.</li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Performance Focused:</span>Fast loading times and smooth navigation for enhanced user engagement.</li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Ongoing Support:</span>Reliable maintenance and support to keep your website updated and secure.</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <img src={billing} className='billing-img rounded' />
                        </div>
                    </div>
                    <p className='my-5 py-3 lh-lg'>With Peerlogics, you’re choosing a partner committed to your digital success. Let us help you build a website
                        that not only looks great but also drives results for your business.</p>
                </div>


                <div className='my-5'>
                    <GetInTouch />
                </div>
                <div>
                    <Testimonials />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>

    )
}

export default Web
