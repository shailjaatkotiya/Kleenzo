import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const productList = [
  {
    name: 'Fabric Liquid',
    prices: [
      { size: '1L', mrp: 'Rs. 199', offerPrice: 'Rs. 120' },
      { size: '5L', mrp: 'Rs. 999', offerPrice: 'Rs. 550' }
    ],
    description: 'Choose our premium laundry liquid for vibrant, fresh-looking clothes that feel soft and last longer. Its advanced formula brightens, gently cares for fabrics, and effectively removes tough stains, all while leaving a long-lasting jasmine scent. Enjoy cleaner, fresher, and brighter laundry with every wash!',
    images: ['./1.jpeg', './1-1.jpeg', './1-2.jpeg', './1-3.jpeg']
  },
  {
    name: 'Dishwash Gel',
    prices: [
      { size: '5L', mrp: '849 Rs', offerPrice: '350 Rs' }
    ],
    description: 'Our lime dishwash gel cleans and shines utensils while maintaining a balanced pH, making it gentle on your hands. It effectively removes grease in just one wash, prioritizing skin health as well.',
    images: ['./2.jpeg', './2-1.jpeg']
  },
];

const ProductCarousel = ({ product }) => (
  <div className="product-carousel">
    <Carousel
      showArrows={false}
      infiniteLoop={false}
      showThumbs={false}
      autoPlay={true}
      interval={3000}
    >
      {product.images.map((imgSrc, index) => (
        <div key={index} className='container'>
          <img src={imgSrc} alt={`${product.name} - ${index + 1}`} className="carousel-image image" />
        </div>
      ))}
    </Carousel>
  </div>
);

const ProductCard = ({ product }) => {
  const [selectedPrice, setSelectedPrice] = useState(product.prices[0]);

  const handlePriceChange = (e) => {
    const selectedOption = product.prices.find(priceOption => priceOption.size === e.target.value);
    setSelectedPrice(selectedOption);
  };

  return (
    <div className="product-card">
      <ProductCarousel product={product} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <select onChange={(e) => handlePriceChange(e, product)} value={selectedPrice.size} className="price-selector">
          {product.prices.map((priceOption, index) => (
            <option key={index} value={priceOption.size}>
              {priceOption.size}
            </option>
          ))}
        </select>
        <p className='productPrice'>
          <span style={{ color: '#5A639C', fontWeight: 'bold'  }}>{selectedPrice.offerPrice}</span>
          <span style={{ textDecoration: 'line-through', color: '#E2BBE9', marginLeft: '10px'  }}>{selectedPrice.mrp}</span>
        </p>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );
};

const Products = () => (
  <section className="products-section">
    <h2>Our Products</h2>
    <div className="product-list">
      {productList.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  </section>
);

export default Products;
