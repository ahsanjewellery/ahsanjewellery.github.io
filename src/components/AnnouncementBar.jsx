import React, { useState, useEffect } from "react";

const ANNOUNCEMENTS = [
  "✨ Delivery Across Pakistan & Worldwide",
  "💎 Cash on Delivery Available Nationwide",
  "🎁 Complimentary Gift Packaging On Orders Above Rs. 5,000",
];

function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ANNOUNCEMENTS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="w-full h-9 text-white text-[10px] sm:text-xs tracking-[0.2em] font-bold uppercase px-4 sm:px-8 flex items-center justify-between select-none shadow-sm"
      style={{ backgroundColor: "#E82A89" }}
    >
      {/* Left Side: Social Icons (TikTok, Instagram, Facebook) */}
      <div className="hidden md:flex items-center gap-4 text-white/90">
        
        {/* TikTok */}
        <a 
          href="https://tiktok.com/@ahsanjewellery5" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-white hover:scale-110 transition-all duration-200" 
          aria-label="TikTok"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a 
          href="https://instagram.com/ahsanjewellery5" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-white hover:scale-110 transition-all duration-200" 
          aria-label="Instagram"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        {/* Facebook */}
        <a 
          href="https://facebook.com/ahsanjewellery5" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-white hover:scale-110 transition-all duration-200" 
          aria-label="Facebook"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
          </svg>
        </a>
      </div>

      {/* Center: Sliding Announcements */}
      <div className="flex-1 flex justify-center items-center overflow-hidden h-full relative">
        {ANNOUNCEMENTS.map((text, index) => (
          <p
            key={index}
            className={`absolute transition-all duration-700 ease-in-out whitespace-nowrap text-center text-white ${
              index === currentIndex
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform -translate-y-2 pointer-events-none"
            }`}
          >
            {text}
          </p>
        ))}
      </div>

      {/* Right Side: Region / Currency Tag */}
      <div className="hidden md:flex items-center gap-1.5 text-white/90 text-[10px] tracking-widest font-extrabold">
        <span>PKR</span>
        <span className="text-[8px] text-white/60">|</span>
        <span>PK</span>
      </div>

    </div>
  );
}

export default AnnouncementBar;