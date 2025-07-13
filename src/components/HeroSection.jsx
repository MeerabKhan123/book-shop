// src/components/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>Find Your Next Favorite Read.</h1>
        <p>Browse our handpicked selection of books—from bestsellers to hidden gems. Immerse yourself in stories, knowledge, and inspiration, delivered straight to your doorstep..</p>
        <Link to="/products" className="hero-button">
        Explore Now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;