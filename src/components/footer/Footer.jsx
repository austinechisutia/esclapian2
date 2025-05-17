import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Esclapian Medical</h3>
          <p>Your trusted partner in healthcare solutions, providing comprehensive medical services with a focus on patient care and comfort.</p>
          <div className="social-links">
            <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Blood Donation</a></li>
            <li><a href="#">Medical Records</a></li>
            <li><a href="#">Appointments</a></li>
            <li><a href="#">Emergency Care</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li><i className="fas fa-phone"></i> +1 234 567 890</li>
            <li><i className="fas fa-envelope"></i> info@esclapian.com</li>
            <li><i className="fas fa-map-marker-alt"></i> 123 Medical Center Dr, Healthcare City</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Esclapian Medical. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 