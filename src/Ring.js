import React, { useContext, useState, useEffect } from 'react';
import Header from './Homepage/Header';
import Footer from './Homepage/Footer';
import DropdownMenu from './DropdownMenu';
import cartIcon from './image/ShoppingCart.webp';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { FilterContext } from './FilterContext';
import { CartContext, showPopup,closePopup } from './Cart.Context';
import Popup from './Popup';


function Ring() {
  const [rings, setRings] = useState([]);
  const { filters, setSelectedProduct, selectedOption } = useContext(FilterContext);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); // Use the addToCart function from CartContext
  const { showPopup, closePopup } = useContext(CartContext);
  useEffect(() => {
    fetch('/data.json') // Assuming your JSON file is named 'products.json'
      .then(response => response.json())
      .then(data => {
        // Assuming your JSON structure has all products, filter only rings
        const ringData = data.filter(item => item.category === 'ring');
        setRings(ringData);
        console.log(ringData)
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handleAddToCart = (event, ring) => {
    event.stopPropagation();
    addToCart(ring);
  };
  const handleBuyNow = (ring) => {
    navigate(`/ItemPage/${ring.id}`);
  };


  const filteredRings = rings
    .filter(ring => {
      // Apply filters
      const minPrice = filters.price.min || 0;
      const maxPrice = filters.price.max || Infinity;
      const priceMatch = ring.price >= minPrice && ring.price <= maxPrice;
      const ratingMatch = filters.rating ? ring.rating >= filters.rating : true;
      const materialMatch = ring.material.every(material => filters.material[material]);

      return priceMatch && ratingMatch && materialMatch;
    })
    .sort((a, b) => {
      // Apply sorting
      if (selectedOption === 'option1') {
        return a.price - b.price;
      } else if (selectedOption === 'option2') {
        return b.price - a.price;
      }
      return 0;
    });
    return (
      <>
      <Header />
      <div className='titleContainer'>
      <div className='titleBckRing'>
        <div>
         
        </div>
        </div>
        <div className='square2'>
  <div className="square2-content">
    <h1>Things Remembered</h1>
    <p>Begin a lifelong journey of love and devotion. Each diamond ring is crafted to celebrate your unique love story forever.</p>
    
  </div>
</div>
      </div>
        <div className='dropNav'><DropdownMenu filteredItems={filteredRings}/></div>
        <div className='pageContent'>
          <Sidebar />
          <section className="Shop">
            {filteredRings.map((ring) => (
              <article key={ring.id} onClick={() => handleBuyNow(ring)}className="headingCardContainer" >
                <div className="cardz" style={{ width: '400px' }}>
                  <div className="cardHead" style={{ background: 'white' }}>
                    <img src={cartIcon} alt="Cart"  onClick={(event) => handleAddToCart(event, ring)} style={{ width: '40px' }} />
                  </div>
                  <img src={ring.imageUrl} alt={ring.name} className="product-image" style={{ width: '250px', height: 'auto' }} />
                  <div className="card-body">
                    <h5 className="product-name">{ring.name}</h5>
                    <div className="price-range">{ring.price.toFixed(2)}</div>
                    <div className="card-actions">
                      {/* Add the favorite and compare icons here */}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
        {showPopup && <Popup onClose={closePopup} />}
        <Footer />
      </>
    );
  }
  export default Ring;
