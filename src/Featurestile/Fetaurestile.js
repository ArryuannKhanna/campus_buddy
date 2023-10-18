import React from 'react'
import './Featurestile.css'

export const Fetaurestile = () => {
  return (
    <div className="featurestile-container">
        <section className="featurestile-preview"></section>
         <section className="featurestile-content-container">
            <div className="featurestile-contents update"></div>
            <div className="featurestile-contents checkout"></div>
            <div className="featurestile-contents review"></div>
         </section>
    </div>
  )
}

export default Fetaurestile