import React from "react";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div className="bg-black text-gray-200 min-h-screen py-16 px-6 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3 border-b border-gray-800 pb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-wider text-[#C5A059] uppercase">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-400 tracking-widest uppercase">
            Last Updated: August 2026 | Ahsan Jewellery
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-6 text-sm leading-relaxed text-gray-300">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-white tracking-wide">1. Introduction</h2>
            <p>
              Welcome to Ahsan Jewellery ("we", "our", or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white tracking-wide">2. Information We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400 pl-2">
              <li><strong className="text-gray-200">Identity Data:</strong> Includes first name, last name, username or similar identifier.</li>
              <li><strong className="text-gray-200">Contact Data:</strong> Includes billing address, delivery address, email address, and telephone numbers.</li>
              <li><strong className="text-gray-200">Transaction Data:</strong> Includes details about payments to and from you and other details of products you have purchased from us.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white tracking-wide">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400 pl-2">
              <li>To register you as a new customer and manage your account.</li>
              <li>To process and deliver your jewelry orders.</li>
              <li>To manage our relationship with you including notifying you about changes to our terms or privacy policy.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white tracking-wide">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. All sensitive transactions are handled with high-grade encryption and secure database structures.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white tracking-wide">5. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please reach out to us via our <Link to="/contactus" className="text-[#C5A059] underline hover:text-white">Contact Us</Link> page.
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

export default PrivacyPolicy;