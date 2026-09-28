import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <style>{`
        .cart-page { padding: 70px 0 110px; }
        .page-title { margin-bottom: 45px; }
        .page-title h1 { font-size: 52px; font-weight: 500; margin: 10px 0 0; }
        .cart-grid { display: grid; grid-template-columns: 1.45fr .75fr; gap: 70px; }
        .cart-item { display: grid; grid-template-columns: 125px 1fr auto; gap: 24px; padding: 20px 0; border-top: 1px solid var(--line); position: relative; }
        .cart-item img { width: 125px; height: 150px; object-fit: cover; background: #f2eee7; }
        .cart-item-info h3 { margin: 5px 0 8px; font-size: 23px; font-weight: 500; }
        .cart-item-info p { margin: 0 0 18px; font-size: 13px; }
        .quantity { display: inline-flex; align-items: center; border: 1px solid var(--line); }
        .quantity button { border: 0; background: #fff; width: 32px; height: 32px; }
        .quantity span { min-width: 30px; text-align: center; font-size: 12px; }
        .remove, .clear { border: 0; background: transparent; text-decoration: underline; font-size: 11px; color: #777; align-self: start; }
        .clear { margin-top: 20px; }
        .summary { background: #f4f0e9; padding: 34px; height: fit-content; position: sticky; top: 130px; }
        .summary-row, .summary-total { display: flex; justify-content: space-between; gap: 20px; padding: 17px 0; font-size: 13px; }
        .summary-total { border-top: 1px solid #dcd4c8; margin-top: 8px; padding-top: 22px; font-size: 16px; }
        .summary-btn { width: 100%; margin-top: 20px; }
        .summary-note { color: #817a71; font-size: 10px; text-align: center; margin-bottom: 0; }
        .empty-state { min-height: 650px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 40px; }
        .empty-state h1 { font-size: 52px; margin: 12px 0; font-weight: 500; }
        .empty-state p { color: var(--muted); margin: 0 0 28px; }
        @media (max-width: 800px) { .cart-grid { grid-template-columns: 1fr; gap: 40px; } .summary { position: static; } }
        @media (max-width: 520px) { .cart-item { grid-template-columns: 85px 1fr; gap: 15px; } .cart-item img { width: 85px; height: 110px; } .remove { grid-column: 2; } }
      `}</style>

      {!cart.length ? (
        <div className="empty-state">
          <span className="eyebrow">Your bag</span>
          <h1 className="serif">Nothing here yet.</h1>
          <p>Discover a piece you'll love and add it to your bag.</p>
          <Link to="/shop" className="btn btn-dark">Continue shopping</Link>
        </div>
      ) : (
        <div className="cart-page">
          <div className="container">
            <div className="page-title">
              <span className="eyebrow">Your bag</span>
              <h1 className="serif">Shopping bag</h1>
            </div>
            <div className="cart-grid">
              <div>
                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <div className="cart-item-info">
                      <span className="card-category">{item.category}</span>
                      <h3 className="serif">{item.title}</h3>
                      <p>Rs. {item.price.toLocaleString('en-PK')}</p>
                      <div className="quantity">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                    </div>
                    <button className="remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                ))}
                <button className="clear" onClick={clearCart}>Clear bag</button>
              </div>
              <aside className="summary">
                <span className="eyebrow">Order summary</span>
                <div className="summary-row">
                  <span>Subtotal</span>
                  <strong>Rs. {subtotal.toLocaleString('en-PK')}</strong>
                </div>
                <div className="summary-row">
                  <span>Delivery</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="summary-total">
                  <span>Total</span>
                  <strong>Rs. {subtotal.toLocaleString('en-PK')}</strong>
                </div>
                <Link to="/checkout" className="btn btn-dark summary-btn">Proceed to checkout</Link>
                <p className="summary-note">Secure checkout · Easy WhatsApp assistance</p>
              </aside>
            </div>
          </div>
        </div>
      )}
    </>
  );
}