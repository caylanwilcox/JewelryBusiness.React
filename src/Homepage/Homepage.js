import React, { useContext } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import { SearchContext } from '../SearchContext'

function Homepage() {
  const { setSearchTerm } = useContext(SearchContext);

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} />
      <nav className="shipping">Free Shipping on Orders $99</nav>
      <MainContent />
      <Footer />
    </div>
  );
}

export default Homepage;
