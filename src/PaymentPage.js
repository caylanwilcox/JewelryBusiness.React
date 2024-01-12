import React, { useContext, useState } from 'react';
import { CartContext } from './Cart.Context';
import Header from './Homepage/Header';
import './cssFiles/PaymentPage.css';
import { useNavigate } from 'react-router-dom';
const PaymentPage = () => {
  
  const navigate = useNavigate();

  const handleCheckout = () => {
      navigate(`/Checkout`); // Replace with the path to your Buy Now page
  };
  const { cartItems, checkoutProduct, isDirectCheckout } = useContext(CartContext);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  // Additional state for payment details like card info, etc.

  // Functions to handle state changes
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);

  // Integrate with payment API like Stripe to process the payment
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement payment processing logic here
  };

  // Function to render cart items or a single checkout product
  const renderItemsForCheckout = () => {
    if (isDirectCheckout && checkoutProduct) {
      // Render a single product for direct checkout
      return (
        <>
     
        <div className="product-item">
     
          <img src={checkoutProduct.imageUrl} alt={checkoutProduct.name} />
          <div className="item-details">
            <h3>{checkoutProduct.name}</h3>
            <p>Price: ${checkoutProduct.price.toFixed(2)}</p>
            <p>Quantity: 1</p>
       
          </div>
        </div>
        </>
      );
    } else {
      // Render all cart items for cart checkout
      return cartItems.map((item, index) => (
        <div key={index} className="product-item">
          <img src={item.imageUrl} alt={item.name} />
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
         
          </div>
        </div>
      ));
    }
  };

  return (
<>
      <Header />
     
      <div className="payment-page-container">
        <div className="payment-form-container">
          <form onSubmit={handleSubmit}>
          <div className="cart-total">
        {isDirectCheckout? <span>Total: ${checkoutProduct.price}</span> : <span>Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>}
    </div>
            <div className="payment-section">
            <button type="submit" className="pay-button">Pay</button>

              <h2>Shipping Information</h2>
              <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" required />
              <input type="text" value={name} onChange={handleNameChange} placeholder="Name" required />
              <input type="text" value={address} onChange={handleAddressChange} placeholder="Address" required />
              {/* Add more fields for shipping information */}
            </div>
            <div className="payment-section">
              <h2>Payment Method</h2>
              {/* Payment fields and integration go here */}
            </div>
            <button type="submit" className="pay-button">Pay</button>
          </form>
        </div>
        <div className="product-summary-container">
          {renderItemsForCheckout()}
        </div>
      </div>
  
    </>
  );
};

export default PaymentPage;
