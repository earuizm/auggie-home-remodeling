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
      <Box sx={{ paddingTop: '150px' }}>
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
      </Box>
      <Footer />
    </Router>
  );
}

export default App;
