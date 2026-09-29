import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export default function Home() {
  const [columns, setColumns] = useState(3);
  const [showFilter, setShowFilter] = useState(false);
  const [sortOption, setSortOption] = useState('default');
  const [products, setProducts] = useState([]);
  const [shopCategories, setShopCategories] = useState([]);
  const [loading, setLoading] = useState(true);

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

  // Fetch Products and Categories from Firebase only
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Products
        const productsQuery = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
        const productsSnapshot = await getDocs(productsQuery);
        const liveProducts = productsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(liveProducts);

        // Fetch Categories from Firestore
        const categoriesSnapshot = await getDocs(collection(db, 'categories'));
        const liveCategories = categoriesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setShopCategories(liveCategories); // Sirf wahi categories jo firebase mein mojood hain

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredTrendingProducts = products.filter(product => {
    if (activeTab === 'NEW ARRIVALS') return true;
    return product.category && product.category.toUpperCase() === activeTab.toUpperCase();
  });

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === 'low-high') return Number(a.price) - Number(b.price);
    if (sortOption === 'high-low') return Number(b.price) - Number(a.price);
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
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '30px 20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      
      {/* SHOP BY CATEGORY SECTION */}
      <div style={{ width: '100%', backgroundColor: '#ffffff', padding: '40px 20px', textAlign: 'center', boxSizing: 'border-box' }}>
        <h2 style={{ margin: '0 0 35px', color: '#1a1a1a', fontFamily: 'Arial, sans-serif', fontSize: '22px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>
          SHOP BY CATEGORY
        </h2>
        
        {shopCategories.length === 0 ? (
          <div style={{ color: '#888', fontSize: '14px', padding: '20px' }}>
            No categories uploaded yet. Please add categories from Admin Panel.
          </div>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', maxWidth: '1300px', margin: '0 auto' }}>
            {shopCategories.map((cat, index) => {
              const catImage = cat.image || cat.imageUrl || cat.img || cat.photo;
              return (
                <a key={cat.id || index} href={cat.link || `/shop?category=${cat.name}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', cursor: 'pointer', flex: '1 1 200px', maxWidth: '280px' }}>
                  <div style={{ width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', backgroundColor: '#f9f9f9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', borderRadius: '4px', border: '1px solid #eee' }}>
                    {catImage ? (
                      <img src={catImage} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <span style={{ fontSize: '12px', color: '#aaa' }}>No Image</span>
                    )}
                  </div>
                  <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', fontWeight: '700', color: '#111111', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    {cat.name}
                  </span>
                </a>
              );
            })}
          </div>
        )}
      </div>
      
      {/* TOP TOOLBAR */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '30px 0 24px', borderBottom: '1px solid #eaeaea', paddingBottom: '16px', flexWrap: 'wrap', gap: '15px' }}>
        <button 
          onClick={() => setShowFilter(!showFilter)}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500', color: '#111', padding: '6px 0' }}
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
          Show Filters
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
            style={{ padding: '8px 14px', backgroundColor: '#f7f7f7', border: '1px solid #e0e0e0', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: '500', color: '#111', outline: 'none' }}
          >
            <option value="default">⇅ Sort</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* MAIN PRODUCTS GRID */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px 0', fontSize: '16px', color: '#666' }}>
          Loading products from store...
        </div>
      ) : sortedProducts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 0', fontSize: '16px', color: '#666' }}>
          No products available right now. Please add products from Admin Panel.
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap: '30px', transition: 'grid-template-columns 0.3s ease', marginBottom: '60px' }}>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* MOST TRENDING SECTION */}
      <div style={{ width: '100%', backgroundColor: '#ffffff', boxSizing: 'border-box', padding: '35px 20px 45px', textAlign: 'center', marginTop: '50px', borderTop: '1px solid #eaeaea' }}>
        
        <h2 style={{ margin: '0 0 30px', color: '#1a1a1a', fontFamily: 'serif', fontSize: '38px', fontWeight: '600', letterSpacing: '0.5px' }}>
          MOST TRENDING
        </h2>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eaeaea', paddingBottom: '12px', marginBottom: '24px', flexWrap: 'wrap', gap: '15px' }}>
          <div style={{ display: 'flex', gap: '24px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
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

        <div id="trending-slider" style={{ display: 'flex', gap: '24px', overflowX: 'auto', paddingBottom: '10px' }}>
          {filteredTrendingProducts.length === 0 ? (
            <div style={{ padding: '20px', color: '#777', width: '100%', textAlign: 'center' }}>
              No products found in this category.
            </div>
          ) : (
            filteredTrendingProducts.map((product) => (
              <div key={`trending-${product.id}`} style={{ minWidth: '270px', maxWidth: '270px', flexShrink: 0 }}>
                <ProductCard product={product} />
              </div>
            ))
          )}
        </div>

      </div>

    </div>
  );
}