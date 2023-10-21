import React from 'react'
import { useEffect,useRef,useState } from 'react'
import { easeIn, easeOut, useAnimation, useInView } from 'framer-motion';
import { motion,useScroll,useTransform } from 'framer-motion'

export const Messagesframe = ({children}) => {
    const [firststate,changefirststate]=useState(false);
    const ref1 = useRef(null);
    const inview = useInView(ref1, {once:false});
    const controls = useAnimation();
    const{scrollYProgress:sc}=useScroll({
        target:ref1,
        offset:["1.33 1","0 1"]
    })
    useEffect(() => {
        console.log("this is sc->",sc.current);
        // console.log("this is sc1->",sc1.current);
        if(sc.current<1)
        {
            controls.start("animate");
            
        }
        else
        {
            controls.start("start");
        }
      }, [sc.current]);

   
      const variants = {
        animate: {
          scale:1,
          opacity:1,
          transition:
          {
            duration:0.9,
            ease:easeOut,
          }
        },
        start:{
          scale:0.5,
          opacity:0,
          transition:
          {
            duration:0.9,
            ease:easeOut,
          }
        },
    };


  return (
    <motion.div variants={variants} initial={{opacity:0.6,scale:0.9}} animate={controls} >
        <div ref={ref1}>
            {children}
        </div>
    </motion.div>
  )
}

export default Messagesframe