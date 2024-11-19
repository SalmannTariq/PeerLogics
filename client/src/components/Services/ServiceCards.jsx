import React from 'react';
import './Services.css';
// icons
import webDevelopment from '../assets/webdevelopment.png';

// import { CgWebsite } from "react-icons/cg";
import { FaBezierCurve } from "react-icons/fa";
import { FaBookMedical } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaDesktop } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";

const ServiceCards = () => {
    return (
        <div className='container'>
            <div className='row my-5'>
                {/* Web Development */}
                <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center justify-content-lg-start">
                    <div className="card service-card" style={{ width: '22rem', height: "250px" }}>
                        <div className="position-absolute d-flex flex-column gap-4 align-items-center">
                            <div className='icon-section'>
                                <img src={webDevelopment} alt='web-development' className='icon' />
                                {/* <CgWebsite className='icon' /> */}
                            </div>
                            <h4>Website Development</h4>
                        </div>
                    </div>
                </div>
                {/* UI/UX development */}
                <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center justify-content-lg-start mt-5 mt-sm-0">
                    <div className="card service-card" style={{ width: '22rem', height: "250px" }}>
                        <div className="position-absolute d-flex flex-column gap-4 align-items-center">
                            <div className='icon-section'>
                                <FaBezierCurve className='icon' />
                            </div>
                            <h4>UI / UX</h4>
                        </div>
                    </div>
                </div>
                {/* Medical Billing */}
                <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center justify-content-lg-start mt-5 mt-lg-0">
                    <div className="card service-card" style={{ width: '22rem', height: "250px" }}>
                        <div className="position-absolute d-flex flex-column gap-4 align-items-center">
                            <div className='icon-section'>
                                <FaBookMedical className='icon' />
                            </div>
                            <h4>Medical Billing</h4>
                        </div>
                    </div>
                </div>
                {/* E-Commerce Development */}
                <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center justify-content-lg-start mt-5">
                    <div className="card service-card" style={{ width: '22rem', height: "250px" }}>
                        <div className="position-absolute d-flex flex-column gap-4 align-items-center">
                            <div className='icon-section'>
                                <FaCartShopping className='icon' />
                            </div>
                            <h4>E-Commerce Develop</h4>
                        </div>
                    </div>
                </div>
                {/* Software development */}
                <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center justify-content-lg-start mt-5">
                    <div className="card service-card" style={{ width: '22rem', height: "250px" }}>
                        <div className="position-absolute d-flex flex-column gap-4 align-items-center">
                            <div className='icon-section'>
                                <FaDesktop className='icon' />
                            </div>
                            <h4>Software Development</h4>
                        </div>
                    </div>
                </div>
                {/* Medical HR Management */}
                <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center justify-content-lg-start mt-5">
                    <div className="card service-card" style={{ width: '22rem', height: "250px" }}>
                        <div className="position-absolute d-flex flex-column gap-4 align-items-center">
                            <div className='icon-section'>
                                <HiSpeakerphone className='icon' />
                            </div>
                            <h4>Medical HR Management</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceCards;
