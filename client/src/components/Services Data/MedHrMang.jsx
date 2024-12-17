import React from 'react'
import Navbar from '../Navbar/Navbar'
import './servicesData.css'
import { Link } from 'react-router-dom'
import { FaCheckCircle } from "react-icons/fa";
import HR from '../assests/HR.jpg'
import billing from '../assests/Billing-2.jpg'
import GetInTouch from '../GetInTouch/GetInTouch';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';
const MedHrMang = () => {
    return (
        <>
            <div>
            <div className='servicename-section'>
                    <Navbar />
                    <div className=' d-flex flex-column justify-content-center align-items-center'>
                        <h1 className='text-white our-services-text'>Medical HR Management</h1>
                        <p className='web'><Link className='text-decoration-none text-white' to="/home">Home</Link><span className='text-white'> &gt; </span> Medical HR Management</p>
                    </div>
                </div>
                {/*  */}
                <div className='container'>
                    <div className='text-center py-5'>
                        <img src={HR} className='rounded servicedata-img' />
                    </div>
                    {/* Powering Your Web Experience & What we deliver */}
                    <div className='row py-5'>
                        <div className="col-lg-8 lh-lg">
                            <h2 className='fw-bold heading-color'>Streamlining HR for Healthcare Excellence</h2>
                            <p>At PeerLogics, we provide Medical HR Management solutions to help healthcare organizations manage their workforce efficiently. From recruitment to payroll, our solutions are tailored to simplify complex HR tasks.</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="card servicedata-cards" style={{ width: '25rem' }}>
                                <h5 className="card-title fw-bold p-3 text-center">What We Deliver</h5>
                                <ul className='list-style-none list-bullets p-0 text-center'>
                                    <li className='border-bottom p-2 fw-bold'>Recruitment and onboarding tools</li>
                                    <li className='border-bottom p-2 fw-bold'>Payroll and benefits management</li>
                                    <li className='p-2 fw-bold'>Compliance tracking and reporting</li>
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
                                    <span className='fw-bold'>Custom HR Solutions: </span>Designed to meet the specific needs of healthcare providers.
                                </li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Automated Workflows: </span>Reduce administrative burden with automated processes.
                                </li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Compliance Management: </span>Ensure adherence to healthcare industry regulations.
                                </li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Streamlined Payroll: </span>Accurate and timely payroll management.
                                </li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Real-Time Reporting: </span>Track employee performance and attendance seamlessly.
                                </li>

                            </ul>
                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <img src={billing} className='billing-img rounded' />
                        </div>
                    </div>
                    <p className='my-5 py-3 lh-lg'>We help healthcare businesses optimize HR operations to save time, reduce costs, and improve workforce productivity.</p>
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

export default MedHrMang
