import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <style>{`
        /* =========================
           FOOTER STYLES
        ========================= */

        .footer {
          width: 100%;
          margin: 0;
          padding: 0;
          background: #E90D8B;
          color: #fff;
        }

        .footer-inner {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
          padding: 65px 5% 55px;
          box-sizing: border-box;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
        }

        .footer-brand {
          display: flex;
          align-items: flex-start;
          max-width: none;
        }

        .footer-logo {
          display: block;
          width: 190px;
          height: auto;
          max-width: 100%;
          padding: 12px 18px;
          box-sizing: border-box;
          background: #fff;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .footer-column h3 {
          margin: 0 0 22px;
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .footer-column a {
          margin: 0 0 12px;
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          line-height: 1.5;
          text-decoration: none;
          transition: opacity .2s ease, transform .2s ease;
        }

        .footer-column a:hover {
          color: #fff;
          opacity: .75;
          transform: translateX(3px);
        }

        .footer-bottom {
          width: 100%;
          padding: 20px 5%;
          box-sizing: border-box;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,.25);
        }

        .footer-bottom p {
          margin: 0;
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 12px;
          line-height: 1.5;
          letter-spacing: .3px;
        }

        @media (max-width: 900px) {
          .footer-inner {
            grid-template-columns: 1fr 1fr;
            gap: 45px 35px;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 600px) {
          .footer-inner {
            grid-template-columns: 1fr 1fr;
            padding: 45px 25px 35px;
            gap: 35px 20px;
          }

          .footer-logo {
            width: 160px;
          }

          .footer-column h3 {
            font-size: 12px;
            margin-bottom: 17px;
          }

          .footer-column a {
            font-size: 13px;
            margin-bottom: 9px;
          }

          .footer-bottom {
            padding: 17px 20px;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img
              src="/logo.png"
              alt="Ahsan Jewellery"
              className="footer-logo"
            />
          </div>

          <div className="footer-column">
            <h3>SHOP</h3>
            <Link to="/shop">All Jewellery</Link>
            <Link to="/shop">New Arrivals</Link>
            <Link to="/shop">Collections</Link>
            <Link to="/shop">Sale</Link>
          </div>

          <div className="footer-column">
            <h3>HELP</h3>
            <Link to="/contact">Contact Us</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/returns">Returns</Link>
            <Link to="/faq">FAQ</Link>
          </div>

          <div className="footer-column">
            <h3>FOLLOW US</h3>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Ahsan Jewellery. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}