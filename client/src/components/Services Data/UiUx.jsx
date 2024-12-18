import React from 'react'
import Navbar from '../Navbar/Navbar'
import './servicesData.css'
import { Link } from 'react-router-dom'
import { FaCheckCircle } from "react-icons/fa";
import UIUX from '../assests/UI-UX.png'
import billing from '../assests/Billing-2.jpg'
import GetInTouch from '../GetInTouch/GetInTouch';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';
const UiUx = () => {
    return (
        <>
            <div>
                <div className='servicename-section'>
                    <Navbar />
                    <div className='service-category d-flex flex-column justify-content-center align-items-center'>
                        <h1 className='text-white our-services-text'>UI / UX</h1>
                        <p className='web'><Link className='text-decoration-none text-white' to="/home">Home</Link><span className='text-white'> &gt; </span> UI/UX</p>
                    </div>
                </div>
                {/*  */}
                <div className='container'>
                    <div className='text-center py-5'>
                        <img src={UIUX} className='rounded servicedata-img' />
                    </div>
                    {/* Powering Your Web Experience & What we deliver */}
                    <div className='row py-5'>
                        <div className="col-lg-8 lh-lg">
                            <h2 className='fw-bold heading-color'>Crafting Engaging User Experiences</h2>
                            <p>In today's digital landscape, user experience (UX) and user interface (UI) design are critical to engaging and retaining customers. At PeerLogics, we create intuitive, visually appealing designs that prioritize usability and functionality.</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="card servicedata-cards" style={{ width: '25rem' }}>
                                <h5 className="card-title fw-bold p-3 text-center">What We Deliver</h5>
                                <ul className='list-style-none list-bullets p-0 text-center'>
                                    <li className='border-bottom p-2 fw-bold'>Wireframes and prototypes</li>
                                    <li className='border-bottom p-2 fw-bold'>High-fidelity UI designs</li>
                                    <li className='p-2 fw-bold'>UX research and testing</li>
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
                                    <span className='fw-bold'>User-Centric Approach: </span>Designs are based on understanding user behavior and needs.
                                </li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Creative & Functional: </span>A perfect blend of creativity and seamless navigation.</li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Prototyping & Testing: </span>Iterative design processes to ensure efficiency and satisfaction.</li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Responsive Design: </span>Consistent user experience across all devices.</li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Modern Tools: </span>Use of tools like Figma, Adobe XD, and InVision for precision and clarity.</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <img src={billing} className='billing-img rounded' />
                        </div>
                    </div>
                    <p className='my-5 py-3 lh-lg'>We design experiences that leave a lasting impression while driving conversions for your business.</p>
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

export default UiUx
