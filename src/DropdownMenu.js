import React, { useState } from 'react';
import './cssFiles/shop.css';
function DropdownMenu() {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <select value={selectedOption} onChange={handleChange} className='DropdownMenu'>
      <option value="option1">Price &#9650; </option>
      <option value="option2">Price &#9660;</option>
      <option value="option3">Free Shipping</option>
    </select>
  );
}

export default DropdownMenu;