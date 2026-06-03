import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-section__content">
      <p className="eyebrow">Detergent liquid and dishwash gel</p>
      <h1>Kleenzo cleaning essentials for fresh clothes and sparkling utensils.</h1>
      <p className="hero-section__copy">
        Powerful stain removal, gentle fabric care, fresh fragrances, and everyday cleaning products made for Indian homes.
      </p>
      <div className="hero-section__actions">
        <Link className="button button--primary" to="/products">
          View Products
        </Link>
        <a className="button button--secondary" href="https://wa.me/918140888900" target="_blank" rel="noopener noreferrer">
          Order on WhatsApp
        </a>
      </div>
      <div className="hero-section__stats" aria-label="Kleenzo product highlights">
        <span>Fabric liquid</span>
        <span>Lime dishwash gel</span>
        <span>Fresh fragrance</span>
      </div>
    </div>

    <div className="hero-section__media" aria-label="Kleenzo product preview">
      <img
        src="/3.web.jpg"
        alt="Kleenzo fabric liquid detergent for stain removal"
        loading="eager"
        fetchPriority="high"
      />
    </div>
  </section>
);

export default HeroSection;
