import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
  const { pathname, search } = useLocation();

  // Har route change par page top par scroll karne ke liye
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname, search]);

  return (
    <>
      <style>{`
        .page-transition-wrapper {
          animation: pageFadeIn 0.4s ease-in-out forwards;
          width: 100%;
          min-height: 100vh;
        }

        @keyframes pageFadeIn {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div key={pathname + search} className="page-transition-wrapper">
        {children}
      </div>
    </>
  );
}