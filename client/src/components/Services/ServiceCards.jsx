import React from 'react';
import './Services.css';
// icons
import { FaArrowRight } from "react-icons/fa";
// images
import webDevelopment from '../assests/webdevelopment.png';
import UiUx from '../assests/UiUx.png'
import MedicalBilling from '../assests/MedicalBilling.png'
import ECommerce from '../assests/online-shop.png'
import SoftwareDev from '../assests/software-development.png'
import MedicalHr from '../assests/Medical-HR.png'

const ServiceCards = () => {
    return (
        <div className='container'>
            <div className='row my-5'>
                {/* Web Development */}
                <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center justify-content-lg-start">
                    <div className="card service-card" style={{ width: '22rem', height: " 300px" }}>
                        <div className="position-absolute d-flex flex-column gap-2 ">
                            <div className=' '>
                                <img src={webDevelopment} alt='web-development' className='icon' />
                            </div>
                            <p className='m-0'>At PeerLogics, we are dedicated to delivering exceptional technology solutions tailored to your business needs. With years of industry experience, our team of experts provides innovative and reliable services that drive success.</p>
                            <h4>Website Development</h4>
                            <div>
                                <a className='d-flex align-items-center gap-2 text-decoration-none' href="#">
                                    <p className='mb-0 more-about-text'>More About</p>
                                    <FaArrowRight className='arrow-icon' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* UI/UX development */}
                <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center justify-content-lg-start mt-5 mt-sm-0">
                    <div className="card service-card" style={{ width: '22rem', height: " 300px" }}>
                        <div className="position-absolute d-flex flex-column gap-2 ">
                            <div className=' '>
                                <img src={UiUx} className='icon' />
                            </div>
                            <p className='m-0'>At PeerLogics, we are dedicated to delivering exceptional technology solutions tailored to your business needs. With years of industry experience, our team of experts provides innovative and reliable services that drive success.</p>
                            <h4>UI / UX</h4>
                            <div>
                                <a className='d-flex align-items-center gap-2 text-decoration-none' href="#">
                                <p className='mb-0 more-about-text'>More About</p>
                                <FaArrowRight className='arrow-icon' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Medical Billing */}
                <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center justify-content-lg-start mt-5 mt-lg-0">
                    <div className="card service-card" style={{ width: '22rem', height: " 300px" }}>
                        <div className="position-absolute d-flex flex-column gap-2 ">
                            <div className=' '>
                                <img src={MedicalBilling} className='icon' />
                            </div>
                            <p className='m-0'>At PeerLogics, we are dedicated to delivering exceptional technology solutions tailored to your business needs. With years of industry experience, our team of experts provides innovative and reliable services that drive success.</p>
                            <h4>Medical Billing</h4>
                            <div>
                                <a className='d-flex align-items-center gap-2 text-decoration-none' href="#">
                                <p className='mb-0 more-about-text'>More About</p>
                                <FaArrowRight className='arrow-icon' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* E-Commerce Development */}
                <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center justify-content-lg-start mt-5">
                    <div className="card service-card" style={{ width: '22rem', height: " 300px" }}>
                        <div className="position-absolute d-flex flex-column gap-2 ">
                            <div className=' '>
                                <img src={ECommerce} className='icon' />
                            </div>
                            <p className='m-0'>At PeerLogics, we are dedicated to delivering exceptional technology solutions tailored to your business needs. With years of industry experience, our team of experts provides innovative and reliable services that drive success.</p>
                            <h4>E-Commerce Develop</h4>
                            <div >
                                <a className='d-flex align-items-center gap-2 text-decoration-none' href="#">
                                <p className='mb-0 more-about-text'>More About</p>
                                <FaArrowRight className='arrow-icon' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Software development */}
                <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center justify-content-lg-start mt-5">
                    <div className="card service-card" style={{ width: '22rem', height: " 300px" }}>
                        <div className="position-absolute d-flex flex-column gap-2 ">
                            <div className=' '>
                                <img src={SoftwareDev} className='icon' />
                            </div>
                            <p className='m-0'>At PeerLogics, we are dedicated to delivering exceptional technology solutions tailored to your business needs. With years of industry experience, our team of experts provides innovative and reliable services that drive success.</p>
                            <h4>Software Development</h4>
                            <div >
                                <a className='d-flex align-items-center gap-2 text-decoration-none' href="#">
                                <p className='mb-0 more-about-text'>More About</p>
                                <FaArrowRight className='arrow-icon' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Medical HR Management */}
                <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center justify-content-lg-start mt-5">
                    <div className="card service-card" style={{ width: '22rem', height: " 300px" }}>
                        <div className="position-absolute d-flex flex-column gap-2">
                            <div className=' '>
                                <img src={MedicalHr} className='icon' />
                            </div>
                            <p className='m-0'>At PeerLogics, we are dedicated to delivering exceptional technology solutions tailored to your business needs. With years of industry experience, our team of experts provides innovative and reliable services that drive success.</p>
                            <h4>Medical HR Management</h4>
                            <div >
                                <a className='d-flex align-items-center gap-2 text-decoration-none' href="#">
                                <p className='mb-0 more-about-text'>More About</p>
                                <FaArrowRight className='arrow-icon' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceCards;
