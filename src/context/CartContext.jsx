import React, { createContext, useContext, useMemo, useState } from 'react';
const CartContext = createContext(null);
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const addToCart = (product) => setCart((prev) => { const found = prev.find((item) => item.id === product.id); return found ? prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...prev, { ...product, quantity: 1 }]; });
  const removeFromCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id));
  const updateQuantity = (id, quantity) => setCart((prev) => quantity <= 0 ? prev.filter((item) => item.id !== id) : prev.map((item) => item.id === id ? { ...item, quantity } : item));
  const clearCart = () => setCart([]);
  const toggleWishlist = (product) => setWishlist((prev) => prev.some((item) => item.id === product.id) ? prev.filter((item) => item.id !== product.id) : [...prev, product]);
  const value = useMemo(() => ({ cart, wishlist, addToCart, removeFromCart, updateQuantity, clearCart, toggleWishlist }), [cart, wishlist]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export const useCart = () => useContext(CartContext);
export const useCartContext = useCart;
