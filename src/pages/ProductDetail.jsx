import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');
  const [isDescOpen, setIsDescOpen] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const fetchedProduct = { id: docSnap.id, ...data };
          setProduct(fetchedProduct);
          
          // Primary Image set karna
          const mainImg = fetchedProduct.image || fetchedProduct.imageUrl || (fetchedProduct.images && fetchedProduct.images[0]) || '';
          setSelectedImage(mainImg);
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px', fontSize: '16px', color: '#666', backgroundColor: '#f4f1ea', minHeight: '60vh' }}>
        Loading product details...
      </div>
    );
  }

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px', backgroundColor: '#f4f1ea', minHeight: '60vh' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#111' }}>Product not found</h2>
        <Link to="/" style={{ padding: '10px 24px', background: '#000', color: '#fff', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
          Back to Shop
        </Link>
      </div>
    );
  }

  // Price & Discount Calculations
  const price = Number(product.price) || 0;
  const originalPrice = product.originalPrice ? Number(product.originalPrice) : Math.round(price * 1.5);
  const discountPercent = product.originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100) 
    : 51;

  const imagesList = product.images && product.images.length > 0 
    ? product.images 
    : [selectedImage];

  // WhatsApp Order Handler
  const handleWhatsAppOrder = () => {
    const phoneNumber = "923000000000"; // Apna WhatsApp Number yahan daalein
    const message = encodeURIComponent(
      `Hi, I want to order this product:\n\n*Product:* ${product.title || product.name}\n*Price:* Rs. ${price.toLocaleString()}\n*Quantity:* ${quantity}\n*Link:* ${window.location.href}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div style={{ backgroundColor: '#f4f1ea', minHeight: '100vh', padding: '20px 0 60px', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>

        {/* Breadcrumb Navigation */}
        <div style={{ fontSize: '12px', color: '#777', marginBottom: '20px', display: 'flex', gap: '6px' }}>
          <Link to="/" style={{ color: '#777', textDecoration: 'none' }}>Home</Link> / 
          <span>Jewelry</span> / 
          <span>{product.category || 'Zircon Set'}</span> / 
          <span style={{ color: '#111', fontWeight: '500' }}>{product.title || product.name}</span>
        </div>

        {/* Main 3-Column Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '260px 1fr 380px', 
          gap: '24px', 
          alignItems: 'start' 
        }}>

          {/* LEFT COLUMN: Product Care */}
          <div style={{
            backgroundColor: '#e9e4d9',
            borderRadius: '16px',
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <h3 style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#222', margin: 0 }}>
              PRODUCT CARE
            </h3>

            <div>
              <div style={{ fontSize: '11px', fontWeight: '700', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                MATERIAL QUALITY
              </div>
              <div style={{ fontSize: '12px', color: '#333', marginTop: '4px', lineHeight: '1.4' }}>
                Gold & Silver Finish Jewelry. Crafted to retain long-lasting brilliance.
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#f4f1ea', padding: '10px 12px', borderRadius: '10px', fontSize: '12px', color: '#333' }}>
                <span style={{ fontSize: '16px' }}>💧</span>
                <span>Avoid direct water, perfumes & harsh chemicals</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#f4f1ea', padding: '10px 12px', borderRadius: '10px', fontSize: '12px', color: '#333' }}>
                <span style={{ fontSize: '16px' }}>🏊</span>
                <span>Remove before swimming, gym or physical exercise</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#f4f1ea', padding: '10px 12px', borderRadius: '10px', fontSize: '12px', color: '#333' }}>
                <span style={{ fontSize: '16px' }}>📦</span>
                <span>Store safely in a dry jewelry box or soft pouch</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#f4f1ea', padding: '10px 12px', borderRadius: '10px', fontSize: '12px', color: '#333' }}>
                <span style={{ fontSize: '16px' }}>✨</span>
                <span>Clean gently using a soft, dry microfiber cloth</span>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Main Image & Thumbnails */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            
            {/* Main Image Box */}
            <div style={{ 
              position: 'relative', 
              width: '100%', 
              backgroundColor: '#ffffff', 
              borderRadius: '16px', 
              overflow: 'hidden',
              boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '420px'
            }}>
              {/* Wishlist Heart Button Top Right */}
              <button style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid #eee',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                zIndex: 2
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>

              <img 
                src={selectedImage || 'https://via.placeholder.com/500'} 
                alt={product.title || product.name} 
                style={{ width: '100%', maxHeight: '480px', objectFit: 'contain', padding: '20px' }}
              />
            </div>

            {/* Thumbnail Box */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-start', width: '100%' }}>
              {imagesList.map((imgUrl, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedImage(imgUrl)}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '10px',
                    backgroundColor: '#ffffff',
                    border: selectedImage === imgUrl ? '2px solid #000' : '1px solid #ddd',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img src={imgUrl} alt="thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Product Info & Purchase Actions */}
          <div style={{
            backgroundColor: '#e9e4d9',
            borderRadius: '16px',
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            
            {/* Title & Discount Badge */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
              <h1 style={{ fontSize: '20px', fontWeight: '700', color: '#111', margin: 0, lineHeight: '1.3' }}>
                {product.title || product.name}
              </h1>
              <span style={{ 
                backgroundColor: '#ffffff', 
                fontSize: '10px', 
                fontWeight: '700', 
                padding: '4px 8px', 
                borderRadius: '4px', 
                border: '1px solid #ddd',
                whiteSpace: 'nowrap' 
              }}>
                {discountPercent}% OFF
              </span>
            </div>

            {/* Rating Stars */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
              <span style={{ color: '#ffb400', fontSize: '14px' }}>★★★★★</span>
              <span style={{ fontWeight: '700', color: '#111' }}>5.0</span>
              <span style={{ color: '#777' }}>(0 reviews)</span>
            </div>

            {/* SKU */}
            <div style={{ fontSize: '11px', color: '#666', marginTop: '-6px' }}>
              SKU: {product.sku || 'Ka 0002'}
            </div>

            {/* Price Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px 0 4px' }}>
              <span style={{ fontSize: '11px', fontWeight: '700', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                PRICE
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '13px', textDecoration: 'line-through', color: '#888' }}>
                  Rs.{originalPrice.toLocaleString()}
                </span>
                <span style={{ fontSize: '18px', fontWeight: '800', color: '#000' }}>
                  Rs.{price.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Shipping Fee */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#444' }}>
              <span>Shipping Fee ⓘ</span>
              <span style={{ fontWeight: '600' }}>Rs. 300.00</span>
            </div>

            {/* Quantity Selector */}
            <div style={{ marginTop: '8px' }}>
              <div style={{ fontSize: '11px', fontWeight: '700', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                QUANTITY
              </div>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                backgroundColor: '#f4f1ea', 
                borderRadius: '20px', 
                padding: '2px 12px',
                border: '1px solid #ccc'
              }}>
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  style={{ background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer', padding: '4px 8px', color: '#333' }}
                >
                  -
                </button>
                <span style={{ fontSize: '13px', fontWeight: '700', minWidth: '24px', textAlign: 'center' }}>
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(prev => prev + 1)}
                  style={{ background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer', padding: '4px 8px', color: '#333' }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
              <button style={{
                flex: 1,
                padding: '12px',
                backgroundColor: '#ffffff',
                border: '1px solid #111',
                borderRadius: '20px',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.5px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}>
                ♡ WISHLIST
              </button>

              <button style={{
                flex: 1,
                padding: '12px',
                backgroundColor: '#111111',
                color: '#ffffff',
                border: 'none',
                borderRadius: '20px',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.5px',
                cursor: 'pointer'
              }}>
                BUY IT NOW
              </button>
            </div>

            {/* Order via WhatsApp Green Button */}
            <button 
              onClick={handleWhatsAppOrder}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#25d366',
                color: '#ffffff',
                border: 'none',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.5px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '-4px'
              }}
            >
              ORDER VIA WHATSAPP
            </button>

            {/* Collapsible Product Description */}
            <div style={{ borderTop: '1px solid #dcd7ca', paddingTop: '14px', marginTop: '10px' }}>
              <button 
                onClick={() => setIsDescOpen(!isDescOpen)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '11px',
                  fontWeight: '700',
                  color: '#333',
                  letterSpacing: '0.5px',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                <span>PRODUCT DESCRIPTION</span>
                <span>{isDescOpen ? '▲' : '▼'}</span>
              </button>

              {isDescOpen && (
                <div style={{ fontSize: '13px', color: '#555', marginTop: '10px', lineHeight: '1.5' }}>
                  {product.description || 'Crafted with premium finish and detailed stone settings for an elegant look.'}
                </div>
              )}
            </div>

          </div>

        </div>

        {/* BOTTOM SECTION: Customer Reviews */}
        <div style={{ marginTop: '70px', borderTop: '1px solid #dcd7ca', paddingTop: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#111', margin: '0 0 6px' }}>
                Customer Reviews
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '20px', fontWeight: '800', color: '#ffb400' }}>5.0</span>
                <span style={{ fontSize: '14px', color: '#666' }}>0 reviews</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{
                backgroundColor: '#111111',
                color: '#ffffff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Write a review
              </button>
              <button style={{
                backgroundColor: '#ffffff',
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '8px',
                cursor: 'pointer'
              }}>
                🔍
              </button>
              <button style={{
                backgroundColor: '#ffffff',
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '8px',
                cursor: 'pointer'
              }}>
                ⇅
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}