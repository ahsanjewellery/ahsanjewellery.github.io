import React from "react";
import { Link } from "react-router-dom";

function TermsOfService() {
  return (
    <div className="bg-black text-gray-200 min-h-screen py-16 px-6 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3 border-b border-gray-800 pb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-wider text-[#C5A059] uppercase">
            Terms of Service
          </h1>
          <p className="text-xs text-gray-400 tracking-widest uppercase">
            Last Updated: August 2026 | Ahsan Jewellery
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-6 text-sm leading-relaxed text-gray-300">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-white tracking-wide">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website of Ahsan Jewellery, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white tracking-wide">2. Products and Pricing</h2>
            <p>
              All purchases through our site are subject to product availability. We reserve the right to discontinue any product at any time. Prices for our products are subject to change without notice. We make every effort to display as accurately as possible the colors and images of our American diamond, zircon jewelry,
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white tracking-wide">3. Orders and Payments</h2>
            <p>
              We reserve the right to refuse any order you place with us. You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information so that we can complete your transactions smoothly.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white tracking-wide">4. Shipping and Delivery</h2>
            <p>
              Delivery times may vary depending on your shipping address and courier availability. Ahsan Jewellery is not responsible for delays caused by customs, weather, or courier handling issues, but we ensure complete support for tracking your packages.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white tracking-wide">5. Changes to Terms</h2>
            <p>
              You can review the most current version of the Terms of Service at any time at this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates to our website.
            </p>
          </section>
        </div>

        {/* Back to Home Button */}
        <div className="pt-8 text-center border-t border-gray-800">
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-[0.2em] rounded-lg hover:bg-white transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default TermsOfService;