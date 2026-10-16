import React, { useEffect, useState } from "react";

// Local images from src/assets
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

function Hero() {
  const banners = [
    { image: banner1 },
    { image: banner2 },
    { image: banner3 }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const currentBanner = banners[currentIndex];

  return (
    <section className="w-full bg-[#111111] overflow-hidden select-none">
      <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] lg:aspect-[2.8/1] flex items-center">
        
        {/* FULL WIDTH BACKGROUND IMAGES WITH SMOOTH FADE */}
        {banners.map((b, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={b.image}
              alt="Jewelry Banner"
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
            />
          </div>
        ))}

        {/* CAROUSEL DOTS INDICATORS */}
        <div className="absolute bottom-5 left-6 sm:left-10 lg:left-16 z-30 flex items-center gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Slide ${index + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "w-8 h-1 bg-[#C5A059]"
                  : "w-1.5 h-1.5 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;