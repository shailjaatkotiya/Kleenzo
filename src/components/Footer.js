import React from 'react';

const Footer = () => (
  <footer style={footerStyle}>
    <p>© 2024 Kleenzo. All rights reserved.</p>
    <div>
      <a href="mailto:contact@kleenzo.com" style={linkStyle}>Email Us</a>
      <a href="tel:+1234567890" style={linkStyle}>Call Us</a>
    </div>
  </footer>
);

const footerStyle = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: '#5A639C',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  zIndex: 1000,
};

const linkStyle = {
  color: '#E2BBE9',
  margin: '0 10px',
  textDecoration: 'none',
};

export default Footer;
