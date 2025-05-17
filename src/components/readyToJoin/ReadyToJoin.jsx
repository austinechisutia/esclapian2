import React from 'react';
import './ReadyToJoin.css';

const ReadyToJoin = () => {
  return (
    <div className="ready-to-join-container">
      <div className="ready-to-join-content">
        <h2>Ready to Join Esclapian?</h2>
        <p>Start your journey towards better healthcare today</p>
        <div className="cta-buttons">
          <button className="cta-primary">
            <i className="fas fa-user-plus"></i>
            Sign Up Now
          </button>
          <button className="cta-secondary">
            <i className="fas fa-info-circle"></i>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadyToJoin; 