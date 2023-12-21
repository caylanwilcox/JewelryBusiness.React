import React, { useContext } from 'react';
import { FilterContext } from './FilterContext';

const NecklaceSizeFilter = () => {
  const { filters, updateFilters } = useContext(FilterContext);

  const handleChange = (newSize) => {
    updateFilters('necklaceSize', newSize);
  };

  return (
    <div>
      <h4>Necklace Size Filter</h4>
      <input
        type="text"
        value={filters.necklaceSize || ''}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Necklace Size"
      />
    </div>
  );
};

export default NecklaceSizeFilter;
