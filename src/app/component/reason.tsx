"use client";
import React, { useState, useEffect } from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import "./reason.css"; // Importing the custom CSS file for this component

const Reason = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/assests/galata.jpg",
    "/assests/cap2.jpg",
    "/assests/pamu.jpg",
    "/assests/mosque.jpg",
    "/assests/antalya.jpg",
  ];

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="reason">
      <section className="reason-section">
        <div className="container">
          <div className="content-wrapper">
            {/* Information and Icons */}
            <div className="info-section">
              {[
                {
                  title: "Istanbul - Where East Meets West",
                  description:
                    "Stroll through Istanbul's mesmerizing bazaars, marvel at the Blue Mosque's architecture, and soak in panoramic views from Galata Tower. This city is a blend of Europe and Asia, offering endless culture and history.",
                },
                {
                  title: "Cappadocia - The Land of Fairy Chimneys",
                  description:
                    "Experience Cappadocia's surreal landscapes from above in a hot air balloon, gliding over the iconic “fairy chimneys” and ancient cave dwellings. It's a dreamlike landscape unlike anywhere else in the world.",
                },
                {
                  title: "Pamukkale - The Cotton Castle",
                  description:
                    "Known for its striking white terraces, Pamukkale is a natural wonder where you can soak in warm mineral-rich pools cascading down the hillside. This surreal, snow-like landscape is a must-see for relaxation and beauty.",
                },
              ].map((item, index) => (
                <div className="info-item" key={index}>
                  <div className="vertical-line" />
                  <div className="icon-wrapper">
                    <VscDebugBreakpointLog color="#cad2c5" />
                  </div>
                  <div className="text-content">
                    <h2 className="info-title">{item.title}</h2>
                    <p className="info-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Display */}
            <div className="image-section">
              <div className="image-wrapper">
                <img
                  className="display-image"
                  alt="travel destination"
                  src={images[currentImageIndex]}
                  key={currentImageIndex}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reason;
