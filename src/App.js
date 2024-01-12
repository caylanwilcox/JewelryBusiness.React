import Homepage from "./Homepage/Homepage"
import Necklace from "./Necklace"
import MyProfile from "./MyProfile"
import Earring from "./Earring"
import Ring from "./Ring"
import About from "./About"
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout'
import Contact from './Contact'
import { Routes, Route } from 'react-router-dom';
import {React} from 'react';
// In Necklace.js

import { SearchProvider} from './SearchContext';
import { FilterProvider } from './FilterContext';
import { CartProvider } from './Cart.Context';
import ItemPage from "./ItemPage"
import PaymentPage from "./PaymentPage"

function App() {

  return (

    <SearchProvider >
      <FilterProvider>
        <CartProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/Necklace" element={<Necklace />} />
          <Route path="/Ring" element={<Ring />} />
          <Route path="/Earring" element={<Earring />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ItemPage/:id" element={<ItemPage/>} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Payment" element={<PaymentPage />} />
        </Routes>
        </CartProvider>
      </FilterProvider>
    </SearchProvider >
  );
}

export default App;
