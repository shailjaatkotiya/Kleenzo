import React from 'react';
import Contact from './Contact';

const featureGroups = [
  {
    title: 'Fabric liquid detergent',
    image: '/6.web.jpg',
    copy: 'For clothes that need stain removal, brightness, softness, and a fresh jasmine fragrance after every wash.',
    items: ['Machine wash and bucket wash friendly', 'Helps preserve fabric feel', 'Built for daily family laundry'],
  },
  {
    title: 'Lime dishwash gel',
    image: '/2.web.jpg',
    copy: 'For utensils that need fast grease removal, a sparkling finish, and a refreshing lime fragrance.',
    items: ['Cuts tough oily residue', 'Balanced for regular hand use', 'Leaves dishes clean without harsh residue'],
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
            <img className="feature-card__image" src={group.image} alt={`Kleenzo ${group.title}`} loading="lazy" />
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
