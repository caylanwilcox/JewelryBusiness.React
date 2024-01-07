import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Homepage/Header';
import Footer from './Homepage/Footer';
import './cssFiles/BuyNowPage.css'
// Import additional components or styles as needed

const BuyNowPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch the product data based on the ID
    fetch(`/data.json`) // Assuming you have a JSON file with products data
      .then(response => response.json())
      .then(data => {
        const selectedProduct = data.find(item => item.id === parseInt(id));
        setProduct(selectedProduct);
      })
      .catch(error => console.error('Error fetching product: ', error));
  }, [id]); // Dependency array ensures this runs when id changes

  if (!product) {
    return (
      <>
        <Header />
        <div className="buy-now-container">No product selected or Product not found.</div>
        <Footer />
      </>
    );
  }



    return (
        <>
        <Header />
        <div className="buy-now-container">
          <div className="product-image">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            {/* Thumbnails or other smaller images can go here */}
          </div>
          <div className="product-purchase-info">
            <h2 className="product-title">{product.name}</h2>
          
            <p className="product-metal">Metal: {product.material}</p>
            <p className="product-price">Price: ${product.price.toFixed(2)}</p>
            {/* Additional product details here */}
            <div className="payment-options">
              <button className="add-to-cart-btn">CHECKOUT</button>
              <p className="payment-plan">4 interest-free payments of ${(product.price / 4).toFixed(2)}. Learn Now</p>
              {/* Klarna or other payment options */}
            </div>
            {/* Jewelry Information */}
            <div className="jewelry-info">
              <p>Total Diamond Carat Weight: {product.diamondWeight}</p>

              <p>Chain Length: {product.chainLength}</p>
              {/* Add more specs if necessary */}
            </div>
          </div>
        </div>
        <Footer />
      </>
      
    );
};

export default BuyNowPage;


  