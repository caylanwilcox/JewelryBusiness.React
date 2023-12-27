import React, { useState } from 'react';
import RatingFilter from './RatingFilter';
import PriceFilter from './PriceFilter';

import MaterialFilter from './MaterialFilter';

const Sidebar = () => {
  const [isFilterVisible, setIsVisible]=useState(false)
  function toggleVisibility(){
    setIsVisible(!isFilterVisible)
  }
  return (
    <div className="sideBarContainer">
      <button onClick={toggleVisibility}>
        {isFilterVisible ? 'Hide Filters' : 'Show Filters'}
      </button>

      {isFilterVisible && (
        <>
          <RatingFilter />
          <PriceFilter />
          <MaterialFilter />
          {/* Other sidebar content */}
        </>
      )}
    </div>
  );
};

export default Sidebar;
