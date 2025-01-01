import React, { useState, useEffect } from 'react';
import { Box, Typography, Fade } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const Flooring = () => {
  const images = ['/floor1.jpg', '/floor2.jpg', '/floor3.jpg', '/floor4.jpg'];
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
              alt={`Flooring Project ${index}`}
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
        paddingTop: '100px', // Added padding at the top
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
          Elevate Your Home with Expert Flooring Solutions
        </Typography>

        <Typography variant="body1" sx={{
          color: '#666', fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.7, fontFamily: "'Georgia', serif", fontStyle: 'italic'
        }}>
          At Auggie's Home Remodeling, we specialize in transforming your floors into a stunning foundation for your living spaces. Our expert team delivers flawless flooring solutions tailored to your style and needs, ensuring both beauty and durability.
        </Typography>

        <Typography variant="body1" sx={{
          color: '#444', fontSize: { xs: '16px', md: '18px' }, fontWeight: 'bold', marginTop: '10px'
        }}>
          <strong>Precision and Quality, Every Step of the Way</strong>
        </Typography>

        <Typography variant="body1" sx={{
          color: '#666', fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.7
        }}>
          Whether it's hardwood, laminate, tile, or carpet, we ensure your flooring project is seamless and stress-free. From selection to installation, our focus is on excellence.
        </Typography>

        <Typography variant="body1" sx={{
          color: '#666', fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.7
        }}>
          Our commitment to outstanding flooring includes:
        </Typography>

        <Box sx={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <CheckCircle sx={{ color: '#4CAF50', transform: 'translateY(-4px)' }} />
            <Typography variant="body1" sx={{ color: '#666', fontSize: { xs: '14px', md: '16px' } }}>
              <strong>Unmatched Craftsmanship</strong>: Our skilled team ensures precise installation, delivering flawless results that last for years.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <CheckCircle sx={{ color: '#4CAF50', transform: 'translateY(-4px)' }} />
            <Typography variant="body1" sx={{ color: '#666', fontSize: { xs: '14px', md: '16px' } }}>
              <strong>Premium Materials</strong>: We work with the finest flooring materials, combining style with durability.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <CheckCircle sx={{ color: '#4CAF50', transform: 'translateY(-4px)' }} />
            <Typography variant="body1" sx={{ color: '#666', fontSize: { xs: '14px', md: '16px' } }}>
              <strong>Customer Satisfaction</strong>: Your vision guides our work. We prioritize clear communication and exceptional service.
            </Typography>
          </Box>
        </Box>

        <Typography variant="body1" sx={{
          color: '#666', fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.7
        }}>
          Let Auggie's Home Remodeling lay the perfect foundation for your home with expert flooring services that combine style, functionality, and quality. Experience the difference of professional craftsmanship with us.
        </Typography>
      </Box>
    </Box>
  );
};

export default Flooring;
