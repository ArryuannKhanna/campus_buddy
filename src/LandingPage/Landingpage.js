import React from 'react'
import './LandingPage.css'
import Fadein from '../Framer_Components/FadeIn'
import Fadein2 from '../Framer_Components/FadeIn2'

export const LandingPage = () => {
  return (
    <div className="landingpage">
      <Fadein>
       <div className="landing-heading">
        <p>Buy and Sell the useful goods</p>
       </div>
      </Fadein>
      <Fadein2>
       <div className="landing-about">
       ThaparBuddy is a devoted platform created to promote simple and effective purchase and exchange of old books and multiple other items within the college community.
       </div>
       </Fadein2>

    </div>
  )
}

export default LandingPage