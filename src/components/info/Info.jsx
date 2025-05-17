import React, { useState } from 'react';
import './Info.css';

const Info = () => {
  const [activeTab, setActiveTab] = useState('general');

  const infoSections = {
    general: [
      {
        title: 'What is Blood Donation?',
        content: 'Blood donation is a voluntary procedure where you donate blood to help others in need. Your donation can save up to three lives and is essential for surgeries, cancer treatment, chronic illnesses, and traumatic injuries.',
        icon: 'fa-heartbeat'
      },
      {
        title: 'Why Donate Blood?',
        content: 'Blood is needed every two seconds. Your donation can help patients with cancer, trauma, surgery, and chronic diseases. Regular donations ensure a stable blood supply for emergencies.',
        icon: 'fa-hand-holding-heart'
      },
      {
        title: 'Who Can Donate?',
        content: 'Most healthy adults can donate blood. You must be at least 17 years old, weigh at least 110 pounds, and be in good health. Some medical conditions or medications may affect eligibility.',
        icon: 'fa-user-check'
      }
    ],
    process: [
      {
        title: 'Before Donation',
        content: 'Get a good night\'s sleep, eat a healthy meal, and drink plenty of water. Avoid fatty foods and alcohol 24 hours before donation. Bring a valid ID and list of medications.',
        icon: 'fa-clipboard-check'
      },
      {
        title: 'During Donation',
        content: 'The process takes about 8-10 minutes. A sterile needle is used to collect blood. You\'ll be monitored throughout the process. Most donors feel no discomfort.',
        icon: 'fa-syringe'
      },
      {
        title: 'After Donation',
        content: 'Rest for 10-15 minutes and have a snack. Drink extra fluids for 24-48 hours. Avoid strenuous activity for 24 hours. Your body replaces the donated blood within 48 hours.',
        icon: 'fa-clock'
      }
    ],
    types: [
      {
        title: 'Whole Blood',
        content: 'The most common type of donation. Used for trauma patients, surgery, and general transfusions. Can be donated every 56 days.',
        icon: 'fa-tint'
      },
      {
        title: 'Platelets',
        content: 'Used for cancer patients and those with blood disorders. Can be donated every 7 days, up to 24 times per year.',
        icon: 'fa-microscope'
      },
      {
        title: 'Plasma',
        content: 'Used for burn victims and patients with clotting disorders. Can be donated every 28 days.',
        icon: 'fa-vial'
      }
    ],
    safety: [
      {
        title: 'Screening Process',
        content: 'All donors are screened for eligibility and tested for infectious diseases. Your health and safety are our top priority.',
        icon: 'fa-shield-alt'
      },
      {
        title: 'Sterile Equipment',
        content: 'All equipment is sterile and used only once. The donation process is completely safe and follows strict medical guidelines.',
        icon: 'fa-syringe'
      },
      {
        title: 'Medical Staff',
        content: 'Trained medical professionals oversee every donation. They are available to answer questions and ensure your comfort.',
        icon: 'fa-user-md'
      }
    ]
  };

  return (
    <div className="info-container">
      <div className="info-header">
        <h1>Blood Donation Information</h1>
        <p>Learn everything you need to know about blood donation</p>
      </div>

      <div className="info-tabs">
        <button 
          className={`tab-button ${activeTab === 'general' ? 'active' : ''}`}
          onClick={() => setActiveTab('general')}
        >
          <i className="fas fa-info-circle"></i>
          General Info
        </button>
        <button 
          className={`tab-button ${activeTab === 'process' ? 'active' : ''}`}
          onClick={() => setActiveTab('process')}
        >
          <i className="fas fa-tasks"></i>
          Donation Process
        </button>
        <button 
          className={`tab-button ${activeTab === 'types' ? 'active' : ''}`}
          onClick={() => setActiveTab('types')}
        >
          <i className="fas fa-vial"></i>
          Types of Donation
        </button>
        <button 
          className={`tab-button ${activeTab === 'safety' ? 'active' : ''}`}
          onClick={() => setActiveTab('safety')}
        >
          <i className="fas fa-shield-alt"></i>
          Safety
        </button>
      </div>

      <div className="info-content">
        <div className="info-grid">
          {infoSections[activeTab].map((section, index) => (
            <div key={index} className="info-card">
              <div className="info-card-icon">
                <i className={`fas ${section.icon}`}></i>
              </div>
              <h3>{section.title}</h3>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="info-footer">
        <div className="emergency-info">
          <i className="fas fa-exclamation-circle"></i>
          <p>In case of emergency, please call our 24/7 hotline: <strong>1-800-BLOOD-HELP</strong></p>
        </div>
        <button className="schedule-button">
          <i className="fas fa-calendar-alt"></i>
          Schedule a Donation
        </button>
      </div>
    </div>
  );
};

export default Info; 