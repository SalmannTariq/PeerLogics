import React from 'react'
import Comments from '../Comments/Comments'
// CSS is in home.css
const Testimonials = () => {
  return (
    <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-flex flex-column justify-content-center align-items-center align-items-md-start">
                            <p className='happy-text'>HAPPY CLIENT</p>
                            <h1 className='testimonial-text fw-bold'>Our Testimonial</h1>
                            <p className='text-center text-md-start'>We pride ourselves on delivering exceptional solutions that drive results. Here’s what our happy clients have to say about their experience with PeerLogics
                            </p>
                        </div>
                        <div className="col-md-7">
                            <Comments />
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Testimonials
