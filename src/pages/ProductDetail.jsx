import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productsData } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Find product by ID
  const product = productsData.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/shop')}>Back to Shop</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <style>{`
        .product-detail-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .product-detail-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }

        @media (min-width: 768px) {
          .product-detail-grid {
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: start;
          }
        }

        .product-image-section {
          position: relative;
          background-color: #f7f7f7;
          overflow: hidden;
          aspect-ratio: 4 / 5;
        }

        .main-product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .detail-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: #111;
          color: #fff;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 6px 12px;
          z-index: 2;
        }

        .product-info-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .detail-category {
          font-size: 0.85rem;
          color: #777;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .detail-title {
          font-size: 2rem;
          font-weight: 400;
          color: #111;
          letter-spacing: 0.02em;
        }

        .detail-price {
          font-size: 1.25rem;
          color: #333;
          font-weight: 500;
        }

        .detail-description {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.6;
          margin-top: 10px;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
          padding: 20px 0;
        }

        .quantity-cart-wrapper {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }

        .quantity-selector {
          display: flex;
          align-items: center;
          border: 1px solid #ddd;
          background: #fff;
        }

        .quantity-selector button {
          background: none;
          border: none;
          padding: 12px 16px;
          cursor: pointer;
          font-size: 1rem;
        }

        .quantity-selector span {
          padding: 0 12px;
          font-weight: 500;
        }

        /* Clean Add to Bag Button (Glitch Fixed) */
        .add-to-bag-btn {
          flex: 1;
          background-color: #111;
          color: #fff;
          border: none;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 16px 24px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          text-shadow: none !important;
          -webkit-font-smoothing: antialiased;
        }

        .add-to-bag-btn:hover {
          background-color: #333;
        }

        .add-to-bag-btn.added {
          background-color: #2e7d32;
        }

        .extra-info {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.85rem;
          color: #666;
        }
      `}</style>

      <div className="product-detail-container">
        <div className="product-detail-grid">
          {/* Left: Image Section */}
          <div className="product-image-section">
            {product.tag && <span className="detail-badge">{product.tag}</span>}
            <img src={product.image} alt={product.title} className="main-product-img" />
          </div>

          {/* Right: Info & Actions */}
          <div className="product-info-section">
            <span className="detail-category">{product.category}</span>
            <h1 className="detail-title">{product.title}</h1>
            <div className="detail-price">Rs. {product.price.toLocaleString()}</div>
            
            <p className="detail-description">{product.description}</p>

            <div className="quantity-cart-wrapper">
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>

              <button 
                className={`add-to-bag-btn ${added ? 'added' : ''}`} 
                onClick={handleAddToCart}
              >
                {added ? 'ADDED TO BAG' : 'ADD TO BAG'}
              </button>
            </div>

            <div className="extra-info">
              <p>✓ Premium Quality & Certified Material</p>
              <p>✓ Free Shipping Across Pakistan</p>
              <p>✓ Secure Checkout & WhatsApp Support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}