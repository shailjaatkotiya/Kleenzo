import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import './styles.css';

const seoByPath = {
  '/': {
    title: 'Kleenzo | Phenyl, Floor Cleaner and Toilet Cleaner',
    description:
      'Shop Kleenzo phenyl, floor cleaner, and toilet cleaner in 5 LTR, 10 LTR, and 20 LTR packs with clear price-per-liter details.',
  },
  '/about': {
    title: 'About Kleenzo | Reliable Home Cleaning Products',
    description:
      'Learn about Kleenzo, a home cleaning brand focused on phenyl, floor cleaner, toilet cleaner, and dependable everyday hygiene.',
  },
  '/products': {
    title: 'Kleenzo Products | Price List for Phenyl and Cleaners',
    description:
      'Explore Kleenzo phenyl, floor cleaner, and toilet cleaner prices for 5 LTR, 10 LTR, and 20 LTR packs with WhatsApp ordering.',
  },
  '/contact': {
    title: 'Contact Kleenzo | Order Phenyl, Floor Cleaner and Toilet Cleaner',
    description:
      'Contact Kleenzo on WhatsApp to order phenyl, floor cleaner, and toilet cleaner packs for home and business cleaning.',
  },
};

const upsertMeta = (name, content, attr = 'name') => {
  let tag = document.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const upsertLink = (rel, href) => {
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kleenzo',
  description:
    'Kleenzo makes phenyl, floor cleaner, and toilet cleaner for clean homes, healthy spaces, and everyday hygiene.',
  email: 'info@kleenzo.in',
  telephone: '+91-9979555966',
  slogan: 'Clean home, healthy life',
  sameAs: [],
  makesOffer: [
    {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '130',
      itemOffered: {
        '@type': 'Product',
        name: 'Kleenzo Phenyl',
        description:
          'Disinfectant phenyl with long-lasting freshness and everyday germ protection.',
        category: 'Disinfectant Cleaner',
        brand: { '@type': 'Brand', name: 'Kleenzo' },
      },
    },
    {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '250',
      itemOffered: {
        '@type': 'Product',
        name: 'Kleenzo Floor Cleaner',
        description:
          'Floor cleaner for deep cleaning, shine, and fresh regular floor care.',
        category: 'Floor Cleaner',
        brand: { '@type': 'Brand', name: 'Kleenzo' },
      },
    },
    {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '200',
      itemOffered: {
        '@type': 'Product',
        name: 'Kleenzo Toilet Cleaner',
        description:
          'Toilet cleaner for stain removal, hygiene, and fresh bathroom care.',
        category: 'Toilet Cleaner',
        brand: { '@type': 'Brand', name: 'Kleenzo' },
      },
    },
  ],
};

const Seo = () => {
  const { pathname } = useLocation();
  const seo = seoByPath[pathname] || seoByPath['/'];

  React.useEffect(() => {
    const canonicalUrl = `${window.location.origin}${pathname}`;
    document.title = seo.title;
    upsertMeta('description', seo.description);
    upsertMeta(
      'keywords',
      'Kleenzo phenyl, Kleenzo floor cleaner, Kleenzo toilet cleaner, phenyl price, floor cleaner price, toilet cleaner price, 5 LTR cleaner, 10 LTR cleaner, 20 LTR cleaner, home cleaning products'
    );
    upsertMeta('robots', 'index, follow');
    upsertMeta('og:title', seo.title, 'property');
    upsertMeta('og:description', seo.description, 'property');
    upsertMeta('og:type', 'website', 'property');
    upsertMeta('og:url', canonicalUrl, 'property');
    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', seo.title);
    upsertMeta('twitter:description', seo.description);
    upsertLink('canonical', canonicalUrl);

    let script = document.querySelector('script[data-schema="kleenzo"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.schema = 'kleenzo';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [pathname, seo]);

  return null;
};

const App = () => (
  <Router>
    <Seo />
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
