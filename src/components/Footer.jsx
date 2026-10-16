import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/logo.png";

function Footer() {
  const [showLogo, setShowLogo] = useState(true);

  // Fast blinking logo animation
  useEffect(() => {
    const timer = setInterval(() => {
      setShowLogo((prev) => !prev);
    }, 600);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-white border-t border-pink-200 relative text-neutral-700 font-sans selection:bg-pink-500 selection:text-white">
      {/* Top Luxury Pink Accent Gradient Line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-90"></div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Logo & Brand Info (Span 3) */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <Link to="/" className="flex flex-col items-center md:items-start w-full group">
              <img
                src={logoImage}
                alt="Ahsan Logo"
                className={`h-16 sm:h-20 w-auto object-contain transition-opacity duration-300 ease-in-out ${
                  showLogo ? "opacity-100" : "opacity-40"
                }`}
              />
            </Link>
            <p className="text-xs text-neutral-500 font-light leading-relaxed tracking-wider max-w-[240px]">
              Exquisite collections of fine jewellery and luxury , crafted for your timeless elegance.
            </p>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="md:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-pink-600">
                Quick Links
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs font-medium tracking-wide">
              {["Home", "Jewellery", "Shop", "About Us", "Contact Us"].map((item, idx) => {
                const paths = ["/", "/shop", "/shop", "/aboutus", "/contactus"];
                return (
                  <li key={idx}>
                    <Link to={paths[idx]} className="text-neutral-600 hover:text-pink-600 transition-all duration-200">
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Customer Care (Span 2) */}
          <div className="md:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-pink-600">
                Customer Care
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs font-medium tracking-wide">
              {[
                { label: "Login", path: "/login" },
                { label: "Register", path: "/register" },
                { label: "View Cart", path: "/cart" },
                { label: "My Wishlist", path: "/wishlist" },
                { label: "Support", path: "/contactus" },
              ].map((sub, idx) => (
                <li key={idx}>
                  <Link to={sub.path} className="text-neutral-600 hover:text-pink-600 transition-all duration-200">
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Follow Us (Span 5) */}
          <div className="md:col-span-5 space-y-6 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-pink-600">
                  Stay Connected
                </h3>
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed font-light mb-3">
                Subscribe to receive updates and exclusive deals.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex border border-neutral-200 rounded-lg overflow-hidden bg-neutral-50 max-w-sm mx-auto md:mx-0 focus-within:border-pink-500 transition">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 text-xs outline-none text-neutral-800 bg-transparent tracking-wide placeholder-neutral-400 font-medium" 
                />
                <button 
                  type="submit" 
                  className="bg-pink-500 text-white hover:bg-pink-600 px-6 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer"
                >
                  Join
                </button>
              </form>
            </div>

            {/* Follow Us Section with Social Icons */}
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-pink-600">
                  Follow Us
                </h3>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-4 text-neutral-600">
                {/* TikTok */}
                <a 
                  href="https://tiktok.com/@ahsanjewellery5" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#E82A89] hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs" 
                  aria-label="TikTok"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="https://instagram.com/ahsanjewellery5" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#E82A89] hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs" 
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a 
                  href="https://facebook.com/ahsanjewellery5" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#E82A89] hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs" 
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-neutral-100 text-neutral-600 py-4 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between text-xs font-medium tracking-[0.1em] gap-3">
          <p>&copy; {new Date().getFullYear()} Ahsan Jewellery. All rights reserved.</p>
          <div className="flex gap-4 text-neutral-500 items-center">
            <Link to="/privacy-policy" className="hover:text-pink-600 transition">
              Privacy Policy
            </Link>
            <span className="text-neutral-300">|</span>
            <Link to="/terms-of-service" className="hover:text-pink-600 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;