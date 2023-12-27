import React, { useState, createContext } from 'react';
// to create a ContextAPI you first need to import the tools needed to create it. 
// import React , {useState, createContext}
// import useState to get access to a memory location managed by state that will store and update your value across rerenders
// import createContext 
export const FilterContext = createContext();
//
export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    rating: null,
    price: { min: null, max: null },
    necklaceSize: null,
    material: {
      gold: true,
      
      silver: true
    }
    
  });
  const [selectedOption, setSelectedOption] = useState('option1');
  const [selectedProduct, setSelectedProduct] = useState(null);
  //you want to create a function that will update the filters without errasing all the other values in the state
  const updateFilters = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value
    }));
  };

  return (
    <FilterContext.Provider value={{ filters, updateFilters,selectedOption, setSelectedOption ,selectedProduct, setSelectedProduct }}>
      {children}
    </FilterContext.Provider>
  );
};
