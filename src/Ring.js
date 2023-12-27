import React, { useContext } from 'react';
import Header from './Homepage/Header';
import Footer from './Homepage/Footer';
import DropdownMenu from './DropdownMenu';
import weddingRing from './images/wedding-ring-custom-engagement-rings-wedding-bands-diamond-jewelry-37.png';
import ring1 from './images/radiant_.png';
import ring2 from './images/TR713_WHITE_18K_SEMI.png';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { FilterContext } from './FilterContext';

import './cssFiles/sidebar.css';
const necklaces = [
    {
      id: 1,
      name: 'DB Classic  Diamond Pendant',
      price: 2299,
      rating: 4,
      imageUrl: weddingRing, material: ['silver']
    },
    {
      id: 2,
      name: 'Unique Brilliance 0.25 Carat T.W ',    rating: 5,
      price: 4500,
      imageUrl: ring1, material: ['silver']
    },
    {
      id: 3,
      name: 'Moments Diamond Ring',
      price: 3299,    rating: 4.5,
      imageUrl: ring2,    material: ['silver'],
    },
  
    // Add more necklace objects as needed
  ];
function Ring(){
  const { filters, setSelectedProduct, selectedOption, selectedProduct } = useContext(FilterContext);
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    navigate('/buy-now');
  };
  const filteredRings = necklaces
    .filter(rings => {
      // Apply price filter
      const minPrice = filters.price.min || 0;
      const maxPrice = filters.price.max || Infinity;
      const priceMatch = rings.price >= minPrice && rings.price <= maxPrice;

      // Apply rating filter
      const ratingMatch = filters.rating ? rings.rating >= filters.rating : true;

      const materialMatch = rings.material.every(material => filters.material[material]);

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
        <section className="filter"></section>
        <div className='titleBck'>
          <div>
            <h1 className='Title'>Diamond Ring</h1>
            <h5 className='titleHeading'>"Discover Elegance: Shop the Finest Women's Ring Collection Now!"</h5>
          </div>
        </div>
        <div className='dropNav'><DropdownMenu /></div>
        <div className='pageContent'>
          <Sidebar />
          <section className="Shop">
            {filteredRings.map((ring) => (
              <article key={ring.id} className="headingCardContainer">
                <div className="card">
                  <img src={ring.imageUrl} alt={ring.name} />
                  <div className="card-body">
                    <div className="card-title">
                      <h5>{ring.name}</h5>
                    </div>
                    <p className="card-text">Price: ${ring.price.toFixed(2)}</p>
                    <p className="card-rating">Rating: {ring.rating} / 5</p>
                    <div className="card-btn-container">
                      <button onClick={() => handleBuyNow(ring)} className="card-btn buy-now">
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
  
  export default Ring;
