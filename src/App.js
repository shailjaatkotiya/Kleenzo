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
    title: 'Kleenzo | Detergent Liquid, Dishwash Gel and Handwash',
    description:
      'Shop Kleenzo detergent liquid, lime dishwash gel, and strawberry handwash for fresh laundry, sparkling utensils, clean hands, and everyday cleaning.',
  },
  '/about': {
    title: 'About Kleenzo | Reliable Home Cleaning Products',
    description:
      'Learn about Kleenzo, a home cleaning brand focused on effective detergent liquid, dishwash gel, quality ingredients, and responsible cleaning.',
  },
  '/products': {
    title: 'Kleenzo Products | Detergent Liquid, Dishwash Gel and Handwash',
    description:
      'Explore Kleenzo fabric detergent liquid, lime dishwash gel, and strawberry handwash with sizes, benefits, and WhatsApp ordering.',
  },
  '/contact': {
    title: 'Contact Kleenzo | Order Detergent and Dishwash Gel',
    description:
      'Contact Kleenzo on WhatsApp to order detergent liquid, fabric wash, and dishwash gel for clean clothes and sparkling utensils.',
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
    'Kleenzo makes detergent liquid and dishwash gel for fresh laundry, stain removal, and everyday home cleaning.',
  email: 'Kleenzosurfactants@gmail.com',
  telephone: '+91-8140888900',
  sameAs: [],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'Kleenzo Washing Liquid Detergent',
        description:
          'Fabric detergent liquid with brighteners, softeners, fabric conditioners, stain removal, and jasmine fragrance.',
        category: 'Laundry Detergent',
        brand: { '@type': 'Brand', name: 'Kleenzo' },
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'Kleenzo Lime Dishwash Gel',
        description:
          'Lime dishwash gel for grease removal, sparkling utensils, fresh fragrance, and gentle hand care.',
        category: 'Dishwashing Detergent',
        brand: { '@type': 'Brand', name: 'Kleenzo' },
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'Kleenzo Strawberry Handwash',
        description:
          'Strawberry handwash for clean, fresh-feeling hands with sweet fragrance, moisturizing feel, and everyday germ protection.',
        category: 'Hand Wash',
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
      'Kleenzo detergent, detergent liquid, laundry liquid, fabric liquid detergent, dishwash gel, lime dishwash gel, strawberry handwash, handwash, stain remover detergent, home cleaning products'
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
