import React from 'react';
import './view.css'; // Import custom CSS

const View = () => {
  const image = "/assests/cap3.jpg"; // Define image path

  return (
    <div id='view' className="view-section">
      <section className="view-container">
        <div className="image-wrapper">
          <img
            alt="feature"
            className="view-image"
            src={image} // Use image variable here
          />
        </div>
        <div className="text-section">
          {/* Galata Tower */}
          <div className="location-info">
            <h2 className="location-title">Galata Tower, Istanbul</h2>
            <p className="location-highlight">Highlights: Panoramic views of Istanbul, Bosphorus, and historic sites.</p>
            <p className="best-time">
              Best Time: <span className="highlight-text">Sunset, for city lights and skyline views.</span>
            </p>
          </div>
          {/* Göreme Valley */}
          <div className="location-info">
            <h2 className="location-title">Göreme Valley, Cappadocia</h2>
            <p className="location-highlight">Highlights: Fairy chimneys, cave dwellings, and hot air balloons.</p>
            <p className="best-time">
              Best Time: <span className="highlight-text">Sunrise, with balloons filling the sky.</span>
            </p>
          </div>
          {/* Mount Tahtalı */}
          <div className="location-info">
            <h2 className="location-title">Mount Tahtalı, Antalya</h2>
            <p className="location-highlight">Highlights: Stunning Mediterranean coast and Taurus Mountain views.</p>
            <p className="best-time">
              Best Time: <span className="highlight-text">Sunrise or sunset, for expansive, scenic vistas.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default View;
