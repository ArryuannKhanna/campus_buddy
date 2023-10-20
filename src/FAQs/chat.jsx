import React from 'react';
import { faqs } from './faqData';
import ChatContainer from './ChatContainer';
 
function Chat() {
  return (
    <div className="chat-container">
      <div className="chat">
        {faqs.map((faq, index) => (
          <ChatContainer
            key={index}
            question={faq.question}
            answer={faq.answer}
            userAvatar={faq.userAvatar}
            botAvatar={faq.botAvatar}
          />
        ))}
      </div>
    </div>
  );
}
    

export default Chat;
