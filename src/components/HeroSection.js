import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-section__content">
      <p className="eyebrow">Power of purity</p>
      <h1>Kleenzo cleaning essentials for clean home, healthy life.</h1>
      <p className="hero-section__copy">
        Phenyl, floor cleaner, and toilet cleaner packs with clear pricing for everyday hygiene and deep cleaning.
      </p>
      <div className="hero-section__actions">
        <Link className="button button--primary" to="/products">
          View Products
        </Link>
        <a className="button button--secondary" href="https://wa.me/919979555966" target="_blank" rel="noopener noreferrer">
          Order on WhatsApp
        </a>
      </div>
      <div className="hero-section__stats" aria-label="Kleenzo product highlights">
        <span>99.9% germ protection</span>
        <span>Deep cleaning and shine</span>
        <span>5, 10, and 20 LTR packs</span>
      </div>
    </div>

    <div className="hero-section__media" aria-label="Kleenzo product preview">
      <img
        src="/hero-google.jpg"
        alt="Basket of dirty laundry ready for cleaning"
        loading="eager"
        fetchpriority="high"
      />
    </div>
  </section>
);

export default HeroSection;
