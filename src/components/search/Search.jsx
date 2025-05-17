import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  const [searchType, setSearchType] = useState('donors');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="search-container">
      <div className="search-header">
        <h1>Search</h1>
        <div className="search-tabs">
          <button 
            className={`tab-button ${searchType === 'donors' ? 'active' : ''}`}
            onClick={() => setSearchType('donors')}
          >
            <i className="fas fa-users"></i>
            Donors
          </button>
          <button 
            className={`tab-button ${searchType === 'units' ? 'active' : ''}`}
            onClick={() => setSearchType('units')}
          >
            <i className="fas fa-tint"></i>
            Blood Units
          </button>
        </div>
      </div>

      <div className="search-content">
        <div className="search-filters">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder={`Search ${searchType}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="filter-options">
            {searchType === 'donors' ? (
              <>
                <select className="filter-select">
                  <option value="">Blood Type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
                <select className="filter-select">
                  <option value="">Location</option>
                  <option value="north">North</option>
                  <option value="south">South</option>
                  <option value="east">East</option>
                  <option value="west">West</option>
                </select>
              </>
            ) : (
              <>
                <select className="filter-select">
                  <option value="">Blood Type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
                <select className="filter-select">
                  <option value="">Status</option>
                  <option value="available">Available</option>
                  <option value="reserved">Reserved</option>
                  <option value="expiring">Expiring Soon</option>
                </select>
              </>
            )}
          </div>
        </div>

        <div className="search-results">
          {searchType === 'donors' ? (
            <div className="results-grid">
              {/* Sample donor cards - replace with actual data */}
              <div className="donor-card">
                <div className="donor-info">
                  <h3>John Doe</h3>
                  <p><i className="fas fa-tint"></i> Blood Type: A+</p>
                  <p><i className="fas fa-map-marker-alt"></i> Location: North</p>
                  <p><i className="fas fa-calendar-alt"></i> Last Donation: 3 months ago</p>
                </div>
                <button className="contact-button">
                  <i className="fas fa-envelope"></i>
                  Contact
                </button>
              </div>
              {/* Add more donor cards as needed */}
            </div>
          ) : (
            <div className="results-grid">
              {/* Sample blood unit cards - replace with actual data */}
              <div className="unit-card">
                <div className="unit-info">
                  <h3>Unit #12345</h3>
                  <p><i className="fas fa-tint"></i> Blood Type: O+</p>
                  <p><i className="fas fa-calendar-alt"></i> Collected: 2 weeks ago</p>
                  <p><i className="fas fa-clock"></i> Expires in: 28 days</p>
                </div>
                <button className="reserve-button">
                  <i className="fas fa-bookmark"></i>
                  Reserve
                </button>
              </div>
              {/* Add more unit cards as needed */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search; 