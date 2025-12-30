import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Box from '@mui/material/Box';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import KitchenRemodeling from './pages/KitchenRemodeling';
import BathroomRenovations from './pages/BathroomRenovations';
import BasementRenovations from './pages/BasementRenovations';
import Flooring from './pages/Flooring';
import Painting from './pages/Painting';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home page - no padding, hero fills viewport */}
        <Route path="/" element={<Home />} />
        {/* Other pages - with top padding for header */}
        <Route path="/gallery" element={<Box sx={{ paddingTop: '120px' }}><Gallery /></Box>} />
        <Route path="/about" element={<Box sx={{ paddingTop: '120px' }}><About /></Box>} />
        <Route path="/contact" element={<Box sx={{ paddingTop: '120px' }}><Contact /></Box>} />
        <Route path="/services/kitchen" element={<Box sx={{ paddingTop: '120px' }}><KitchenRemodeling /></Box>} />
        <Route path="/services/bathroom" element={<Box sx={{ paddingTop: '120px' }}><BathroomRenovations /></Box>} />
        <Route path="/services/basement" element={<Box sx={{ paddingTop: '120px' }}><BasementRenovations /></Box>} />
        <Route path="/services/flooring" element={<Box sx={{ paddingTop: '120px' }}><Flooring /></Box>} />
        <Route path="/services/painting" element={<Box sx={{ paddingTop: '120px' }}><Painting /></Box>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
