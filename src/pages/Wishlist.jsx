import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import ProductCard from '../components/product/ProductCard';

export default function Wishlist() {
  const { wishlist } = useCart();

  return (
    <>
      <style>{`
        .wishlist-page { padding: 70px 0 110px; min-height: 650px; }
        .wishlist-page .page-title { margin-bottom: 45px; }
        .wishlist-page .page-title h1 { font-size: 52px; font-weight: 500; margin: 10px 0 0; }
        .wishlist-empty { text-align: center; padding: 70px 20px; background: #f6f1e9; }
        .big-heart { font-size: 60px; font-weight: 200; }
        .wishlist-empty h2 { font-size: 38px; margin: 10px 0; font-weight: 500; }
        .wishlist-empty p { color: var(--muted); margin-bottom: 25px; }
        .shop-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 46px 26px; }
        @media (max-width: 800px) { .shop-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .shop-grid { grid-template-columns: 1fr 1fr; gap: 28px 12px; } }
      `}</style>

      <div className="wishlist-page">
        <div className="container">
          <div className="page-title">
            <span className="eyebrow">Saved pieces</span>
            <h1 className="serif">Your wishlist</h1>
          </div>

          {wishlist.length ? (
            <div className="shop-grid">
              {wishlist.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="wishlist-empty">
              <div className="big-heart">♡</div>
              <h2 className="serif">Keep your favourites close.</h2>
              <p>Tap the heart on any piece to save it here.</p>
              <Link className="btn btn-dark" to="/shop">Explore jewellery</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}