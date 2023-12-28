import React, { useContext } from 'react';
import Footer from './Homepage/Footer'
import Header from './Homepage/Header'
import necklaz from './images/N102186_01.jpg';
import Asset from './images/graduated-diamond-necklace-anniversary-gifts-in-FDNK8068-NL-RG.jpg';
import './cssFiles/Necklace.css';
import SnakeChain from './images/1835013_master.jpg'
import DropdownMenu from './DropdownMenu';
import './cssFiles/sidebar.css';
// In Necklace.js
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { FilterContext } from './FilterContext';

const necklaces = [
  {
    id: 1,
    name: 'DB Classic  Diamond Pendant',
    price: 3359,
    rating: 5,
    imageUrl: necklaz,
    material: ['silver']
  },
  {
    id: 2,
    name: 'Diamond ',
    price: 1599,
    imageUrl: Asset,
    rating: 4.0,
    material: ['gold']
  },
  {
    id: 3,
    name: 'Moments Heart Clasp Snake Chain',
    price: 1150,
    imageUrl: SnakeChain,
    rating: 4.5,
    material: ['silver'],
  },

  // Add more necklace objects as needed
];

const Necklace = () => {
  // Sort the necklaces array by price in ascending order
  const { filters, setSelectedProduct, selectedOption, selectedProduct } = useContext(FilterContext);
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    navigate('/buy-now');
  };
  const filteredNecklaces = necklaces
    .filter(necklace => {
      // Apply price filter
      const minPrice = filters.price.min || 0;
      const maxPrice = filters.price.max || Infinity;
      const priceMatch = necklace.price >= minPrice && necklace.price <= maxPrice;

      // Apply rating filter
      const ratingMatch = filters.rating ? necklace.rating >= filters.rating : true;

      const materialMatch = necklace.material.every(material => filters.material[material]);

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
      <div className='titleBck'>
        <div>
          <h1 className='Title'>Diamond Necklace</h1>
          <h5 className='titleHeading'>"Discover Elegance: Shop the Finest Women's Necklaces Collection Now!"</h5>
        </div>
      </div>
      <div className='dropNav'><DropdownMenu /></div>
      <div className='pageContent'>
        <Sidebar />
        <section className="Shop">
          {filteredNecklaces.map((necklace) => (
            <article key={necklace.id} className="headingCardContainer">
              <div className="card">
                <img src={necklace.imageUrl} alt={necklace.name} />
                <div className="card-body">
                  <div className="card-title">
                    <h5>{necklace.name}</h5>
                  </div>
                  <p className="card-text">Price: ${necklace.price.toFixed(2)}</p>
                  <p className="card-rating">Rating: {necklace.rating} / 5</p>
                  <div className="card-btn-container">
                    <button onClick={() => handleBuyNow(necklace)} className="card-btn buy-now">
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
};

export default Necklace;