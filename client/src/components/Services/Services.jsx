import React from 'react'
import './Services.css'
import Navbar from '../Navbar/Navbar'
import ServiceCards from './ServiceCards'
import Footer from '../Footer/Footer'
import GetInTouch from '../GetInTouch/GetInTouch'

const Services = () => {
    return (
        <>
            <div className='service-section'>
                <Navbar />
                <div className='services'>
                    <h6 className='expertise-text'>Expertise</h6>
                    <h1 className='our-services-text text-white'>Our Services</h1>
                </div>
            </div>
            <div>
                <ServiceCards />
            </div>
            <div className='my-5 py-5'>
                <GetInTouch />
            </div>
            <div>
                <Footer />
            </div>
        </>

    )
}

export default Services
