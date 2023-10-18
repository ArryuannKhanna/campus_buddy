import React, { useRef, useEffect } from 'react';
import { easeIn, easeOut, motion, useAnimation, useInView } from 'framer-motion';

export const Fadein = ({ children }) => {
  const ref = useRef(null);
  const inview = useInView(ref, {once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inview) {
      controls.start("animate");
    }
  }, [inview]);

  const variants = {
    animate: {
      opacity:1,
      y:0,
      transition:
      {
        duration:0.9,
        ease:easeIn,
      }
    },
  };

  return (
    <div ref={ref}>
      <motion.div variants={variants} initial={{opacity:0.2,y:40}} animate={controls}>
        {children}
      </motion.div>
    </div>
  );
};

export default Fadein;