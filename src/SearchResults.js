import React, { useContext } from 'react';
import { SearchContext } from './SearchContext';
import ProductCard from './ProductCard';

const SearchResults = () => {
  const { searchResults } = useContext(SearchContext);

 
  return (
    <div className="search-results">
      {searchResults.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SearchResults;