import React from 'react';

const Footer = () => (
  <footer style={footerStyle}>
    <p>© 2024 Kleenzo. All rights reserved.</p>
    <div>
      <a href="mailto:Kleenzosurfactants@gmail.com" style={linkStyle}>Kleenzosurfactants@gmail.com</a>
      <div className='contacts'>
        <a href="tel:9904965415" style={linkStyle}>9904965415</a>
        <a href="tel:8140888900" style={linkStyle}>8140888900</a>
      </div>
    </div>
  </footer>
);

const footerStyle = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: '#1ebc59 ',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  zIndex: 1000,
};

const linkStyle = {
  color: '#1ebc59 ',
  margin: '0 10px',
  textDecoration: 'none',
};

export default Footer;
