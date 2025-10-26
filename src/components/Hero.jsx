// components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        {/* Left side - Text content */}
        <div className="hero-content">
          <h2>FlexoPlate Manager  Optimizing Plate Usage through Similarity Detection</h2>
          <p>Revolutionizing Flexo Printing: Harnessing AI to Reduce Waste, Cut Costs, and Optimize Plate Reuse.</p>
          <a href="#domain" className="hero-btn">Learn More</a>
        </div>
        
        {/* Right side - Image */}
        <div className="hero-image">
          <img src={`${process.env.PUBLIC_URL}/img/c.jpg`} alt="ADHD Assessment Tool" />

        </div>
      </div>
    </section>
  );
};

export default Hero;
