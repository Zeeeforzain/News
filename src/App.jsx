import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Home';
import Bussiness from './Bussiness';
import Sports from './Sports';
import FreshNews from './FreshNews';
import Health from './Health';
import Interesting from './Interesting';
import Pakistan from './Pakistan';
import Showbiz from './Showbiz';
import ZeroPoint from './ZeroPoint';
import Science from './Science';
import International from './International';
import Special from './Special';
import ExtendedPage from './ExtendedPage'; // Import the ExtendedPage
import Title from './Components/Title';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Title />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/business" element={<Bussiness />} />
        <Route path="/fresh-news" element={<FreshNews />} />
        <Route path="/health" element={<Health />} />
        <Route path="/interesting" element={<Interesting />} />
        <Route path="/pakistan" element={<Pakistan />} />
        <Route path="/international" element={<International />} />
        <Route path="/showbiz" element={<Showbiz />} />
        <Route path="/special" element={<Special />} />
        <Route path="/zero-point" element={<ZeroPoint />} />
        <Route path="/science" element={<Science />} />
        <Route path="/details" element={<ExtendedPage />} /> {/* Route for ExtendedPage */}
      </Routes>
    </Router>
  );
}

export default App;
