import React from 'react';
import PriceFilter from './PriceFilter';
import MaterialFilter from './MaterialFilter';
import './cssFiles/sidebar.css'; // Ensure this file contains the necessary styles

const Sidebar = () => {
  return (
    <div className="sideBarContainer">
   <h2 className='filtermaintitle'>Filter</h2>
      <PriceFilter />
      <MaterialFilter />
      {/* Other sidebar content */}
    </div>
  );
};

export default Sidebar;
