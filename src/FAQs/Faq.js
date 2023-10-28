
import React from 'react';
import './faq.css';
import Chat from './chat';
import { faqs } from './faqData';

function Faq() {
  return (
    <div className="App" id="faq">
      <h1>FAQ Chat</h1>
      <Chat faqs={faqs} />
    </div>
  );
}

export default Faq;
