import React, { useContext } from 'react';
import { FilterContext } from './FilterContext';
import { FaStar } from 'react-icons/fa'; // Ensure you have installed react-icons

const RatingFilter = () => {
  const { filters, updateFilters } = useContext(FilterContext);

  const handleChange = (newRating) => {
    updateFilters('rating', newRating);
  };

  return (
    <div>
      <h4>Rating Filter</h4>
      <div style={{ display: 'flex' }}>
        {[...Array(5)].map((_, index) => {
          index += 1;
          return (
            <button
              key={index}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
              onClick={() => handleChange(index)}
              aria-label={`Rate ${index}`}
            >
              <FaStar
                size={24}
                color={index <= filters.rating ? "#ffc107" : "#e4e5e9"}
              />
            </button>
          );
        })}
      </div>
      
    </div>
  );
};

export default RatingFilter;
