import React from 'react'
import talkImg from '../assests/news-leter.png'
// Css is in Home.css
const GetInTouch = () => {
  return (
    <div className='container'>
      <div className="row bg-black" style={{ borderRadius: '20px' }}>
        <div className="col-lg-7 py-3 px-5 d-flex flex-column justify-content-center">
          <h1 className='text-white fw-bold get-text'>Let's Connect to Build<br /><span className='action-text'> Something Great</span></h1>
          <p className='text-white'>Whether you're ready to start or just exploring, we're here to help.<br />Reach out and take the first</p>
          <div>
            <button className='talk-btn'>Lets talk</button>
          </div>
        </div>
        <div className="col-lg-5  p-0">
          <img src={talkImg} className='w-100 img-fluid' alt='' />
        </div>
      </div>
    </div>
  )
}

export default GetInTouch
