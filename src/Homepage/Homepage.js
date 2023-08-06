import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function Homepage(){
    return (
        <div>
          <Header />
          <nav className="shipping"> Free Shipping on Orders $99 </nav>
          <MainContent />
          <Footer />
        </div>
      );
    };

export default Homepage;