import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <h1>Welcome to IEEE RGPV</h1>
        <p>Your journey into the world of technology starts here.</p>
        <a href="#about" className="hero-button" role="button" tabIndex="0">Get Started</a>
      </div>
    </div>
  );
};

export default Hero;
