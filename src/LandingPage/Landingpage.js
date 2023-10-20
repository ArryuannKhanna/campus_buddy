import React from 'react'
import './LandingPage.css'
import Fadein from '../Framer_Components/FadeIn'

export const LandingPage = () => {
  return (
    <div className="landingpage">
      <Fadein para={2.0}>
       <div className="landing-heading">
        <p>Buy and Sell the useful goods</p>
       </div>
      </Fadein>
      <Fadein>
       <div className="landing-about">
       ThaparBuddy is a devoted platform created to promote simple and effective purchase and exchange of old books and multiple other items within the college community.
       </div>
       </Fadein>
       <div className="landing-buttons">
        <div className="landing-button1"></div>
        <div className="landing-button2"></div>
       </div>

    </div>
  )
}

export default LandingPage