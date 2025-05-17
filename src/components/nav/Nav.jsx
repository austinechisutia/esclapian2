import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Signup from '../signup/Signup';
import './Nav.css';

const Nav = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleSignupClick = () => {
    console.log('Opening signup modal');
    setIsSignupOpen(true);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">Esclapian</div>
        <ul className="nav-links">
          <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
          <li><Link to="/dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</Link></li>
          <li><Link to="/search"><i className="fas fa-search"></i> Search</Link></li>
          <li><Link to="/request"><i className="fas fa-hand-holding-medical"></i> Request</Link></li>
          <li><Link to="/info"><i className="fas fa-info-circle"></i> Info</Link></li>
          <li><Link to="/events"><i className="fas fa-calendar-alt"></i> Events</Link></li>
        </ul>
        <div className="nav-buttons">
          <Link to="/login" className="login-button"><i className="fas fa-sign-in-alt"></i> Login</Link>
          <button 
            className="signup-button" 
            onClick={handleSignupClick}
          >
            <i className="fas fa-user-plus"></i> Sign Up
          </button>
        </div>
      </nav>
      <Signup isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </>
  );
};

export default Nav; 