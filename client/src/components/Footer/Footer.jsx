import React from 'react'
import './Footer.css'
// icons
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
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
                            <FaFacebookF />
                            <FaXTwitter />
                            <FaLinkedinIn />
                            <FaInstagram />
                        </div>
                    </div>
                    <hr className='footer-line' />
                    <div className='text-center'>
                        <p>Copyright &#169; 2024 PeerLogics All Rights Reserved</p>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Footer
