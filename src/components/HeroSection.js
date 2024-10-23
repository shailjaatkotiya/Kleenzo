import React from 'react';

const HeroSection = () => (
  <section
    style={{
      backgroundColor: 'var(--color-light)', // Use CSS variable for background color
      padding: '20px',
      textAlign: 'center',
      margin: '20px 0px',
      color: 'var(--color-darkest)', // Use CSS variable for text color
    }}
  >
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <h2>Solution for Your Sparkles</h2>
  </section>
);

export default HeroSection;
