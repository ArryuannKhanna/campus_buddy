import React from 'react'
import { useEffect,useRef } from 'react'
import './Featurestile.css'
import { easeOut, motion, useAnimation, useInView } from 'framer-motion';

export const Fetaurestile = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const inview = useInView(ref1, {once:false});
    const inview1 = useInView(ref2, {once:false});
    const controls = useAnimation();
    const controls1 = useAnimation();
    useEffect(() => {
        if (inview) {
          controls.start("animate");
        }
        
      }, [inview]);

      useEffect(() => {
        if (inview1) {
          controls1.start("animate");
        }
        
      }, [inview1]);

      const variants = {
        animate: {
          opacity:1,
          y:-500,
          transition:
          {
            duration:0.9,
            ease:easeOut,
          }
        },
    };
    const variants1 = {
        animate: {
          opacity:1,
          y:-1000,
          transition:
          {
            duration:0.9,
            ease:easeOut,
          }
        },
    };

  return (
    <motion.div className="featurestile-container">
        <div className="featurestile-preview">
            <div className="first-preview"></div>
            <motion.div variants={variants} initial={{opacity:0.2,y:40}} animate={controls} className="second-preview"></motion.div>
            <motion.div variants={variants1} initial={{opacity:0.2,y:40}} animate={controls1} className="third-preview"></motion.div>
        </div>
         <div className="featurestile-content-container">
            <div className="featurestile-contents update">
                <div className="title upload">
                    <h2>Upload and <span className='purple-colored-span'>Sell/rent</span></h2>
                </div>
                <div className="desc upload">
                    <h2 className='silver-colored-span'>Your discarded Books or Items</h2>
                </div>
                <div className="about upload">
                    <p>After completing your purchase, check your email for the download link. Click it to obtain your iPhone mockup files.</p>
                </div>
            </div>
            <div ref={ref1} className="featurestile-contents checkout">
                <div className="title buy">
                    <h2>Checkout and <span className='purple-colored-span'>Buy/Lease</span></h2>
                </div>
                <div className="desc buy">
                    <h2 className='silver-colored-span'>Your desired Books or Items</h2>
                </div>
                <div className="about buy">
                    <p>After completing your purchase, check your email for the download link. Click it to obtain your iPhone mockup files.</p>
                </div>
            </div>
            <div ref={ref2} className="featurestile-contents review">
                <div className="title review">
                    <h2>Provide a <span className='purple-colored-span'>Review</span></h2>
                </div>
                <div className="desc review">
                    <h2 className='silver-colored-span'>Your purchase feedback</h2>
                </div>
                <div className="about review">
                    <p>nsert your app or website screenshot by dragging and dropping it into the designated customization layer. Then save and export your finished mockup.</p>
                </div>
            </div>
         </div>
    </motion.div>
  )
}

export default Fetaurestile