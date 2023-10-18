
import React from 'react';
import Message from './Message';

function Chat({ faqs }) {
  return (
    <div className="chat-container">
      <div className="chat">
        {faqs.map((faq, index) => (
          <div key={index} className="faq">
            <Message text={faq.question} sender="user" avatarUrl={faq.userAvatar} />
            <Message text={faq.answer} sender="bot" avatarUrl={faq.botAvatar} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
