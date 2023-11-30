import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import logoImage from './finalLogo.png';

export const Navbar = () => {
  return (
    <div className="Navbar-cont">
      <div className="Navbar-flex-cont">
        <div className="Navbar-logo">
          <img src={logoImage} alt="Campus Buddy Logo" />
          <h1>CampusBuddy</h1>
        </div>
        <div className="Navbar-empty-flex">

        </div>
        <div className="Navbar-contents">
          <ul>
            <li><a>Buy</a></li>
            <li>Sell</li>
            <li>Rent</li>
            <li>FAQ</li
            <li>About Us</li>
          </ul>
        </div>
       <div className="login-register"> <Link to="/login">Login/Register</Link></div>
      </div>
    </div>
  )
}

export default Navbar
