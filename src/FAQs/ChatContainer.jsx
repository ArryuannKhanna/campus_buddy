import React from 'react';
import Message from './Message'; 

function ChatContainer({ question, answer, userAvatar, botAvatar }) {
  return (
    <div className="faq">
      <Message text={question} sender="user" avatarUrl={userAvatar} />
      <Message text={answer} sender="bot" avatarUrl={botAvatar} />
    </div>
  );
}


export default ChatContainer;
