// import React,{useEffect,useRef} from 'react';
// import Message from './Message';
// import { motion,useScroll,easeIn, easeOut, useAnimation} from 'framer-motion'

// function Chat({ faqs }) {
import React from 'react';
import ChatContainer from './ChatContainer';
import { faqs } from './faqData';

function chat() {

  return (
    
      <ChatContainer faqs={faqs} />
  );
}
export default  chat;


//   const ref = useRef(null);
//   const controls = useAnimation();
//   const{scrollYProgress:sc}=useScroll({
//     target:ref,
//     offset:["1.33 1","0 1"]
//   })
  
//   useEffect(()=>{
//       console.log(sc.current);
//       if(sc.current<1)
//       {
//         controls.start("animate");
//       }
//       else controls.start("start");
//   },[sc.current])

//   const variants = {
//     animate: {
//       opacity:1,
//       transition:
//       {
//         duration:0.9,
//         ease:easeOut,
//       }
//     },
//     start:{
//       opacity:0.2,
//       transition:
//       {
//         duration:0.9,
//         ease:easeOut,
//       }
//     },
// };

  // return (
  //   <div className="chat-container">
  //     <div className="chat">
  //       {faqs.map((faq, index) => (
  //         <div key={index} className="faq">
  //           <Message text={faq.question} sender="user" avatarUrl={faq.userAvatar} />
  //           <Message text={faq.answer} sender="bot" avatarUrl={faq.botAvatar} />
  //         </div>
  //       ))}
  //     </div>
  //   </div>
    
  // );

  


// export default Chat;
