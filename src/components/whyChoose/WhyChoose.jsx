import React from 'react';
import './WhyChoose.css';

const WhyChoose = () => {
  return (
    <div className="why-choose-container">
      <div className="why-choose-content">
        <h2>Why Choose Esclapian</h2>
        <div className="reasons-grid">
          <div className="reason-card">
            <i className="fas fa-user-md"></i>
            <h3>Expert Doctors</h3>
            <p>Top medical professionals</p>
          </div>
          <div className="reason-card">
            <i className="fas fa-clock"></i>
            <h3>24/7 Service</h3>
            <p>Always available</p>
          </div>
          <div className="reason-card">
            <i className="fas fa-hospital"></i>
            <h3>Modern Facility</h3>
            <p>State-of-the-art equipment</p>
          </div>
          <div className="reason-card">
            <i className="fas fa-heart"></i>
            <h3>Patient Care</h3>
            <p>Personalized attention</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose; 