import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  useRef,
} from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CartContext } from "../context/CartContext";
import { useStore } from "../context/StoreContext";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Hero from "../components/Hero";
import FeatureTicker from "../components/FeatureTicker";
import StoreFeatures from "../components/StoreFeatures";

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

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop";

function ProductImageCarousel({
  product,
  productId,
  productName,
  hasDiscount,
  discountPercent,
  onQuickView,
  toggleWishlist,
  isInWishlist,
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const isWishlisted = isInWishlist ? isInWishlist(productId) : false;

  const images = useMemo(() => {
    if (!product) return [];
    const imageList = [];
    const mainImage = extractImageUrl(
      product.image || product.imageUrl || product.img || product.thumbnail
    );
    if (mainImage) {
      imageList.push({ url: mainImage, type: "main", label: "Main" });
    }
    if (Array.isArray(product.images)) {
      product.images.forEach((image, index) => {
        const url = extractImageUrl(image);
        if (url) imageList.push({ url, type: "gallery", label: `Image ${index + 1}` });
      });
    }
    if (Array.isArray(product.variants)) {
      product.variants.forEach((variant) => {
        if (!variant) return;
        const variantImage = extractImageUrl(
          variant.imageUrl || variant.image || variant.imageUrlSecure || variant.img
        );
        if (variantImage) {
          imageList.push({
            url: variantImage,
            type: "variant",
            label: variant.colorName || "Variant",
          });
        }
      });
    }
    const uniqueImages = [];
    const usedUrls = new Set();
    imageList.forEach((item) => {
      if (!usedUrls.has(item.url)) {
        usedUrls.add(item.url);
        uniqueImages.push(item);
      }
    });
    return uniqueImages;
  }, [product]);

  const safeImages = images.length > 0 ? images : [{ url: FALLBACK_IMAGE, type: "fallback", label: "Product" }];

  const handleMouseMove = (e) => {
    if (safeImages.length <= 1 || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    const width = rect.width;
    
    const percentage = Math.max(0, Math.min(1, xPos / width));
    const index = Math.floor(percentage * safeImages.length);
    const clampedIndex = Math.min(index, safeImages.length - 1);
    
    setActiveImageIndex(clampedIndex);
  };

  const handleMouseLeave = () => {
    setActiveImageIndex(0);
  };

  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      touchStartX.current = e.touches[0].clientX;
    }
  };

  const handleTouchMove = (e) => {
    if (safeImages.length <= 1 || !containerRef.current || !e.touches) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPos = e.touches[0].clientX - rect.left;
    const width = rect.width;

    const percentage = Math.max(0, Math.min(1, xPos / width));
    const index = Math.floor(percentage * safeImages.length);
    const clampedIndex = Math.min(index, safeImages.length - 1);

    setActiveImageIndex(clampedIndex);
  };

  return (
    <div 
      className="w-full relative group overflow-hidden bg-[#FBFBFA]"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="relative aspect-[4/5] w-full flex items-center justify-center p-4">
        {safeImages.length > 1 && (
          <div className="absolute top-2.5 inset-x-3 z-30 flex gap-1">
            {safeImages.map((_, idx) => (
              <button
                type="button"
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveImageIndex(idx);
                }}
                className="h-[2px] flex-1 rounded-full transition-all duration-200 bg-transparent cursor-pointer relative"
                aria-label={`Show image ${idx + 1}`}
              >
                <div 
                  className="absolute inset-0 rounded-full transition-all duration-200"
                  style={{
                    backgroundColor: idx === activeImageIndex ? "#111111" : "rgba(0, 0, 0, 0.15)"
                  }}
                />
              </button>
            ))}
          </div>
        )}

        <Link
          to={`/product/${productId}`}
          className="absolute inset-0 flex items-center justify-center p-3"
        >
          <img
            src={safeImages[activeImageIndex]?.url || FALLBACK_IMAGE}
            alt={`${productName || "Jewelry Item"} Image ${activeImageIndex + 1}`}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              if (e.currentTarget.src !== FALLBACK_IMAGE) {
                e.currentTarget.src = FALLBACK_IMAGE;
              }
            }}
          />
        </Link>

        {/* Action Buttons: Quick View & Wishlist */}
        <div className="absolute top-3 right-3 z-30 flex flex-col gap-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onQuickView(product);
            }}
            aria-label="Quick View"
            className="w-8 h-8 rounded-full bg-white/90 text-neutral-800 backdrop-blur-sm border border-neutral-200/80 flex items-center justify-center shadow-sm hover:bg-[#E82A89] hover:text-white transition-all duration-200 cursor-pointer"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (toggleWishlist) toggleWishlist(product);
            }}
            aria-label="Wishlist"
            className="w-8 h-8 rounded-full bg-white/90 text-neutral-800 backdrop-blur-sm border border-neutral-200/80 flex items-center justify-center shadow-sm hover:bg-[#E82A89] hover:text-white transition-all duration-200 cursor-pointer"
          >
            <svg
              className={`w-3.5 h-3.5 transition-colors ${isWishlisted ? "text-rose-500 fill-rose-500" : ""}`}
              viewBox="0 0 24 24"
              fill={isWishlisted ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>

        {/* Rectangular Magenta Pink "Save X%" Badge */}
        {hasDiscount && discountPercent > 0 && (
          <div className="absolute top-0 left-0 z-30">
            <span 
              className="px-2.5 py-1 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-br-lg shadow-sm"
              style={{ backgroundColor: "#E82A89" }}
            >
              Save {discountPercent}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function Home() {
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, isInWishlist } = useStore();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [zoomStyle, setZoomStyle] = useState({ transformOrigin: "center center", transform: "scale(1)" });

  const collectionSliderRef = useRef(null);

  const scrollCollection = (direction) => {
    if (collectionSliderRef.current) {
      const scrollAmount = 350;
      collectionSliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        setLoading(true);
        const [prodSnapshot, catSnapshot] = await Promise.all([
          getDocs(collection(db, "products")),
          getDocs(collection(db, "categories"))
        ]);
        
        const prodList = prodSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        const catList = catSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        if (isMounted) {
          setProducts(prodList);
          setCategories(catList);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchData();
    return () => { isMounted = false; };
  }, []);

  const getProductImage = (product) => {
    if (!product) return FALLBACK_IMAGE;
    const rawImage = product.image || product.imageUrl || product.img || product.thumbnail;
    const extractedRawImage = extractImageUrl(rawImage);
    if (extractedRawImage) return extractedRawImage;
    if (Array.isArray(product.images) && product.images.length > 0) {
      const firstImage = extractImageUrl(product.images[0]);
      if (firstImage) return firstImage;
    }
    return FALLBACK_IMAGE;
  };

  const handleImageMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2)",
    });
  };

  const handleImageMouseLeave = () => {
    setZoomStyle({
      transformOrigin: "center center",
      transform: "scale(1)",
    });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Helmet>
        <title>Ahsan | Fine Jewellery & Luxury Collections</title>
        <meta name="description" content="Explore exquisite handcrafted jewellery and luxury collections at Ahsan." />
      </Helmet>

      <Hero />

      {/* SHOP BY COLLECTION SECTION */}
      <section className="w-full px-4 sm:px-8 lg:px-16 pt-16 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 relative">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-[0.2em] text-neutral-900">
              Shop By Collection
            </h3>
            <div className="w-12 h-[2px] bg-neutral-900 mx-auto mt-3"></div>

            <div className="absolute right-0 bottom-0 hidden sm:flex gap-2">
              <button
                onClick={() => scrollCollection('left')}
                aria-label="Scroll left"
                className="w-9 h-9 rounded-full border border-neutral-300 bg-white hover:bg-[#E82A89] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollCollection('right')}
                aria-label="Scroll right"
                className="w-9 h-9 rounded-full border border-neutral-300 bg-white hover:bg-[#E82A89] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {categories.length > 0 ? (
            <div 
              ref={collectionSliderRef}
              className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 pt-1"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {categories.map((cat) => {
                const catName = cat.name || cat.title || "Category";
                const catImage = extractImageUrl(cat.image || cat.imageUrl || cat.img);
                return (
                  <Link
                    key={cat.id}
                    to={`/shop?category=${encodeURIComponent(catName)}`}
                    className="group flex flex-col items-center p-5 rounded-2xl bg-neutral-50/70 hover:bg-white border border-neutral-200/80 hover:border-[#E82A89] transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer flex-shrink-0"
                    style={{ width: '220px', minWidth: '220px' }}
                  >
                    <div className="w-full aspect-square rounded-xl overflow-hidden bg-neutral-100 mb-4 relative shadow-inner">
                      {catImage ? (
                        <img
                          src={catImage}
                          alt={catName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-neutral-400 uppercase tracking-wider font-medium">
                          No Image
                        </div>
                      )}
                    </div>
                    <span className="text-sm font-semibold tracking-wide text-neutral-900 group-hover:text-[#E82A89] uppercase text-center line-clamp-1">
                      {catName}
                    </span>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-6 text-neutral-400 text-xs tracking-widest uppercase">
              Loading categories...
            </div>
          )}
        </div>
      </section>

      {/* FEATURE TICKER BAR */}
      <FeatureTicker />

      {/* PRODUCTS SECTION (BEST SELLERS) */}
      <section className="w-full px-3 sm:px-8 lg:px-16 py-10">
        <div className="text-center mb-10">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-[0.2em] text-neutral-900">
            Best Sellers
          </h3>
          <div className="w-12 h-[2px] bg-neutral-900 mx-auto mt-3"></div>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-neutral-50 rounded-xl h-72 animate-pulse border border-neutral-200" />
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-16 bg-neutral-50 rounded-2xl border border-neutral-200">
            <p className="text-xs uppercase tracking-widest text-neutral-500">No products available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            {products.slice(0, 24).map((product) => {
              const productId = product.id || product._id;
              const actualPrice = Number(product.price || product.discountPrice || 0);
              const discountPrice = product.discountPrice ? Number(product.discountPrice) : null;
              const originalPrice = Number(product.originalPrice || product.comparePrice || 0);
              const currentDisplayPrice = discountPrice || actualPrice;
              const hasDiscount = originalPrice > currentDisplayPrice;
              
              let discountPercent = 0;
              if (hasDiscount && originalPrice > 0) {
                discountPercent = Math.round(((originalPrice - currentDisplayPrice) / originalPrice) * 100);
              }

              const mainImage = getProductImage(product);

              return (
                <div
                  key={productId}
                  className="group flex flex-col bg-white rounded-xl border border-neutral-200/90 hover:border-[#E82A89] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300"
                >
                  <ProductImageCarousel
                    product={product}
                    productId={productId}
                    productName={product.name || product.title}
                    hasDiscount={hasDiscount}
                    discountPercent={discountPercent}
                    onQuickView={(prod) => {
                      setQuickViewProduct(prod);
                      setQuantity(1);
                    }}
                    toggleWishlist={toggleWishlist}
                    isInWishlist={isInWishlist}
                  />

                  <div className="p-3 sm:p-4 flex flex-col flex-grow justify-between bg-white">
                    <div>
                      <Link to={`/product/${productId}`}>
                        <h3 className="text-[11px] sm:text-sm font-normal text-neutral-800 uppercase tracking-wider line-clamp-1 group-hover:text-[#E82A89] transition-colors">
                          {product.name || product.title}
                        </h3>
                      </Link>

                      <div className="mt-2 flex items-center gap-2 flex-wrap">
                        <span className="text-sm sm:text-base font-bold text-neutral-950 tracking-wide">
                          Rs. {currentDisplayPrice.toLocaleString()} PKR
                        </span>
                        {hasDiscount && (
                          <span className="text-xs sm:text-sm font-bold text-red-600 line-through tracking-wide">
                            Rs. {originalPrice.toLocaleString()} PKR
                          </span>
                        )}
                      </div>
                    </div>

                    {/* ADD TO CART BUTTON */}
                    <div className="mt-3 pt-2.5 border-t border-neutral-100">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToCart({
                            ...product,
                            price: currentDisplayPrice,
                            originalPrice: originalPrice,
                            selectedImage: mainImage,
                          });
                        }}
                        className="w-full py-2 bg-neutral-100 hover:bg-[#E82A89] text-neutral-900 hover:text-white rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer shadow-2xs"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* STORE FEATURES SECTION */}
      <StoreFeatures />

      {/* QUICK VIEW MODAL POPUP WITH HOVER ZOOM */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto border border-neutral-200">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-neutral-100 hover:bg-[#E82A89] hover:text-white flex items-center justify-center text-neutral-700 transition-colors cursor-pointer"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              {/* Image with Hover Zoom */}
              <div 
                className="aspect-[4/5] rounded-xl overflow-hidden flex items-center justify-center p-2 bg-neutral-50 border border-neutral-200 relative cursor-zoom-in"
                onMouseMove={handleImageMouseMove}
                onMouseLeave={handleImageMouseLeave}
              >
                <img
                  src={getProductImage(quickViewProduct)}
                  alt={quickViewProduct.name || quickViewProduct.title}
                  className="w-full h-full object-cover transition-transform duration-150 ease-out"
                  style={zoomStyle}
                />
                <span className="absolute bottom-3 left-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded backdrop-blur-xs pointer-events-none uppercase tracking-wider">
                  Hover to Zoom
                </span>
              </div>

              {/* Product Info & Actions */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-bold text-neutral-900 uppercase tracking-wide">
                    {quickViewProduct.name || quickViewProduct.title}
                  </h2>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-base sm:text-lg font-bold text-neutral-950">
                      Rs. {Number(quickViewProduct.discountPrice || quickViewProduct.price || 0).toLocaleString()} PKR
                    </span>
                    {quickViewProduct.originalPrice && Number(quickViewProduct.originalPrice) > Number(quickViewProduct.discountPrice || quickViewProduct.price || 0) && (
                      <span className="text-sm sm:text-base font-bold text-red-600 line-through">
                        Rs. {Number(quickViewProduct.originalPrice).toLocaleString()} PKR
                      </span>
                    )}
                  </div>
                  {quickViewProduct.description && (
                    <p className="mt-4 text-xs text-neutral-600 leading-relaxed line-clamp-4">
                      {quickViewProduct.description}
                    </p>
                  )}
                </div>

                <div className="mt-6 space-y-4 pt-4 border-t border-neutral-100">
                  {/* Quantity Selector */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase font-semibold text-neutral-700 tracking-wider">Quantity:</span>
                    <div className="flex items-center border border-neutral-300 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 text-xs font-bold text-neutral-900">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Add To Cart & View Full Details Buttons */}
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        const finalPrice = Number(quickViewProduct.discountPrice || quickViewProduct.price || 0);
                        for (let i = 0; i < quantity; i++) {
                          addToCart({
                            ...quickViewProduct,
                            price: finalPrice,
                            selectedImage: getProductImage(quickViewProduct),
                          });
                        }
                        setQuickViewProduct(null);
                      }}
                      className="w-full py-3 bg-[#E82A89] hover:bg-[#d0237b] text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer shadow-md"
                    >
                      Add To Cart
                    </button>
                    <Link
                      to={`/product/${quickViewProduct.id || quickViewProduct._id}`}
                      onClick={() => setQuickViewProduct(null)}
                      className="block w-full py-2.5 text-center bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-200"
                    >
                      View Full Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;