import React from 'react';
import Footer from './Homepage/Footer'
import Header from './Homepage/Header'
import necklaz from './images/N102186_01.jpg';
import Asset from './images/graduated-diamond-necklace-anniversary-gifts-in-FDNK8068-NL-RG.jpg';
import './Necklace.css';
import SnakeChain from './images/1835013_master.jpg'
import DropdownMenu from './DropdownMenu';

const necklaces = [
  {
    id: 1,
    name: 'DB Classic  Diamond Pendant',
    price: 3359,
    imageUrl: necklaz,
  },
  {
    id: 2,
    name: 'Diamond ',
    price: 1599,
    imageUrl: Asset,
  },
  {
    id: 3,
    name: 'Moments Heart Clasp Snake Chain Bracelet ',
    price: 1150,
    imageUrl: SnakeChain,
  },

  // Add more necklace objects as needed
];

const Necklace = () => {
  return (
    <>
    <Header />
    
    <section clasName="filter"></section>
    <div className='titleBck'>
    <div>
    <h1 className='Title'>Diamond Necklace</h1>
    <h5 className='titleHeading'>"Discover Elegance: Shop the Finest Women's Necklaces Collection Now!"</h5>
    </div>
    </div>
    <div className='dropNav'><DropdownMenu/></div>
    <section className="Shop">
   
    {necklaces.map((necklace) => (
     
      <article>
  <div key={necklace.id} className="headingCardContainer">
   
    <div className="card">
      <img src={necklace.imageUrl} alt={necklace.name} />
      <div className="card-body">
        <div className="card-title">
          <h5>{necklace.name}</h5>
        </div>
        <p className="card-text">Price: ${necklace.price.toFixed(2)}</p>
        <div className="card-btn-container">
          <a href="#" className="card-btn buy-now">
            Buy Now
          </a>
          <button className="card-btn add-to-cart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
  </article>

))}
    </section>
    
    <Footer/>
  </>
);
};

export default Necklace;