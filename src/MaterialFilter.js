import React, { useContext } from 'react';
import { FilterContext } from './FilterContext';
import './cssFiles/sidebar.css';

const MaterialFilter = () => {
  const { filters, updateFilters } = useContext(FilterContext);

  const handleMaterialChange = (material) => {
    updateFilters('material', {
      ...filters.material,
      [material]: !filters.material[material]
    });
  };

  return (
    <div className="filter-section">
      <h5 className='filter-title'>Material</h5>
      <label className="customcheckbox">
        <input
          type="checkbox"
          checked={filters.material.gold}
          onChange={() => handleMaterialChange('gold')}
        />
        <span className="checkmark"></span>
        Gold
      </label>
    
      <label className="customcheckbox">
        <input
          type="checkbox"
          checked={filters.material.silver}
          onChange={() => handleMaterialChange('silver')}
        />
        <span className="checkmark"></span>
        Silver
      </label>
    </div>
  );
};

export default MaterialFilter;
