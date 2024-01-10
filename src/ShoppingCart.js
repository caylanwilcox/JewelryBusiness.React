import './cssFiles/ShoppingCart.css';
import Footer from './Homepage/Footer'
import Header from './Homepage/Header';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProfileIcon from './image/profile-icon.jpg';
import { CartContext } from './Cart.Context';
import { useNavigate } from 'react-router-dom';
function ShoppingCart() {
    const { cartItems, handleRemoveFromCart,setIsDirectCheckout } = useContext(CartContext); // Destructure to get cartItems from context

    const navigate = useNavigate();

    const handleCheckout = () => {
        setIsDirectCheckout(false);
        navigate(`/Checkout`); // Replace with the path to your Buy Now page
    };
  
    return (
        <>
            <Header />
            <div className="cart-container">
                <Link to="/MyProfile">
                    <img src={ProfileIcon} alt="Logo" className="cart-logo" />
                </Link>
                <h2 className="cart-title">My Shopping Cart</h2>
                <ul className="cart-items">
                    {cartItems.map((item, index) => (
                        <li key={index} className="cart-item">
                            <span>{item.name}</span>
                            {/* Other item details */}
                            <span>Price: ${item.price}</span>
                            <button className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>

                        </li>
                    ))}
                </ul>
                {/* Calculate the total */}
                <div className="cart-total">
                    <span>Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
                </div>
                <div className="checkout-button-container">
                    <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>

                </div>
            </div>
            <Footer />
        </>
    );
}
export default ShoppingCart;