import Homepage from "./Homepage/Homepage"
import Necklace from "./Necklace"
import MyProfile from "./MyProfile"
import Earring from "./Earring"
import Ring from "./Ring"
import About from "./About"
import ShoppingCart from './ShoppingCart';
import Contact from './Contact'
import {Routes, Route } from 'react-router-dom';

// In Necklace.js
import Sidebar from './Sidebar'; // Adjust the path as necessary

import { FilterProvider } from './FilterContext';

function App() {
  return (

   
    <FilterProvider>
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/MyProfile" element={<MyProfile/>} />
        <Route path="/Necklace" element={<Necklace />} />
        <Route path="/Ring" element={<Ring/>} />
        <Route path="/Earring" element={<Earring/>} />
        <Route path="/ShoppingCart" element={<ShoppingCart/>} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      </FilterProvider>
  );
}

export default App;
