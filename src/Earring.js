import React, { useContext, useState, useEffect } from 'react';
import Header from './Homepage/Header';
import Footer from './Homepage/Footer';
import DropdownMenu from './DropdownMenu';
import { useNavigate } from 'react-router-dom';
import { FilterContext } from './FilterContext';
import cartIcon from './image/ShoppingCart.webp';
import { CartContext, showPopup,closePopup } from './Cart.Context';
import Popup from './Popup';
// Import your earring images

// Import CSS
import Sidebar from './Sidebar';


function Earring() {
  const [earrings, setEarrings] = useState([]);
  const { filters,  selectedOption } = useContext(FilterContext);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); // Use the addToCart function from CartContext
  const { showPopup, closePopup } = useContext(CartContext);



  useEffect(() => {
    fetch('/data.json') // Assuming your server route for the JSON file is '/data'
      .then(response => response.json())
      .then(data => {
        // Filter only earrings
        const earringData = data.filter(item => item.category === 'earring');
        setEarrings(earringData);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handleAddToCart = (event, earring) => {
    event.stopPropagation();
    addToCart(earring);
  };

  const handleBuyNow = (earring) => {
    navigate(`/ItemPage/${earring.id}`);
  };

  const filteredEarrings = earrings
    .filter(earring => {
      // Apply price filter
      const minPrice = filters.price.min || 0;
      const maxPrice = filters.price.max || Infinity;
      const priceMatch = earring.price >= minPrice && earring.price <= maxPrice;

      // Apply rating filter
      const ratingMatch = filters.rating ? earring.rating >= filters.rating : true;

      const materialMatch = earring.material.every(material => filters.material[material]);

      return priceMatch && ratingMatch && materialMatch;
    })
  
  .sort((a, b) => {
    // Apply sorting based on sortPreference
    if (selectedOption === 'option1') {
      return a.price - b.price; // Sort by price ascending
    } else if (selectedOption === 'option2') {
      return b.price - a.price; // Sort by price descending
    }
    return 0; // Default case or no sorting
  });



  return (
    <>
      <Header />
      <div className='titleContainer'>
      <div className='titleBckEarring'>
        <div>
         
        </div>
        </div>
        <div className='square2'>
  <div className="square2-content">
    <h1>Luxury Redefined</h1>
    <p>Discover an exclusive collection of fine jewelry that redefines luxury. Each piece is a testament to craftsmanship and timeless elegance.</p>
    
  </div>
  </div>
      </div>
      <div className='dropNav'><DropdownMenu filteredItems={filteredEarrings}/></div>
      <div className='pageContent'>
        <Sidebar />
      <section className="Shop">
     
{filteredEarrings.map((earring) => (
  <article key={earring.id} onClick={() => handleBuyNow(earring)} className="headingCardContainer">
    <div className="cardz" style={{ width: '400px' }}>
      <div className="cardHead" style={{ background: 'white' }}>
        <img src={cartIcon} alt="Cart" style={{ width: '40px' }} onClick={(event) => handleAddToCart(event, earring)}/>
      </div>
      <img src={earring.imageUrl} alt={earring.name} className="product-image" style={{ width: '250px', height: 'auto' }} />
      <div className="card-body">
        <h5 className="product-name">{earring.name}</h5>
        <div className="price-range">{earring.price.toFixed(2)}</div>
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

export default Earring;
