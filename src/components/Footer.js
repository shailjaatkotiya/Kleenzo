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
            <small>Detergent liquid and dishwash gel</small>
          </span>
        </Link>
        <p>Fresh clothes, sparkling utensils, and dependable everyday cleaning.</p>
      </div>
      <div className="site-footer__links">
        <a href="mailto:Kleenzosurfactants@gmail.com">Kleenzosurfactants@gmail.com</a>
        <a href="tel:+919904965415">+91 99049 65415</a>
        <a href="tel:+918140888900">+91 81408 88900</a>
      </div>
    </div>
    <p className="site-footer__copyright">Copyright 2026 Kleenzo. All rights reserved.</p>
  </footer>
);

export default Footer;
