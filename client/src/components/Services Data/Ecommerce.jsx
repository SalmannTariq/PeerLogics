import React from 'react'
import Navbar from '../Navbar/Navbar'
import './servicesData.css'
import { Link } from 'react-router-dom'
import { FaCheckCircle } from "react-icons/fa";
import Ecom from '../assests/Ecom.jpeg';
import billing from '../assests/Billing-2.jpg';
import GetInTouch from '../GetInTouch/GetInTouch';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';
const Ecommerce = () => {
    return (
        <>
            <div>
                <div className='servicename-section'>
                    <Navbar />
                    <div className='service-category d-flex flex-column justify-content-center align-items-center'>
                        <h1 className='text-white our-services-text'>E-Commerce Development</h1>
                        <p className='web'><Link className='text-decoration-none text-white' to="/home">Home</Link><span className='text-white'> &gt; </span> E-Commerce</p>
                    </div>
                </div>
                {/*  */}
                <div className='container'>
                    <div className='text-center py-5'>
                        <img src={Ecom} className='rounded servicedata-img' />
                    </div>
                    {/* Powering Your Web Experience & What we deliver */}
                    <div className='row py-5'>
                        <div className="col-lg-8 lh-lg">
                            <h2 className='fw-bold heading-color'>Building Your Online Success Story</h2>
                            <p>With the rise of online businesses, PeerLogics offers tailored E-Commerce Development solutions that drive sales, improve user experiences, and scale seamlessly.</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="card servicedata-cards" style={{ width: '25rem' }}>
                                <h5 className="card-title fw-bold p-3 text-center">What We Deliver</h5>
                                <ul className='list-style-none list-bullets p-0 text-center'>
                                    <li className='border-bottom p-2 fw-bold'>Full-fledged e-commerce platforms (Shopify, WooCommerce, Magento)</li>
                                    <li className='border-bottom p-2 fw-bold'>UI/UX design for online stores</li>
                                    <li className='p-2 fw-bold'>Payment and shipping gateway integration</li>
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
                                    <span className='fw-bold'>Custom Solutions: </span>E-commerce stores tailored to your product and brand vision.
                                </li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Secure Platforms: </span>Implementation of robust security measures for safe transactions.
                                </li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Seamless Integrations: </span>Payment gateways, shipping modules, and inventory management.
                                </li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Mobile-Friendly Design: </span>Optimized for all devices to reach a broader audience.
                                </li>
                                <li className='list-bullets d-flex align-items-center gap-1 lh-lg'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Data Analytics: </span>Insights and reports to monitor performance and sales.
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <img src={billing} className='billing-img rounded' />
                        </div>
                    </div>
                    <p className='my-5 py-3 lh-lg'>Let PeerLogics help you transform visitors into loyal customers with scalable e-commerce solutions.</p>
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

export default Ecommerce
