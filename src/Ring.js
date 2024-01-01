import React, { useContext, useState, useEffect } from 'react';
import Header from './Homepage/Header';
import Footer from './Homepage/Footer';
import DropdownMenu from './DropdownMenu';

import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { FilterContext } from './FilterContext';


function Ring() {
  const [rings, setRings] = useState([]);
  const { filters, setSelectedProduct, selectedOption } = useContext(FilterContext);
  const navigate = useNavigate();

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

  const handleBuyNow = (ring) => {
    setSelectedProduct(ring);
    navigate('/buy-now');
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
        <section className="filter"></section>
        <div className='titleBck'>
          <div>
            <h1 className='Title'>Diamond Ring</h1>
            <h5 className='titleHeading'>"Discover Elegance: Shop the Finest Women's Ring Collection Now!"</h5>
          </div>
        </div>
        <div className='dropNav'><DropdownMenu filteredItems={filteredRings}/></div>
        <div className='pageContent'>
          <Sidebar />
          <section className="Shop">
            {filteredRings.map((ring) => (
              <article key={ring.id} className="headingCardContainer">
                <div className="card">
                  <img src={ring.imageUrl} alt={ring.name} style={{width:'40%'}} />
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
