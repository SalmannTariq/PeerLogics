import React, { useState } from 'react'
import './Services.css'
// icons
import { CgWebsite } from "react-icons/cg";
import { FaBezierCurve } from "react-icons/fa";
import { FaBookMedical } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaDesktop } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
const ServiceCards = () => {
    const [hover, setHover] = useState("");
    return (
        <div className='container'>
            <div className='row my-5'>
                {/* Web Development */}
                <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center justify-content-lg-start">
                    <div className={`card service-card d-flex ${hover === "" ? `align-items-center` : 'align-items-start'} justify-content-center gap-4`} onMouseEnter={() => setHover("Web")} onMouseLeave={() => setHover("")} style={{ width: '22rem', height: "250px" }}>
                        {hover==="Web" ?
                            <div className='position-absolute d-flex flex-column gap-3 pe-2'>
                                <div className='icon-section-hover'>
                                    <CgWebsite className='icon-hover' />
                                </div>
                                <p className='hovered-text'>Designing user-friendly interfaces that drive engagement and satisfaction.</p>
                                <div>
                                    <button className='read-btn-hover'>Read more...</button>
                                </div>
                            </div>
                            :
                            <div>
                                <div className='icon-section'>
                                    <CgWebsite className='icon' />
                                </div>
                                <h4>Website Development</h4>
                            </div>
                        }
                    </div>
                </div>
                {/* UI/UX development */}
                <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center justify-content-lg-start mt-5 mt-sm-0">
                <div className={`card service-card d-flex ${hover==="UI/UX" ? `align-items-start` : 'align-items-center'} justify-content-center gap-4`} onMouseEnter={() => setHover("UI/UX")} onMouseLeave={() => setHover("")} style={{ width: '22rem', height: "250px" }}>
                        {hover==="UI/UX" ?

                            <div className='position-absolute d-flex flex-column gap-3'>
                                <div className='icon-section-hover'>
                                    <FaBezierCurve className='icon-hover' />
                                </div>
                                <p className='hovered-text'>Crafting modern, responsive websites to enhance your online presence.</p>
                                <div>
                                    <button className='read-btn-hover'>Read more...</button>
                                </div>
                            </div>
                            :
                            <div>
                                <div className='icon-section'>
                                    <FaBezierCurve className='icon' />
                                </div>
                                <h4>UI / UX</h4>
                            </div>
                        }
                    </div>
                </div>
                {/* Medical Billing */}
                <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center justify-content-lg-start mt-5 mt-lg-0">
                    <div className="card service-card d-flex align-items-center justify-content-center gap-4" style={{ width: '22rem', height: "250px" }}>
                        <div className='icon-section'>
                            <FaBookMedical className='icon' />
                        </div>
                        <h4>Medical Billing</h4>
                    </div>
                </div>
                {/* E-Commerce Development */}
                <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center justify-content-lg-start mt-5">
                    <div className="card service-card d-flex align-items-center justify-content-center gap-4" style={{ width: '22rem', height: "250px" }}>
                        <div className='icon-section'>
                            <FaCartShopping className='icon' />
                        </div>
                        <h4>E-Commerce Develop</h4>
                    </div>
                </div>
                {/* Software development */}
                <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center justify-content-lg-start mt-5">
                    <div className="card service-card d-flex align-items-center justify-content-center gap-4" style={{ width: '22rem', height: "250px" }}>
                        <div className='icon-section'>
                            <FaDesktop className='icon' />
                        </div>
                        <h4>Software development</h4>
                    </div>
                </div>
                {/* Medical HR Management */}
                <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center justify-content-lg-start mt-5">
                    <div className="card service-card d-flex align-items-center justify-content-center gap-4" style={{ width: '22rem', height: "250px" }}>
                        <div className='icon-section'>
                            <HiSpeakerphone className='icon' />
                        </div>
                        <h4>Medical HR Management</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCards
