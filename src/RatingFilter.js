import React, { useContext } from 'react';
import { FilterContext } from './FilterContext';

const RatingFilter = () => {
  const { filters, updateFilters } = useContext(FilterContext);

  const handleChange = (newRating) => {
    updateFilters('rating', parseFloat(newRating));
  };

  return (
    <div>
      <h4>Rating Filter</h4>
      <input
        type="range"
        min="0"
        max="5"
        step="0.5"
        value={filters.rating || 0}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div>Selected Rating: {filters.rating || 'None'}</div>
    </div>
  );
};

export default RatingFilter;
