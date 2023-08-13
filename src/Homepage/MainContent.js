import React from 'react';
import Diamondn from '../images/N102186_01.jpg';
import Diamondr from '../images/setting_template_main.jpg';
import Earring from '../images/download (1).jpg';
import '../shop.css';
const MainContent = () => {
  return (
    <main>
      <section>
        <article>
          <div className="banner">
            <div className="bannertext">
              <p>
                Dazzle with Timeless Elegance – A Collection of Beautiful Necklaces that Will Elevate Your Style.{" "}
                <span className="buyNow"><a href="/Necklace">Shop Now</a> -&gt;</span>
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
            <div className="card">
              <img src={Earring} alt="Card image" />
              <div className="card-body">
                <div className="card-title"><h5>Round Diamond Earrings</h5></div>
                <p className="card-text">18K White Gold</p>
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
        <article>
          <div className="headingCardContainer">
            <h1 className="heading1">Ring</h1>
            <div className="card">
              <img src={Diamondr} alt="Card image" />
              <div className="card-body">
                <h5 className="card-title">Petite Twist Diamond Engagement</h5>
                <p className="card-text">Beautiful 14k White Gold</p>
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
        <article>
          <div className="headingCardContainer">
            <h1 className="heading1">Necklace</h1>
            <div className="card">
              <img src={Diamondn} alt="Card image" />
              <div className="card-body">
                <div className="card-title" ><h5> Round Brilliant Diamond Pendant</h5></div>
                <p> Classic round brilliant diamond pendant.</p>
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
      </section>
    </main>
  );
};

export default MainContent;
