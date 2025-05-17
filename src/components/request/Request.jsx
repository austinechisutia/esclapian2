import React, { useState } from 'react';
import './Request.css';

const Request = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    patientName: '',
    bloodType: '',
    units: '',
    urgency: 'normal',
    hospital: '',
    contactName: '',
    contactPhone: '',
    additionalNotes: ''
  });

  // Sample requests data - replace with actual data from your backend
  const [requests] = useState([
    {
      id: 1,
      patientName: 'John Smith',
      bloodType: 'A+',
      units: 2,
      urgency: 'urgent',
      hospital: 'City General Hospital',
      status: 'pending',
      date: '2024-03-15'
    },
    {
      id: 2,
      patientName: 'Sarah Johnson',
      bloodType: 'O-',
      units: 3,
      urgency: 'emergency',
      hospital: 'Memorial Hospital',
      status: 'approved',
      date: '2024-03-14'
    },
    {
      id: 3,
      patientName: 'Michael Brown',
      bloodType: 'B+',
      units: 1,
      urgency: 'normal',
      hospital: 'Community Medical Center',
      status: 'completed',
      date: '2024-03-13'
    }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setShowForm(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return '#ffc107';
      case 'approved':
        return '#28a745';
      case 'completed':
        return '#17a2b8';
      default:
        return '#6c757d';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'emergency':
        return '#dc3545';
      case 'urgent':
        return '#ffc107';
      default:
        return '#28a745';
    }
  };

  return (
    <div className="request-container">
      <div className="request-header">
        <h1>Blood Requests</h1>
        <button 
          className="new-request-button"
          onClick={() => setShowForm(true)}
        >
          <i className="fas fa-plus"></i>
          New Request
        </button>
      </div>

      {showForm ? (
        <div className="request-content">
          <div className="form-header">
            <h2>New Blood Request</h2>
            <button 
              className="close-button"
              onClick={() => setShowForm(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="request-form">
            <div className="form-section">
              <h2>Patient Information</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="patientName">Patient Name</label>
                  <input
                    type="text"
                    id="patientName"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="bloodType">Blood Type Required</label>
                  <select
                    id="bloodType"
                    name="bloodType"
                    value={formData.bloodType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Blood Type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="units">Number of Units</label>
                  <input
                    type="number"
                    id="units"
                    name="units"
                    min="1"
                    value={formData.units}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="urgency">Urgency Level</label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    required
                  >
                    <option value="normal">Normal</option>
                    <option value="urgent">Urgent</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Hospital Information</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="hospital">Hospital Name</label>
                  <input
                    type="text"
                    id="hospital"
                    name="hospital"
                    value={formData.hospital}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contactName">Contact Person</label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contactPhone">Contact Phone</label>
                  <input
                    type="tel"
                    id="contactPhone"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Additional Information</h2>
              <div className="form-group">
                <label htmlFor="additionalNotes">Additional Notes</label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Any additional information that might be helpful..."
                ></textarea>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-button">
                <i className="fas fa-paper-plane"></i>
                Submit Request
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="requests-list">
          {requests.map(request => (
            <div key={request.id} className="request-card">
              <div className="request-card-header">
                <h3>{request.patientName}</h3>
                <span 
                  className="status-badge"
                  style={{ backgroundColor: getStatusColor(request.status) }}
                >
                  {request.status}
                </span>
              </div>
              <div className="request-card-body">
                <div className="request-info">
                  <p><i className="fas fa-tint"></i> Blood Type: {request.bloodType}</p>
                  <p><i className="fas fa-hospital"></i> Hospital: {request.hospital}</p>
                  <p><i className="fas fa-box"></i> Units: {request.units}</p>
                </div>
                <div className="request-meta">
                  <span 
                    className="urgency-badge"
                    style={{ backgroundColor: getUrgencyColor(request.urgency) }}
                  >
                    {request.urgency}
                  </span>
                  <span className="date">{request.date}</span>
                </div>
              </div>
              <div className="request-card-actions">
                <button className="action-button view">
                  <i className="fas fa-eye"></i>
                  View Details
                </button>
                <button className="action-button edit">
                  <i className="fas fa-edit"></i>
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Request; 