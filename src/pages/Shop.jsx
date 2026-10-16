import React, { useState, useEffect, useContext, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CartContext } from "../context/CartContext";
import { useStore } from "../context/StoreContext";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

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
  const [isHovered, setIsHovered] = useState(false);
  const isWishlisted = isInWishlist ? isInWishlist(productId) : false;

  const images = useMemo(() => {
    if (!product) return [];
    const imageList = [];
    const mainImage = extractImageUrl(product.image || product.imageUrl || product.img || product.thumbnail);
    if (mainImage) imageList.push({ url: mainImage, type: "main" });
    if (Array.isArray(product.images)) {
      product.images.forEach((img) => {
        const url = extractImageUrl(img);
        if (url) imageList.push({ url, type: "gallery" });
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

  const safeImages = images.length > 0 ? images : [{ url: FALLBACK_IMAGE }];
  const primaryImage = safeImages[0]?.url || FALLBACK_IMAGE;
  const secondaryImage = safeImages.length > 1 ? safeImages[1].url : primaryImage;

  return (
    <div 
      className="w-full relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-xl sm:rounded-t-2xl flex items-center justify-center p-2 bg-white">
        <Link to={`/product/${productId}`} className="absolute inset-0 flex items-center justify-center overflow-hidden p-1 sm:p-2">
          <img
            src={primaryImage}
            alt={productName}
            className={`absolute inset-0 w-full h-full object-contain object-center transition-all duration-700 ease-in-out group-hover:scale-105 ${
              isHovered && safeImages.length > 1 ? "opacity-0" : "opacity-100"
            }`}
            loading="lazy"
            onError={(e) => { if (e.currentTarget.src !== FALLBACK_IMAGE) e.currentTarget.src = FALLBACK_IMAGE; }}
          />
          {safeImages.length > 1 && (
            <img
              src={secondaryImage}
              alt={productName}
              className={`absolute inset-0 w-full h-full object-contain object-center transition-all duration-700 ease-in-out group-hover:scale-105 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
            />
          )}
        </Link>

        {/* QUICK VIEW */}
        <button
          type="button"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); onQuickView(product); }}
          className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-white/90 text-neutral-900 backdrop-blur-md border border-neutral-200 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 hover:bg-neutral-900 hover:text-white transition cursor-pointer"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>

        {/* WISHLIST */}
        <button
          type="button"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(product); }}
          className="absolute top-14 right-3 z-30 w-9 h-9 rounded-full bg-white/90 text-neutral-900 backdrop-blur-md border border-neutral-200 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 hover:bg-neutral-900 hover:text-white transition cursor-pointer"
        >
          <svg className={`w-4 h-4 ${isWishlisted ? "text-red-500 fill-red-500" : ""}`} viewBox="0 0 24 24" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>

        {/* SALE BADGES */}
        {hasDiscount && (
          <>
            <div className="absolute top-2.5 left-2.5 z-30 bg-neutral-900 text-white px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold">SALE</div>
            {discountPercent > 0 && (
              <div className="absolute bottom-2.5 left-2.5 z-30 bg-white/95 text-neutral-900 border border-neutral-200 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold">{discountPercent}% OFF</div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function Shop() {
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, isInWishlist } = useStore();
  const [searchParams, setSearchParams] = useSearchParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [outOfStockOnly, setOutOfStockOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [sortBy, setSortBy] = useState("newest");

  const selectedCategory = searchParams.get("category") || "All";
  const searchQuery = searchParams.get("search") || "";
  const filterParam = searchParams.get("filter") || "";

  useEffect(() => {
    let isMounted = true;
    const fetchShopData = async () => {
      try {
        setLoading(true);
        const prodSnap = await getDocs(collection(db, "products"));
        if (isMounted) {
          const loadedProducts = prodSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
          setProducts(loadedProducts);
          if (loadedProducts.length > 0) {
            const highest = Math.max(...loadedProducts.map((p) => Number(p.price || p.discountPrice || 0)));
            if (highest > 0) setMaxPrice(highest);
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchShopData();
    return () => { isMounted = false; };
  }, []);

  const getProductImage = (product) => {
    const rawImage = product.image || product.imageUrl || product.img || product.thumbnail;
    return extractImageUrl(rawImage) || FALLBACK_IMAGE;
  };

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const name = product.name || product.title || "";
      const cat = product.category || "";

      const isSalePage = filterParam === "sale" || selectedCategory.toLowerCase() === "sale";
      const isNewArrivalsPage = selectedCategory.toLowerCase() === "new-arrivals" || selectedCategory.toLowerCase() === "new arrivals";

      if (isSalePage) {
        const actualPrice = Number(product.price || product.discountPrice || 0);
        const originalPrice = Number(product.originalPrice || product.comparePrice || product.oldPrice || 0);
        const hasSaleFlag = product.onSale === true || product.isSale === true || originalPrice > actualPrice || Boolean(product.discountPrice);
        if (!hasSaleFlag) return false;
      } else if (isNewArrivalsPage) {
        // New arrivals par sabhi uploaded products date-wise show honge
        return true;
      } else {
        const matchesCategory = selectedCategory === "All" || cat.toLowerCase() === selectedCategory.toLowerCase();
        if (!matchesCategory) return false;
      }

      if (searchQuery && !name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      if (Number(product.price || product.discountPrice || 0) > maxPrice) return false;

      const isStock = product.inStock !== false && product.stock !== 0;
      if (inStockOnly && !outOfStockOnly && !isStock) return false;
      if (outOfStockOnly && !inStockOnly && isStock) return false;

      return true;
    });

    return result.sort((a, b) => {
      const priceA = Number(a.price || a.discountPrice || 0);
      const priceB = Number(b.price || b.discountPrice || 0);
      
      const dateA = a.createdAt?.seconds || (a.createdAt ? new Date(a.createdAt).getTime() : 0) || a.date || 0;
      const dateB = b.createdAt?.seconds || (b.createdAt ? new Date(b.createdAt).getTime() : 0) || b.date || 0;

      const isNewArrivalsPage = selectedCategory.toLowerCase() === "new-arrivals" || selectedCategory.toLowerCase() === "new arrivals";
      
      // Agar New Arrivals page hai ya sortBy newest hai, to latest uploaded product sabse upar aayega
      if (isNewArrivalsPage || sortBy === "newest") {
        return dateB - dateA;
      }

      if (sortBy === "price-low-high") return priceA - priceB;
      if (sortBy === "price-high-low") return priceB - priceA;
      return 0;
    });
  }, [products, selectedCategory, searchQuery, filterParam, maxPrice, inStockOnly, outOfStockOnly, sortBy]);

  const isSaleActive = filterParam === "sale" || selectedCategory.toLowerCase() === "sale";
  const isNewArrivalsActive = selectedCategory.toLowerCase() === "new-arrivals" || selectedCategory.toLowerCase() === "new arrivals";

  return (
    <div className="min-h-screen pb-16 bg-white font-sans">
      <Helmet>
        <title>
          {isSaleActive ? "Sale Items | Ahsan Jewellery PK" : isNewArrivalsActive ? "New Arrivals | Ahsan Jewellery PK" : "Shop Collection | Ahsan Jewellery PK"}
        </title>
      </Helmet>

      <section className="w-full bg-white border-b border-neutral-200 py-10 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-bold block mb-2">
            {isSaleActive ? "Special Offers" : isNewArrivalsActive ? "Latest Additions" : "Handcrafted Elegance"}
          </span>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-widest text-neutral-900">
            {isSaleActive ? "🔥 Sale Collection" : isNewArrivalsActive ? "New Arrivals" : selectedCategory === "All" ? "Our Collections" : selectedCategory}
          </h1>
          <div className="w-12 h-[2px] bg-neutral-900 mx-auto mt-4" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-neutral-200">
          <button
            type="button"
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-300 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-900 hover:border-black transition cursor-pointer"
          >
            Filter
          </button>

          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <div className="text-xs uppercase tracking-wider text-neutral-700 font-bold bg-white px-3 py-2.5 rounded-xl border border-neutral-300">
              {filteredProducts.length} Products
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-neutral-300 text-neutral-900 text-xs uppercase tracking-wider font-bold rounded-xl px-3.5 py-2.5 outline-none focus:border-black cursor-pointer"
            >
              <option value="newest">Date, new to old</option>
              <option value="price-low-high">Price, low to high</option>
              <option value="price-high-low">Price, high to low</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20 text-neutral-500 text-xs tracking-widest uppercase font-bold">Loading collections...</div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filteredProducts.map((product) => {
              const productId = product.id || product._id || product.sku;
              const actualPrice = Number(product.price || product.discountPrice || 0);
              const discountPrice = product.discountPrice ? Number(product.discountPrice) : null;
              const originalPrice = Number(product.originalPrice || product.comparePrice || product.oldPrice || 0);
              const currentDisplayPrice = discountPrice || actualPrice;
              const hasDiscount = originalPrice > currentDisplayPrice;
              let discountPercent = hasDiscount && originalPrice > 0 ? Math.round(((originalPrice - currentDisplayPrice) / originalPrice) * 100) : 0;
              const mainImage = getProductImage(product);

              return (
                <div key={productId} className="group flex flex-col bg-white rounded-2xl border border-neutral-200 hover:border-neutral-900 overflow-hidden shadow-xs hover:shadow-xl transition relative">
                  <div className="relative w-full overflow-hidden">
                    <ProductImageCarousel
                      product={product}
                      productId={productId}
                      productName={product.name || product.title}
                      hasDiscount={hasDiscount}
                      discountPercent={discountPercent}
                      onQuickView={(prod) => { setQuickViewProduct(prod); setQuantity(1); }}
                      toggleWishlist={toggleWishlist}
                      isInWishlist={isInWishlist}
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart({ ...product, price: currentDisplayPrice, originalPrice, selectedImage: mainImage });
                      }}
                      className="absolute bottom-3 right-3 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-neutral-900 hover:text-white text-neutral-900 border border-neutral-200 flex items-center justify-center shadow-md transition cursor-pointer"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                    </button>
                  </div>

                  <div className="p-3.5 sm:p-5 flex flex-col flex-grow justify-between bg-white">
                    <div>
                      <Link to={`/product/${productId}`}>
                        <h3 className="text-xs sm:text-sm font-bold text-neutral-900 uppercase tracking-wider line-clamp-1 hover:text-amber-600 transition">{product.name || product.title}</h3>
                      </Link>
                      <div className="mt-2 flex items-center gap-2 sm:gap-3 flex-wrap">
                        <span className="text-xs sm:text-sm font-extrabold text-neutral-950">Rs. {currentDisplayPrice.toLocaleString()}</span>
                        {hasDiscount && <span className="text-[11px] font-semibold text-neutral-400 line-through">Rs. {originalPrice.toLocaleString()}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-2xl border border-neutral-200">
            <p className="text-neutral-600 text-xs font-bold uppercase tracking-wider mb-4">No products found matching your filter.</p>
            <button
              type="button"
              onClick={() => { setSearchParams({}); setMaxPrice(100000); setInStockOnly(false); setOutOfStockOnly(false); }}
              className="px-6 py-3 bg-neutral-900 text-white text-xs uppercase tracking-wider font-bold rounded-xl hover:bg-black transition cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;