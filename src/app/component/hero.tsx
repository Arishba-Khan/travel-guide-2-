"use client";
import React, { useState, useEffect, useRef } from "react";
import "./hero.css"; // Importing the custom CSS file for this component

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const images = [
    "/assests/cap.jpg",
    "/assests/masjid.jpg",
    "/assests/bosph2.jpg",
  ];

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Hide the current image
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsVisible(true); // Show the next image after the transition
      }, 1000); // Wait for the fade-out animation to complete
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="image-container">
          <div className="image-wrapper">
            <img
              className={`hero-image ${isVisible ? "visible" : ""}`}
              alt="hero"
              src={images[currentImageIndex]}
            />
          </div>
        </div>
        <div className="text-content">
          <h1 className="title">
            Explore
            <br className="line-break" />
            Beauty Of Turkey
          </h1>
          <p className="description">
            Turkey is where ancient wonders meet a fresh, modern vibe. Wander
            through Istanbul's iconic skyline, explore the dreamlike valleys of
            Cappadocia, and experience a culture that's rich, warm, and
            effortlessly cool. It's a destination where every moment feels like
            magic.
          </p>
        </div>
      </div>
    </section>
  );
}
