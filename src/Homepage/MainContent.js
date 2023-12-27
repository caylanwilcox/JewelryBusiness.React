import React from 'react';
import Diamondn from '../images/N102186_01.jpg';
import Diamondr from '../images/setting_template_main.jpg';
import Earring from '../images/download (1).jpg';
import '../cssFiles/shop.css';
import { Link } from 'react-router-dom';


const MainContent = () => {
  const handleScroll=()=>{
    window.scrollTo(0,0);
  };
  return (
    <main>
      <section>
        <article>
          <div className="banner">
            <div className="bannertext">
              <p>
                Dazzle with Timeless Elegance – A Collection of Beautiful Necklaces that Will Elevate Your Style.{" "}
                
              </p>
            </div>
          </div>
        </article>
      </section>
      <h1 className="Best">August Best Sellers</h1>
      <section className="Shop">
        <article>
          <div className="headingCardContainer">
            <h1 className="heading1">Earrings</h1>
            <Link to='./Earring'  style={{textDecoration:'none'}} onClick={handleScroll}>
            <div className="card" >
      
              <img src={Earring} alt="Card image" />
              <div className="card-body">
                <div className="card-title"><h5>Round Diamond Earrings</h5></div>
                <p className="card-text">18K White Gold</p>
              
              </div>
            </div>
            </Link>
          </div>
        </article>
        <article>
          <div className="headingCardContainer">
            <h1 className="heading1">Ring</h1>
            <Link to='./ring' style={{textDecoration:'none'}}onClick={handleScroll}>
            <div className="card">
              <img src={Diamondr} alt="Card image" />
              <div className="card-body">
                <h5 className="card-title">Petite Twist Diamond Engagement</h5>
                <p className="card-text">Beautiful 14k White Gold</p>
             
              </div>
            </div>
            </Link>
          </div>
        </article>
        <article>
          <div className="headingCardContainer">
            <h1 className="heading1">Necklace</h1>
            <Link to='./Necklace' style={{textDecoration:'none'}} onClick={handleScroll}>
            <div className="card">
              <img src={Diamondn} alt="Card image" />
              <div className="card-body">
                <div className="card-title" ><h5> Round Brilliant Diamond Pendant</h5></div>
                <p> Classic round brilliant diamond pendant.</p>
          
              </div>
            </div>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
};

export default MainContent;
