import React from 'react'
import './Services.css'
import Navbar from '../Navbar/Navbar'
import ServiceCards from './ServiceCards'
import Footer from '../Footer/Footer'

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
            <div>
                <ServiceCards />
            </div>
            <div>
                <Footer />
            </div>
        </>

    )
}

export default Services
