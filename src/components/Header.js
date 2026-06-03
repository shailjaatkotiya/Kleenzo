import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)} aria-label="Kleenzo home">
          <span className="brand__mark">K</span>
          <span>
            <strong>Kleenzo</strong>
            <small>Surfactants</small>
          </span>
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        <nav className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`} aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="site-nav__cta" onClick={() => setMenuOpen(false)}>
            Order on WhatsApp
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
