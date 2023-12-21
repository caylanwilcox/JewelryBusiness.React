import React, { useContext } from 'react';
import { FilterContext } from './FilterContext';

const PriceFilter = () => {
  const { filters, updateFilters } = useContext(FilterContext);

  const handlePriceChange = (min, max) => {
    updateFilters('price', { min, max });
  };

  return (
    <div>
      <h4>Price Filter</h4>
      <input
        type="number"
        step='500'
        value={filters.price.min || ''}
        onChange={(e) => handlePriceChange(e.target.value, filters.price.max)}
        placeholder="Min Price"
      />
      <input
        type="number"
        step='500'
        value={filters.price.max || ''}
        onChange={(e) => handlePriceChange(filters.price.min, e.target.value)}
        placeholder="Max Price"
      />
    </div>
  );
};

export default PriceFilter;
