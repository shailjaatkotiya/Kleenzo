import React, { useState } from 'react';
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

export default Header;
