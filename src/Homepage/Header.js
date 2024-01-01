import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../SearchContext' //
import HeaderImage from "../image/Asset 1@3x.png";
import ShoppingCartIcon from '../image/ShoppingCart.webp';
import ProfileIcon from '../image/profile-icon.jpg';

function Header() {
  const { setSearchTerm, searchTerm } = useContext(SearchContext);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <div className="topbanner"></div>
      <header>
        <Link to="/">
          <img src={HeaderImage} alt="Header" width="200" height="auto" />
        </Link>
        <div className="icon-container">
          <Link to="/ShoppingCart">
            <img src={ShoppingCartIcon} alt="Shopping Cart" className="icon" />
          </Link>
          <Link to="/MyProfile">
            <img src={ProfileIcon} alt="Profile" className="icon" />
          </Link>
        </div>
      </header>
      <div className="searchb">
        <div className="search-container">
          <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search..." />
          <button className="search-button">Search</button>
        </div>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Necklace">Necklace</Link></li>
          <li><Link to="/Earring">Earring</Link></li>
          <li><Link to="/Ring">Ring</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav> 
    </div>
  );
}

export default Header;
