
import './cssFiles/ShoppingCart.css';
import Footer from './Homepage/Footer'
import Header from './Homepage/Header';
import React from 'react';
import { Link } from 'react-router-dom';
import ProfileIcon from './image/profile-icon.jpg';

function ShoppingCart() {
    return (
        <>
        <Header/>
        <div className="cart-container">
            <Link to="/MyProfile">
                <img src={ProfileIcon} alt="Logo" className="cart-logo" />
            </Link>
            <h2 className="cart-title">My Shopping Cart</h2>
            <ul className="cart-items">
                {/* Example for item structure */}
                <li className="cart-item">
                    <span>Item Name</span>
                    <span>Quantity: 1</span>
                    <span>Price: $100</span>
                    <button className="remove-button">Remove</button>
                </li>
                {/* ...more items... */}
            </ul>
            <div className="cart-total">
                <span>Total: $XXX.XX</span>
            </div>
            <div className="checkout-button-container">
                <button className="checkout-button">Proceed to Checkout</button>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default ShoppingCart;

