
import React from 'react';

function Message({ text, sender, avatarUrl }) {
  return (
    <div className={`message ${sender}`}>
      <div className="avatar">
        <img src={avatarUrl} alt={`${sender} Avatar`} />
      </div>
      <div className="text">{text}</div>
    </div>
  );
}

export default Message;
