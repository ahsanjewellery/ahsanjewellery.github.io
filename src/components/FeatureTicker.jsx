import React from "react";

function FeatureTicker() {
  return (
    <>
      {/* Inline Animation Styles */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-smooth {
          display: inline-flex;
          white-space: nowrap;
          animation: marqueeScroll 20s linear infinite;
        }
        .animate-marquee-smooth:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div 
        className="w-full py-2.5 overflow-hidden whitespace-nowrap text-white text-xs sm:text-sm font-bold uppercase tracking-[0.15em] shadow-md my-6 select-none"
        style={{ backgroundColor: "#E82A89" }}
      >
        <div className="animate-marquee-smooth items-center">
          <span className="mx-8 flex items-center gap-2">🌐 Worldwide Shipping</span>
          <span className="mx-8 flex items-center gap-2">⏱️ 3–5 Working Days Delivery</span>
          <span className="mx-8 flex items-center gap-2">⭐ Summer Sale Live Now</span>
          <span className="mx-8 flex items-center gap-2">👥 30,000+ Satisfied Customers</span>
          <span className="mx-8 flex items-center gap-2">🌟 1,000+ 5 Star Reviews</span>

          {/* Duplicate list for continuous infinite loop */}
          <span className="mx-8 flex items-center gap-2">🌐 Worldwide Shipping</span>
          <span className="mx-8 flex items-center gap-2">⏱️ 3–5 Working Days Delivery</span>
          <span className="mx-8 flex items-center gap-2">⭐ Summer Sale Live Now</span>
          <span className="mx-8 flex items-center gap-2">👥 30,000+ Satisfied Customers</span>
          <span className="mx-8 flex items-center gap-2">🌟 1,000+ 5 Star Reviews</span>
        </div>
      </div>
    </>
  );
}

export default FeatureTicker;