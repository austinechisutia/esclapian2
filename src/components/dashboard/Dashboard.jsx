import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="user-info">
          <i className="fas fa-user-circle"></i>
          <span>Welcome, Admin</span>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <i className="fas fa-users"></i>
          <div className="stat-info">
            <h3>Total Donors</h3>
            <p>1,234</p>
          </div>
        </div>
        <div className="stat-card">
          <i className="fas fa-tint"></i>
          <div className="stat-info">
            <h3>Blood Units</h3>
            <p>567</p>
          </div>
        </div>
        <div className="stat-card">
          <i className="fas fa-clipboard-list"></i>
          <div className="stat-info">
            <h3>Pending Requests</h3>
            <p>23</p>
          </div>
        </div>
        <div className="stat-card">
          <i className="fas fa-clock"></i>
          <div className="stat-info">
            <h3>Expiring Soon</h3>
            <p>18</p>
          </div>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="section-card">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <i className="fas fa-plus-circle"></i>
              <div className="activity-details">
                <h4>New Donor Registration</h4>
                <p>John Doe registered as a donor</p>
                <span>2 hours ago</span>
              </div>
            </div>
            <div className="activity-item">
              <i className="fas fa-tint"></i>
              <div className="activity-details">
                <h4>Blood Donation</h4>
                <p>2 units of A+ blood collected</p>
                <span>4 hours ago</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section-card">
          <h2>Upcoming Appointments</h2>
          <div className="appointment-list">
            <div className="appointment-item">
              <div className="appointment-date">
                <span className="day">15</span>
                <span className="month">Jun</span>
              </div>
              <div className="appointment-details">
                <h4>Blood Drive</h4>
                <p>Community Center</p>
                <span>10:00 AM</span>
              </div>
            </div>
            <div className="appointment-item">
              <div className="appointment-date">
                <span className="day">18</span>
                <span className="month">Jun</span>
              </div>
              <div className="appointment-details">
                <h4>Donor Screening</h4>
                <p>Main Hospital</p>
                <span>2:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 