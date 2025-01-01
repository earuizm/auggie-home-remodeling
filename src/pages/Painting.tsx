import React, { useState, useEffect } from 'react';
import { Box, Typography, Fade } from '@mui/material';
import { CheckCircle } from '@mui/icons-material'; // Check icon for features

const Painting = () => {
  const images = ['/painting1.jpg'];
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
      <Box sx={{ position: 'relative', width: '100%', height: { xs: '300px', md: '600px' }, overflow: 'hidden' }}>
        {images.map((image, index) => (
          <Fade in={currentImage === index} timeout={1000} key={index}>
            <Box
              component="img"
              src={image}
              alt={`Painting Project ${index}`}
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'contain', 
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
          Bring Vibrancy to Your Walls
        </Typography>

        <Typography variant="body1" sx={{
          color: '#666', fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.7, fontFamily: "'Georgia', serif", fontStyle: 'italic'
        }}>
          At Auggie's Home Remodeling, we understand the power of a fresh coat of paint. Whether it’s a bold accent wall or a full-home refresh, our painting services transform your space into one that feels brand new and uniquely yours.
        </Typography>

        <Typography variant="body1" sx={{
          color: '#444', fontSize: { xs: '16px', md: '18px' }, fontWeight: 'bold', marginTop: '10px'
        }}>
          <strong>Precision Painting, Every Step of the Way</strong>
        </Typography>

        <Typography variant="body1" sx={{
          color: '#666', fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.7
        }}>
          Our skilled painters handle every detail, from surface preparation to the final brushstroke. With top-quality paints and expert techniques, we deliver stunning results that last for years to come.
        </Typography>

        <Typography variant="body1" sx={{
          color: '#666', fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.7
        }}>
          Why choose us for your painting needs? Here's what makes us stand out:
        </Typography>

        <Box sx={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <CheckCircle sx={{ color: '#4CAF50', transform: 'translateY(-2px)' }} />
            <Typography variant="body1" sx={{ color: '#666', fontSize: { xs: '14px', md: '16px' } }}>
              <strong>High-Quality Materials</strong>: We use premium paints and finishes that enhance your space and ensure long-lasting beauty.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <CheckCircle sx={{ color: '#4CAF50', transform: 'translateY(-2px)' }} />
            <Typography variant="body1" sx={{ color: '#666', fontSize: { xs: '14px', md: '16px' } }}>
              <strong>Attention to Detail</strong>: From perfect edges to smooth coverage, we make sure every inch is flawless.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <CheckCircle sx={{ color: '#4CAF50', transform: 'translateY(-11px)' }} />
            <Typography variant="body1" sx={{ color: '#666', fontSize: { xs: '14px', md: '16px' } }}>
              <strong>Color Expertise</strong>: Need help choosing colors? We guide you through the process to find shades that complement your style.
            </Typography>
          </Box>
        </Box>

        <Typography variant="body1" sx={{
          color: '#666', fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.7
        }}>
          At Auggie's Home Remodeling, our painting services are designed to add vibrancy, elegance, and value to your home. Let us bring your walls to life with our expertise and care.
        </Typography>
      </Box>
    </Box>
  );
};

export default Painting;
