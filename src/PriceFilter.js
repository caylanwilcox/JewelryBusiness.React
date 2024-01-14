import React, { useContext } from 'react';
import { FilterContext } from './FilterContext';
import './cssFiles/sidebar.css';

const PriceFilter = () => {
  const { filters, updateFilters } = useContext(FilterContext);

  const handlePriceChange = (min, max) => {
    updateFilters('price', { min: min || undefined, max: max || undefined });
  };

  return (
    <div className="filter-section">
      <h4 className='filter-title'>Price</h4>
      <input
        className="filter-input"
        type="number"
        step='500'
      
        value={filters.price.min || ''}
        onChange={(e) => handlePriceChange(e.target.value, filters.price.max)}
        placeholder="Min Price"
      />
      <input
        className="filter-input"
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
