import React from 'react';

const Contact = () => (
  <section style={{ margin: '20px 0px' , padding: '20px' }}>
    <h2>Contact Us</h2>
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required />
      
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />
      
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" required></textarea>
      
      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#7776B3', color: '#fff', border: 'none', borderRadius: '5px' }}>Send</button>
    </form>
    <p>Phone: 8140888900</p>
    <p>Kleenzosurfactants@gmail.com</p>
  </section>
);

export default Contact;
