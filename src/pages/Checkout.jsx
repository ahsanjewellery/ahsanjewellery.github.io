import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const SITE_COLOR = "#FFA500";
const THEME_BG = "#EFECE9";

function Checkout({ cart, setCart, totalPrice, onOrderSuccess, onClose }) {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("Punjab");
  const [city, setCity] = useState("Faisalabad");
  const [phone, setPhone] = useState("");
  const [orderNote, setOrderNote] = useState("");
  const [loading, setLoading] = useState(false);

  const shippingFee = 300;
  const finalTotal = totalPrice + shippingFee;

  // Quantity increase function
  const handleIncrease = (index) => {
    if (!setCart) return;
    const updatedCart = [...cart];
    updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
    setCart(updatedCart);
  };

  // Quantity decrease function
  const handleDecrease = (index) => {
    if (!setCart) return;
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    } else {
      // Agar quantity 1 se kam ho toh item remove kar dein
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    }
  };

  // Remove item completely
  const handleRemoveItem = (index) => {
    if (!setCart) return;
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !address.trim() || cart.length === 0) {
      alert("Kripya Naam, Phone Number aur Address sahi se bharen, aur cart mein items hone zaroori hain!");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "orders"), {
        customerName: fullName.trim(),
        phone: phone.trim(),
        address: address.trim(),
        province,
        city,
        items: cart,
        subtotal: totalPrice,
        shippingFee: shippingFee,
        total: finalTotal,
        orderNote: orderNote || "",
        status: "Pending",
        paymentMethod: "Cash on Delivery (COD)",
        isDeleted: false,
        createdAt: serverTimestamp(),
      });

      alert("Order safaltapoorvak place ho gaya hai!");
      if (onOrderSuccess) onOrderSuccess();
    } catch (error) {
      console.error("Order error:", error);
      alert("Order place karne mein masla aaya. Kripya dubara koshish karen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1100px] mx-auto px-4 py-6 font-sans">
      <form onSubmit={handleCheckout} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: CUSTOMER DELIVERY DETAILS */}
        <div 
          className="lg:col-span-7 space-y-5 p-5 sm:p-7 rounded-2xl border border-neutral-300/60 shadow-xs"
          style={{ backgroundColor: THEME_BG }}
        >
          <div className="flex items-center justify-between pb-3 border-b border-neutral-300/80">
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
              1. Delivery Details
            </h3>
            <span className="text-[11px] text-neutral-500 font-medium">Required</span>
          </div>

          <div className="space-y-3">
            {/* Full Name */}
            <div>
              <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                Full Name *
              </label>
              <input 
                type="text" 
                value={fullName} 
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Muhammad Ali" 
                required
                className="w-full p-3.5 bg-white border border-neutral-300 rounded-xl text-xs outline-none transition focus:border-[#FFA500] focus:ring-1 focus:ring-[#FFA500]"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                Phone Number *
              </label>
              <input 
                type="tel" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)}
                placeholder="03001234567" 
                required
                className="w-full p-3.5 bg-white border border-neutral-300 rounded-xl text-xs outline-none transition focus:border-[#FFA500] focus:ring-1 focus:ring-[#FFA500]"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                Complete Address *
              </label>
              <input 
                type="text" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)}
                placeholder="House No, Street / Area Name" 
                required
                className="w-full p-3.5 bg-white border border-neutral-300 rounded-xl text-xs outline-none transition focus:border-[#FFA500] focus:ring-1 focus:ring-[#FFA500]"
              />
            </div>

            {/* City & Province */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                  City
                </label>
                <select 
                  value={city} 
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full p-3.5 bg-white border border-neutral-300 rounded-xl text-xs outline-none transition cursor-pointer focus:border-[#FFA500]"
                >
                  <option value="Faisalabad">Faisalabad</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Multan">Multan</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Quetta">Quetta</option>
                  <option value="Other">Other City</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                  Province
                </label>
                <select 
                  value={province} 
                  onChange={(e) => setProvince(e.target.value)}
                  className="w-full p-3.5 bg-white border border-neutral-300 rounded-xl text-xs outline-none transition cursor-pointer focus:border-[#FFA500]"
                >
                  <option value="Punjab">Punjab</option>
                  <option value="Sindh">Sindh</option>
                  <option value="KPK">KPK</option>
                  <option value="Balochistan">Balochistan</option>
                </select>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="pt-2">
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
              2. Payment Method
            </h3>
            <div 
              className="p-3.5 border rounded-xl bg-white flex items-center justify-between text-xs font-bold text-neutral-900 shadow-2xs"
              style={{ borderColor: SITE_COLOR }}
            >
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input 
                  type="radio" 
                  defaultChecked 
                  name="payment" 
                  style={{ accentColor: SITE_COLOR }}
                  className="w-4 h-4 cursor-pointer" 
                />
                Cash on Delivery (COD)
              </label>
              <span className="text-neutral-500 text-[11px]">Pay when you receive</span>
            </div>
          </div>

          {/* Order Note */}
          <div>
            <textarea
              value={orderNote}
              onChange={(e) => setOrderNote(e.target.value)}
              placeholder="Special delivery instructions (Optional)"
              className="w-full p-3 bg-white border border-neutral-300 rounded-xl text-xs outline-none transition focus:border-[#FFA500] resize-none"
              rows="2"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: ORDER SUMMARY */}
        <div 
          className="lg:col-span-5 p-5 sm:p-6 rounded-2xl border border-neutral-300/60 space-y-5 sticky top-6 shadow-xs"
          style={{ backgroundColor: THEME_BG }}
        >
          <div className="flex items-center justify-between pb-3 border-b border-neutral-300/80">
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
              Order Summary ({cart.length} {cart.length === 1 ? "Item" : "Items"})
            </h3>
            {/* Button to close/go back to shop to add more items */}
            {onClose && (
              <button 
                type="button" 
                onClick={onClose}
                className="text-[11px] font-semibold text-blue-600 hover:underline cursor-pointer"
              >
                + Add More Items
              </button>
            )}
          </div>

          <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
            {cart.length === 0 ? (
              <p className="text-xs text-center text-neutral-500 py-4">Aapka cart khali hai.</p>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="flex items-center justify-between gap-3 bg-white p-2.5 rounded-xl border border-neutral-200">
                  <div className="flex items-center gap-2.5">
                    <img 
                      src={item.selectedImage || item.image} 
                      alt={item.name} 
                      className="w-10 h-10 object-cover rounded-lg border border-neutral-200 bg-white"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-neutral-900 line-clamp-1">{item.name}</h4>
                      <p className="text-[10px] text-neutral-500">Rs. {(item.price || 0).toLocaleString()}</p>
                      
                      {/* Quantity Controls inside Checkout */}
                      <div className="flex items-center gap-2 mt-1">
                        <button 
                          type="button"
                          onClick={() => handleDecrease(index)}
                          className="w-5 h-5 bg-neutral-100 hover:bg-neutral-200 rounded text-xs font-bold flex items-center justify-center cursor-pointer"
                        >
                          -
                        </button>
                        <span className="text-xs font-semibold">{item.quantity || 1}</span>
                        <button 
                          type="button"
                          onClick={() => handleIncrease(index)}
                          className="w-5 h-5 bg-neutral-100 hover:bg-neutral-200 rounded text-xs font-bold flex items-center justify-center cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs font-bold text-neutral-900 shrink-0">
                      Rs. {((item.price || 0) * (item.quantity || 1)).toLocaleString()}
                    </span>
                    <button 
                      type="button"
                      onClick={() => handleRemoveItem(index)}
                      className="text-[10px] text-rose-500 hover:underline cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="pt-3 border-t border-neutral-300/80 space-y-2 text-xs">
            <div className="flex justify-between text-neutral-600">
              <span>Subtotal</span>
              <span className="font-semibold text-neutral-900">Rs. {totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-neutral-600">
              <span>Delivery Fee</span>
              <span className="font-semibold text-neutral-900">Rs. {shippingFee.toLocaleString()}</span>
            </div>
          </div>

          <div className="pt-3 border-t border-neutral-300/80 flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">Total Amount</span>
            <span className="text-base font-black" style={{ color: SITE_COLOR }}>
              Rs. {finalTotal.toLocaleString()}
            </span>
          </div>

          <button 
            type="submit" 
            disabled={loading || cart.length === 0}
            className="w-full py-3.5 text-white rounded-xl text-xs font-bold uppercase tracking-widest transition cursor-pointer shadow-sm hover:opacity-95 disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ backgroundColor: SITE_COLOR }}
          >
            {loading ? "Placing Order..." : "Confirm & Complete Order"}
          </button>
        </div>

      </form>
    </div>
  );
}

export default Checkout;