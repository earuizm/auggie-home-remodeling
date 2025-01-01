import React, { useState, useEffect } from 'react';
import { Box, Typography, Fade } from '@mui/material';
import { CheckCircle } from '@mui/icons-material'; // Check icon for features

const KitchenRemodeling = () => {
  const images = ['/picture4.HEIC', '/picture8.jpg', '/picture9.jpg', '/kitchen1.jpg'];
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
              alt={`Kitchen Remodel ${index}`}
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
        border: '1px solid #ddd', // Light border for additional definition
      }}>
        <Typography variant="h4" sx={{
          fontWeight: 'bold', fontSize: { xs: '28px', md: '36px' }, color: '#333', marginBottom: '20px', fontFamily: "'Roboto', sans-serif"
        }}>
          Transform Your Kitchen with Excellence
        </Typography>

        <Typography variant="body1" sx={{
          color: '#666', fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.7, fontFamily: "'Georgia', serif", fontStyle: 'italic'
        }}>
          At Auggie's Home Remodeling, we believe that your kitchen should be more than just a space – it should be a place that inspires and enhances your everyday life. Our team is committed to delivering exceptional results, turning your kitchen into a stunning masterpiece that reflects both your style and functionality needs.
        </Typography>

        <Typography variant="body1" sx={{
          color: '#444', fontSize: { xs: '16px', md: '18px' }, fontWeight: 'bold', marginTop: '10px'
        }}>
          <strong>Flawless Remodeling, Every Step of the Way</strong>
        </Typography>

        <Typography variant="body1" sx={{
          color: '#666', fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.7
        }}>
          We understand that kitchen remodeling can feel overwhelming, but we make the process seamless and stress-free. From the initial design to the final installation, our team ensures that every detail is executed to perfection.
        </Typography>

        <Typography variant="body1" sx={{
          color: '#666', fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.7
        }}>
          What sets us apart? It's our unwavering dedication to:
        </Typography>

        <Box sx={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <CheckCircle sx={{ color: '#4CAF50', transform: 'translateY(-14px)' }} />
            <Typography variant="body1" sx={{ color: '#666', fontSize: { xs: '14px', md: '16px' } }}>
              <strong>Quality Craftsmanship</strong>: We take pride in delivering work that stands the test of time. Our skilled team of experts ensures that every cabinet, countertop, and fixture is installed with precision and care.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <CheckCircle sx={{ color: '#4CAF50', transform: 'translateY(-14px)' }} />
            <Typography variant="body1" sx={{ color: '#666', fontSize: { xs: '14px', md: '16px' } }}>
              <strong>Clear Communication</strong>: We believe in keeping you informed at every stage of the project, ensuring there are no surprises. From timelines to design choices, you'll always know what to expect.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <CheckCircle sx={{ color: '#4CAF50', transform: 'translateY(-14px)' }} />
            <Typography variant="body1" sx={{ color: '#666', fontSize: { xs: '14px', md: '16px' } }}>
              <strong>Attention to Detail</strong>: Whether it's a minor detail or a major design element, we focus on every aspect of your kitchen to make sure the final result exceeds your expectations.
            </Typography>
          </Box>
        </Box>

        <Typography variant="body1" sx={{
          color: '#666', fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.7
        }}>
          At Auggie's Home Remodeling, we don't just remodel kitchens – we create spaces that inspire and bring joy to every meal, gathering, and moment spent in them. Choose us to bring your kitchen vision to life with expertise, care, and a flawless result.
        </Typography>
      </Box>
    </Box>
  );
};

export default KitchenRemodeling;
