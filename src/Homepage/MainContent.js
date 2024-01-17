import React from 'react';

import Diamondr from '../image/setting_template_main.jpg';

import '../cssFiles/shop.css';
import necklace1 from '../image/necklace1.jpg';
import { Link } from 'react-router-dom';
import Earring2 from '../image/5a58454b-e9e3-44aa-9256-da9dadaf2c2c.jpg.800x800_q85_background.jpg';
const MainContent = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
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

      <section className="Shop" >
     
        <article>
          <div className="headingCardContainer">
            <h1 className="heading1"><div class="text-placeholder">Shop</div></h1>
            <Link to='./Earring' style={{ textDecoration: 'none' }} onClick={handleScroll}>
              <div className="cardzz" style={{ display: 'flex',  alignItems: 'center' }}>

                <img src={Earring2} alt="Card image" style={{ marginTop: '29px', width: '50%', height: 'auto' }} />
                <div className="card-body">

                </div>
                <h2 className='titleImageCover'> Earrings</h2>
           
              </div>
            </Link>
          </div>
        </article>
        <article>
          <div className="headingCardContainer">
            <h1 className="heading1"></h1>
            <Link to='./ring' style={{ textDecoration: 'none' }} onClick={handleScroll}>
              <div className="cardzz"  >
                <img src={Diamondr} alt="Card image" style={{ width: '50%', marginTop: '0px', height: 'auto' }} />
                <div className="card-body">


                </div>
                <h2 className='titleImageCover'> Rings</h2>
              </div>
            
            </Link>
          </div>
        </article>
        <article>
          <div className="headingCardContainer">
            <h1 className="heading1"></h1>
            <Link to='./Necklace' style={{ textDecoration: 'none' }} onClick={handleScroll}>
              <div className="cardzz" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={necklace1} alt="Card image" style={{ marginTop: '0px', width: '60%', height: 'auto' }} />
                <div className="card-body">

                </div>
                <h2 className='titleImageCover'> Necklaces</h2>

              </div>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
};

export default MainContent;  