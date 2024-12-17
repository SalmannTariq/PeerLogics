import React from 'react'
import Navbar from '../Navbar/Navbar'
import './servicesData.css'
import { Link } from 'react-router-dom'
import { FaCheckCircle } from "react-icons/fa";
import web from '../assests/web-serviceData.jpg'
import GetInTouch from '../GetInTouch/GetInTouch';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';
const Web = () => {
    return (
        <>
            <div className='bg-black'>
                <Navbar />
            </div>
            <div>
                <div className='servicename-section d-flex flex-column justify-content-center align-items-center'>
                    <h1 className='text-white our-services-text'>Website Development</h1>
                    <p className='web'><Link className='text-decoration-none text-white' to="/home">Home</Link><span className='text-white'> &gt; </span> Web Development</p>
                </div>
                <div className='container'>
                    <div className='text-center py-5'>
                        <img src={web} width={800} height={600} />
                    </div>
                        <article className='py-5 lh-lg'>
                            <div>
                            <h2 className='fw-bold heading-color'> Powering Your Web Experience</h2>
                            <p>At Peerlogics we specialize in creating visually appealing, high-performance websites that drive business growth.
                                Our team focuses on crafting responsive, scalable, and secure websites tailored to meet your unique needs.
                                Whether you're looking for a simple portfolio or a dynamic e-commerce platform, we ensure seamless user experience,
                                optimized performance, and modern design trends to enhance your digital presence.</p>
                            <h4 className='fw-bold heading-color'>Why Choose Us?</h4>
                            <div>

                            </div>
                            </div>
                            <ul className='p-0'>
                                <li className='list-bullets d-flex align-items-center gap-3'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Custom Solutions:</span>  Tailored websites to suit your business requirements.
                                </li>
                                <li className='list-bullets d-flex align-items-center gap-3'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Responsive Design:</span>  Optimized for all devices, ensuring seamless access across platforms.</li>
                                <li className='list-bullets d-flex align-items-center gap-3'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>SEO-Friendly:</span>  Built with best practices for higher visibility on search engines.</li>
                                <li className='list-bullets d-flex align-items-center gap-3'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Performance Focused:</span>  Fast loading times and smooth navigation for enhanced user engagement.</li>
                                <li className='list-bullets d-flex align-items-center gap-3'>
                                    <span><FaCheckCircle className='tick-icon' /></span>
                                    <span className='fw-bold'>Ongoing Support:</span>  Reliable maintenance and support to keep your website updated and secure.</li>
                            </ul>
                            <p>With Peerlogics, you’re choosing a partner committed to your digital success. Let us help you build a website
                                that not only looks great but also drives results for your business.</p>
                        </article>
                </div>


                <div>
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
