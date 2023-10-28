import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import logoImage from './finalLogo.png';

export const Navbar = () => {
  const[state1,setState1]=useState(true);
  const handleMouseEnter = () => {
    setState1(true);
  };

  const handleMouseLeave = () => {
    setState1(false);
  };
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
          {/* style={state1 ? { border: '1px black solid',borderRadius:'1.2em',padding:'20px' } : {}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} */}
            <li>Buy</li>
            <li>Sell</li>
            <li>Rent</li>
            <li><a href='#faq'>FAQ</a></li>
            <li>About Us</li>
          </ul>
        </div>
       <div className="login-register"> <Link to="/login">Login/Register</Link></div>
      </div>
    </div>
  )
}

export default Navbar
