import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('bronze');
  const [isDescOpen, setIsDescOpen] = useState(false);
  const [isCareOpen, setIsCareOpen] = useState(false);
  
  const navigate = useNavigate();

  const originalPrice = product.price;
  const discountedPrice = Math.round(originalPrice * 0.75);
  const imagesList = product.images || [product.image, product.image, product.image];

  return (
    <>
      <style>{`
        .maria-product-card {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          background: #ffffff;
          width: 100%;
          box-sizing: border-box;
        }

        .maria-image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          background-color: #f7f7f7;
          border-radius: 12px;
          overflow: hidden;
        }

        .maria-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background-color: #d32f2f;
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 4px;
          z-index: 2;
          letter-spacing: 0.05em;
        }

        .maria-product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          display: block;
        }

        .maria-product-card:hover .maria-product-img {
          transform: scale(1.03);
        }

        /* Hover Action Bar */
        .maria-hover-bar {
          position: absolute;
          bottom: 12px;
          left: 12px;
          right: 12px;
          background-color: rgba(255, 255, 255, 0.95);
          border-radius: 8px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 3;
        }

        .maria-product-card:hover .maria-hover-bar {
          opacity: 1;
          transform: translateY(0);
        }

        .maria-view-text {
          font-size: 13px;
          font-weight: 500;
          color: #111;
          letter-spacing: 0.02em;
        }

        .maria-icons {
          display: flex;
          gap: 12px;
          color: #333;
          font-size: 15px;
        }

        /* Product Info */
        .maria-info-container {
          padding-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-align: left;
        }

        .maria-product-title {
          font-size: 14px;
          font-weight: 400;
          color: #222222;
          margin: 0;
          letter-spacing: 0.01em;
        }

        .maria-price-box {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
        }

        .maria-original-price {
          color: #888888;
          text-decoration: line-through;
        }

        .maria-discounted-price {
          color: #111111;
          font-weight: 600;
        }
      `}</style>

      <div 
        className="maria-product-card"
        onClick={() => navigate(`/product/${product.id}`)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="maria-image-container">
          {product.tag && (
            <span className="maria-badge">
              {product.tag}
            </span>
          )}

          <img 
            src={product.image} 
            alt={product.title} 
            className="maria-product-img"
            style={{
              transform: isHovered ? 'scale(1.03)' : 'scale(1)'
            }}
          />

          {/* Hover Action Bar - Fixed spacing and alignment */}
          <div 
            className="maria-hover-bar"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(10px)'
            }}
          >
            {/* View Details */}
            <span className="maria-view-text" style={{ display: 'flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap' }}>
              View Details <span style={{ fontSize: '14px' }}>&rarr;</span>
            </span>
            
            {/* Icons Group (Eye + Heart) */}
            <div className="maria-icons" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* Quick View Eye Icon */}
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowQuickView(true);
                }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  cursor: 'pointer',
                  padding: '4px'
                }}
                title="Quick View"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>

              {/* Wishlist Heart Icon */}
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  alert('Added to wishlist!');
                }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  cursor: 'pointer',
                  padding: '4px'
                }}
                title="Wishlist"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Product Title & Prices */}
        <div className="maria-info-container">
          <h3 className="maria-product-title">
            {product.title}
          </h3>
          
          <div className="maria-price-box">
            <span className="maria-original-price">
              Rs.{originalPrice.toLocaleString()}
            </span>
            <span className="maria-discounted-price">
              Rs.{discountedPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* QUICK VIEW MODAL */}
      {showQuickView && (
        <div 
          onClick={() => setShowQuickView(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
            boxSizing: 'border-box'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#fff',
              width: '100%',
              maxWidth: '950px',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'row',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              maxHeight: '90vh'
            }}
          >
            <button 
              onClick={() => setShowQuickView(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'transparent',
                border: 'none',
                fontSize: '18px',
                cursor: 'pointer',
                zIndex: 10,
                color: '#333'
              }}
            >
              ✕
            </button>

            {/* Left Image */}
            <div style={{ flex: '1', backgroundColor: '#f9f9f9', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '30px' }}>
              <img 
                src={selectedImage} 
                alt={product.title} 
                style={{ width: '100%', maxHeight: '450px', objectFit: 'contain' }}
              />
            </div>

            {/* Right Details */}
            <div style={{ flex: '1', padding: '30px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '500', color: '#111', margin: 0 }}>
                  {product.title}
                </h2>
                <span style={{ fontSize: '11px', backgroundColor: '#f0f0f0', padding: '4px 8px', borderRadius: '4px', color: '#333', fontWeight: '500' }}>
                  In Stock
                </span>
              </div>

              <span style={{ fontSize: '12px', color: '#777', marginTop: '-10px' }}>
                OPERA-PK-{product.id}
              </span>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '12px' }}>
                <span style={{ fontSize: '18px', fontWeight: '600', color: '#111' }}>
                  Rs.{discountedPrice.toLocaleString()}
                </span>
                <span style={{ fontSize: '12px', color: '#555' }}>
                  3-5 BUSINESS DAYS
                </span>
              </div>

              {/* Thumbnails */}
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                {imagesList.map((img, idx) => (
                  <img 
                    key={idx}
                    src={img}
                    onClick={() => setSelectedImage(img)}
                    style={{
                      width: '50px',
                      height: '60px',
                      objectFit: 'cover',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      border: selectedImage === img ? '2px solid #111' : '1px solid #ddd'
                    }}
                  />
                ))}
              </div>

              {/* Color */}
              <div>
                <span style={{ fontSize: '12px', fontWeight: '600', color: '#333', display: 'block', marginBottom: '6px' }}>
                  COLOR: <span style={{ textTransform: 'uppercase', fontWeight: '400' }}>{selectedColor}</span>
                </span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div 
                    onClick={() => setSelectedColor('black')}
                    style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#111', cursor: 'pointer', border: selectedColor === 'black' ? '2px solid #000' : '2px solid transparent', outline: '1px solid #ccc' }}
                  />
                  <div 
                    onClick={() => setSelectedColor('bronze')}
                    style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#c68b59', cursor: 'pointer', border: selectedColor === 'bronze' ? '2px solid #000' : '2px solid transparent', outline: '1px solid #ccc' }}
                  />
                </div>
              </div>

              {/* Quantity */}
              <div>
                <span style={{ fontSize: '12px', fontWeight: '600', color: '#333', display: 'block', marginBottom: '6px' }}>
                  QUANTITY
                </span>
                <div style={{ display: 'inline-flex', border: '1px solid #ddd', borderRadius: '4px', overflow: 'hidden', alignItems: 'center' }}>
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ background: '#f9f9f9', border: 'none', padding: '8px 14px', cursor: 'pointer' }}>-</button>
                  <span style={{ padding: '0 16px', fontSize: '14px', fontWeight: '500' }}>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} style={{ background: '#f9f9f9', border: 'none', padding: '8px 14px', cursor: 'pointer' }}>+</button>
                </div>
              </div>

              {/* Add to Cart */}
              <button 
                onClick={() => {
                  alert(`Added ${quantity} item(s) to cart!`);
                  setShowQuickView(false);
                }}
                style={{
                  backgroundColor: '#111',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '14px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  letterSpacing: '0.05em',
                  marginTop: '10px'
                }}
              >
                🛒 ADD TO CART
              </button>

              {/* Description Accordion */}
              <div style={{ borderTop: '1px solid #eee', paddingTop: '12px' }}>
                <div onClick={() => setIsDescOpen(!isDescOpen)} style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', fontSize: '13px', fontWeight: '500', color: '#333' }}>
                  <span>Description</span>
                  <span>{isDescOpen ? '−' : '+'}</span>
                </div>
                {isDescOpen && (
                  <p style={{ fontSize: '12px', color: '#666', marginTop: '8px', lineHeight: '1.5' }}>
                    Exquisitely crafted luxury jewellery piece featuring premium sparkling stones and high-grade finish designed for special occasions.
                  </p>
                )}
              </div>

              {/* Product Care Accordion */}
              <div style={{ borderTop: '1px solid #eee', paddingTop: '12px', paddingBottom: '10px' }}>
                <div onClick={() => setIsCareOpen(!isCareOpen)} style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', fontSize: '13px', fontWeight: '500', color: '#333' }}>
                  <span>Product Care</span>
                  <span>{isCareOpen ? '−' : '+'}</span>
                </div>
                {isCareOpen && (
                  <p style={{ fontSize: '12px', color: '#666', marginTop: '8px', lineHeight: '1.5' }}>
                    Keep away from moisture, perfumes, and harsh chemicals. Store in a dry fabric pouch after use.
                  </p>
                )}
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}