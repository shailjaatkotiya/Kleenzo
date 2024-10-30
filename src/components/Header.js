import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header style={headerStyle}>
      <div style={headerContentStyle}>
        <button style={menuButtonStyle} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        {!menuOpen && <h1>Kleenzo</h1>}
        {menuOpen && (<nav style={{ ...navStyle, display: menuOpen ? 'flex' : 'none' }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About Us</Link>
          <Link to="/products" style={linkStyle}>Products</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </nav>)}
      </div>
    </header>
  );
};

const headerStyle = {
  position: 'fixed',
  top: 0,
  width: '100%',
  backgroundColor: '#1ebc59 ',
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
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const menuButtonStyle = {
  background: 'none',
  border: 'none',
  color: '#1ebc59 ',
  fontSize: '24px',
  cursor: 'pointer',
};

const navStyle = {
  display: 'flex',
  flexDirection: 'row',
  left: '0',
  width: '100%',
  zIdex: '1000'
};

const linkStyle = {
  color: 'white',
  // padding: '10px',
  textDecoration: 'none',
  display: 'block',
  textAlign: 'center',
};

export default Header;
