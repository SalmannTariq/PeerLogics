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
                            <h1 className='testimonial-text'>Our Testimonial</h1>
                            <p className='text-center text-md-start'>So if you're looking to get a little slogan inspiration of your own,
                                That's So if you'to get are looking to get a little slogan inspiration of your own,
                                take a look at some of your favourite
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
