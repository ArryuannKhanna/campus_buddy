import React from 'react'
import './Footer.css'
import { FaInstagram,FaFacebook,FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="Footer">
        <div className="first-footer"><p>email: campusbuddy@gmail.com</p></div>
        <div className="socials">follow us: 
        <FaFacebook className='icosn' style={{marginLeft:'5px',marginRight:'5px'}}/>
        <FaInstagram className='icosn' style={{marginLeft:'5px',marginRight:'5px'}}/>
        <FaTwitter className='icosn' style={{marginLeft:'5px',marginRight:'5px'}}/>
        </div>
    </div>
  )
}

export default Footer