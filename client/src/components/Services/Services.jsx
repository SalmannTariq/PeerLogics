import React from 'react'
import './Services.css'
import Navbar from '../Navbar/Navbar'
// icons
import { CgWebsite } from "react-icons/cg";
import { FaBezierCurve } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaDesktop } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
const Services = () => {
    return (
        <>
            <div className='bg-black'>
                <Navbar />
                <div className='services'>
                    <h6 className='expertise-text'>Expertise</h6>
                    <h1 className='our-services-text text-white'>Our Services</h1>
                </div>
            </div>
            <div className='container'>
            <div className='row my-5'>
                {/* Web Development */}
                <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
                    <div className="card d-flex align-items-center justify-content-center gap-4" style={{ width: '21rem', height:"250px" }}>
                        <div className='icon-section'>
                            <CgWebsite className='icon' />
                        </div>
                        <h4>Website Development</h4>
                    </div>
                </div>
                {/* UI/UX development */}
                <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mt-5 mt-md-0">
                    <div className="card d-flex align-items-center justify-content-center gap-4" style={{ width: '21rem',height:"250px" }}>
                        <div className='icon-section'>
                            <FaBezierCurve className='icon' />
                        </div>
                        <h4>UI / UX</h4>
                    </div>
                </div>
                {/* App development */}
                <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mt-5 mt-lg-0">
                    <div className="card d-flex align-items-center justify-content-center gap-4" style={{ width: '21rem',height:"250px" }}>
                        <div className='icon-section'>
                            <CiMobile3 className='icon' />
                        </div>
                        <h4>App Development</h4>
                    </div>
                </div>
                {/* E-Commerce Development */}
                <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mt-5">
                    <div className="card d-flex align-items-center justify-content-center gap-4" style={{ width: '21rem', height:"250px" }}>
                        <div className='icon-section'>
                            <FaCartShopping className='icon' />
                        </div>
                        <h4>E-Commerce Develop</h4>
                    </div>
                </div>
                {/* Software development */}
                <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mt-5">
                    <div className="card d-flex align-items-center justify-content-center gap-4" style={{ width: '21rem',height:"250px" }}>
                        <div className='icon-section'>
                            <FaDesktop className='icon' />
                        </div>
                        <h4>Software development</h4>
                    </div>
                </div>
                {/* Digital markeitng + SEO */}
                <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mt-5">
                    <div className="card d-flex align-items-center justify-content-center gap-4" style={{ width: '21rem',height:"250px" }}>
                        <div className='icon-section'>
                            <HiSpeakerphone className='icon' />
                        </div>
                        <h4>Digital Markeitng + SEO</h4>
                    </div>
                </div>
            </div>
            </div>

        </>

    )
}

export default Services
