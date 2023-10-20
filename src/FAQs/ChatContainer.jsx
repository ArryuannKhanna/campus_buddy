import React, { useRef, useEffect } from 'react';
import Message from './Message'; 
import { easeIn, easeOut, motion, useAnimation, useInView,useScroll,useTransform } from 'framer-motion';

function ChatContainer({ question, answer, userAvatar, botAvatar }) {
  const ref1 = useRef(null);
  const controls = useAnimation();

  const{scrollYProgress:scr}=useScroll({
    target:ref1,
    offset:["1.33 1","0 1"]
  })

  useEffect(() => {
    // console.log("this is sc->",sc.current);
    // console.log("this is sc1->",sc1.current);
    if(scr.current<1)
    {
        controls.start("animate");
    }
    else
    {
        controls.start("start");
    }
  }, [scr.current]);


  const variants = {
    animate: {
      opacity:1,
      transition:
      {
        duration:0.9,
        ease:easeOut,
      }
    },
    start:{
      opacity:0.2,
      transition:
      {
        duration:0.9,
        ease:easeOut,
      }
    },
};

  return (
    <motion.div variants={variants} initial={{opacity:0.2}} animate={controls}>
    <div ref={ref1} className="faq">
      <Message text={question} sender="user" avatarUrl={userAvatar} />
      <Message text={answer} sender="bot" avatarUrl={botAvatar} />
    </div>
    </motion.div>
  );
}


export default ChatContainer;
