import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header style={headerStyle}>
      <div style={headerContentStyle}>
        <button style={menuButtonStyle} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h1>Kleenzo</h1>
        <nav style={{ ...navStyle, display: menuOpen ? 'block' : 'none' }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About Us</Link>
          <Link to="/products" style={linkStyle}>Products</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

const headerStyle = {
  position: 'fixed',
  top: 0,
  width: '100%',
  backgroundColor: '#5A639C',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const headerContentStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const menuButtonStyle = {
  background: 'none',
  border: 'none',
  color: '#E2BBE9',
  fontSize: '24px',
  cursor: 'pointer',
};

const navStyle = {
  display: 'none',
  flexDirection: 'column',
  position: 'absolute',
  top: '60px', // Adjust based on header height
  left: '0',
  width: '100%',
  backgroundColor: '#5A639C',
};

const linkStyle = {
  color: '#E2BBE9',
  padding: '10px',
  textDecoration: 'none',
  display: 'block',
  textAlign: 'center',
};

export default Header;