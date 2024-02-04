import React, { useContext, useState,useEffect  } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../SearchContext';
import HeaderImage from "../image/Asset 1@3x.png";
import ShoppingCartIcon from '../image/ShoppingCart.webp';
import ProfileIcon from '../image/profile-icon.jpg';
import SearchIcon from '../image/search-Icon.png';
import { CartContext } from '../Cart.Context';
import { useNavigate } from 'react-router-dom';
import SearchResultsPage from '../SearchResultsPage';
import HamburgerMenu from '../HamburgerMenu';
function Header() {
  const { setSearchTerm, searchTerm, performSearch } = useContext(SearchContext);
  const [showSearch, setShowSearch] = useState(false);
  const { cartItems, setIsDirectCheckout } = useContext(CartContext);
  const navigate = useNavigate();

  // State to manage the visibility of the hamburger menu
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  // Effect hook to listen for window resize events
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    performSearch(searchTerm);
    navigate('/search'); // Navigate to the search results page
  };
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  const handleCheckout = () => {

    setIsDirectCheckout(false);

  
  };
  return (
    <div>
    
      <div className="topbanner"></div>
      <header>
        <Link to="/">
          <img src={HeaderImage} alt="Header" width="160" height="auto" />
        </Link>
        <div className="icon-container">
         
          <Link to="/ShoppingCart">
            <img src={ShoppingCartIcon} alt="Shopping Cart" className="icon" />
            {cartItems && cartItems.length > 0 && (
  <span className="cart-badge" onClick={handleCheckout}>
    {cartItems.length}
  </span>
)}
          </Link>
          <Link to="/MyProfile">
           {!isMobile &&  <img src={ProfileIcon} alt="Profile" className="icon" />}
          </Link>
        </div>
     
      </header>
      {isMobile && <HamburgerMenu />}
      {!isMobile && (
      <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Necklace">Necklace</Link></li>
        <li><Link to="/Earring">Earring</Link></li>
        <li><Link to="/Ring">Ring</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        {/*
        <button onClick={toggleSearch} className="search-icon-button">
          <img src={SearchIcon} alt="Search" className="icon" />
        </button>
          */}
      </ul>
    </nav> 
      )}
      
      {/*
      {showSearch && (
          <div className="search-container">
            <input
           className="search-input"
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              autoFocus
            />
           <button className="search-button" onClick={handleSearchClick}>
        Search
      </button>
          </div>
        )}
     */}
    </div>
     
  );
  
}

export default Header;