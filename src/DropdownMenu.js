import React, { useState, useContext } from 'react';
import './cssFiles/shop.css';
import {FilterContext} from './FilterContext'
function DropdownMenu() {
  const { selectedOption, setSelectedOption }=useContext(FilterContext)


  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <select value={selectedOption} onChange={handleChange} className='DropdownMenu'>
      <option value="option1">Price &#9650; </option>
      <option value="option2">Price &#9660;</option>
     
    </select>
  );
}

export default DropdownMenu;