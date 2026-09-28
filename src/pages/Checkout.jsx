import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

export default function Checkout() {
  const { cart } = useCart();
  const total = cart.reduce((s, p) => s + p.price * p.quantity, 0);

  return (
    <>
      <style>{`
        .checkout-page { padding: 70px 0 110px; }
        .checkout-page .page-title h1 { font-size: 52px; font-weight: 500; margin: 10px 0 45px; }
        .checkout-grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: 70px; }
        .checkout-form { border-top: 1px solid var(--line); padding-top: 25px; }
        .checkout-form h2 { font-size: 30px; font-weight: 500; margin: 0 0 28px; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 28px; }
        .form-grid label { font-size: 10px; text-transform: uppercase; letter-spacing: 1.3px; font-weight: 700; }
        .form-grid label.full { grid-column: 1 / -1; }
        .form-grid input { display: block; width: 100%; height: 48px; margin-top: 8px; border: 1px solid var(--line); background: #fff; outline: none; padding: 0 14px; }
        .form-grid input:focus { border-color: #9b9185; }
        .checkout-note { font-size: 11px; color: var(--muted); line-height: 1.6; max-width: 500px; }
        .checkout-grid .summary { position: static; }
        .checkout-item { display: flex; justify-content: space-between; gap: 20px; padding: 16px 0; border-bottom: 1px solid #ddd5c9; font-size: 12px; }
        .checkout-empty { text-align: center; padding: 70px; background: #f5f0e8; }
        @media (max-width: 800px) { .checkout-grid { grid-template-columns: 1fr; gap: 40px; } }
        @media (max-width: 520px) { .form-grid { grid-template-columns: 1fr; } .form-grid label.full { grid-column: auto; } }
      `}</style>

      <div className="checkout-page">
        <div className="container">
          <div className="page-title">
            <span className="eyebrow">Secure checkout</span>
            <h1 className="serif">Complete your order</h1>
          </div>

          {!cart.length ? (
            <div className="checkout-empty">
              <p>Your bag is empty.</p>
              <Link to="/shop" className="btn btn-dark">Shop jewellery</Link>
            </div>
          ) : (
            <div className="checkout-grid">
              <form className="checkout-form" onSubmit={(e) => e.preventDefault()}>
                <h2 className="serif">Delivery details</h2>
                <div className="form-grid">
                  <label>First name<input required /></label>
                  <label>Last name<input required /></label>
                  <label className="full">Email<input type="email" required /></label>
                  <label className="full">Phone<input required placeholder="03XX XXXXXXX" /></label>
                  <label className="full">Address<input required /></label>
                  <label>City<input required /></label>
                  <label>Postal code<input /></label>
                </div>
                <button className="btn btn-dark" type="submit">Place order</button>
                <p className="checkout-note">For payment confirmation and delivery coordination, our team will contact you after your order.</p>
              </form>

              <aside className="summary">
                <span className="eyebrow">Your order</span>
                {cart.map((item) => (
                  <div className="checkout-item" key={item.id}>
                    <span>{item.title} × {item.quantity}</span>
                    <strong>Rs. {(item.price * item.quantity).toLocaleString('en-PK')}</strong>
                  </div>
                ))}
                <div className="summary-total">
                  <span>Total</span>
                  <strong>Rs. {total.toLocaleString('en-PK')}</strong>
                </div>
              </aside>
            </div>
          )}
        </div>
      </div>
    </>
  );
}