import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const navigate = useNavigate();

  if (!product) return null;

  const originalPrice = product.originalPrice || product.price || 0;
  const discountedPrice = product.price || Math.round(originalPrice * 0.75);
  const mainImage = product.image || 'https://placehold.co/400x500?text=No+Image';
  const imagesList = (product.variants && product.variants.length > 0)
    ? product.variants.map(v => v.image || mainImage)
    : [mainImage];

  const [selectedImage, setSelectedImage] = useState(mainImage);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('bronze');
  const [isDescOpen, setIsDescOpen] = useState(false);
  const [isCareOpen, setIsCareOpen] = useState(false);

  const productId = product.id || product._id;

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
        }

        .maria-info-container {
          padding-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-align: left;
        }

        .maria-product-title {
          font-size: 14px;
          font-weight: 500;
          color: #222222;
          margin: 0;
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
        onClick={() => navigate(`/product/${productId}`)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="maria-image-container">
          {(product.tag || product.discountPercent) && (
            <span className="maria-badge">
              {product.tag || `${product.discountPercent}% OFF`}
            </span>
          )}

          <img 
            src={mainImage} 
            alt={product.name || product.title} 
            className="maria-product-img"
            style={{ transform: isHovered ? 'scale(1.03)' : 'scale(1)' }}
          />

          <div 
            className="maria-hover-bar"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(10px)'
            }}
          >
            <span className="maria-view-text" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              View Details <span>&rarr;</span>
            </span>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(mainImage);
                  setShowQuickView(true);
                }}
                style={{ cursor: 'pointer', padding: '4px' }}
                title="Quick View"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>

              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  alert('Wishlist mein add ho gaya hai!');
                }}
                style={{ cursor: 'pointer', padding: '4px' }}
                title="Wishlist"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="maria-info-container">
          <h3 className="maria-product-title">
            {product.name || product.title}
          </h3>
          
          <div className="maria-price-box">
            {originalPrice > discountedPrice && (
              <span className="maria-original-price">
                Rs.{Number(originalPrice).toLocaleString()}
              </span>
            )}
            <span className="maria-discounted-price">
              Rs.{Number(discountedPrice).toLocaleString()}
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
              maxWidth: '900px',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'row',
              position: 'relative',
              overflow: 'hidden',
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
                zIndex: 10
              }}
            >
              ✕
            </button>

            <div style={{ flex: '1', backgroundColor: '#f9f9f9', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <img 
                src={selectedImage} 
                alt={product.name || product.title} 
                style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
              />
            </div>

            <div style={{ flex: '1', padding: '30px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111', margin: 0 }}>
                {product.name || product.title}
              </h2>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '18px', fontWeight: '700', color: '#111' }}>
                  Rs.{Number(discountedPrice).toLocaleString()}
                </span>
                {originalPrice > discountedPrice && (
                  <span style={{ fontSize: '14px', textDecoration: 'line-through', color: '#888' }}>
                    Rs.{Number(originalPrice).toLocaleString()}
                  </span>
                )}
              </div>

              {imagesList.length > 1 && (
                <div style={{ display: 'flex', gap: '8px' }}>
                  {imagesList.map((img, idx) => (
                    <img 
                      key={idx}
                      src={img}
                      onClick={() => setSelectedImage(img)}
                      style={{
                        width: '50px',
                        height: '50px',
                        objectFit: 'cover',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        border: selectedImage === img ? '2px solid #111' : '1px solid #ddd'
                      }}
                    />
                  ))}
                </div>
              )}

              <div>
                <span style={{ fontSize: '12px', fontWeight: '600', color: '#333', display: 'block', marginBottom: '6px' }}>
                  QUANTITY
                </span>
                <div style={{ display: 'inline-flex', border: '1px solid #ddd', borderRadius: '4px', overflow: 'hidden' }}>
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ background: '#f9f9f9', border: 'none', padding: '8px 14px', cursor: 'pointer' }}>-</button>
                  <span style={{ padding: '8px 16px', fontSize: '14px', fontWeight: '500' }}>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} style={{ background: '#f9f9f9', border: 'none', padding: '8px 14px', cursor: 'pointer' }}>+</button>
                </div>
              </div>

              <button 
                onClick={() => {
                  alert(`${quantity} item(s) cart mein add ho gaye hain!`);
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
                  marginTop: '10px'
                }}
              >
                🛒 ADD TO CART
              </button>

              <div style={{ borderTop: '1px solid #eee', paddingTop: '12px' }}>
                <div onClick={() => setIsDescOpen(!isDescOpen)} style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', fontSize: '13px', fontWeight: '500' }}>
                  <span>Description</span>
                  <span>{isDescOpen ? '−' : '+'}</span>
                </div>
                {isDescOpen && (
                  <p style={{ fontSize: '12px', color: '#666', marginTop: '8px', lineHeight: '1.5' }}>
                    {product.description || 'Premium quality jewellery piece.'}
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