import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
const Home = () => {
    return (
        <>
            <div className='main-section'>
                <Navbar />
                <div className='container main-headline-section'>
                    <h1 className='text-white'><span className='headline'>Innovative Solutions</span><br />for Your Business <span className='headline'>Needs.</span></h1>
                    <p className='text-white'>Innovative Solutions for Your Business Needs.</p>
                    <button className='learn-btn'>Learn More</button>
                </div>
            </div>
            {/* ABout */}
            <section className=' py-5 about-section'>
                <div className='container'>
                    <div className='row p-3'>
                        <div className="col-sm-5 d-flex justify-content-center flex-column align-items-center">
                            <p className='about-text'>ABOUT US</p>
                            <h3>How We Work</h3>
                        </div>
                        <div className="col-sm-7">
                            <p className='text-center text-sm-start'>At PeerLogics, we are dedicated to delivering exceptional technology solutions tailored to your business needs.
                                With years of industry experience, our team of experts provides innovative and reliable services that drive success.
                            </p>
                            <div className='text-center text-sm-start'>
                                <button className='read-btn'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* Services */}
            <section>

            </section>
        </>

    )
}

export default Home