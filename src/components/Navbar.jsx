import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from "../assets/logo.png";
import { jewelleryCategories } from "../data/categories";
import { StoreContext } from "../context/StoreContext";
import AnnouncementBar from './AnnouncementBar';

export default function Navbar({ cartCount = 0 }) {
  const [collectionOpen, setCollectionOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Wishlist aur categories StoreContext se fetch karna
  const { wishlist, categories } = useContext(StoreContext) || { wishlist: [], categories: [] };
  const wishlistCount = Array.isArray(wishlist) ? wishlist.length : 0;

  // Agar StoreContext mein categories available hain toh wo use karein, warna fallback ke taur par static categories
  const displayCategories = categories && categories.length > 0 
    ? categories 
    : (jewelleryCategories?.collections || []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleSuggestionClick = (term) => {
    navigate(`/shop?search=${encodeURIComponent(term)}`);
    setIsSearchOpen(false);
  };

  return (
    <>
      <AnnouncementBar />

      <header className="w-full bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-neutral-100 transition-all shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          {/* LEFT: Menu & Search Icons */}
          <div className="flex items-center gap-3 sm:gap-6 w-1/4">
            <button 
              className="text-neutral-800 hover:text-[#E82A89] transition-colors p-1 cursor-pointer" 
              type="button" 
              aria-label="Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </svg>
            </button>

            <button 
              className="text-neutral-800 hover:text-[#E82A89] transition-colors p-1 cursor-pointer" 
              type="button" 
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* CENTER: Brand Logo */}
          <div className="flex justify-center w-2/4">
            <Link to="/" className="flex items-center justify-center">
              <img src={logoImage} alt="Ahsan Jewellery" className="h-11 sm:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </Link>
          </div>

          {/* RIGHT: User Actions (Account, Wishlist, Cart) */}
          <div className="flex items-center justify-end gap-3 sm:gap-6 w-1/4">
            <Link to="/account" className="text-neutral-800 hover:text-[#E82A89] transition-colors flex items-center p-1" aria-label="Account">
              <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c.8-4 3.5-6 8-6s7.2 2 8 6" />
              </svg>
            </Link>

            {/* Wishlist Icon with Count Badge */}
            <Link to="/wishlist" className="text-neutral-800 hover:text-[#E82A89] transition-colors relative flex items-center p-1" aria-label="Wishlist">
              <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.5Z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#E82A89] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart / Bag Icon */}
            <Link to="/cart" className="flex items-center gap-1.5 text-neutral-800 hover:text-[#E82A89] transition-colors font-medium text-sm p-1" aria-label="Cart">
              <div className="relative">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 8h12l1 13H5L6 8Z" />
                  <path d="M9 8a3 3 0 0 1 6 0" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#E82A89] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden md:inline font-semibold text-xs tracking-wider uppercase">Bag</span>
            </Link>
          </div>
        </div>

        {/* MINIMALIST SECONDARY NAVIGATION BAR (Desktop Only) */}
        <nav className="w-full border-t border-neutral-100 bg-white hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-10 h-12 text-xs font-semibold uppercase tracking-[0.2em]">
            <Link to="/shop" className="text-neutral-700 hover:text-[#E82A89] transition-colors py-2">All Products</Link>
            <Link to="/shop?category=new-arrivals" className="text-neutral-700 hover:text-[#E82A89] transition-colors py-2">New Arrivals</Link>
            
            {/* Elegant Dropdown for Collections (Dynamic Categories) */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setCollectionOpen(true)}
              onMouseLeave={() => setCollectionOpen(false)}
            >
              <button type="button" className="flex items-center gap-1 text-neutral-700 hover:text-[#E82A89] transition-colors bg-transparent border-none cursor-pointer font-inherit text-xs font-semibold uppercase tracking-[0.2em] py-2">
                Collections <span className={`text-[9px] transition-transform duration-200 ${collectionOpen ? "rotate-180" : ""}`}>▼</span>
              </button>

              {collectionOpen && (
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-64 py-3 bg-white border border-neutral-100 shadow-2xl rounded-2xl z-50 max-h-80 overflow-y-auto animate-in fade-in duration-200">
                  {displayCategories.map((item, idx) => (
                    <Link 
                      key={idx} 
                      to={item.path || `/shop?category=${encodeURIComponent(item.name ? item.name.toLowerCase() : item)}`} 
                      className="block px-5 py-2.5 text-neutral-600 hover:text-[#E82A89] hover:bg-neutral-50 text-xs font-medium capitalize transition-colors"
                      onClick={() => setCollectionOpen(false)}
                    >
                      {item.name || item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* BLINKING SALE BUTTON */}
            <Link 
              to="/shop?category=sale" 
              className="text-[#E82A89] font-bold px-3.5 py-1 rounded-full bg-[#E82A89]/10 animate-pulse border border-[#E82A89]/30 hover:bg-[#E82A89]/20 transition-all tracking-[0.15em]"
            >
              🔥 Sale
            </Link>
          </div>
        </nav>
      </header>

      {/* MOBILE SIDEBAR MENU DRAWER */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-start backdrop-blur-sm animate-fadeIn" onClick={() => setIsMenuOpen(false)}>
          <div className="w-80 h-full bg-white p-6 sm:p-8 shadow-2xl flex flex-col justify-between overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
                <span className="font-serif font-bold text-sm tracking-[0.2em] text-neutral-900">AHSAN JEWELLERY</span>
                <button className="text-neutral-500 hover:text-neutral-900 text-xl font-light cursor-pointer" onClick={() => setIsMenuOpen(false)} type="button">✕</button>
              </div>

              <div className="flex flex-col gap-4 pt-6 text-xs font-semibold uppercase tracking-[0.15em]">
                <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="text-neutral-800 hover:text-[#E82A89] transition-colors py-1">All Products</Link>
                <Link to="/shop?category=new-arrivals" onClick={() => setIsMenuOpen(false)} className="text-neutral-800 hover:text-[#E82A89] transition-colors py-1">New Arrivals</Link>
                
                {/* Dynamic Categories inside Mobile Drawer */}
                {displayCategories.map((item, idx) => (
                  <Link 
                    key={idx} 
                    to={item.path || `/shop?category=${encodeURIComponent(item.name ? item.name.toLowerCase() : item)}`} 
                    onClick={() => setIsMenuOpen(false)} 
                    className="text-neutral-800 hover:text-[#E82A89] transition-colors capitalize py-1"
                  >
                    {item.name || item}
                  </Link>
                ))}

                <Link to="/shop?category=sale" onClick={() => setIsMenuOpen(false)} className="text-[#E82A89] font-bold animate-pulse py-1">🔥 Sale</Link>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-100 text-[10px] text-neutral-400 text-center tracking-widest uppercase">
              Ahsan Jewellery Official Store
            </div>
          </div>
        </div>
      )}

      {/* SEARCH OVERLAY DRAWER */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end backdrop-blur-sm animate-fadeIn" onClick={() => setIsSearchOpen(false)}>
          <div className="w-full max-w-lg h-full bg-white p-6 sm:p-8 shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">Search Catalogue</h2>
              <button className="text-neutral-500 hover:text-neutral-900 text-xl font-light cursor-pointer" onClick={() => setIsSearchOpen(false)} type="button">✕</button>
            </div>

            <form onSubmit={handleSearchSubmit} className="relative flex items-center border-b-2 border-neutral-900 pb-2 mb-8">
              <input 
                type="text"
                placeholder="Search rings, bridal sets, gold polish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full border-none outline-none text-sm text-neutral-900 bg-transparent placeholder:text-neutral-400 tracking-wide"
              />
              <button type="submit" className="text-neutral-900 hover:text-[#E82A89] transition-colors cursor-pointer">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-4-4" />
                </svg>
              </button>
            </form>

            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-4">Popular Searches</h3>
              <div className="flex flex-wrap gap-2">
                {["Bridal Sets", "Necklaces", "Rings", "Earrings", "Bangles"].map((term) => (
                  <button
                    key={term}
                    onClick={() => handleSuggestionClick(term)}
                    className="px-4 py-2 rounded-full border border-neutral-200 text-xs font-medium text-neutral-700 hover:border-[#E82A89] hover:text-[#E82A89] transition-all bg-neutral-50/50 cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}