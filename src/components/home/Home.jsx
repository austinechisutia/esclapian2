import React from 'react';
import './Home.css';
import WhyChoose from '../whyChoose/WhyChoose';
import ReadyToJoin from '../readyToJoin/ReadyToJoin';
import Footer from '../footer/Footer';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="content-wrapper">
          <div className="left-section">
            <h1><span className="welcome-text">Welcome</span> to Esclapian Medical</h1>
            <p>Your trusted partner in healthcare solutions. We provide comprehensive medical services with a focus on patient care and comfort.</p>
            <div className="button-group">
              <button className="primary-button">
                <i className="fas fa-calendar-check"></i>
                Book Appointment
              </button>
              <button className="secondary-button">
                <i className="fas fa-phone-alt"></i>
                Contact Us
              </button>
            </div>
          </div>
          <div className="right-section">
            <div className="logo-circle">
              <div className="inner-circle">
                <i className="fas fa-stethoscope"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="features-section">
          <div className="feature-card">
            <i className="fas fa-shield-alt"></i>
            <h3>Privacy</h3>
            <p>Secure data protection</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-tint"></i>
            <h3>Blood Types</h3>
            <p>Quick matching system</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-graduation-cap"></i>
            <h3>Connected</h3>
            <p>Top medical experts</p>
          </div>
        </div>
      </div>
      <div className="why-choose-section">
        <WhyChoose />
      </div>
      <div className="ready-to-join-section">
        <ReadyToJoin />
      </div>
      <Footer />
    </div>
  );
};

export default Home; 