import Header from './Homepage/Header';
import Footer from './Homepage/Footer';
import Earring2 from './images/5a58454b-e9e3-44aa-9256-da9dadaf2c2c.jpg.800x800_q85_background.jpg';
import Asset from './images/Brilliance-Fine-Jewelry-0-25-Carat-T-W-Diamond-Stud-Earring-in-14K-White-Gold-I-J-I2-I3_058e720d-1d2d-4cdc-ba01-43839c6c41bb.8aff135d7c224ddd2aa7bef6656563e6.webp';
import './Necklace.css';
import Earring1 from './images/istockphoto-1390616610-612x612.jpg';
import DropdownMenu from './DropdownMenu';
const necklaces = [
    {
      id: 1,
      name: 'DB Classic  Diamond Pendant',
      price: 1599,
      imageUrl: Earring1,
    },
    {
      id: 2,
      name: 'Unique Brilliance 0.25 Carat T.W ',
      price: 999,
      imageUrl: Earring2,
    },
    {
      id: 3,
      name: 'Moments Heart Clasp Snake Chain Bracelet ',
      price: 2299,
      imageUrl: Asset,
    },
  
    // Add more necklace objects as needed
  ];
function Earring(){
    return(
        <>
        <Header/>
        <section clasName="filter"></section>
    <div className='titleBck'>
    <div>
    <h1 className='Title'>Diamond Earring</h1>
    <h5 className='titleHeading'>"Discover Elegance: Shop the Finest Women's Earring Collection Now!"</h5>
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
        
    )
}

export default Earring