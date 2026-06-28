import React from 'react';

const Contact = ({ compact = false }) => (
  <section className={`contact-section ${compact ? 'contact-section--compact' : ''}`}>
    <div>
      <p className="eyebrow">Order Kleenzo</p>
      <h2>Ready to buy phenyl, floor cleaner, or toilet cleaner?</h2>
      <p>
        Message us on WhatsApp for product availability, pack sizes, pricing, and delivery details.
      </p>
    </div>
    <div className="contact-actions">
      <a
        href="https://wa.me/919979555966"
        target="_blank"
        rel="noopener noreferrer"
        className="button button--primary"
      >
        Contact on WhatsApp
      </a>
      <a href="mailto:info@kleenzo.in" className="button button--secondary">
        Email Kleenzo
      </a>
    </div>
  </section>
);

export default Contact;
