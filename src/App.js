import Homepage from "./Homepage/Homepage"
import Necklace from "./Necklace"

import Earring from "./Earring"
import Ring from "./Ring"
import About from "./About"
import { Link, Routes, Route } from 'react-router-dom';



function App() {
  return (

   

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Necklace" element={<Necklace />} />
        <Route path="/Ring" element={<Ring/>} />
        <Route path="/Earring" element={<Earring/>} />
     
        <Route path="/about" element={<About />} />
      </Routes>
  );
}

export default App;
