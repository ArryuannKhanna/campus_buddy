import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className="Navbar-cont">
        <div className="Navbar-flex-cont">
            <div className="Navbar-logo">
                <h1>CampusBuddy</h1>
            </div>
            <div className="Navbar-empty-flex">

            </div>
            <div className="Navbar-contents">
                <ul>
                    <li>Buy</li>
                    <li>Sell</li>
                    <li>Rent</li>
                    <li>FAQ</li>
                    <li>About Us</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar