import React from 'react'
import './Contact.css'
// Icons
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const Contact = () => {
    return (
        <>
            <div className='bg-black'>
                <Navbar />
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-5'>
                        <p className='get-started-text mb-0'>GET STARTED</p>
                        <h1>Contact Us</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book.</p>
                        <div className='d-flex flex-md-column gap-3'>
                            <div className='d-flex align-items-center gap-3 contact-detail-bg'>
                                <IoLocationSharp className='contact-page-icons' />
                                <div>
                                    <h6 className='mb-0'>Our Head Office</h6>
                                    <p className='mb-0'>35-C Empress Road Lahore</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-3 contact-detail-bg'>
                                <IoIosMail className='contact-page-icons' />
                                <div>
                                    <h6 className='mb-0'>Mail us for more information</h6>
                                    <p className='mb-0'>info@peerlogics.com.pk</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-3 contact-detail-bg'>
                                <FaPhoneAlt className="contact-page-icons" />
                                <div>
                                    <h6 className='mb-0'>Mail us for more information</h6>
                                    <p className='mb-0'>info@peerlogics.com.pk</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7 d-flex justify-content-center'>
                        <div className='contact-box d-flex flex-column gap-4'>
                            <div>
                            <h5 className='fw-bold'>Call To <span className='action-text'>Action</span></h5>
                            <p>So if you're looking to get a little slogan inspiration of your own,</p>
                            </div>
                            <div className='d-flex gap-5'>
                                <div className='d-flex flex-column'>
                                    <label>Name:</label>
                                    <input type="text" className='input-field' placeholder='Type your name...' />
                                </div>
                                <div className='d-flex flex-column'>
                                    <label>Phone:</label>
                                    <input type="tel" className='input-field' placeholder='Type your phone...' />
                                </div>
                            </div>
                            <div className='d-flex flex-column'>
                                <label>Email:</label>
                                <input type="email" className='input-field' placeholder='Type your email...' />
                            </div>
                            <div className='d-flex flex-column'>
                                <label>Message:</label>
                                <textarea type="text" className='input-field' placeholder='Type your message...' />
                            </div>
                            <div className='text-center'>
                                <button className='submit-btn'>Submit Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <Footer />
            </div>
        </>
    )
}

export default Contact
