import React, { useState, useEffect } from 'react';

const heroImages = ['Hero', 'Hero1', 'Hero2'];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide change every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

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
          margin: 0;
          padding: 0;
          object-fit: contain;
          object-position: center;
          transition: opacity 0.5s ease-in-out;
        }

        @media (max-width: 900px) {
          .hero-banner img {
            width: 100%;
            height: auto;
          }
        }

        @media (max-width: 600px) {
          .hero-banner img {
            width: 100%;
            height: auto;
          }
        }
      `}</style>

      <div className="hero-section">
        {heroImages.map((name, index) => (
          <div 
            key={`${name}-${index}`} 
            className="hero-slide" 
            style={{ 
              display: index === currentIndex ? 'block' : 'none',
              width: '100%' 
            }}
          >
            {index === currentIndex && <HeroSlide imageName={name} />}
          </div>
        ))}
      </div>
    </>
  );
}

// Extension fallback handler (.jpg, .avif, .png, .webp)
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