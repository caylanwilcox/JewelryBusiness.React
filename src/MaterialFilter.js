//import useContext which is the react hook and import FilterContext which gives you access to props in the context
import React, { useContext } from 'react';
import { FilterContext } from './FilterContext';

//create component and import props underneath
const MaterialFilter = () => {
  const { filters, updateFilters } = useContext(FilterContext);

  const handleMaterialChange = (material) => {
    updateFilters('material', {
      ...filters.material,
      [material]: !filters.material[material]
    });
  };

  return (
    <div>
      <h4>Material Filter</h4>
      <label>
        <input
          type="checkbox"
          checked={filters.material.gold}
          onChange={() => handleMaterialChange('gold')}
        />
        Gold
      </label>
    
      <label>
        <input
          type="checkbox"
          checked={filters.material.silver}
          onChange={() => handleMaterialChange('silver')}
        />
        Silver
      </label>
    </div>
  );
};

export default MaterialFilter;
