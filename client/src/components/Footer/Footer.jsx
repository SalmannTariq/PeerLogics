import React from 'react'
import './Footer.css'
// icons
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
// Logo in Footer
import PeerLogics from '../assests/peerlogics.png';
const Footer = () => {
  return (
    <>
      <section className='bg-black py-5'>
                <div className='container'>
                    <div className=" d-flex justify-content-between">
                        <div>
                            <img src={PeerLogics} className='footer-logo' alt='' />
                        </div>
                        <div className='social-icons'>
                            <FaFacebookF  className='soc-icon'/>
                            <FaXTwitter className='soc-icon'/>
                            <FaLinkedinIn className='soc-icon'/>
                            <FaInstagram className='soc-icon'/>
                        </div>
                    </div>
                    <hr className='footer-line' />
                    <div className='text-center'>
                        <p className='text-white'>Copyright &#169; 2024 PeerLogics All Rights Reserved</p>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Footer
