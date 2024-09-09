// src/Notifications.js
import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png'; // Ensure this is the correct path
import { getLatestNotification } from './utils';

export default function Notifications() {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        style={{ 
          position: 'absolute', 
          top: '10px', 
          right: '10px', 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer' 
        }}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        <img src={closeIcon} alt="Close icon" width="15px" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}
