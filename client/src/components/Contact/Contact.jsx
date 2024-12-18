import React from 'react'
import './Contact.css'
// Icons
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Testimonials from '../Testimonials/Testimonials';
const Contact = () => {
    return (
        <>
            <div className='contact-section'>
            <Navbar />
                <div className='contact'>
                    <h1 className='our-services-text text-white'>Contact Us</h1>
                </div>
            </div>
            <div className='container mt-5 pt-5'>
                <div className='row'>
                    <div className='col-md-5'>
                        <p className='get-started-text mb-0'>GET STARTED</p>
                        <h1>Contact Us</h1>
                        <p className='1h-base'>We’re here to help you transform your ideas into reality! Whether you have a question about our services, need a customized solution, or just want to explore how PeerLogics can support your business, we’d love to hear from you. Reach out to us today, and let’s start building something great together. Our team is ready to provide the support and insights you need to move forward with confidence.</p>
                        <div className='d-flex flex-md-column gap-3'>
                            <div className='d-flex align-items-center gap-3 contact-detail-bg'>
                                <IoLocationSharp className='contact-page-icons' />
                                <div>
                                    <p className='mb-0'>35-C Empress Road Lahore</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-3 contact-detail-bg'>
                                <IoIosMail className='contact-page-icons' />
                                <div>
                                    <p className='mb-0'>info@peerlogics.com.pk</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-3 contact-detail-bg'>
                                <FaPhoneAlt className="contact-page-icons" />
                                <div>
                                    <p className='mb-0'>info@peerlogics.com.pk</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7 d-flex justify-content-center'>
                        <div className='contact-box d-flex flex-column gap-5'>
                            <div>
                            <h5 className='fw-bold'>Call To <span className='action-text'>Action</span></h5>
                            <p>Let's Bring Your Vision to Life – Reach Out Today!</p>
                            </div>
                            <div className='d-flex gap-2'>
                                <div className='d-flex flex-column'>
                                    <input type="text" className='input-field' placeholder='Name...' />
                                </div>
                                <div className='d-flex flex-column'>
                                    <input type="tel" className='input-field' placeholder='Phone...' />
                                </div>
                            </div>
                            <div className='d-flex flex-column'>
                                <input type="email" className='input-field' placeholder='Email...' />
                            </div>
                            <div className='d-flex flex-column'>
                                <textarea type="text" className='input-field' placeholder='Message...' />
                            </div>
                            <div className='text-center'>
                                <button className='submit-btn'>Submit Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5 pt-2'>
                <Testimonials />
            </div>
            <div className='mt-5'>
                <Footer />
            </div>
        </>
    )
}

export default Contact
