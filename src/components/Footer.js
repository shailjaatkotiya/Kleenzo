import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer__inner">
      <div>
        <Link to="/" className="brand brand--footer" aria-label="Kleenzo home">
          <span className="brand__mark">K</span>
          <span>
            <strong>Kleenzo</strong>
            <small>Clean home, healthy life</small>
          </span>
        </Link>
        <p>Phenyl, floor cleaner, and toilet cleaner for dependable everyday cleaning.</p>
      </div>
      <div className="site-footer__links">
        <a href="mailto:info@kleenzo.in">info@kleenzo.in</a>
        <a href="tel:+919979555966">+91 99795 55966</a>
        <span>Kleenzo Hygiene Pvt. Ltd., Rajkot</span>
      </div>
    </div>
    <p className="site-footer__copyright">Copyright 2026 Kleenzo. All rights reserved.</p>
  </footer>
);

export default Footer;
