import React from "react";
import { Link } from "react-router-dom";

const extractImageUrl = (image) => {
  if (!image) return "";
  if (typeof image === "string") return image.trim();
  if (typeof image === "object") {
    if (image.secure_url) return String(image.secure_url).trim();
    if (image.url) return String(image.url).trim();
    if (image.src) return String(image.src).trim();
    if (image.image) return extractImageUrl(image.image);
  }
  return "";
};

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop";

function BestSeller({ products = [], addToCart, toggleWishlist, isInWishlist }) {
  // Flexible filter condition taake har tarah ki database field values match ho sakein
  const listToDisplay = Array.isArray(products) 
    ? products.filter(p => {
        return (
          p.featured === true || 
          p.featured === "true" || 
          p.isFeatured === true || 
          p.isFeatured === "true" ||
          p.bestseller === true ||
          p.bestseller === "true" ||
          p.isBestSeller === true
        );
      }) 
    : [];

  // Agar phir bhi items na milein toh testing ke liye fallback ke tor par pehle kuch products dikha sakte hain 
  // taake pata chale ke component render ho raha hai ya nahi (Aap chahien toh is fallback ko hata sakte hain)
  const finalDisplayList = listToDisplay.length > 0 ? listToDisplay : products.slice(0, 8);

  if (finalDisplayList.length === 0) {
    return null; 
  }

  return (
    <section className="w-full py-16 bg-white overflow-hidden border-t border-neutral-100">
      <style>
        {`
          @keyframes customSlowMarquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.333%); }
          }
          .animate-custom-marquee {
            display: flex;
            width: max-content;
            animation: customSlowMarquee 70s linear infinite;
          }
          .animate-custom-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-neutral-400 font-normal mb-2">
          FEATURED COLLECTION
        </p>
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.25em] text-neutral-900 font-sans">
          BEST SELLER
        </h2>
        <div className="flex items-center justify-center mt-3">
          <div className="w-12 h-[1.5px] bg-neutral-900" />
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-4">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <div className="animate-custom-marquee gap-6 px-3">
          {[...finalDisplayList, ...finalDisplayList, ...finalDisplayList].map((product, idx) => {
            const productId = product.id || product._id || product.sku || idx;
            const actualPrice = Number(product.price || product.discountPrice || 0);
            const discountPrice = product.discountPrice ? Number(product.discountPrice) : null;
            const originalPrice = Number(product.originalPrice || product.comparePrice || product.oldPrice || 0);
            const currentDisplayPrice = discountPrice || actualPrice;
            const hasDiscount = originalPrice > currentDisplayPrice;
            
            let discountPercent = 0;
            if (hasDiscount && originalPrice > 0) {
              discountPercent = Math.round(((originalPrice - currentDisplayPrice) / originalPrice) * 100);
            }

            const mainImage = extractImageUrl(
              product.image || product.imageUrl || product.img || product.thumbnail || product.featuredImage
            ) || FALLBACK_IMAGE;

            const isWishlisted = isInWishlist ? isInWishlist(productId) : false;

            const handleAddToCartClick = (e) => {
              e.preventDefault();
              e.stopPropagation();
              if (addToCart) {
                addToCart({
                  ...product,
                  id: productId,
                  price: currentDisplayPrice,
                  originalPrice: originalPrice,
                  selectedImage: mainImage,
                });
              }
            };

            return (
              <div
                key={`${productId}-${idx}`}
                className="w-[240px] sm:w-[270px] shrink-0 flex flex-col bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative group"
              >
                {/* Wishlist Button */}
                {toggleWishlist && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleWishlist({ ...product, id: productId });
                    }}
                    className={`absolute top-3 right-3 z-30 w-7 h-7 rounded-full bg-white/95 border border-neutral-200 flex items-center justify-center shadow-sm cursor-pointer transition-transform hover:scale-110 ${
                      isWishlisted ? "text-red-500" : "text-neutral-600"
                    }`}
                  >
                    ♥
                  </button>
                )}

                {/* Product Image Container */}
                <div className="w-full">
                  <div className="relative aspect-[4/5] w-full bg-[#FAFAFA] overflow-hidden flex items-center justify-center group/img rounded-t-xl">
                    <Link to={`/product/${productId}`} className="absolute inset-0 flex items-center justify-center overflow-hidden">
                      <img
                        src={mainImage}
                        alt={product.name || product.title || "Jewelry Item"}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/img:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          if (e.currentTarget.src !== FALLBACK_IMAGE) {
                            e.currentTarget.src = FALLBACK_IMAGE;
                          }
                        }}
                      />
                    </Link>

                    {/* Discount or Sale Badge */}
                    {hasDiscount && discountPercent > 0 ? (
                      <div className="absolute top-3 left-3 z-30 bg-neutral-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {discountPercent}% OFF
                      </div>
                    ) : (
                      <div className="absolute top-3 left-3 z-30 bg-white text-neutral-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm border border-neutral-200">
                        SALE
                      </div>
                    )}

                    {/* Quick Shop Button on Hover */}
                    {addToCart && (
                      <div className="absolute inset-x-0 bottom-4 flex justify-center z-30 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                        <button
                          type="button"
                          onClick={handleAddToCartClick}
                          className="bg-[#333333] text-white px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider flex items-center gap-2 shadow-lg hover:bg-black transition-colors cursor-pointer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          QUICK SHOP
                        </button>
                      </div>
                    )}

                    {/* Circular Cart Icon */}
                    {addToCart && (
                      <button
                        type="button"
                        onClick={handleAddToCartClick}
                        aria-label="Add to cart"
                        className="absolute bottom-3 right-3 z-20 w-10 h-10 rounded-full bg-white text-neutral-900 shadow-md border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>

                {/* Card Footer Details */}
                <div className="p-4 flex flex-col justify-between bg-white">
                  <Link to={`/product/${productId}`}>
                    <h3 className="text-xs sm:text-sm font-normal text-neutral-800 uppercase tracking-wider line-clamp-1 hover:text-[#C5A059] transition-colors">
                      {product.name || product.title || "Featured Jewellery"}
                    </h3>
                  </Link>

                  <div className="mt-2 flex items-center gap-2 flex-wrap">
                    <span className="text-xs sm:text-sm font-semibold text-neutral-900">
                      Rs. {currentDisplayPrice.toLocaleString()}
                    </span>
                    {hasDiscount && (
                      <span className="text-[10px] text-neutral-400 line-through">
                        Rs. {originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BestSeller;