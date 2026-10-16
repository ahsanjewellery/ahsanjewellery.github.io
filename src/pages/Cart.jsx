import React, { useContext, useState, useEffect, useMemo, useCallback } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

// ==========================================
// CONSTANTS & DATA LISTS
// ==========================================
const PAKISTAN_CITIES = [
  "Abbottabad", "Attock", "Bahawalpur", "Burewala", "Chaman", "Charsadda",
  "Chiniot", "Dadu", "Dera Ghazi Khan", "Faisalabad", "Gojra", "Gujranwala",
  "Gujrat", "Hafizabad", "Hub", "Hyderabad", "Islamabad", "Jacobabad",
  "Jhang", "Jhelum", "Kamoke", "Kasur", "Khanewal", "Khuzdar", "Larkana",
  "Lahore", "Mansehra", "Mardan", "Mingora", "Mirpur (AJK)", "Mirpur Khas",
  "Multan", "Murree", "Muzaffarabad", "Muzaffargarh", "Nawabshah", "Nowshera",
  "Okara", "Peshawar", "Quetta", "Rahim Yar Khan", "Rawalpindi", "Sadiqabad",
  "Sahiwal", "Sargodha", "Sialkot", "Skardu", "Sukkur", "Swabi", "Turbat", "Vehari"
].sort();

const PROVINCES = [
  "Punjab",
  "Sindh",
  "Khyber Pakhtunkhwa",
  "Balochistan",
  "Islamabad Capital Territory",
  "Azad Kashmir",
  "Gilgit-Baltistan",
];

const BANK_DETAILS = {
  accountTitle: "Ahsan Ashraf",
  bankName: "Allied Bank",
  iban: "09380010141535150015",
  whatsappContact: "+92 309 42 55 818"
};

const EMPTY_CUSTOMER = {
  fullName: "",
  address: "",
  city: "Faisalabad",
  province: "Punjab",
  phone: "",
  paymentMethod: "COD",
};

// ==========================================
// CART / CHECKOUT COMPONENT
// ==========================================
export default function Cart() {
  const { cart, isCartOpen, closeCart, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);
  
  const [step, setStep] = useState("checkout");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [placedOrderId, setPlacedOrderId] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const [customer, setCustomer] = useState(() => {
    try {
      const savedData = localStorage.getItem("opera_customer_info");
      return savedData ? { ...EMPTY_CUSTOMER, ...JSON.parse(savedData) } : EMPTY_CUSTOMER;
    } catch {
      return EMPTY_CUSTOMER;
    }
  });

  useEffect(() => {
    if (isCartOpen && step === "success" && cart.length > 0) {
      setStep("checkout");
    }
  }, [isCartOpen, cart.length, step]);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setCustomer((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (error) setError("");
  }, [error]);

  const subtotal = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1),
      0
    );
  }, [cart]);

  const shipping = subtotal > 0 ? 300 : 0;
  const total = subtotal + shipping;

  // Quantity Handlers
  const handleIncreaseQty = (item) => {
    if (updateQuantity) {
      updateQuantity(item.id, Number(item.quantity || 1) + 1);
    }
  };

  const handleDecreaseQty = (item) => {
    if (Number(item.quantity || 1) > 1) {
      if (updateQuantity) {
        updateQuantity(item.id, Number(item.quantity) - 1);
      }
    } else {
      removeFromCart(item.id);
    }
  };

  const handlePlaceOrder = async () => {
    setAttemptedSubmit(true);
    const { fullName, phone, address, city } = customer;
    
    if (cart.length === 0) {
      setError("آپ کا کارٹ خالی ہے۔ آرڈر پلیس کرنے کے لیے پروڈکٹ ایڈ کریں۔");
      return;
    }

    if (!fullName.trim() || !phone.trim() || !address.trim() || !city.trim()) {
      setError("براہ کرم تمام لازمی خانے (نام، فون نمبر اور مکمل ایڈریس) پر کریں۔");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const newOrder = {
        customerName: fullName.trim(),
        phone: phone.trim(),
        address: address.trim(),
        city,
        province: customer.province,
        paymentMethod: customer.paymentMethod,
        bankDetails: customer.paymentMethod === "Bank" ? BANK_DETAILS : null,
        items: cart.map((item) => ({
          id: item.id,
          name: item.name || item.title || "Product",
          price: Number(item.price || 0),
          quantity: Number(item.quantity || 1),
          color: item.selectedColor || "Default",
          image: item.selectedImage || item.image || "",
        })),
        subtotal,
        shipping,
        total,
        status: "Pending",
        createdAt: new Date(),
      };

      const docRef = await addDoc(collection(db, "orders"), newOrder);
      setPlacedOrderId(docRef.id);

      localStorage.removeItem("opera_customer_info");
      clearCart();
      setStep("success");
    } catch (err) {
      console.error("Order submission error:", err);
      setError("آرڈر پلیس کرنے میں مسئلہ پیش آیا۔ دوبارہ کوشش کریں۔");
    } finally {
      setLoading(false);
    }
  };

  if (!isCartOpen) return null;

  const getFieldClass = (val) => {
    const base = "w-full px-3.5 py-3 rounded-xl border text-xs sm:text-sm text-zinc-900 outline-none transition bg-white placeholder:text-zinc-400";
    if (attemptedSubmit && (!val || !val.trim())) {
      return `${base} border-rose-500 bg-rose-50/30 focus:border-rose-600 focus:ring-1 focus:ring-rose-600`;
    }
    return `${base} border-zinc-300 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900`;
  };

  const selectClass = "w-full px-3.5 py-3 rounded-xl border border-zinc-300 text-xs sm:text-sm text-zinc-900 bg-white outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition cursor-pointer";

  return (
    <div dir="ltr" className="fixed inset-0 z-50 flex items-center justify-center p-1 sm:p-4 font-sans">
      <div className="fixed inset-0 bg-zinc-950/50 backdrop-blur-xs transition-opacity" onClick={closeCart} />

      <div className="relative w-full bg-white rounded-2xl shadow-2xl flex flex-col h-full sm:h-auto sm:max-h-[92vh] overflow-hidden z-10 max-w-4xl border border-zinc-100">
        
        {/* HEADER */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-zinc-200 bg-white sticky top-0 z-20">
          <div>
            <h2 className="text-xs sm:text-sm font-bold tracking-tight text-zinc-950">
              {step === "checkout" && "Opera Jewellery"}
            </h2>
            <p className="text-[11px] text-zinc-500">
              {step === "checkout" && "Quick & Secure Checkout"}
            </p>
          </div>
          <button
            onClick={closeCart}
            className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-zinc-200 transition text-zinc-700 cursor-pointer text-xs font-bold"
          >
            ✕
          </button>
        </div>

        {/* BODY CONTENT */}
        <div className="flex-1 overflow-y-auto">
          {step === "success" ? (
            <SuccessView placedOrderId={placedOrderId} customer={customer} closeCart={closeCart} />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-full">
              
              {/* LEFT: MINIMAL CHECKOUT FORM */}
              <div className="lg:col-span-7 p-4 sm:p-7 space-y-4 sm:space-y-5 border-b lg:border-b-0 lg:border-r border-zinc-200">
                {error && <div className="p-3.5 bg-rose-50 text-rose-700 border border-rose-200 rounded-xl text-xs font-semibold flex items-center gap-2">
                  <span className="text-sm font-bold">⚠️</span> {error}
                </div>}

                {/* Delivery Details Section */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 pb-1 border-b border-zinc-100">
                    Delivery Details
                  </h3>

                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-zinc-700 uppercase">Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName" 
                      value={customer.fullName} 
                      onChange={handleChange} 
                      placeholder="e.g. Muhammad Ali" 
                      className={getFieldClass(customer.fullName)} 
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-zinc-700 uppercase">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={customer.phone} 
                      onChange={handleChange} 
                      placeholder="03001234567" 
                      className={getFieldClass(customer.phone)} 
                    />
                  </div>

                  {/* Complete Address */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-zinc-700 uppercase">Complete Address *</label>
                    <input 
                      type="text" 
                      name="address" 
                      value={customer.address} 
                      onChange={handleChange} 
                      placeholder="House No, Street / Area Name" 
                      className={getFieldClass(customer.address)} 
                    />
                  </div>

                  {/* City & Province */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-zinc-700 uppercase">City *</label>
                      <select name="city" value={customer.city} onChange={handleChange} className={selectClass}>
                        {PAKISTAN_CITIES.map((city) => <option key={city} value={city}>{city}</option>)}
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-zinc-700 uppercase">Province *</label>
                      <select name="province" value={customer.province} onChange={handleChange} className={selectClass}>
                        {PROVINCES.map((prov) => <option key={prov} value={prov}>{prov}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Shipping Method */}
                <div className="space-y-2 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900">Shipping Method</h3>
                  <div className="flex items-center justify-between p-3.5 rounded-xl border border-zinc-200 bg-zinc-50/50 text-xs sm:text-sm">
                    <div className="flex items-center gap-2.5">
                      <input type="radio" defaultChecked className="accent-zinc-900 w-4 h-4" />
                      <div>
                        <p className="font-semibold text-zinc-900">Standard Home Delivery (Pakistan)</p>
                        <p className="text-[11px] text-zinc-500">Tracking details included</p>
                      </div>
                    </div>
                    <span className="font-bold text-zinc-900">Rs. 300</span>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-2 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900">Payment Method</h3>
                  <div className="rounded-xl border border-zinc-200 overflow-hidden bg-white">
                    <label className={`flex items-center justify-between p-3.5 text-xs sm:text-sm cursor-pointer transition ${customer.paymentMethod === "COD" ? "bg-zinc-50 font-medium" : "hover:bg-zinc-50/40"}`}>
                      <div className="flex items-center gap-2.5">
                        <input type="radio" name="paymentMethod" value="COD" checked={customer.paymentMethod === "COD"} onChange={handleChange} className="accent-zinc-900 w-4 h-4" />
                        <span className="text-zinc-900 font-medium">Cash on Delivery (COD)</span>
                      </div>
                      <span className="text-zinc-500 text-[11px]">Pay upon arrival</span>
                    </label>

                    <label className={`flex items-center justify-between p-3.5 text-xs sm:text-sm cursor-pointer border-t border-zinc-100 transition ${customer.paymentMethod === "Bank" ? "bg-zinc-50 font-medium" : "hover:bg-zinc-50/40"}`}>
                      <div className="flex items-center gap-2.5">
                        <input type="radio" name="paymentMethod" value="Bank" checked={customer.paymentMethod === "Bank"} onChange={handleChange} className="accent-zinc-900 w-4 h-4" />
                        <span className="text-zinc-900 font-medium">Direct Bank Deposit</span>
                      </div>
                    </label>

                    {customer.paymentMethod === "Bank" && (
                      <div className="p-4 bg-zinc-50 text-xs text-zinc-700 space-y-2 border-t border-zinc-200">
                        <p className="font-medium text-zinc-900">Please transfer funds to the account below and share the receipt on WhatsApp: <strong className="text-zinc-950">{BANK_DETAILS.whatsappContact}</strong></p>
                        <div className="bg-white p-3 rounded-xl border border-zinc-200 space-y-1 font-mono text-xs text-zinc-800">
                          <p><strong>Account Title:</strong> {BANK_DETAILS.accountTitle}</p>
                          <p><strong>Bank:</strong> {BANK_DETAILS.bankName}</p>
                          <p><strong>IBAN:</strong> {BANK_DETAILS.iban}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Complete Order Button */}
                <button
                  onClick={handlePlaceOrder}
                  disabled={loading || cart.length === 0}
                  className={`w-full py-4 rounded-xl text-xs sm:text-sm uppercase font-bold tracking-wider cursor-pointer transition shadow-sm mt-2 text-white ${
                    loading || cart.length === 0
                      ? "bg-zinc-400 cursor-not-allowed" 
                      : "bg-zinc-900 hover:bg-zinc-800"
                  }`}
                >
                  {loading ? "Processing Order..." : "Confirm & Complete Order"}
                </button>
              </div>

              {/* RIGHT: ORDER SUMMARY WITH QUANTITY ADJUSTMENTS */}
              <div className="lg:col-span-5 p-4 sm:p-7 bg-zinc-50/60 space-y-4 sm:space-y-5">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                    Order Summary ({cart.length})
                  </h3>
                  <button
                    onClick={closeCart}
                    className="text-[11px] font-semibold text-amber-600 hover:text-amber-700 underline cursor-pointer"
                  >
                    + Add More Items
                  </button>
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-xs text-zinc-500 mb-3">Your cart is empty.</p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                    {cart.map((item, index) => (
                      <div key={`${item.id}-${index}`} className="flex items-center justify-between gap-3 bg-white p-2.5 rounded-xl border border-zinc-200 shadow-2xs">
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-14 rounded-lg bg-zinc-100 border border-zinc-200 overflow-hidden shrink-0">
                            <img src={item.selectedImage || item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold text-zinc-900 line-clamp-1">{item.name || item.title}</h4>
                            <p className="text-[11px] text-zinc-500">
                              Rs. {Number(item.price || 0).toLocaleString()} {item.selectedColor ? `| ${item.selectedColor}` : ""}
                            </p>

                            {/* Quantity Controls (+ / -) */}
                            <div className="flex items-center gap-2 mt-1.5">
                              <button
                                type="button"
                                onClick={() => handleDecreaseQty(item)}
                                className="w-5 h-5 rounded bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-xs font-bold text-zinc-800 transition cursor-pointer"
                              >
                                -
                              </button>
                              <span className="text-xs font-bold text-zinc-900 min-w-[14px] text-center">
                                {item.quantity || 1}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleIncreaseQty(item)}
                                className="w-5 h-5 rounded bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-xs font-bold text-zinc-800 transition cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-1 shrink-0">
                          <span className="text-xs font-bold text-zinc-900">
                            Rs. {(Number(item.price || 0) * Number(item.quantity || 1)).toLocaleString()}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            title="Remove item"
                            className="text-[10px] text-rose-500 hover:text-rose-700 font-medium transition cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-2 space-y-2 text-xs sm:text-sm border-t border-zinc-200">
                  <div className="flex justify-between text-zinc-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-zinc-900">Rs. {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-zinc-600">
                    <span>Shipping Fee</span>
                    <span className="font-semibold text-zinc-900">Rs. {shipping.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-zinc-900 pt-3 border-t border-zinc-200 text-sm sm:text-base">
                    <span>Total Amount</span>
                    <span className="text-zinc-950">PKR Rs. {total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SUCCESS VIEW SUB-COMPONENT
// ==========================================
function SuccessView({ placedOrderId, customer, closeCart }) {
  return (
    <div className="p-6 sm:p-12 text-center space-y-4">
      <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-xl font-bold shadow-2xs">
        ✓
      </div>
      <h3 className="text-base sm:text-lg font-bold text-zinc-900">شکریہ! آپ کا آرڈر کامیابی سے پلیس ہو گیا ہے۔</h3>
      <p className="text-xs sm:text-sm text-zinc-500 max-w-sm mx-auto">
        ہم جلد ہی آپ سے تصدیق (Confirmation) کے لیے رابطہ کریں گے۔
      </p>
      {placedOrderId && (
        <p className="text-xs font-mono bg-zinc-100 border border-zinc-200 py-1.5 px-3 rounded-lg inline-block text-zinc-700">
          Order ID: {placedOrderId}
        </p>
      )}
      {customer.paymentMethod === "Bank" && (
        <div className="max-w-md mx-auto bg-zinc-50 border border-zinc-200 rounded-xl p-4 text-left text-xs space-y-2 mt-4 shadow-2xs">
          <p className="font-bold text-zinc-900">Bank Deposit Instructions:</p>
          <p className="text-zinc-600">
            Please transfer the amount to the account below and send the payment screenshot to WhatsApp at <span className="font-semibold text-zinc-900">{BANK_DETAILS.whatsappContact}</span>.
          </p>
          <div className="pt-2 border-t border-zinc-200 space-y-1 font-mono text-xs text-zinc-800">
            <p><strong>Account Title:</strong> {BANK_DETAILS.accountTitle}</p>
            <p><strong>Bank:</strong> {BANK_DETAILS.bankName}</p>
            <p><strong>IBAN:</strong> {BANK_DETAILS.iban}</p>
          </div>
        </div>
      )}
      <div className="pt-4">
        <button
          onClick={closeCart}
          className="px-6 py-3.5 bg-zinc-900 text-white rounded-xl text-xs uppercase font-bold tracking-wider cursor-pointer hover:bg-zinc-800 transition shadow-sm"
        >
          Close & Continue Shopping
        </button>
      </div>
    </div>
  );
}