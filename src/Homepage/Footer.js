import React from 'react';

import MBG from '../images/MBG.jpg';
import SecurePaymentsIcon from '../images/SPM.png';
import FreeShippingIcon from '../images/FSP.png';

const Footer = () => {
  return (
    <footer>
     
     


      <section className="special-offers">
        <article>
          <img className="special-offers-img" src={MBG} alt="Money back guarantee icon" />
          <h2>Money Back Guarantee</h2>
          <p>30-day money back guarantee</p>
        </article>
        <article>
          <img className="special-offers-img" src={SecurePaymentsIcon} alt="Secure payments icon" />
          <h2>Secure Payments</h2>
          <p>We ensure secure payments with PEV</p>
        </article>
        <article>
          <img className="special-offers-img" id="num3" src={FreeShippingIcon} alt="Free shipping icon" />
          <h2>Free Shipping</h2>
          <p>Free shipping on all orders over $99</p>
        </article>
      </section>
      <div class="logo">
        <p>Copyright @Mangata</p>
      </div>

    </footer>
  );
};

export default Footer;