import React from 'react';
import { Link } from 'react-router-dom';

const values = [
  'Cleaning formulas built for Indian homes',
  'Phenyl for disinfectant cleaning and lasting freshness',
  'Floor cleaner for deep cleaning and shine',
  'Toilet cleaner for bathroom stain removal and hygiene',
  'Straightforward ordering through WhatsApp',
];

const AboutUs = () => (
  <section className="about-section">
    <div className="section-heading section-heading--left">
      <p className="eyebrow">About Kleenzo</p>
      <h1>Reliable home cleaning products with everyday practicality.</h1>
      <p>
        Kleenzo is built with a simple mission: make cleaning easier, fresher, and more dependable for families and businesses. Our focus is on phenyl, floor cleaner, toilet cleaner, and products that deliver visible results.
      </p>
    </div>

    <div className="about-grid">
      <div className="about-card about-card--feature">
        <h2>Why customers choose Kleenzo</h2>
        <p>
          From disinfectant phenyl to floor and toilet cleaners, Kleenzo products are designed to fit real cleaning routines without unnecessary complexity.
        </p>
        <Link className="button button--primary" to="/products">
          Explore Products
        </Link>
      </div>
      <div className="about-card">
        <h2>Our standards</h2>
        <ul className="check-list">
          {values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AboutUs;
