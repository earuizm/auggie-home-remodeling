import React, { useState, useEffect } from 'react';
import { Box, Typography, Fade } from '@mui/material';
import { CheckCircle } from '@mui/icons-material'; // Check icon for features

const BasementRenovations = () => {
  const images = ['/basement1.jpg']; // images for the carousel
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
              alt={`Basement Renovation ${index}`}
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
          Elevate Your Basement into a Livable Masterpiece
        </Typography>

        <Typography variant="body1" sx={{
          color: '#666', fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.7, fontFamily: "'Georgia', serif", fontStyle: 'italic'
        }}>
          At Auggie's Home Remodeling, we specialize in transforming basements into functional, stylish, and inviting spaces. Whether you're envisioning a cozy family room, a state-of-the-art home theater, or an additional living area, we bring your basement dreams to life with precision and care.
        </Typography>

        <Typography variant="body1" sx={{
          color: '#444', fontSize: { xs: '16px', md: '18px' }, fontWeight: 'bold', marginTop: '10px'
        }}>
          <strong>Exceptional Renovations, From Start to Finish</strong>
        </Typography>

        <Typography variant="body1" sx={{
          color: '#666', fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.7
        }}>
          We make basement renovations effortless, handling everything from design to the final coat of paint. Let us turn your unused space into the heart of your home.
        </Typography>

        <Typography variant="body1" sx={{
          color: '#666', fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.7
        }}>
          Why choose us for your basement remodel? It's our unwavering commitment to:
        </Typography>

        <Box sx={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <CheckCircle sx={{ color: '#4CAF50', transform: 'translateY(-2px)' }} />
            <Typography variant="body1" sx={{ color: '#666', fontSize: { xs: '14px', md: '16px' } }}>
              <strong>Innovative Design</strong>: From open-concept layouts to specialized rooms, we design basements that enhance your lifestyle.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <CheckCircle sx={{ color: '#4CAF50', transform: 'translateY(-2px)' }} />
            <Typography variant="body1" sx={{ color: '#666', fontSize: { xs: '14px', md: '16px' } }}>
              <strong>Durable Finishes</strong>: We use only the highest-quality materials to ensure your basement stands the test of time.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <CheckCircle sx={{ color: '#4CAF50', transform: 'translateY(-2px)' }} />
            <Typography variant="body1" sx={{ color: '#666', fontSize: { xs: '14px', md: '16px' } }}>
              <strong>Tailored Solutions</strong>: Each project is uniquely crafted to suit your vision, style, and functional needs.
            </Typography>
          </Box>
        </Box>

        <Typography variant="body1" sx={{
          color: '#666', fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.7
        }}>
          Let Auggie's Home Remodeling redefine your basement. Together, we can create a space that seamlessly blends comfort, utility, and elegance, making every square foot of your home count.
        </Typography>
      </Box>
    </Box>
  );
};

export default BasementRenovations;
