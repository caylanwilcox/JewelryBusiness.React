import React, { useContext, useState, useEffect } from 'react';
import Header from './Homepage/Header';
import Footer from './Homepage/Footer';
import DropdownMenu from './DropdownMenu';
import { useNavigate } from 'react-router-dom';
import { FilterContext } from './FilterContext';

// Import your earring images

// Import CSS
import Sidebar from './Sidebar';


function Earring() {
  const [earrings, setEarrings] = useState([]);
  const { filters,  selectedOption } = useContext(FilterContext);
  const navigate = useNavigate();

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
  const handleBuyNow = (earring) => {
    // Navigate to the buy now page with the earring's ID or unique identifier
    navigate(`/buy-now/${earring.id}`);
  };


  return (
    <>
      <Header />
      <section className="filter"></section>
      <div className='titleBck'>
        <div>
          <h1 className='Title'>Diamond Earrings</h1>
          <h5 className='titleHeading'>"Discover Elegance: Shop the Finest Women's Earring Collection Now!"</h5>
        </div>
      </div>
      <div className='dropNav'><DropdownMenu filteredItems={filteredEarrings}/></div>
      <div className='pageContent'>
        <Sidebar />
      <section className="Shop">
        {filteredEarrings.map((earring) => (
          <article key={earring.id} className="headingCardContainer">
            <div className="card">
              <img src={earring.imageUrl} alt={earring.name} />
              <div className="card-body">
                <div className="card-title">
                  <h5>{earring.name}</h5>
                </div>
                <p className="card-text">Price: ${earring.price.toFixed(2)}</p>
                <p className="card-rating">Rating: {earring.rating} / 5</p>
                <div className="card-btn-container">
                  <button onClick={() => handleBuyNow(earring)} className="card-btn buy-now">
                    Buy Now
                  </button>
                  <button className="card-btn add-to-cart">
                    Add to Cart
                  </button>
                </div>
              </div>
          
            </div>
          </article>
        
        ))}
      </section>
      </div>
      <Footer />
    </>
  );
}

export default Earring;
