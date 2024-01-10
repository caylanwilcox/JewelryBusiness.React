import React from 'react';
import { Link } from 'react-router-dom';
import SecurePaymentsIcon from '../image/lock-smart-security-gold-icon-vector-illustration-golden-particle-background-dark-179096604.webp';
import fspi from '../image/transparent-logistics-delivery-icon-black-delivery-small-truck-5f919e1ad49674.8118783116033787148708.png';
import mbg from '../image/freestock_146430827.jpg';
const Footer = () => {
  return (
    <footer>
     
       

      <section className="special-offers">
        <article>
          <img className="special-offers-img" src={mbg} alt="Money back guarantee icon" />
          <h2>Money Back Guarantee</h2>
          <p>30-day money back guarantee</p>
        </article>
        <article>
          <img className="special-offers-img" style={{width:'100px'}}src={SecurePaymentsIcon} alt="Secure payments icon" />
          <h2>Secure Payments</h2>
          <p>We ensure secure payments with PEV</p>
        </article>
        <article>
          <img className="special-offers-img" id="num3" src={fspi} alt="Free shipping icon" />
          <h2>Free Shipping</h2>
          <p>Free shipping on all orders over $99</p>
        </article>
      </section>
   

      <nav className="footer-nav">
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Necklace">Necklace</Link></li>
          <li><Link to="/Earring">Earring</Link></li>
          <li><Link to="/Ring">Ring</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
      <div class="logo">
        <p>Copyright @Mangata</p>
      </div>
    </footer>
    
  );
};

export default Footer;