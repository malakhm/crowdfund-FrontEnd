import React from 'react';
import './Support.css';

const Support = () => {
  return (
    <div className="support-container">
      <input type="text" className="support-input" placeholder="Enter your message..." />
      <button type="button" className="support-button">Send</button>
    </div>
  );
};

export default Support;
