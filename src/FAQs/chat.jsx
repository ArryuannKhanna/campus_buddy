import React,{useEffect,useRef} from 'react';
import Message from './Message';
import { motion,useScroll,easeIn, easeOut, useAnimation} from 'framer-motion'

function Chat({ faqs }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const{scrollYProgress:sc}=useScroll({
    target:ref,
    offset:["1.33 1","0 1"]
  })
  
  useEffect(()=>{
      console.log(sc.current);
      if(sc.current<1)
      {
        controls.start("animate");
      }
      else controls.start("start");
  },[sc.current])

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
    <div className="chat-container">
      <div className="chat">
        {faqs.map((faq, index) => (
          <div ref={ref} key={index} className="faq">
            <motion.div variants={variants} initial={{opacity:0.2}} animate={controls}>
            <Message text={faq.question} sender="user" avatarUrl={faq.userAvatar} />
            <Message text={faq.answer} sender="bot" avatarUrl={faq.botAvatar} />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default Chat;
