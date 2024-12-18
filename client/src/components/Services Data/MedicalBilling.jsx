import React from 'react'
import Navbar from '../Navbar/Navbar'
import './servicesData.css'
import { Link } from 'react-router-dom'
import { FaCheckCircle } from "react-icons/fa";
import medicalBilling from '../assests/medical-billing.jpg'
import billing from '../assests/Billing-2.jpg'
import GetInTouch from '../GetInTouch/GetInTouch';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';
const MedicalBilling = () => {
    return (
        <>
            <div>
            <div className='servicename-section'>
                    <Navbar />
                    <div className='service-category d-flex flex-column justify-content-center align-items-center'>
                        <h1 className='text-white our-services-text'>Medical Billing</h1>
                        <p className='web'><Link className='text-decoration-none text-white' to="/home">Home</Link><span className='text-white'> &gt; </span> Medical Billing</p>
                    </div>
                </div>
                {/*  */}
                <div className='container'>
                    <div className='text-center py-5'>
                        <img src={medicalBilling} className='rounded servicedata-img' />
                    </div>
                    {/* Powering Your Web Experience & What we deliver */}
                    <div className='row py-5'>
                        <div className="col-lg-8 lh-lg">
                            <h2 className='fw-bold heading-color'>Simplifying Healthcare Billing Solutions</h2>
                            <p>At PeerLogics, we offer streamlined Medical Billing solutions that reduce errors, improve cash flow, and maximize efficiency. With a focus on accuracy and compliance, we ensure that healthcare providers can focus on patient care while we handle the complexities of billing.</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="card servicedata-cards" style={{ width: '25rem' }}>
                                <h5 className="card-title fw-bold p-3 text-center">What We Deliver</h5>
                                <ul className='list-style-none list-bullets p-0 text-center'>
                                    <li className='border-bottom p-2 fw-bold'>Claim submission and follow-ups</li>
                                    <li className='border-bottom p-2 fw-bold'>Real-time billing and reporting</li>
                                    <li className='p-2 fw-bold'>Coding compliance and audit support</li>
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
                                    <span className='fw-bold'>Accuracy Guaranteed: </span>Minimize errors with reliable billing processes.
                                </li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>HIPAA Compliance: </span>Secure handling of patient data and confidentiality.
                                </li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>End-to-End Solutions: </span>From claim submissions to reimbursement tracking.
                                </li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Faster Reimbursements: </span>Optimized workflows for reduced turnaround time.
                                </li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>24/7 Support: </span>Dedicated team to address queries and issues.
                                </li>

                            </ul>
                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <img src={billing} className='billing-img rounded' />
                        </div>
                    </div>
                    <p className='my-5 py-3 lh-lg'>Our goal is to simplify the billing process so healthcare providers can focus on delivering quality care.</p>
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

export default MedicalBilling
