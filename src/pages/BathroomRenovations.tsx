import React, { useState, useEffect } from 'react';
import { Box, Typography, Fade } from '@mui/material';
import { CheckCircle } from '@mui/icons-material'; // Check icon for features

const BathroomRenovations = () => {
  const images = ['/bathroom1.jpg', '/bathroom2.jpg', '/bathroom3.jpg', '/bathroom4.jpg']; // images for the carousel
  const [currentImage, setCurrentImage] = useState(0);

  // Function to change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // 3 seconds for each image

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Scroll to top whenever this component is rendered
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ width: '100%', padding: '40px 0', backgroundColor: '#f4f4f4' }}>
      {/* Image Carousel */}
      <Box sx={{ position: 'relative', width: '100%', height: { xs: '400px', md: '800px' }, overflow: 'hidden' }}>
        {images.map((image, index) => (
          <Fade in={currentImage === index} timeout={1000} key={index}>
            <Box
              component="img"
              src={image}
              alt={`Bathroom Renovation ${index}`}
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                maxHeight: '100vh',
                transition: 'opacity 1s ease-in-out',
              }}
            />
          </Fade>
        ))}
      </Box>

      {/* Elevated Text Section */}
      <Box sx={{
        marginTop: '30px',
        textAlign: 'center',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
        padding: { xs: '20px', md: '100px' },
        paddingTop: '100px',
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(240, 240, 240, 0.8))',
        border: '1px solid #ddd',
      }}>
        <Typography variant="h4" sx={{
          fontWeight: 'bold', fontSize: { xs: '28px', md: '36px' }, color: '#333', marginBottom: '20px', fontFamily: "'Roboto', sans-serif"
        }}>
          Redefine Luxury in Your Bathroom
        </Typography>

        <Typography variant="body1" sx={{
          color: '#666', fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.7, fontFamily: "'Georgia', serif", fontStyle: 'italic'
        }}>
          At Auggie's Home Remodeling, we believe that your bathroom should be more than just functional – it should be a personal retreat. Our team specializes in creating stunning bathroom spaces that combine elegance, comfort, and practicality to redefine your everyday routine.
        </Typography>

        <Typography variant="body1" sx={{
          color: '#444', fontSize: { xs: '16px', md: '18px' }, fontWeight: 'bold', marginTop: '10px'
        }}>
          <strong>Seamless Bathroom Transformations</strong>
        </Typography>

        <Typography variant="body1" sx={{
          color: '#666', fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.7
        }}>
          We simplify the renovation process, offering tailored solutions that turn your vision into reality. From modern spa-like designs to timeless classics, we deliver perfection at every step.
        </Typography>

        <Typography variant="body1" sx={{
          color: '#666', fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.7
        }}>
          Here's why homeowners trust us with their bathroom renovations:
        </Typography>

        <Box sx={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <CheckCircle sx={{ color: '#4CAF50', transform: 'translateY(-2px)' }} />
            <Typography variant="body1" sx={{ color: '#666', fontSize: { xs: '14px', md: '16px' } }}>
              <strong>Elegant Design</strong>: We create custom designs that reflect your personal style, blending aesthetics with functionality.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <CheckCircle sx={{ color: '#4CAF50', transform: 'translateY(-9px)' }} />
            <Typography variant="body1" sx={{ color: '#666', fontSize: { xs: '14px', md: '16px' } }}>
              <strong>Premium Materials</strong>: From luxurious tiles to state-of-the-art fixtures, we use only the best to ensure lasting beauty and durability.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <CheckCircle sx={{ color: '#4CAF50', transform: 'translateY(-9px)' }} />
            <Typography variant="body1" sx={{ color: '#666', fontSize: { xs: '14px', md: '16px' } }}>
              <strong>Flawless Execution</strong>: Our skilled team ensures that every detail is executed to perfection, giving you a bathroom that exceeds your expectations.
            </Typography>
          </Box>
        </Box>

        <Typography variant="body1" sx={{
          color: '#666', fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.7
        }}>
          At Auggie's Home Remodeling, we transform bathrooms into spaces that inspire relaxation and enhance your everyday life. Let us bring your dream bathroom to life with expertise, elegance, and care.
        </Typography>
      </Box>
    </Box>
  );
};

export default BathroomRenovations;
