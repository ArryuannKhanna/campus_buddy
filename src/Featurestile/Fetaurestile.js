import React from 'react'
import { useEffect,useRef,useState } from 'react'
import './Featurestile.css'
import { easeIn, easeOut, useAnimation, useInView } from 'framer-motion';
import { motion,useScroll,useTransform } from 'framer-motion'

export const Fetaurestile = () => {
    const [firststate,changefirststate]=useState(false);
    const [secondstate,changesecondstate]=useState(false);


    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const inview = useInView(ref1, {once:false});
    const inview1 = useInView(ref2, {once:false});
    const controls = useAnimation();
    const controls1 = useAnimation();

    const{scrollYProgress:sc}=useScroll({
        target:ref1,
        offset:["1.33 1","0 1"]
    })

    const{scrollYProgress:sc1}=useScroll({
        target:ref2,
        offset:["1.33 1","0 1"]
        // offset:['0.2 0.6','1.4 0.4']
    })

    
    useEffect(() => {
        // console.log("this is sc->",sc.current);
        // console.log("this is sc1->",sc1.current);
        if(sc.current<1)
        {
            controls.start("animate");
        }
        else
        {
            controls.start("start");
        }
        if(sc1.current<1)
        {
            controls1.start("animate");
        }
        else
        {
            controls1.start("start");
        }
      }, [sc.current,sc1.current]);

   
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
        start:{
          opacity:0.6,
          y:40,
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
        start:{
            opacity:0.6,
            y:40,
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
            <div className="first-preview"><img src={process.env.PUBLIC_URL + '/selling.jpg'} /></div>
            <motion.div variants={variants} initial={{opacity:0.6,y:40}} animate={controls} className="second-preview"><img src={process.env.PUBLIC_URL + '/buying.jpg'} /></motion.div>
            <motion.div variants={variants1} initial={{opacity:0.6,y:40}} animate={controls1} className="third-preview"><img src={process.env.PUBLIC_URL + '/reviewing.jpg'} /></motion.div>
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
            <div className="featurestile-contents checkout">
                <div ref={ref1} className="title buy">
                    <h2>Checkout and <span className='purple-colored-span'>Buy/Lease</span></h2>
                </div>
                <div className="desc buy">
                    <h2 className='silver-colored-span'>Your desired Books or Items</h2>
                </div>
                <div className="about buy">
                    <p>After completing your purchase, check your email for the download link. Click it to obtain your iPhone mockup files.</p>
                </div>
            </div>
            <div className="featurestile-contents review">
                <div ref={ref2} className="title review">
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