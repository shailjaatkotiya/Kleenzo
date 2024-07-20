import React from 'react';

const productList = [
  { name: 'Lemon Fragrant Dishwasher', price: '250 rs', imgSrc: './1.png'},
  { name: 'Rose Fragrant Washing Liquid', price: '250 rs', imgSrc: './2.png' },
  { name: 'Lily Fragrant Washing Liquid', price: '250 rs', imgSrc: './3.png' },
];

const Products = () => (
  <section style={{margin: '20px 0px' , padding: '20px' }}>
    <h2>Our Products</h2>
    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
      {productList.map((product, index) => (
        <div key={index} style={{ border: '1px solid #7776B3', padding: '10px', borderRadius: '5px' }}>
          <img src={product.imgSrc} alt={product.name} style={{ width: '-webkit-fill-available', height: '150px', objectFit: 'cover' }} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Products;
