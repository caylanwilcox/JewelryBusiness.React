import React, { useContext } from 'react';
import { SearchContext } from './SearchProvider';
import SearchIcon from './path-to-your-search-icon.svg'; // Update the path as necessary
import { useHistory } from 'react-router-dom';
const SearchBar = () => {
    const history = useHistory();
    const { searchTerm, setSearchTerm, performSearch } = useContext(SearchContext);
  
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleSearchClick = () => {
        performSearch(searchTerm);
        history.push('/search');
      };

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search..."
        autoFocus
      />
      <button onClick={handleSearchChange} className="search-button">
        <img src={SearchIcon} alt="Search" className="icon" />
      </button>
    </div>
  );
};

export default SearchBar;