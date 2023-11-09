import HeaderImage from "../images/Asset 1@3x.png"
import ShoppingCartIcon from '../images/ShoppingCart.webp';
import ProfileIcon from '../images/profile-icon.jpg';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div>
       <div className="topbanner"></div>
      <header>
      <Link to="/">
        <img src={HeaderImage} alt="Header Image" width="200" height="auto" />
        </Link>
        <div className="icon-container">
          <Link to="/ShoppingCart">
          <img src={ShoppingCartIcon} alt="Checkout Icon" className="icon" />
          </Link>
          <Link to="/MyProfile">
          <img src={ProfileIcon} alt="Login Icon"  className="icon" />
          </Link>
        </div>
      </header>
        
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
    )
}
export default Header;