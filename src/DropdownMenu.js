import React, { useState, useContext } from 'react';
import './cssFiles/shop.css';
import {FilterContext} from './FilterContext'
function DropdownMenu({filteredItems}) {
  const { selectedOption, setSelectedOption }=useContext(FilterContext)
const countedResults=filteredItems.length;
console.log(countedResults)
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className='dropBox'>
      <span>{countedResults} Results |</span>
      <span> Sort By:</span>
    <select value={selectedOption} onChange={handleChange} className='DropdownMenu'>
      <option value="option1">Price low to high  &#9650; </option>
      <option value="option2">Price high to low   &#9660;</option>
     
    </select>
   
    </div>
  );
}

export default DropdownMenu;