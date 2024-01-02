import React, { useContext, useState, useEffect } from 'react';
import Footer from './Homepage/Footer';
import Header from './Homepage/Header';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { FilterContext } from './FilterContext';
import DropdownMenu from './DropdownMenu';
import { FaBorderNone } from 'react-icons/fa';
import cartIcon from './image/ShoppingCart.webp';
const Necklace = () => {
  const [necklaces, setNecklaces] = useState([]);
  const { filters, setSelectedProduct, selectedOption } = useContext(FilterContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data.json') // Assuming your JSON file is named 'products.json'
      .then(response => response.json())
      .then(data => {
        // Assuming your JSON structure has all products, filter only necklaces
        const necklaceData = data.filter(item => item.category === 'necklace');
        setNecklaces(necklaceData);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
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
      <div className='titleContainer'>
      <div className='titleBckNecklace'>
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
      <div className='dropNav'><DropdownMenu filteredItems={filteredNecklaces} /></div>
      <div className='pageContent'>
        <Sidebar />
        <section className="Shop">
          {filteredNecklaces.map((necklace) => (
           <article key={necklace.id} className="headingCardContainer">
           <div className="cardz">
             <div className="cardHead"style={{background:'white'}} >
             
               {<img src={cartIcon} style={{width:'40px'}}></img>}
             </div>
             <img src={necklace.imageUrl} style={{width:'250px' , height:'auto'}} alt={necklace.name} className="product-image" />
             <div className="card-body">
               <h5 className="product-name">{necklace.name}</h5>
               <div className="price-range"> {necklace.price.toFixed(2)}</div>
               <div className="card-actions">
                 {/* Add the favorite and compare icons here */}
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