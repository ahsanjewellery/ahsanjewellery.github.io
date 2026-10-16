import React from "react";

function StoreFeatures() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-neutral-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      ),
      title: "WORLDWIDE SHIPPING",
      description: "Our Moto is to move worldwide",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-neutral-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: "SUPPORT 24/7",
      description: "Contact us 24 hours a day, 7 days a week",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-neutral-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "RISK FREE PURCHASE",
      description: "Delivery Time 2 to 3 days",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-neutral-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "100% PAYMENT SECURE",
      description: "We ensure secure Payment Gateway",
    },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-16 px-4 sm:px-8 border-t border-b border-neutral-100 my-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {features.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-2xs border border-neutral-100 hover:border-[#E82A89]/40 hover:shadow-md transition-all duration-300 group"
          >
            <div className="p-3 mb-4 rounded-full bg-neutral-50 group-hover:bg-[#E82A89]/10 group-hover:text-[#E82A89] transition-colors duration-300">
              {item.icon}
            </div>
            <h4 className="text-xs sm:text-sm font-bold tracking-[0.15em] text-neutral-900 uppercase mb-2">
              {item.title}
            </h4>
            <p className="text-xs text-neutral-500 font-light leading-relaxed tracking-wide">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StoreFeatures;