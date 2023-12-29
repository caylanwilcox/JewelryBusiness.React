import React, { useContext } from 'react';
import Header from './Homepage/Header';
import Footer from './Homepage/Footer';
import DropdownMenu from './DropdownMenu';
import { useNavigate } from 'react-router-dom';
import { FilterContext } from './FilterContext';

// Import your earring images
import Earring1 from './images/istockphoto-1390616610-612x612.jpg';
import Earring2 from './images/5a58454b-e9e3-44aa-9256-da9dadaf2c2c.jpg.800x800_q85_background.jpg';
import Asset from './images/Brilliance-Fine-Jewelry-0-25-Carat-T-W-Diamond-Stud-Earring-in-14K-White-Gold-I-J-I2-I3_058e720d-1d2d-4cdc-ba01-43839c6c41bb.8aff135d7c224ddd2aa7bef6656563e6.webp';

// Import CSS
import Sidebar from './Sidebar';

const earrings = [
  {
    id: 1,
    name: 'DB Classic Diamond Earring',
    price: 1599,
    imageUrl: Earring1,
    material: ['silver'],
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Unique Brilliance 0.25 Carat T.W',
    price: 999,
    imageUrl: Earring2,   material: ['gold'], rating: 4.5,
  },
  {
    id: 3,
    name: 'Elegant Diamond Stud',
    price: 2299,
    imageUrl: Asset,   material: ['silver'], rating: 5,
  },
  // Add more earring objects as needed
];

function Earring() {
  const { filters, setSelectedProduct, selectedOption } = useContext(FilterContext);
  const navigate = useNavigate();

  const handleBuyNow = (earring) => {
    setSelectedProduct(earring);
    navigate('/buy-now');
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
