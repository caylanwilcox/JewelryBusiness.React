import React from 'react';
import Header from './Homepage/Header'
import necklaz from './images/N102186_01.jpg';
import Asset from './images/png-clipart-earring-gemological-institute-of-america-necklace-diamond-jewellery-jwellery-ring-bracelet.png';
import Footer from './Homepage/Footer';
const necklaces = [
  {
    id: 1,
    name: 'DB Classic round brilliant diamond pendant',
    price: 40,
    imageUrl: necklaz,
  },
  {
    id: 2,
    name: 'Necklace 2',
    price: 50,
    imageUrl: Asset,
  },
  // Add more necklace objects as needed
];

const Necklace = () => {
  return (
    <>
    <Header />
    <div className="container mt-4">
      <div className="row justify-content-center">
        {necklaces.map((necklace) => (
          <div key={necklace.id} className="col-lg-3 col-md-4 col-sm-6">
            <div className="card">
              <img src={necklace.imageUrl} alt={necklace.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{necklace.name}</h5>
                <p className="card-text text-muted">Price: ${necklace.price.toFixed(2)}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
  </>
);
};

export default Necklace;