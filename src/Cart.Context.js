import React, { createContext, useState } from 'react';

export const CartContext = createContext( {cartItems: [], // Provide an initial value
addToCart: () => {}});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setShowPopup(true)
  };
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, showPopup, closePopup  }}>
      {children}
    </CartContext.Provider>
  );
};