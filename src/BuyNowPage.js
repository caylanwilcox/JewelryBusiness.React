import React, { useContext } from 'react';
import { FilterContext } from './FilterContext'; // Adjust the import path as necessary
import './cssFiles/BuyNowPage.css';
import Header from './Homepage/Header'
import Footer from './Homepage/Footer'
const BuyNowPage = () => {
    const { selectedProduct } = useContext(FilterContext);
  
    if (!selectedProduct) {
        return (
            <>
                <Header />
                <div className="buy-now-container">No product selected.</div>
            </>
        );
    }
  
    return (
        <>
            <Header />
            <div className="buy-now-container">
                <div className="product-details">
                    <div className="product-image">
                        <img src={selectedProduct.imageUrl} alt={selectedProduct.name} />
                    </div>
                    <div className="product-purchase-info">
                        <div className="product-info">
                            <h2 className="product-title">{selectedProduct.name}</h2>
                            <p className="product-price">Price: ${selectedProduct.price.toFixed(2)}</p>
                            {/* Additional product details here */}
                        </div>
                        <div className="payment-buttons">
                            <button className="stripe-payment-button">Pay with Stripe</button>
                            <button className="paypal-payment-button">Pay with PayPal</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default BuyNowPage;


  