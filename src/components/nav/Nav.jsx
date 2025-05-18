import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Signup from '../signup/Signup';
import './Nav.css';

const Nav = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignupClick = () => {
    console.log('Opening signup modal');
    setIsSignupOpen(true);
    setIsMenuOpen(false); // Close menu when opening signup
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">Esclapian</div>
        <button className="menu-icon" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}><i className="fas fa-home"></i> Home</Link></li>
            <li><Link to="/dashboard" onClick={() => setIsMenuOpen(false)}><i className="fas fa-tachometer-alt"></i> Dashboard</Link></li>
            <li><Link to="/search" onClick={() => setIsMenuOpen(false)}><i className="fas fa-search"></i> Search</Link></li>
            <li><Link to="/request" onClick={() => setIsMenuOpen(false)}><i className="fas fa-hand-holding-medical"></i> Request</Link></li>
            <li><Link to="/info" onClick={() => setIsMenuOpen(false)}><i className="fas fa-info-circle"></i> Info</Link></li>
            <li><Link to="/events" onClick={() => setIsMenuOpen(false)}><i className="fas fa-calendar-alt"></i> Events</Link></li>
          </ul>
          <div className="mobile-auth-buttons">
            <Link to="/login" className="login-button" onClick={() => setIsMenuOpen(false)}>
              <i className="fas fa-sign-in-alt"></i> Login
            </Link>
            <button 
              className="signup-button" 
              onClick={handleSignupClick}
            >
              <i className="fas fa-user-plus"></i> Sign Up
            </button>
          </div>
        </div>
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