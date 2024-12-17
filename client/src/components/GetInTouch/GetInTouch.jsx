import React from 'react'
import talkImg from '../assests/news-leter.png'
// Css is in Home.css
const GetInTouch = () => {
  return (
    <div className='container'>
      <div className='bg-black d-flex justify-content-between rounded'>
        <div className='px-5 pt-3 pb-0'>
             <h1 className='text-white fw-bold get-text'>Let's Connect to Build<br /><span className='action-text'> Something Great</span></h1>
             <p className='text-white'>Whether you're ready to start or just exploring, we're here to help.<br />Reach out and take the first</p>
             <button className='talk-btn'>Lets talk</button>
         </div>
         <div className=''>
                 <img src={talkImg} className='talk-img' alt='' />
            </div>
      </div>
    </div>
    //     <section className='bg-black'>
    //     <div className='d-flex flex-md-row flex-column gap-3 gap-md-0 justify-content-sm-between justify-content-center align-items-center'>
    //         <div className='px-5 mx-4'>
    //             <h1 className='text-white fw-bold get-text'>Let's Connect to Build<br/><span className='action-text'> Something Great</span></h1>
    //             <p className='text-white'>Whether you're ready to start or just exploring, we're here to help.<br/>Reach out and take the first</p>
    //             <button className='talk-btn'>Lets talk</button>
    //         </div>
    //         <div className=''>
    //             <img src={talkImg} className='talk-img' alt='' />
    //         </div>
    //     </div>
    // </section>
  )
}

export default GetInTouch
