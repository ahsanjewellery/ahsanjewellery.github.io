import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const categories = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets'];

export default function Shop() {
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('featured');

  const products = useMemo(() => {
    const filtered = category === 'All' ? [...productsData] : productsData.filter((p) => p.category === category);
    if (sort === 'low') filtered.sort((a, b) => a.price - b.price);
    if (sort === 'high') filtered.sort((b, a) => a.price - b.price); // Fixed sort order logic for high to low
    return filtered;
  }, [category, sort]);

  return (
    <>
      <style>{`
        .shop-page {
          padding: 50px 20px 90px;
          max-width: 1300px;
          margin: 0 auto;
        }

        .shop-hero {
          text-align: center;
          margin-bottom: 50px;
        }

        .shop-hero .eyebrow {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #777;
          display: block;
          margin-bottom: 10px;
        }

        .shop-hero h1 {
          font-size: 42px;
          font-weight: 400;
          margin: 0 0 12px;
          color: #111;
        }

        .shop-hero p {
          color: #666;
          font-size: 15px;
          margin: 0;
        }

        .shop-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 25px;
          border-bottom: 1px solid #eaeaea;
          padding-bottom: 20px;
        }

        .filter-tabs {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .filter-tabs button {
          background: #f7f7f7;
          border: 1px solid #e0e0e0;
          padding: 8px 16px;
          font-size: 13px;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.2s ease;
          color: #333;
        }

        .filter-tabs button:hover {
          border-color: #111;
        }

        .filter-tabs button.active {
          background: #111;
          color: #fff;
          border-color: #111;
        }

        .shop-toolbar label {
          font-size: 13px;
          color: #555;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .shop-toolbar select {
          padding: 8px 12px;
          border: 1px solid #ddd;
          background: #fff;
          border-radius: 4px;
          font-size: 13px;
          outline: none;
          cursor: pointer;
        }

        .shop-count {
          font-size: 13px;
          color: #777;
          margin-bottom: 25px;
        }

        .shop-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 40px 25px;
          margin-bottom: 70px;
        }

        .shop-note {
          background: #f9f6f0;
          text-align: center;
          padding: 50px 20px;
          border-radius: 8px;
          margin-top: 40px;
        }

        .shop-note .eyebrow {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #777;
          display: block;
          margin-bottom: 8px;
        }

        .shop-note h2 {
          font-size: 28px;
          font-weight: 400;
          margin: 0 0 12px;
          color: #111;
        }

        .shop-note p {
          color: #666;
          font-size: 14px;
          max-width: 500px;
          margin: 0 auto 20px;
        }

        .btn-dark {
          background: #111;
          color: #fff;
          padding: 12px 24px;
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 4px;
          display: inline-block;
          transition: background 0.2s;
        }

        .btn-dark:hover {
          background: #333;
        }

        @media (max-width: 768px) {
          .shop-toolbar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="shop-page">
        <div className="shop-hero">
          <div className="container">
            <span className="eyebrow">The collection</span>
            <h1 className="serif">Jewellery, considered.</h1>
            <p>Discover modern pieces designed to live with you, season after season.</p>
          </div>
        </div>

        <div className="container shop-content">
          <div className="shop-toolbar">
            <div className="filter-tabs">
              {categories.map((item) => (
                <button 
                  key={item} 
                  className={category === item ? 'active' : ''} 
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <label>
              Sort{' '}
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
              </select>
            </label>
          </div>

          <div className="shop-count">{products.length} pieces</div>

          <div className="shop-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="shop-note">
            <span className="eyebrow">Need help choosing?</span>
            <h2 className="serif">Talk to our jewellery concierge.</h2>
            <p>Tell us what you're looking for and we'll help you find a piece that feels right.</p>
            <Link to="/contact" className="btn-dark">Contact us</Link>
          </div>
        </div>
      </div>
    </>
  );
}