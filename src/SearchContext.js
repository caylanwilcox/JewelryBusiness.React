import React, { useState, createContext, useEffect } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch the products data from the JSON file
    fetch('/products.json') // URL is relative to the public directory
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  // Function to perform search
  const performSearch = (term) => {
    if (term) {
      const lowerCaseTerm = term.toLowerCase();
      const filteredResults = products.filter(product =>
        product.name.toLowerCase().includes(lowerCaseTerm) ||
        (product.description && product.description.toLowerCase().includes(lowerCaseTerm))
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    performSearch(searchTerm);
  }, [searchTerm, products]);

  return (
    <SearchContext.Provider value={{ products, setProducts, searchTerm, setSearchTerm, searchResults, setSearchResults, performSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
