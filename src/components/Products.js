import React, { useState } from 'react';

const productList = [
  {
    name: 'Kleenzo Phenyl',
    shortName: 'Phenyl',
    tag: 'Disinfectant cleaner',
    prices: [
      { size: '5 LTR', price: 130, pricePerLiter: 26 },
      { size: '10 LTR', price: 240, pricePerLiter: 24 },
      { size: '20 LTR', price: 480, pricePerLiter: 24 },
    ],
    description:
      'A disinfectant phenyl for clean floors, long-lasting freshness, and everyday germ protection across homes and workplaces.',
    benefits: ['Disinfectant action', 'Long-lasting freshness', 'Kills 99.9% germs'],
    image: '/kleenzo-phenyl.png',
  },
  {
    name: 'Kleenzo Floor Cleaner',
    shortName: 'Floor Cleaner',
    tag: 'Deep cleaning and shine',
    prices: [
      { size: '5 LTR', price: 250, pricePerLiter: 50 },
      { size: '10 LTR', price: 450, pricePerLiter: 45 },
      { size: '20 LTR', price: 900, pricePerLiter: 45 },
    ],
    description:
      'A floor cleaner made for deep cleaning, bright shine, and a fresh lemon cleaning experience for regular floor care.',
    benefits: ['Deep cleaning', 'Fresh lemon feel', 'Shine finish'],
    image: '/kleenzo-floor-cleaner.png',
  },
  {
    name: 'Kleenzo Toilet Cleaner',
    shortName: 'Toilet Cleaner',
    tag: 'Bathroom cleaning',
    prices: [
      { size: '5 LTR', price: 200, pricePerLiter: 40 },
      { size: '10 LTR', price: 380, pricePerLiter: 38 },
      { size: '20 LTR', price: 750, pricePerLiter: 37.5 },
    ],
    description:
      'A toilet cleaner formulated to remove stains, support hygiene, and keep bathrooms fresh through routine cleaning.',
    benefits: ['Removes stains', 'Hygienic cleaning', 'Fresh bathroom care'],
    image: '/kleenzo-toilet-cleaner.png',
  },
];

const formatCurrency = (amount) => `Rs. ${amount}`;

const PriceListTable = () => (
  // <div className="price-list-panel" aria-label="Kleenzo product price list">
    <div className="price-list-panel__content">
      <p className="eyebrow">Product price list</p>
      <h3>Bulk packs for daily cleaning needs.</h3>
      <div className="price-table-wrap">
        <table className="price-table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Qty.</th>
              <th scope="col">Price</th>
              <th scope="col">Price per liter</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) =>
              product.prices.map((priceOption, index) => (
                <tr key={`${product.shortName}-${priceOption.size}`}>
                  {index === 0 && (
                    <th scope="rowgroup" rowSpan={product.prices.length}>
                      {product.shortName}
                    </th>
                  )}
                  <td>{priceOption.size}</td>
                  <td>{formatCurrency(priceOption.price)}</td>
                  <td>{formatCurrency(priceOption.pricePerLiter)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  // </div>
);

const ProductCard = ({ product }) => {
  const [selectedPrice, setSelectedPrice] = useState(product.prices[0]);

  const handlePriceChange = (event) => {
    const selectedOption = product.prices.find((priceOption) => priceOption.size === event.target.value);
    setSelectedPrice(selectedOption);
  };

  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={`${product.name} bottle`} loading="lazy" />
      </div>
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
          <p className="product-price" aria-label={`${formatCurrency(selectedPrice.price)} price`}>
            <strong>{formatCurrency(selectedPrice.price)}</strong>
            <span>{formatCurrency(selectedPrice.pricePerLiter)} / LTR</span>
          </p>
        </div>
        <a
          className="button button--product"
          href={`https://wa.me/919979555966?text=${encodeURIComponent(
            `I want to order ${product.name} (${selectedPrice.size}) for ${formatCurrency(selectedPrice.price)}.`
          )}`}
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
      <h2>Phenyl, floor cleaner, and toilet cleaner packs for homes and businesses.</h2>
      <p>
        Choose 5 LTR, 10 LTR, or 20 LTR packs with clear per-liter pricing for regular cleaning routines.
      </p>
    </div>
    <PriceListTable />
    <div className="product-list">
      {productList.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  </section>
);

export default Products;
