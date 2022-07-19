import React from 'react';
import "./Footer.css"
import {FaFacebook} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"

export default function Footer() {
  return (
    <div className='footer'>
      <h1>Let’s Get in Touch !</h1>
      <p className='footer-first-p'>Have any questions about our products? Looking to partner with us or inquire about a custom loral arrangament? Click the link below and shoot us an email!</p>
      <div className="footer-email">
        <p>SUNDAYANDSAGECO@GMAIL.COM</p></div>
      <p className='footer-second-p'>We look forward to working with you and answering any questions you have!</p>
      <h2>FOLLOW US:</h2>
      <div className="footer-icons-div">
        <FaFacebook className='footer-icons'/>
        <FaInstagram className='footer-icons'/>
        <FaTwitter className='footer-icons' />
      </div>
    </div>
  );
}
