import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [jewelleryOpen, setJewelleryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  const handleSuggestionClick = (term) => {
    setSearchQuery(term);
    navigate(`/shop?search=${encodeURIComponent(term)}`);
    setIsSearchOpen(false);
  };

  return (
    <>
      {/* Embedded CSS styles directly inside the component */}
      <style>{`
        :root {
          --pink: #e90d8b;
          --pink-dark: #c90876;
          --charcoal: #2b2b2b;
        }

        .top-bar {
          width: 100%;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #2b2b2b;
          color: #fff;
        }

        .top-bar p {
          margin: 0;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.3px;
        }

        .navbar {
          width: 100%;
          background: #fff;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .navbar-main {
          position: relative;
          width: 100%;
          height: 104px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 6%;
          box-sizing: border-box;
        }

        .navbar-left {
          width: 220px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 12px;
        }

        .menu-button {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #222;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .menu-button:hover {
          color: var(--pink);
          transform: translateY(-2px);
        }

        .navbar-logo {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          z-index: 5;
        }

        .navbar-logo img {
          width: 190px;
          height: auto;
          max-height: 82px;
          object-fit: contain;
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .navbar-logo:hover img {
          transform: scale(1.08);
          filter: drop-shadow(0 0 5px rgba(233, 13, 139, 0.55)) drop-shadow(0 0 14px rgba(233, 13, 139, 0.28));
        }

        .navbar-right {
          width: 220px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 20px;
        }

        .nav-icon {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #222;
          text-decoration: none;
          border: none;
          background: transparent;
          padding: 0;
          cursor: pointer;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .nav-icon svg {
          fill: none;
          stroke: currentColor;
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .nav-icon:hover {
          color: var(--pink);
          transform: translateY(-2px);
        }

        .search-button {
          width: 34px;
          height: 34px;
        }

        .search-button svg {
          width: 25px;
          height: 25px;
          stroke-width: 1.7;
        }

        .cart-link {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #222;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .cart-link svg {
          fill: none;
          stroke: currentColor;
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .cart-link:hover {
          color: var(--pink);
          transform: translateY(-2px);
        }

        .cart-link b {
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--pink);
          color: #fff;
          font-size: 9px;
          font-weight: 700;
        }

        .navbar-menu {
          width: 100%;
          height: 50px;
          background: var(--pink);
          display: flex;
          align-items: center;
        }

        .navbar-menu-inner {
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-link {
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 22px;
          color: #fff;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          border: none;
          background: transparent;
          transition: background 0.25s ease, color 0.25s ease;
        }

        .nav-link:hover {
          background: var(--pink-dark);
          color: #fff;
        }

        .nav-dropdown {
          position: relative;
        }

        .nav-dropdown-button {
          font-family: inherit;
          cursor: pointer;
        }

        .dropdown-arrow {
          margin-left: 8px;
          font-size: 14px;
          line-height: 1;
        }

        .dropdown-menu {
          position: absolute;
          top: 50px;
          left: 0;
          min-width: 215px;
          padding: 8px 0;
          background: #fff;
          border: 1px solid #eee;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.14);
        }

        .dropdown-menu a {
          display: block;
          padding: 12px 20px;
          color: #2b2b2b;
          text-decoration: none;
          font-size: 13px;
          transition: background 0.2s ease, color 0.2s ease, padding-left 0.2s ease;
        }

        .dropdown-menu a:hover {
          background: #fff0f8;
          color: var(--pink);
          padding-left: 25px;
        }

        .nav-sale {
          font-weight: 800;
        }

        .menu-overlay-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          z-index: 2000;
          display: flex;
          justify-content: flex-start;
          animation: fadeIn 0.3s ease;
        }

        .menu-sidebar-drawer {
          width: 100%;
          max-width: 440px;
          height: 100%;
          background: #ffffff;
          padding: 30px 35px;
          box-sizing: border-box;
          overflow-y: auto;
          box-shadow: 5px 0 30px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          animation: slideInLeft 0.3s ease;
        }

        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }

        .menu-sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 22px;
        }

        .menu-sidebar-brand {
          font-family: inherit;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #111;
        }

        .menu-close-btn {
          background: transparent;
          border: none;
          font-size: 22px;
          cursor: pointer;
          color: #111;
          padding: 0;
          line-height: 1;
          transition: color 0.2s ease;
        }

        .menu-close-btn:hover {
          color: #e30613;
        }

        .menu-top-tabs {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 0 22px 0;
          border-bottom: 1px solid #dcdcdc;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.8px;
          color: #222;
        }

        .menu-top-tabs span {
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .menu-top-tabs span.active-tab {
          color: #e30613;
        }

        .menu-top-tabs span:hover {
          color: #e30613;
        }

        .menu-links-list {
          display: flex;
          flex-direction: column;
          padding: 15px 0 20px 0;
        }

        .menu-links-list a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          color: #1a1a1a;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.8px;
          border-bottom: 1px solid #f2f2f2;
          transition: color 0.2s ease;
        }

        .menu-links-list a span {
          font-size: 16px;
          font-weight: 400;
          color: #888;
        }

        .menu-links-list a:hover {
          color: #e30613;
        }

        .menu-promo-section {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-bottom: 30px;
        }

        .menu-promo-card {
          display: flex;
          align-items: center;
          gap: 15px;
          background: #fdf6f9;
          padding: 12px 14px;
          border-radius: 4px;
          text-decoration: none;
          border: 1px solid #fae4ee;
          transition: background 0.2s ease;
        }

        .menu-promo-card:hover {
          background: #fae4ee;
        }

        .promo-img-thumb {
          width: 52px;
          height: 52px;
          object-fit: cover;
          border-radius: 4px;
          border: 1px solid #ddd;
        }

        .promo-text h4 {
          margin: 0;
          font-size: 11px;
          font-weight: 800;
          color: #e30613;
          letter-spacing: 0.5px;
        }

        .promo-text p {
          margin: 3px 0;
          font-size: 12px;
          font-weight: 600;
          color: #222;
        }

        .promo-text span {
          font-size: 10px;
          color: #666;
          text-decoration: underline;
        }

        .search-overlay-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 2000;
          display: flex;
          justify-content: flex-end;
          animation: fadeIn 0.3s ease;
        }

        .search-overlay-content {
          width: 100%;
          max-width: 480px;
          height: 100%;
          background: #ffffff;
          padding: 35px 30px;
          box-sizing: border-box;
          overflow-y: auto;
          box-shadow: -5px 0 25px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          animation: slideInRight 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .search-overlay-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
        }

        .search-overlay-title {
          font-size: 16px;
          font-weight: 700;
          color: #111;
          letter-spacing: 0.5px;
          margin: 0;
        }

        .search-close-btn {
          background: transparent;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: #111;
          padding: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s ease;
        }

        .search-close-btn:hover {
          color: var(--pink);
        }

        .search-overlay-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          border: 1px solid #dcdcdc;
          border-radius: 4px;
          padding: 0 16px;
          background: #fff;
          height: 50px;
          margin-bottom: 30px;
          transition: border-color 0.2s ease;
        }

        .search-overlay-input-wrapper:focus-within {
          border-color: #111;
        }

        .search-overlay-input {
          width: 100%;
          border: none;
          outline: none;
          font-size: 14px;
          color: #333;
          background: transparent;
        }

        .search-overlay-input::placeholder {
          color: #888;
        }

        .search-overlay-icon-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333;
          padding: 0;
        }

        .search-suggestions-section {
          margin-top: 10px;
        }

        .suggestions-heading {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.8px;
          color: #111;
          margin-bottom: 18px;
        }

        .suggestions-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .suggestions-list li {
          font-size: 13px;
          font-weight: 500;
          color: #444;
          padding: 14px 0;
          border-bottom: 1px solid #f0f0f0;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: color 0.2s ease;
        }

        .suggestions-list li:hover {
          color: var(--pink);
        }

        @media (max-width: 900px) {
          .navbar-main { padding: 0 3%; }
          .navbar-left, .navbar-right { width: 180px; }
          .navbar-logo img { width: 165px; }
          .navbar-right { gap: 14px; }
          .nav-link { padding: 0 14px; font-size: 11px; }
        }

        @media (max-width: 650px) {
          .top-bar { height: 32px; }
          .top-bar p { font-size: 10px; }
          .navbar-main { height: 88px; padding: 0 18px; }
          .navbar-left, .navbar-right { width: auto; }
          .navbar-logo img { width: 135px; }
          .navbar-right { gap: 10px; }
          .cart-link span { display: none; }
          .navbar-menu { height: 46px; }
          .navbar-menu-inner { height: 46px; overflow-x: auto; justify-content: flex-start; scrollbar-width: none; }
          .navbar-menu-inner::-webkit-scrollbar { display: none; }
          .nav-link { height: 46px; flex-shrink: 0; padding: 0 13px; font-size: 10px; }
          .menu-sidebar-drawer { max-width: 90%; padding: 25px 20px; }
          .search-overlay-content { max-width: 100%; padding: 25px 20px; }
        }
      `}</style>

      {/* Top Shipping Bar */}
      <div className="top-bar">
        <p>✈ Shipping across Pakistan &amp; worldwide</p>
      </div>

      <header className="navbar">
        <div className="navbar-main">
          {/* LEFT - HAMBURGER & SEARCH */}
          <div className="navbar-left">
            <button 
              className="nav-icon menu-button" 
              type="button" 
              aria-label="Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>

            <button 
              className="nav-icon search-button" 
              type="button" 
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4-4" />
              </svg>
            </button>
          </div>

          {/* CENTER - LOGO */}
          <Link to="/" className="navbar-logo">
            <img src="/logo.png" alt="Ahsan Jewellery" />
          </Link>

          {/* RIGHT */}
          <div className="navbar-right">
            <Link to="/account" className="nav-icon" aria-label="Account">
              <svg viewBox="0 0 24 24" width="23" height="23">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c.8-4 3.5-6 8-6s7.2 2 8 6" />
              </svg>
            </Link>

            <Link to="/wishlist" className="nav-icon" aria-label="Wishlist">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.5Z" />
              </svg>
            </Link>

            <Link to="/cart" className="cart-link" aria-label="Cart">
              <svg viewBox="0 0 24 24" width="23" height="23">
                <path d="M6 8h12l1 13H5L6 8Z" />
                <path d="M9 8a3 3 0 0 1 6 0" />
              </svg>
              <span>Cart</span>
              <b>0</b>
            </Link>
          </div>
        </div>

        {/* PINK NAVIGATION */}
        <nav className="navbar-menu">
          <div className="navbar-menu-inner">
            <Link to="/" className="nav-link">Home</Link>

            <div
              className="nav-dropdown"
              onMouseEnter={() => setJewelleryOpen(true)}
              onMouseLeave={() => setJewelleryOpen(false)}
            >
              <button type="button" className="nav-link nav-dropdown-button">
                Jewellery
                <span className="dropdown-arrow">⌄</span>
              </button>

              {jewelleryOpen && (
                <div className="dropdown-menu">
                  <Link to="/shop">All Jewellery</Link>
                  <Link to="/shop?category=rings">Rings</Link>
                  <Link to="/shop?category=necklaces">Necklaces</Link>
                  <Link to="/shop?category=earrings">Earrings</Link>
                  <Link to="/shop?category=bracelets">Bracelets</Link>
                  <Link to="/shop?category=sets">Jewellery Sets</Link>
                </div>
              )}
            </div>

            <Link to="/shop" className="nav-link">New Arrivals</Link>
            <Link to="/shop" className="nav-link">Collections</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/sale" className="nav-link nav-sale">Sale</Link>
          </div>
        </nav>
      </header>

      {/* LEFT SIDEBAR MENU DRAWER */}
      {isMenuOpen && (
        <div className="menu-overlay-backdrop" onClick={() => setIsMenuOpen(false)}>
          <div className="menu-sidebar-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="menu-sidebar-header">
              <span className="menu-sidebar-brand">AHSAN JEWELLERY</span>
              <button className="menu-close-btn" onClick={() => setIsMenuOpen(false)} type="button">✕</button>
            </div>

            <div className="menu-top-tabs">
              <span className="active-tab">WOMEN</span>
              <span>KIDS</span>
              <span>BRIDES</span>
              <span>MEN</span>
              <span>SPECIAL OFFERS</span>
            </div>

            <div className="menu-links-list">
              <Link to="/shop?category=new-arrivals" onClick={() => setIsMenuOpen(false)}>NEW ARRIVALS</Link>
              <Link to="/shop?category=bridal-sets" onClick={() => setIsMenuOpen(false)}>BRIDAL SETS <span>+</span></Link>
              <Link to="/shop?category=necklaces" onClick={() => setIsMenuOpen(false)}>NECKLACES &amp; PENDANTS <span>+</span></Link>
              <Link to="/shop?category=rings" onClick={() => setIsMenuOpen(false)}>RINGS &amp; BANDS <span>+</span></Link>
              <Link to="/shop?category=earrings" onClick={() => setIsMenuOpen(false)}>EARRINGS &amp; JHUMKAS <span>+</span></Link>
              <Link to="/shop?category=bangles-bracelets" onClick={() => setIsMenuOpen(false)}>BANGLES &amp; BRACELETS <span>+</span></Link>
              <Link to="/shop?category=polki-kundan" onClick={() => setIsMenuOpen(false)}>POLKI &amp; KUNDAN</Link>
              <Link to="/shop?category=diamond-collection" onClick={() => setIsMenuOpen(false)}>DIAMOND COLLECTION <span>+</span></Link>
              <Link to="/shop?category=silver-jewellery" onClick={() => setIsMenuOpen(false)}>SILVER JEWELLERY <span>+</span></Link>
              <Link to="/shop?category=best-sellers" onClick={() => setIsMenuOpen(false)}>BEST SELLERS</Link>
            </div>

            <div className="menu-promo-section">
              <Link to="/shop?collection=bridal" className="menu-promo-card" onClick={() => setIsMenuOpen(false)}>
                <img src="/images/bridal-set.jpg" alt="Bridal Sets" className="promo-img-thumb" />
                <div className="promo-text">
                  <h4>UP TO 50% OFF</h4>
                  <p>Bridal Sets</p>
                  <span>Avail Discount</span>
                </div>
              </Link>

              <Link to="/shop?collection=luxury" className="menu-promo-card" onClick={() => setIsMenuOpen(false)}>
                <img src="/images/necklace.jpg" alt="Luxury Necklaces" className="promo-img-thumb" />
                <div className="promo-text">
                  <h4>UP TO 50% OFF</h4>
                  <p>Luxury Necklaces</p>
                  <span>Avail Discount</span>
                </div>
              </Link>

              <Link to="/shop?collection=rings" className="menu-promo-card" onClick={() => setIsMenuOpen(false)}>
                <img src="/images/ring.jpg" alt="Diamond Rings" className="promo-img-thumb" />
                <div className="promo-text">
                  <h4>UP TO 50% OFF</h4>
                  <p>Diamond Rings</p>
                  <span>Avail Discount</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* SEARCH SIDEBAR DRAWER MODAL */}
      {isSearchOpen && (
        <div className="search-overlay-modal" onClick={() => setIsSearchOpen(false)}>
          <div className="search-overlay-content" onClick={(e) => e.stopPropagation()}>
            <div className="search-overlay-header">
              <h2 className="search-overlay-title">SEARCH YOUR FAVOURITE</h2>
              <button className="search-close-btn" onClick={() => setIsSearchOpen(false)} type="button">✕</button>
            </div>

            <form onSubmit={handleSearchSubmit} className="search-overlay-input-wrapper">
              <input 
                type="text"
                placeholder="Search jewellery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="search-overlay-input"
              />
              <button type="submit" className="search-overlay-icon-btn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-4-4" />
                </svg>
              </button>
            </form>

            <div className="search-suggestions-section">
              <h3 className="suggestions-heading">SUGGESTIONS FOR YOU</h3>
              <ul className="suggestions-list">
                <li onClick={() => handleSuggestionClick("BRIDAL SETS")}>BRIDAL SETS</li>
                <li onClick={() => handleSuggestionClick("NECKLACES")}>NECKLACES</li>
                <li onClick={() => handleSuggestionClick("RINGS")}>RINGS</li>
                <li onClick={() => handleSuggestionClick("EARRINGS")}>EARRINGS</li>
                <li onClick={() => handleSuggestionClick("BANGLES")}>BANGLES</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}