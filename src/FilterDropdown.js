// FilterDropdown.js
import React from 'react';
import PriceFilter from './PriceFilter';
import MaterialFilter from './MaterialFilter';

const FilterDropdown = () => {
  const [selectedFilter, setSelectedFilter] = React.useState('');

  return (
    <div>
      <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
        <option value="">Select a Filter</option>
        <option value="price">Price</option>
        <option value="material">Material</option>
      </select>

      {selectedFilter === 'price' && <PriceFilter />}
      {selectedFilter === 'material' && <MaterialFilter />}
    </div>
  );
};

export default FilterDropdown;
