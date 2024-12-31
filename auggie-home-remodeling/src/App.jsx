import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import KitchenRemodeling from './pages/KitchenRemodeling';
import BathroomRenovations from './pages/BathroomRenovations';
import BasementRenovations from './pages/BasementRenovations';
import Flooring from './pages/Flooring';
import Painting from './pages/Painting';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/kitchen" element={<KitchenRemodeling />} />
        <Route path="/services/bathroom" element={<BathroomRenovations />} />
        <Route path="/services/basement" element={<BasementRenovations />} />
        <Route path="/services/flooring" element={<Flooring />} />
        <Route path="/services/painting" element={<Painting />} />
      </Routes>
    </Router>
  );
}

export default App;
