import React from 'react';
import './footer.css'; // Import CSS file for styling

const Footter = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>RentABoat
          </h2>
          <p>We are creating High Quality Resources and tools to Aid developers during the development of their projects</p>
          {/* Social media icons */}
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h2>Links</h2>
          <ul>
            <li><a href="#">Resources</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Help</h2>
          <ul>
            <li><a href="#">Support</a></li>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Sign In</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Products</h2>
          <ul>
            <li><a href="#">Windframe</a></li>
            <li><a href="#">Loop</a></li>
            <li><a href="#">Contrast</a></li>
          </ul>
        </div>
      </div>
      <p className="text-center">&copy; Devwares, 2020. All rights reserved.</p>
    </footer>
  );
};

export default Footter;
