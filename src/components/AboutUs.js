import React from 'react';
import { Link } from 'react-router-dom';

const values = [
  'Cleaning formulas built for Indian homes',
  'Laundry care that is tough on stains and gentle on fabrics',
  'Dishwash care with grease removal and fresh lime fragrance',
  'Straightforward ordering through WhatsApp',
];

const AboutUs = () => (
  <section className="about-section">
    <div className="section-heading section-heading--left">
      <p className="eyebrow">About Kleenzo</p>
      <h1>Reliable home cleaning products with everyday practicality.</h1>
      <p>
        Kleenzo is built by Riddhi and Krunal with a simple mission: make cleaning easier, fresher, and more dependable for families. Our focus is on quality detergent liquid, dishwash gel, safe-feeling use, and products that deliver visible results.
      </p>
    </div>

    <div className="about-grid">
      <div className="about-card about-card--feature">
        <h2>Why customers choose Kleenzo</h2>
        <p>
          From laundry detergent that keeps clothes bright to dishwash gel that removes stubborn grease, Kleenzo products are designed to fit real cleaning routines without unnecessary complexity.
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
