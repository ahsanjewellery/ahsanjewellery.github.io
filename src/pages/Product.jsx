import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
} from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CartContext } from "../context/CartContext";
import { useStore } from "../context/StoreContext";
import { db } from "../firebase";

import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import {
  Heart,
  Droplet,
  Clock,
  Package,
  Sparkles,
  Star,
  X,
  HelpCircle,
} from "lucide-react";

import ProductReviews from "../components/ProductReviews";

const extractUrl = (item) => {
  if (!item) return null;
  if (typeof item === "string") return item.trim();

  if (typeof item === "object") {
    if (item.secure_url) return String(item.secure_url).trim();
    if (item.url) return String(item.url).trim();
    if (item.src) return String(item.src).trim();
    if (item.image) return extractUrl(item.image);
  }

  return null;
};

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=4000&auto=format&fit=crop";

const formatPrice = (value) => {
  const num = Number(value);
  return isNaN(num) ? "0" : num.toLocaleString();
};

function Product() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, isInWishlist } = useStore();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isShippingModalOpen, setIsShippingModalOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const isWishlisted = product ? isInWishlist(product.id) : false;

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    let isMounted = true;
    setLoading(true);

    const syncProductData = (data) => {
      if (!isMounted) return;

      setProduct(data);

      const primaryImg =
        extractUrl(data.image) ||
        extractUrl(data.imageUrl) ||
        (Array.isArray(data.images) ? extractUrl(data.images[0]) : "") ||
        "";

      setSelectedImage(primaryImg);

      if (Array.isArray(data.variants) && data.variants.length > 0) {
        const firstVariant = data.variants[0];

        setSelectedVariant(firstVariant);

        const variantImage =
          extractUrl(firstVariant.imageUrl) ||
          extractUrl(firstVariant.image) ||
          extractUrl(firstVariant.img);

        if (variantImage) {
          setSelectedImage(variantImage);
        }
      }

      setLoading(false);
    };

    const fetchProductAndRelated = async () => {
      try {
        const rawId = String(id).trim();

        const directDocRef = doc(db, "products", rawId);
        const directSnap = await getDoc(directDocRef);

        let activeProductData = null;
        let activeProductId = rawId;

        if (directSnap.exists()) {
          activeProductId = directSnap.id;

          activeProductData = {
            id: activeProductId,
            ...directSnap.data(),
          };

          syncProductData(activeProductData);
        } else {
          const productsRef = collection(db, "products");

          const qId = query(
            productsRef,
            where("id", "==", rawId)
          );

          const snapId = await getDocs(qId);

          if (!snapId.empty) {
            const docData = snapId.docs[0];

            activeProductId = docData.id;

            activeProductData = {
              id: activeProductId,
              ...docData.data(),
            };

            syncProductData(activeProductData);
          } else {
            const allDocsSnap = await getDocs(productsRef);

            let matched = null;

            allDocsSnap.forEach((d) => {
              if (matched) return;

              const data = d.data();
              const target = rawId.toLowerCase();

              if (
                String(d.id).toLowerCase() === target ||
                String(data.id || "").toLowerCase() === target ||
                String(data.sku || "").toLowerCase() === target
              ) {
                matched = {
                  id: d.id,
                  ...data,
                };
              }
            });

            if (matched) {
              activeProductId = matched.id;
              activeProductData = matched;

              syncProductData(matched);
            } else {
              if (isMounted) {
                setProduct(null);
                setLoading(false);
              }

              return;
            }
          }
        }

        if (activeProductId) {
          const reviewsRef = collection(db, "reviews");

          const qReviews = query(
            reviewsRef,
            where("productId", "==", activeProductId)
          );

          const reviewSnap = await getDocs(qReviews);

          const fetchedReviews = [];

          reviewSnap.forEach((revDoc) => {
            fetchedReviews.push({
              id: revDoc.id,
              ...revDoc.data(),
            });
          });

          fetchedReviews.sort((a, b) => {
            const dateA = a.createdAt?.seconds
              ? a.createdAt.seconds * 1000
              : new Date(a.date || 0).getTime();

            const dateB = b.createdAt?.seconds
              ? b.createdAt.seconds * 1000
              : new Date(b.date || 0).getTime();

            return dateB - dateA;
          });

          if (isMounted) {
            setReviews(fetchedReviews);
          }

          const allProductsSnap = await getDocs(
            collection(db, "products")
          );

          const relList = [];

          allProductsSnap.forEach((docSnap) => {
            if (docSnap.id !== activeProductId) {
              relList.push({
                id: docSnap.id,
                ...docSnap.data(),
              });
            }
          });

          if (isMounted) {
            setRelatedProducts(relList.slice(0, 4));
          }
        }
      } catch (error) {
        console.error(
          "Error fetching product details:",
          error
        );

        if (isMounted) {
          setProduct(null);
          setLoading(false);
        }
      }
    };

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    fetchProductAndRelated();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleAddReview = async (newReviewData) => {
    try {
      const docRef = await addDoc(
        collection(db, "reviews"),
        {
          productId: product.id,
          ...newReviewData,
          createdAt: serverTimestamp(),
        }
      );

      const addedReview = {
        id: docRef.id,
        ...newReviewData,
        createdAt: {
          seconds: Date.now() / 1000,
        },
      };

      setReviews((prevReviews) => [
        addedReview,
        ...prevReviews,
      ]);
    } catch (error) {
      console.error(
        "Error adding review: ",
        error
      );
    }
  };

  const averageRating = useMemo(() => {
    if (!reviews || reviews.length === 0) {
      return "5.0";
    }

    const total = reviews.reduce(
      (acc, curr) =>
        acc + Number(curr.rating || 0),
      0
    );

    return (total / reviews.length).toFixed(1);
  }, [reviews]);

  const allImages = useMemo(() => {
    if (!product) return [];

    const list = [];

    if (product.image) {
      list.push(extractUrl(product.image));
    }

    if (product.imageUrl) {
      list.push(extractUrl(product.imageUrl));
    }

    if (Array.isArray(product.images)) {
      product.images.forEach((img) => {
        list.push(extractUrl(img));
      });
    }

    if (Array.isArray(product.variants)) {
      product.variants.forEach((variant) => {
        if (!variant) return;

        const vImg =
          extractUrl(variant.imageUrl) ||
          extractUrl(variant.image) ||
          extractUrl(variant.img);

        if (vImg) {
          list.push(vImg);
        }
      });
    }

    return Array.from(
      new Set(list.filter(Boolean))
    );
  }, [product]);

  const baseEffectivePrice = useMemo(() => {
    if (!product) return 0;

    if (
      product.price !== undefined &&
      product.price !== null &&
      product.price !== ""
    ) {
      return Number(product.price);
    }

    if (product.discountPrice) {
      return Number(product.discountPrice);
    }

    if (product.finalPrice) {
      return Number(product.finalPrice);
    }

    return 0;
  }, [product]);

  const baseOriginalPrice = useMemo(() => {
    if (!product) return 0;

    if (product.originalPrice) {
      return Number(product.originalPrice);
    }

    if (product.comparePrice) {
      return Number(product.comparePrice);
    }

    return 0;
  }, [product]);

  const effectivePrice =
    baseEffectivePrice * quantity;

  const originalPrice =
    baseOriginalPrice * quantity;

  const hasDiscount =
    originalPrice > effectivePrice &&
    baseOriginalPrice > 0;

  const discountPercent = hasDiscount
    ? Math.round(
        ((baseOriginalPrice - baseEffectivePrice) /
          baseOriginalPrice) *
          100
      )
    : 0;

  const seoDescription = useMemo(() => {
    if (!product) return "";

    const rawDescription =
      product.description ||
      product.details ||
      `Shop from Ahsan Jewellery.`;

    return String(rawDescription)
      .replace(/<[^>]*>?/gm, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 160);
  }, [product]);

  const productName =
    product?.name ||
    product?.title ||
    "New Arrival Zircon Set";

  const productDesc =
    product?.description ||
    product?.details ||
    "Explore our exclusive collection.";

  const canonicalUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}`
      : "";

  const handleAddToCartClick = () => {
    if (!product) return;

    addToCart({
      ...product,
      price: baseEffectivePrice,
      selectedColor: selectedVariant
        ? selectedVariant.name ||
          selectedVariant.color
        : null,
      selectedImage:
        selectedImage || FALLBACK_IMAGE,
      quantity,
    });
  };

  const handleWhatsAppClick = () => {
    if (!product) return;

    const phoneNo = "923094255818";

    const variantName = selectedVariant
      ? selectedVariant.name ||
        selectedVariant.color
      : "Standard";

    const message =
      `Hello, I want to order this product:\n\n` +
      `*Product:* ${productName}\n` +
      `*SKU:* ${product.sku || "N/A"}\n` +
      `*Finish/Color:* ${variantName}\n` +
      `*Quantity:* ${quantity}\n` +
      `*Total Price:* Rs.${formatPrice(effectivePrice)}\n` +
      `*Link:* ${window.location.href}`;

    const whatsappUrl =
      `https://wa.me/${phoneNo}?text=${encodeURIComponent(
        message
      )}`;

    window.open(
      whatsappUrl,
      "_blank"
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFFFFF]">
        <div className="w-6 h-6 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFFFF] px-4 font-sans">
        <h2 className="text-xs font-bold text-neutral-900 uppercase tracking-widest mb-3">
          Product Not Found
        </h2>

        <Link
          to="/"
          className="bg-neutral-900 text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-sm"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-neutral-900 pb-20 font-sans selection:bg-neutral-900 selection:text-white">
      <Helmet>
        <title>
          {productName} | Ahsan Jewellery
        </title>

        <meta
          name="description"
          content={seoDescription}
        />

        <link
          rel="canonical"
          href={canonicalUrl}
        />
      </Helmet>

      {/* BREADCRUMBS */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-6 pb-6">
        <div className="text-xs font-medium text-neutral-500 tracking-wide flex items-center gap-2 overflow-x-auto whitespace-nowrap">
          <Link
            to="/"
            className="hover:text-neutral-900 transition"
          >
            Home
          </Link>

          <span className="text-neutral-400">
            /
          </span>

          <span>Jewelry</span>

          <span className="text-neutral-400">
            /
          </span>

          <span>Zircon Set</span>

          <span className="text-neutral-400">
            /
          </span>

          <span className="text-neutral-900 font-semibold">
            {productName}
          </span>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* LEFT: PRODUCT CARE */}
          <div className="lg:col-span-3 space-y-4 order-3 lg:order-1 bg-[#FFFFFF] p-5 sm:p-6 rounded-2xl border border-neutral-300/70 shadow-xs">
            <h3 className="text-xs font-bold text-neutral-900 tracking-widest uppercase pb-2 border-b border-neutral-300/60">
              Product Care
            </h3>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-neutral-500 block uppercase tracking-wider">
                Material Quality
              </span>

              <p className="text-xs text-neutral-800 leading-relaxed font-medium">
                Gold & Silver Finish Jewelry.
                Crafted to retain long-lasting
                brilliance.
              </p>
            </div>

            <div className="space-y-2.5 pt-1">
              <div className="flex items-start gap-3 p-3 bg-[#FFFFFF] border border-neutral-300/60 rounded-xl shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#FFFFFF] flex items-center justify-center border border-neutral-300/60 shrink-0 mt-0.5">
                  <Droplet className="w-3.5 h-3.5 text-neutral-800" />
                </div>

                <p className="text-[11px] text-neutral-800 leading-snug font-medium">
                  Avoid direct water,
                  perfumes & harsh chemicals
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#FFFFFF] border border-neutral-300/60 rounded-xl shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#FFFFFF] flex items-center justify-center border border-neutral-300/60 shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-neutral-800" />
                </div>

                <p className="text-[11px] text-neutral-800 leading-snug font-medium">
                  Remove before swimming,
                  gym or physical exercise
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#FFFFFF] border border-neutral-300/60 rounded-xl shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#FFFFFF] flex items-center justify-center border border-neutral-300/60 shrink-0 mt-0.5">
                  <Package className="w-3.5 h-3.5 text-neutral-800" />
                </div>

                <p className="text-[11px] text-neutral-800 leading-snug font-medium">
                  Store safely in a dry jewelry
                  box or soft pouch
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#FFFFFF] border border-neutral-300/60 rounded-xl shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#FFFFFF] flex items-center justify-center border border-neutral-300/60 shrink-0 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5 text-neutral-800" />
                </div>

                <p className="text-[11px] text-neutral-800 leading-snug font-medium">
                  Clean gently using a soft,
                  dry microfiber cloth
                </p>
              </div>
            </div>
          </div>

          {/* MIDDLE: MAIN IMAGE GALLERY */}
          <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
            <div
              onClick={() => setIsZoomOpen(true)}
              className="w-full aspect-square bg-[#FFFFFF] overflow-hidden border border-neutral-300/70 relative group shadow-sm rounded-2xl cursor-zoom-in"
              title="Click to view full screen"
            >
              <img
                src={
                  selectedImage ||
                  FALLBACK_IMAGE
                }
                alt={productName}
                width="4000"
                height="4000"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700 ease-out"
                onError={(e) => {
                  e.currentTarget.src =
                    FALLBACK_IMAGE;
                }}
              />

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWishlist(product);
                }}
                className="absolute top-4 right-4 w-11 h-11 bg-[#FFFFFF]/90 backdrop-blur-xs rounded-full flex items-center justify-center shadow-md border border-neutral-300/70 hover:scale-110 transition-all cursor-pointer z-10"
                aria-label="Wishlist"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isWishlisted
                      ? "text-red-500 fill-red-500"
                      : "text-neutral-900"
                  }`}
                />
              </button>
            </div>

            {allImages.length > 0 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {allImages.map(
                  (imgUrl, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() =>
                        setSelectedImage(
                          imgUrl
                        )
                      }
                      className={`w-20 aspect-square shrink-0 overflow-hidden border transition bg-[#FFFFFF] cursor-pointer rounded-xl ${
                        selectedImage ===
                        imgUrl
                          ? "border-neutral-900 opacity-100 shadow-xs ring-1 ring-neutral-900"
                          : "border-neutral-300/70 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={imgUrl}
                        alt=""
                        width="100"
                        height="100"
                        className="w-full h-full object-cover object-center"
                      />
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          {/* RIGHT: BUY BOX & ACTIONS */}
          <div className="lg:col-span-4 space-y-5 order-2 lg:order-3 bg-[#FFFFFF] p-5 sm:p-6 rounded-2xl border border-neutral-300/70 shadow-xs">
            <div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <h1 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight leading-snug">
                  {productName}
                </h1>

                {hasDiscount && (
                  <span className="bg-[#FFFFFF] text-neutral-900 text-[11px] font-bold px-2.5 py-1 rounded-md shrink-0 border border-neutral-300/70 shadow-2xs">
                    {discountPercent}% OFF
                  </span>
                )}
              </div>

              {/* RATINGS */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-current"
                      />
                    )
                  )}
                </div>

                <span className="text-xs font-bold text-neutral-900">
                  {averageRating}
                </span>

                <span className="text-xs text-neutral-500">
                  ({reviews.length} reviews)
                </span>
              </div>

              <p className="text-xs text-neutral-500 font-medium">
                SKU:{" "}
                <span className="text-neutral-900 font-semibold">
                  {product.sku ||
                    product.id ||
                    "N/A"}
                </span>
              </p>
            </div>

            {/* PRICE SECTION */}
            <div className="pt-3 border-t border-neutral-300/60 flex items-baseline justify-between">
              <span className="text-xs font-bold tracking-widest uppercase text-neutral-500">
                Price
              </span>

              <div className="text-right flex items-center gap-3">
                {hasDiscount && (
                  <span className="text-sm text-neutral-500 font-medium line-through">
                    Rs.
                    {formatPrice(
                      originalPrice
                    )}
                  </span>
                )}

                <span className="text-xl sm:text-2xl font-bold text-neutral-900">
                  Rs.
                  {formatPrice(
                    effectivePrice
                  )}
                </span>
              </div>
            </div>

            {/* SHIPPING */}
            <div className="flex items-center justify-between py-3 border-t border-b border-neutral-300/60 text-xs font-medium">
              <div className="flex items-center gap-1.5 text-neutral-600">
                <span>Shipping Fee</span>

                <button
                  type="button"
                  onClick={() =>
                    setIsShippingModalOpen(
                      true
                    )
                  }
                  className="focus:outline-none hover:text-neutral-900 transition cursor-pointer"
                  title="View Shipping Policy"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-neutral-500" />
                </button>
              </div>

              <span className="font-bold text-neutral-900">
                Rs. 300.00
              </span>
            </div>

            {/* QUANTITY PICKER */}
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest uppercase text-neutral-500 block">
                Quantity
              </span>

              <div className="flex items-center border border-neutral-300/70 rounded-xl w-32 bg-[#FFFFFF] overflow-hidden shadow-2xs">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((q) =>
                      Math.max(1, q - 1)
                    )
                  }
                  className="w-10 h-10 flex items-center justify-center text-neutral-700 hover:bg-[#FFFFFF] transition cursor-pointer font-bold"
                >
                  -
                </button>

                <span className="flex-1 text-center text-sm font-bold text-neutral-900">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((q) => q + 1)
                  }
                  className="w-10 h-10 flex items-center justify-center text-neutral-700 hover:bg-[#FFFFFF] transition cursor-pointer font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    handleAddToCartClick();
                    toggleWishlist(
                      product
                    );
                  }}
                  className="w-full border border-neutral-900 text-neutral-900 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#FFFFFF] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <Heart className="w-4 h-4" />
                  Wishlist
                </button>

                <button
                  type="button"
                  onClick={
                    handleAddToCartClick
                  }
                  className="w-full bg-neutral-900 text-white py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  Buy It Now
                </button>
              </div>

              <button
                type="button"
                onClick={
                  handleWhatsAppClick
                }
                className="w-full bg-[#25D366] hover:bg-[#22bf5b] text-white py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                Order via WhatsApp
              </button>
            </div>

            {/* DESCRIPTION ACCORDION */}
            <div className="border-t border-neutral-300/60 pt-3">
              <button
                type="button"
                onClick={() =>
                  setIsDescriptionOpen(
                    (prev) => !prev
                  )
                }
                className="w-full flex items-center justify-between text-left py-1.5 group cursor-pointer"
              >
                <span className="text-xs font-bold tracking-widest uppercase text-neutral-900 group-hover:text-neutral-600 transition">
                  Product Description
                </span>

                <span className="w-6 h-6 rounded-full bg-[#FFFFFF] border border-neutral-300/70 flex items-center justify-center text-neutral-800 text-sm font-bold">
                  {isDescriptionOpen
                    ? "-"
                    : "+"}
                </span>
              </button>

              {isDescriptionOpen && (
                <div className="pt-3 pb-2 text-xs text-neutral-700 leading-relaxed space-y-2">
                  <p>
                    {productDesc}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CUSTOMER REVIEWS SECTION */}
        <div className="mt-16 pt-12 border-t border-neutral-300/60">
          <ProductReviews
            productId={product.id}
            productName={productName}
            productImage={
              selectedImage ||
              FALLBACK_IMAGE
            }
            reviews={reviews}
            averageRating={averageRating}
            onAddReview={
              handleAddReview
            }
          />
        </div>
      </div>

      {/* FULLSCREEN ZOOM MODAL */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() =>
            setIsZoomOpen(false)
          }
        >
          <button
            type="button"
            onClick={() =>
              setIsZoomOpen(false)
            }
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <img
            src={
              selectedImage ||
              FALLBACK_IMAGE
            }
            alt={productName}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-zoom-out"
            onClick={() =>
              setIsZoomOpen(false)
            }
          />
        </div>
      )}

      {/* SHIPPING POLICY MODAL */}
      {isShippingModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() =>
            setIsShippingModalOpen(
              false
            )
          }
        >
          <div
            className="bg-[#FFFFFF] rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-6 relative shadow-2xl font-sans border border-neutral-300/70"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <div className="flex items-center justify-between pb-4 border-b border-neutral-300/60 mb-4 sticky top-0 bg-[#FFFFFF] z-10">
              <h3 className="text-base font-bold text-neutral-900 uppercase tracking-wide">
                Shipping Policy
              </h3>

              <button
                type="button"
                onClick={() =>
                  setIsShippingModalOpen(
                    false
                  )
                }
                className="w-8 h-8 rounded-full bg-[#FFFFFF] flex items-center justify-center hover:bg-neutral-300 transition cursor-pointer"
              >
                <X className="w-4 h-4 text-neutral-800" />
              </button>
            </div>

            <div className="text-xs text-neutral-700 space-y-4 leading-relaxed">
              <p className="text-[11px] text-neutral-500 font-medium">
                Last Updated: August 2026
              </p>

              <p>
                At Ahsanjewellery, we
                are committed to delivering
                your order safely and
                efficiently. Please review
                our shipping policy below.
              </p>

              <div>
                <h4 className="font-bold text-neutral-900 mb-1">
                  1. Shipping Locations
                </h4>

                <p>
                  We currently deliver
                  across Pakistan.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 mb-1">
                  2. Order Processing Time
                </h4>

                <p>
                  Orders are typically
                  processed within 1–2
                  business days after order
                  confirmation.
                </p>

                <p>
                  Orders placed on weekends
                  or public holidays will be
                  processed on the next
                  business day.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 mb-1">
                  3. Delivery Time
                </h4>

                <p>
                  Estimated delivery times
                  are as follows:
                </p>

                <ul className="list-disc pl-4 mt-1 space-y-1">
                  <li>
                    <strong>
                      Lahore:
                    </strong>{" "}
                    1–3 business days
                  </li>
                  <li>
                    <strong>
                      Other Cities:
                    </strong>{" "}
                    3–5 business days
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 mb-1">
                  4. Shipping Charges
                </h4>

                <p>
                  Standard shipping fee is Rs.
                  300 across Pakistan.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;