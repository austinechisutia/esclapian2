import React, { useState } from 'react';
import './Events.css';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const events = {
    upcoming: [
      {
        id: 1,
        title: 'Community Blood Drive',
        date: '2024-03-25',
        time: '09:00 AM - 04:00 PM',
        location: 'City Community Center',
        address: '123 Main Street, Healthcare City',
        type: 'blood-drive',
        spots: 45,
        registered: 28,
        description: 'Join us for our monthly community blood drive. All blood types are needed. Walk-ins welcome, but appointments are preferred.'
      },
      {
        id: 2,
        title: 'Emergency Blood Collection',
        date: '2024-03-28',
        time: '10:00 AM - 06:00 PM',
        location: 'Memorial Hospital',
        address: '456 Medical Plaza, Healthcare City',
        type: 'emergency',
        spots: 30,
        registered: 15,
        description: 'Urgent need for O- blood type. Your donation can save multiple lives. Priority will be given to O- donors.'
      },
      {
        id: 3,
        title: 'Corporate Blood Drive',
        date: '2024-04-02',
        time: '08:00 AM - 03:00 PM',
        location: 'Tech Park Building',
        address: '789 Innovation Drive, Healthcare City',
        type: 'corporate',
        spots: 60,
        registered: 42,
        description: 'Exclusive blood drive for corporate employees. Special incentives for participants.'
      }
    ],
    past: [
      {
        id: 4,
        title: 'University Blood Drive',
        date: '2024-03-15',
        time: '09:00 AM - 04:00 PM',
        location: 'University Campus',
        address: '321 Education Blvd, Healthcare City',
        type: 'blood-drive',
        spots: 50,
        registered: 50,
        description: 'Successfully completed blood drive at the university campus.'
      },
      {
        id: 5,
        title: 'Holiday Blood Collection',
        date: '2024-03-10',
        time: '10:00 AM - 05:00 PM',
        location: 'Community Hall',
        address: '654 Celebration Street, Healthcare City',
        type: 'special',
        spots: 40,
        registered: 40,
        description: 'Special holiday blood collection event with festive atmosphere.'
      }
    ]
  };

  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'blood-drive':
        return 'fa-tint';
      case 'emergency':
        return 'fa-exclamation-circle';
      case 'corporate':
        return 'fa-building';
      case 'special':
        return 'fa-star';
      default:
        return 'fa-calendar';
    }
  };

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'blood-drive':
        return '#28a745';
      case 'emergency':
        return '#dc3545';
      case 'corporate':
        return '#007bff';
      case 'special':
        return '#ffc107';
      default:
        return '#6c757d';
    }
  };

  return (
    <div className="events-container">
      <div className="events-header">
        <h1>Blood Donation Events</h1>
        <p>Join our upcoming blood donation events and make a difference</p>
      </div>

      <div className="events-tabs">
        <button 
          className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          <i className="fas fa-calendar-day"></i>
          Upcoming Events
        </button>
        <button 
          className={`tab-button ${activeTab === 'past' ? 'active' : ''}`}
          onClick={() => setActiveTab('past')}
        >
          <i className="fas fa-history"></i>
          Past Events
        </button>
      </div>

      <div className="events-content">
        <div className="events-grid">
          {events[activeTab].map(event => (
            <div key={event.id} className="event-card">
              <div className="event-header">
                <div className="event-type" style={{ backgroundColor: getEventTypeColor(event.type) }}>
                  <i className={`fas ${getEventTypeIcon(event.type)}`}></i>
                </div>
                <div className="event-title">
                  <h3>{event.title}</h3>
                  <span className="event-date">
                    <i className="fas fa-calendar"></i>
                    {event.date}
                  </span>
                </div>
              </div>

              <div className="event-details">
                <div className="event-info">
                  <p><i className="fas fa-clock"></i> {event.time}</p>
                  <p><i className="fas fa-map-marker-alt"></i> {event.location}</p>
                  <p><i className="fas fa-map"></i> {event.address}</p>
                </div>

                <div className="event-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${(event.registered / event.spots) * 100}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">
                    {event.registered} / {event.spots} spots filled
                  </span>
                </div>

                <p className="event-description">{event.description}</p>

                {activeTab === 'upcoming' && (
                  <button className="register-button">
                    <i className="fas fa-user-plus"></i>
                    Register Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="events-footer">
        <div className="create-event">
          <h3>Want to Host an Event?</h3>
          <p>Organize a blood donation drive in your community or workplace</p>
          <button className="create-button">
            <i className="fas fa-plus-circle"></i>
            Create Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events; 