import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  handleRemoveFromCart: () => {},
  showPopup: false,
  closePopup: () => {},
  setCheckoutProduct: () => {},
  checkoutProduct: null,
  isDirectCheckout: false,
  setIsDirectCheckout: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  const [isDirectCheckout, setIsDirectCheckout] = useState(false);
const [checkoutProduct, setCheckoutProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // Save to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((currentItems) => {
      const updatedItems = [...currentItems, item];
      // Save the updated items to localStorage
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
    setShowPopup(true); // Show popup when an item is added to the cart
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems((currentItems) => {
      const updatedItems = currentItems.filter(item => item.id !== itemId);
      // Save the updated items to localStorage
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <CartContext.Provider value={{ isDirectCheckout,
      setIsDirectCheckout,setCheckoutProduct, checkoutProduct,cartItems, addToCart, showPopup, closePopup, handleRemoveFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
