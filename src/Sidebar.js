import React from 'react';
import RatingFilter from './RatingFilter';
import PriceFilter from './PriceFilter';
import NecklaceSizeFilter from './NecklaceSizeFilter';
import MaterialFilter from './MaterialFilter';

const Sidebar = () => {
    return (
      <div className="sideBarContainer">
        <RatingFilter />
        <PriceFilter />
       
        <MaterialFilter />
        {/* Other sidebar content */}
      </div>
    );
  };
  export default Sidebar;