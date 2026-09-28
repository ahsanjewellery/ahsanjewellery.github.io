import React, { useState, useEffect } from 'react';
import ProductCard from '../components/product/ProductCard';
import { productsData } from '../data/products';

// =========================
// HERO COMPONENT (Merged inside)
// =========================
const heroImages = ['Hero', 'Hero1', 'Hero2'];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-section">
      {heroImages.map((name, index) => (
        <div 
          key={index} 
          className="hero-slide" 
          style={{ 
            display: index === currentIndex ? 'block' : 'none',
            width: '100%' 
          }}
        >
          <HeroSlide imageName={name} />
        </div>
      ))}
    </div>
  );
}

function HeroSlide({ imageName }) {
  const extensions = ['.jpg', '.avif', '.png', '.webp', ''];
  const [extIndex, setExtIndex] = useState(0);

  const currentSrc = `/images/Hero/${imageName}${extensions[extIndex]}`;

  const handleError = () => {
    if (extIndex < extensions.length - 1) {
      setExtIndex(extIndex + 1);
    }
  };

  return (
    <div className="hero-banner">
      <img 
        src={currentSrc} 
        alt={imageName} 
        onError={handleError}
      />
    </div>
  );
}

// =========================
// HOME COMPONENT
// =========================
export default function Home() {
  const [columns, setColumns] = useState(3);
  const [showFilter, setShowFilter] = useState(false);
  const [sortOption, setSortOption] = useState('default');
  
  const [activeTab, setActiveTab] = useState('NEW ARRIVALS');
  const trendingCategories = [
    'NEW ARRIVALS', 
    'BRIDAL SETS', 
    'NECKLACES', 
    'RINGS', 
    'EARRINGS', 
    'BRACELETS', 
    'LUXURY JEWELLERY'
  ];

  const sortedProducts = [...productsData].sort((a, b) => {
    if (sortOption === 'low-high') return a.price - b.price;
    if (sortOption === 'high-low') return b.price - a.price;
    return 0;
  });

  const handleScroll = (direction) => {
    const container = document.getElementById('trending-slider');
    const scrollAmount = 350;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <style>{`
        .hero-section {
          width: 100%;
          margin: 0;
          padding: 0;
          background: #f4eee8;
          overflow: hidden;
          position: relative;
        }

        .hero-banner {
          width: 100%;
          margin: 0;
          padding: 0;
          line-height: 0;
          overflow: hidden;
        }

        .hero-banner img {
          display: block;
          width: 100%;
          height: auto;
          max-width: 100%;
          object-fit: contain;
          object-position: center;
        }

        .our-collection {
          width: 100%;
          background: #ffffff;
          padding: 60px 20px 30px;
          text-align: center;
          box-sizing: border-box;
        }

        .our-collection h2 {
          margin: 0 0 40px;
          color: #1a1a1a;
          font-family: 'Playfair Display', serif, Arial;
          font-size: 38px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .collection-round-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
        }

        .collection-round-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .collection-round-item:hover {
          transform: translateY(-6px);
        }

        .round-image-wrapper {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #b8860b;
          margin-bottom: 14px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12);
          background: #f9f6f0;
        }

        .round-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .round-category-name {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #222222;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .most-loved {
          width: 100%;
          background: #ffffff;
          box-sizing: border-box;
          padding: 35px 20px 45px;
          text-align: center;
        }

        .most-loved h2 {
          margin: 0 0 30px;
          color: #1a1a1a;
          font-family: 'Playfair Display', serif, Arial;
          font-size: 38px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .btn:hover,
        .btn-dark:hover,
        .most-loved a.btn:hover {
          background-color: #d63384 !important;
          border-color: #d63384 !important;
          color: #ffffff !important;
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        @media (max-width: 900px) {
          .round-image-wrapper {
            width: 100px;
            height: 100px;
          }
          .collection-round-grid {
            gap: 20px;
          }
          .our-collection h2, .most-loved h2 {
            font-size: 28px;
          }
        }

        @media (max-width: 500px) {
          .round-image-wrapper {
            width: 80px;
            height: 80px;
          }
          .round-category-name {
            font-size: 11px;
          }
          .collection-round-grid {
            gap: 15px;
          }
        }
      `}</style>

      {/* HERO BANNER SECTION */}
      <HeroSection />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '30px 20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        
        {/* OUR COLLECTION (Round Categories - Fully Fixed & Polished) */}
        <div className="our-collection">
          <h2>Our Collection</h2>
          <div className="collection-round-grid">
            <a href="#bridal" className="collection-round-item">
              <div className="round-image-wrapper">
                <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&auto=format&fit=crop&q=80" alt="Bridal" />
              </div>
              <span className="round-category-name">Bridal</span>
            </a>
            <a href="#necklaces" className="collection-round-item">
              <div className="round-image-wrapper">
                <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop&q=80" alt="Necklaces" />
              </div>
              <span className="round-category-name">Necklaces</span>
            </a>
            <a href="#rings" className="collection-round-item">
              <div className="round-image-wrapper">
                <img src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&auto=format&fit=crop&q=80" alt="Rings" />
              </div>
              <span className="round-category-name">Rings</span>
            </a>
            <a href="#earrings" className="collection-round-item">
              <div className="round-image-wrapper">
                <img src="https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&auto=format&fit=crop&q=80" alt="Earrings" />
              </div>
              <span className="round-category-name">Earrings</span>
            </a>
            <a href="#bracelets" className="collection-round-item">
              <div className="round-image-wrapper">
                <img src="https://images.unsplash.com/photo-1611591472152-d128a8d15446?w=400&auto=format&fit=crop&q=80" alt="Bracelets" />
              </div>
              <span className="round-category-name">Bracelets</span>
            </a>
          </div>
        </div>
        
        {/* TOP TOOLBAR */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '30px 0 24px',
          borderBottom: '1px solid #eaeaea',
          paddingBottom: '16px',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          <button 
            onClick={() => setShowFilter(!showFilter)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              color: '#111',
              padding: '6px 0'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
            Show Filter's
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <button onClick={() => setColumns(2)} style={{ padding: '6px 8px', backgroundColor: columns === 2 ? '#f0f0f0' : '#ffffff', border: '1px solid #e0e0e0', borderRadius: '6px', cursor: 'pointer' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="18" rx="1"/><rect x="14" y="3" width="7" height="18" rx="1"/></svg>
              </button>
              <button onClick={() => setColumns(3)} style={{ padding: '6px 8px', backgroundColor: columns === 3 ? '#f0f0f0' : '#ffffff', border: '1px solid #e0e0e0', borderRadius: '6px', cursor: 'pointer' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="3" width="5" height="18" rx="1"/><rect x="9.5" y="3" width="5" height="18" rx="1"/><rect x="17" y="3" width="5" height="18" rx="1"/></svg>
              </button>
              <button onClick={() => setColumns(4)} style={{ padding: '6px 8px', backgroundColor: columns === 4 ? '#f0f0f0' : '#ffffff', border: '1px solid #e0e0e0', borderRadius: '6px', cursor: 'pointer' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="3" width="4" height="18" rx="0.5"/><rect x="8" y="3" width="4" height="18" rx="0.5"/><rect x="14" y="3" width="4" height="18" rx="0.5"/><rect x="20" y="3" width="4" height="18" rx="0.5"/></svg>
              </button>
            </div>

            <select 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              style={{
                padding: '8px 14px',
                backgroundColor: '#f7f7f7',
                border: '1px solid #e0e0e0',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '500',
                color: '#111',
                outline: 'none'
              }}
            >
              <option value="default">⇅ Sort</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* MAIN PRODUCTS GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gap: '30px',
          transition: 'grid-template-columns 0.3s ease',
          marginBottom: '60px'
        }}>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* MOST TRENDING SECTION */}
        <div className="most-loved" style={{ marginTop: '50px', borderTop: '1px solid #eaeaea', paddingTop: '40px' }}>
          
          <h2>MOST TRENDING</h2>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #eaeaea',
            paddingBottom: '12px',
            marginBottom: '24px',
            flexWrap: 'wrap',
            gap: '15px'
          }}>
            <div style={{
              display: 'flex',
              gap: '24px',
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              scrollbarWidth: 'none'
            }}>
              {trendingCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: activeTab === cat ? '600' : '400',
                    color: activeTab === cat ? '#111111' : '#777777',
                    letterSpacing: '0.05em',
                    paddingBottom: '4px',
                    borderBottom: activeTab === cat ? '2px solid #111111' : '2px solid transparent',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '12px', fontWeight: '500', color: '#111', cursor: 'pointer', textDecoration: 'underline' }}>
                View all
              </span>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={() => handleScroll('left')} style={{ background: '#fff', border: '1px solid #ddd', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  &#8592;
                </button>
                <button onClick={() => handleScroll('right')} style={{ background: '#fff', border: '1px solid #ddd', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  &#8594;
                </button>
              </div>
            </div>
          </div>

          <div 
            id="trending-slider"
            style={{
              display: 'flex',
              gap: '24px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              paddingBottom: '10px'
            }}
          >
            {productsData.map((product) => (
              <div key={`trending-${product.id}`} style={{ minWidth: '270px', maxWidth: '270px', flexShrink: 0, scrollSnapAlign: 'start' }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

        </div>

      </div>
    </>
  );
}