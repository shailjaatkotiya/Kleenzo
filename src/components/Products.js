import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const productList = [
  {
    name: 'Kleenzo Washing Liquid Detergent',
    shortName: 'Washing Liquid',
    tag: 'Laundry detergent',
    prices: [
      { size: '1L', mrp: 'Rs. 199', offerPrice: 'Rs. 120' },
      { size: '5L', mrp: 'Rs. 999', offerPrice: 'Rs. 550' },
    ],
    description:
      'A premium liquid detergent for washing machines and bucket wash. It helps remove stains, brighten clothes, soften fabrics, and leave a long-lasting jasmine freshness.',
    benefits: ['Deep clean', 'Fabric protection', 'Machine and bucket wash'],
    images: ['/fabric-liquid-new.web.jpg', '/3.web.jpg', '/4.web.jpg', '/5.web.jpg', '/6.web.jpg'],
  },
  {
    name: 'Kleenzo Lime Dishwash Gel',
    shortName: 'Dishwash Gel',
    tag: 'Kitchen cleaning',
    prices: [{ size: '5L', mrp: 'Rs. 849', offerPrice: 'Rs. 350' }],
    description:
      'A lime dishwash gel that cuts grease, cleans utensils to a shine, and stays gentle on hands with a balanced everyday-use formula.',
    benefits: ['Tough grease removal', 'Lemon freshness', 'Gentle on hands'],
    images: ['/dishwash-gel.web.jpg', '/1.web.jpg', '/2.web.jpg'],
  },
  {
    name: 'Kleenzo Strawberry Handwash',
    shortName: 'Strawberry Handwash',
    tag: 'Hand hygiene',
    prices: [{ size: '500ml', mrp: 'Contact for MRP', offerPrice: 'Order Now' }],
    description:
      'A strawberry handwash made for clean, fresh-feeling hands with a sweet fragrance, moisturizing feel, and everyday germ protection.',
    benefits: ['99.9% germ protection', 'Soft and gentle', 'Strawberry fragrance'],
    images: ['/strawberry-handwash.web.jpg'],
  },
];

const ProductCarousel = ({ product }) => (
  <div className="product-carousel">
    <Carousel
      showArrows
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      autoPlay
      interval={3500}
    >
      {product.images.map((imgSrc, index) => (
        <div key={imgSrc} className="product-carousel__slide">
          <img src={imgSrc} alt={`${product.name} view ${index + 1}`} className="carousel-image" />
        </div>
      ))}
    </Carousel>
  </div>
);

const ProductCard = ({ product }) => {
  const [selectedPrice, setSelectedPrice] = useState(product.prices[0]);

  const handlePriceChange = (event) => {
    const selectedOption = product.prices.find((priceOption) => priceOption.size === event.target.value);
    setSelectedPrice(selectedOption);
  };

  return (
    <article className="product-card">
      <ProductCarousel product={product} />
      <div className="product-info">
        <p className="product-tag">{product.tag}</p>
        <h3>{product.shortName}</h3>
        <p className="product-description">{product.description}</p>
        <ul className="product-benefits">
          {product.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
        <div className="product-buy-row">
          <label>
            <span>Pack size</span>
            <select onChange={handlePriceChange} value={selectedPrice.size} className="price-selector">
              {product.prices.map((priceOption) => (
                <option key={priceOption.size} value={priceOption.size}>
                  {priceOption.size}
                </option>
              ))}
            </select>
          </label>
          <p className="product-price" aria-label={`${selectedPrice.offerPrice} offer price`}>
            <strong>{selectedPrice.offerPrice}</strong>
            <span>{selectedPrice.mrp}</span>
          </p>
        </div>
        <a
          className="button button--product"
          href={`https://wa.me/918140888900?text=${encodeURIComponent(`I want to order ${product.name} (${selectedPrice.size}).`)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Order {product.shortName}
        </a>
      </div>
    </article>
  );
};

const Products = () => (
  <section className="products-section" id="products">
    <div className="section-heading">
      <p className="eyebrow">Kleenzo products</p>
      <h2>Washing liquid, dishwash, and handwash products made for daily cleaning.</h2>
      <p>
        Choose effective Kleenzo products for laundry, stain removal, utensil shine, fresh hands, fragrance, and gentle everyday use.
      </p>
    </div>
    <div className="product-list">
      {productList.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  </section>
);

export default Products;
