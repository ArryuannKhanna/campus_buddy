import React, { useRef, useEffect } from 'react';
import Message from './Message'; 
import Messagesframe from '../Framer_Components/Messagesframe';

function ChatContainer({ question, answer, userAvatar, botAvatar }) {
  
  return (
    <Messagesframe>
    <div className="faq">
      <Message text={question} sender="user" avatarUrl={userAvatar} />
      <Message text={answer} sender="bot" avatarUrl={botAvatar} />
    </div>
    </Messagesframe>
  );
}


export default ChatContainer;
