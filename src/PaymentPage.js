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
        <form onSubmit={handleSubmit} className="payment-form">
          <h1 className="form-title">Checkout</h1>
          <div className="form-section">
            <h2>Billing Information</h2>
            <label>
              Email
              <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" required />
            </label>
            <label>
              Name
              <input type="text" value={name} onChange={handleNameChange} placeholder="Enter your name" required />
            </label>
            <label>
              Address
              <input type="text" value={address} onChange={handleAddressChange} placeholder="Enter your address" required />
            </label>
            {/* Additional fields */}
          </div>
          <div className="form-section">
            <h2>Payment Method</h2>
            {/* Payment fields and integration */}
          </div>
          <button type="submit" className="pay-button">Confirm and Pay</button>
        </form>
        <div className="product-summary-container">
          {renderItemsForCheckout()}
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
