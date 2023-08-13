import Header from './Homepage/Header';
import Footer from './Homepage/Footer';
import DropdownMenu from './DropdownMenu';
import weddingRing from './images/wedding-ring-custom-engagement-rings-wedding-bands-diamond-jewelry-37.png';
import ring1 from './images/radiant_.png';
import ring2 from './images/TR713_WHITE_18K_SEMI.png';
const necklaces = [
    {
      id: 1,
      name: 'DB Classic  Diamond Pendant',
      price: 2299,
      imageUrl: weddingRing,
    },
    {
      id: 2,
      name: 'Unique Brilliance 0.25 Carat T.W ',
      price: 4500,
      imageUrl: ring1,
    },
    {
      id: 3,
      name: 'Moments Heart Clasp Snake Chain Bracelet ',
      price: 3299,
      imageUrl: ring2,
    },
  
    // Add more necklace objects as needed
  ];
function Ring(){
    return(
        <>
        <Header/>
        <section clasName="filter"></section>
    <div className='titleBck'>
    <div>
    <h1 className='Title'>Diamond Ring</h1>
    <h5 className='titleHeading'>"Discover Elegance: Shop the Finest Women's Ring Collection Now!"</h5>
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


export default Ring