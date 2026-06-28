import React from 'react';
import Contact from './Contact';

const featureGroups = [
  {
    title: 'Phenyl disinfectant',
    image: '/kleenzo-phenyl.png',
    copy: 'For daily floor hygiene with a clean finish, long-lasting freshness, and dependable germ protection.',
    items: ['Kills 99.9% germs', 'Fresh everyday fragrance', 'Available in 5, 10, and 20 LTR packs'],
  },
  {
    title: 'Floor and toilet care',
    image: '/kleenzo-floor-cleaner.png',
    copy: 'For homes and businesses that need deep floor cleaning, shine, and focused bathroom cleaning products.',
    items: ['Floor cleaner starts at Rs. 250', 'Toilet cleaner starts at Rs. 200', 'Clear price-per-liter options'],
  },
];

const Testimonials = () => (
  <>
    <section className="features-section">
      <div className="section-heading">
        <p className="eyebrow">Why Kleenzo</p>
        <h2>Focused cleaning benefits customers can understand quickly.</h2>
      </div>
      <div className="feature-grid">
        {featureGroups.map((group) => (
          <article className="feature-card" key={group.title}>
            <img className="feature-card__image feature-card__image--product" src={group.image} alt={`Kleenzo ${group.title}`} loading="lazy" />
            <h3>{group.title}</h3>
            <p>{group.copy}</p>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
    <Contact compact />
  </>
);

export default Testimonials;
