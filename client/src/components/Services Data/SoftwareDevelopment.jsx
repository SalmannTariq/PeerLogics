import React from 'react'
import Navbar from '../Navbar/Navbar'
import './servicesData.css'
import { Link } from 'react-router-dom'
import { FaCheckCircle } from "react-icons/fa";
import softwareDev from '../assests/Software-Development-2.png';
import billing from '../assests/Billing-2.jpg';
import GetInTouch from '../GetInTouch/GetInTouch';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';
const SoftwareDevelopment = () => {
    return (
        <>
            <div>
                <div className='servicename-section'>
                    <Navbar />
                    <div className=' d-flex flex-column justify-content-center align-items-center'>
                        <h1 className='text-white our-services-text'>Software Development</h1>
                        <p className='web'><Link className='text-decoration-none text-white' to="/home">Home</Link><span className='text-white'> &gt; </span> Software Development</p>
                    </div>
                </div>
                {/*  */}
                <div className='container'>
                    <div className='text-center py-5'>
                        <img src={softwareDev} className='rounded servicedata-img' />
                    </div>
                    {/* Powering Your Web Experience & What we deliver */}
                    <div className='row py-5'>
                        <div className="col-lg-8 lh-lg">
                            <h2 className='fw-bold heading-color'>Empowering Businesses with Innovative Software</h2>
                            <p>PeerLogics delivers cutting-edge Software Development solutions tailored to address your business challenges and boost efficiency. From concept to deployment, we create robust, scalable, and secure software applications.</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="card servicedata-cards" style={{ width: '25rem' }}>
                                <h5 className="card-title fw-bold p-3 text-center">What We Deliver</h5>
                                <ul className='list-style-none list-bullets p-0 text-center'>
                                    <li className='border-bottom p-2 fw-bold'>Web and desktop applications</li>
                                    <li className='border-bottom p-2 fw-bold'>Custom software development</li>
                                    <li className='p-2 fw-bold'>API integrations and automation</li>
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
                                    <span className='fw-bold'>Customized Development: </span>Solutions that align with your goals and workflows.
                                </li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Agile Methodology: </span>Flexible processes for faster delivery and quality assurance.
                                </li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Latest Technology: </span>Expertise in Python, Java, .NET, React, and other modern frameworks.
                                </li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Scalable Solutions: </span>Software that grows with your business needs.
                                </li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Continuous Support: </span>Post-launch maintenance and optimization.
                                </li>

                            </ul>
                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <img src={billing} className='billing-img rounded' />
                        </div>
                    </div>
                    <p className='my-5 py-3 lh-lg'>Our focus is to streamline operations with innovative and reliable software solutions.</p>
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

export default SoftwareDevelopment
