import React, { useContext, useState } from 'react';
import { CartContext } from './Cart.Context';
import './cssFiles/Checkout.css';
import Header from './Homepage/Header';
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
  const { cartItems, handleRemoveFromCart, checkoutProduct, isDirectCheckout  } = useContext(CartContext);
  const [shippingAddress, setShippingAddress] = useState('');
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState('');
  const navigate = useNavigate();
  const handleCheckout = () => {
    
    navigate(`/Payment`); // Replace with the path to your Buy Now page
};
  const handleAddressChange = (e) => {
    setShippingAddress(e.target.value);
  };

  const handleDeliveryOptionChange = (e) => {
    setSelectedDeliveryOption(e.target.value);
  };

  // Function to render cart items
  const renderCartItems = () => {
    return cartItems.map((item, index) => (
      <div key={index} className="product-item">
        <img src={item.imageUrl} alt={item.name} className="item-image" />
        <div className="item-details">
          <h3>{item.name}</h3>
          <p>Price: ${item.price.toFixed(2)}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
        </div>
      </div>
    ));
  };

  // Function to render direct checkout product
  const renderDirectCheckoutProduct = () => {
    if (!checkoutProduct) return null;

    return (
      <div className="product-item">
        <img src={checkoutProduct.imageUrl} alt={checkoutProduct.name} className="item-image" />
        <div className="item-details">
          <h3>{checkoutProduct.name}</h3>
          <p>Price: ${checkoutProduct.price.toFixed(2)}</p>
          <p>Quantity: 1</p>
          {/* Since this is a direct checkout, we assume quantity is 1 */}
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="checkout-container">
        <div className="checkout-header">
          <h1>Checkout</h1>
        </div>
        <div className="checkout-body">
          <div className="product-summary">
            {isDirectCheckout ? renderDirectCheckoutProduct() : renderCartItems()}
          </div>
          <div className="delivery-method">
            <h2>Delivery Options</h2>
            <div className="address-form">
              <label htmlFor="shippingAddress">Shipping Address:</label>
              <input 
                type="text" 
                id="shippingAddress" 
                value={shippingAddress}
                onChange={handleAddressChange}
                placeholder="Enter your address"
              />
            </div>
            <div className="delivery-options">
              <label>
                <input 
                  type="radio" 
                  name="delivery" 
                  value="standard"
                  checked={selectedDeliveryOption === "standard"} 
                  onChange={handleDeliveryOptionChange} 
                />
                Standard Delivery (5-7 days)
              </label>
              <label>
                <input 
                  type="radio" 
                  name="delivery" 
                  value="express"
                  checked={selectedDeliveryOption === "express"} 
                  onChange={handleDeliveryOptionChange} 
                />
                Express Delivery (2-3 days)
              </label>
              {/* Add more delivery options as needed */}
            </div>
          </div>
          <div className="order-summary">
            {/* Order summary content */}
          </div>
          <div className="checkout-footer">
            <button onClick={handleCheckout} className="continue-button">Continue to Payment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
