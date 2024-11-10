import React from 'react';
import './footer.css'; // Importing the custom CSS file for this component

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          {/* Logo Text */}
          <a className="logo-text">Journal Journey</a>
          {/* Center Text */}
          <p className="footer-text">
            Created with ❤️ by <span className="font-bold">AK</span>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
