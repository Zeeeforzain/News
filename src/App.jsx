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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Business" element={<Bussiness />} />
        <Route path="/FreshNews" element={<FreshNews />} />
        <Route path="/Health" element={<Health />} />
        <Route path="/Interesting" element={<Interesting />} />
        <Route path="/Pakistan" element={<Pakistan />} />
        <Route path="/International" element={<International />} />
        <Route path="/Showbiz" element={<Showbiz />} />
        <Route path="/Special" element={<Special />} />
        <Route path="/ZeroPoint" element={<ZeroPoint />} />
        <Route path="/Science" element={<Science />} />
        <Route path="/extended" element={<ExtendedPage />} /> {/* Route for ExtendedPage */}
      </Routes>
    </Router>
  );
}

export default App;
