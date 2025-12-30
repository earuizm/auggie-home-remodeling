import React, { useState, useEffect } from 'react';
import { Box, Modal, IconButton, Portal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SEO from '../components/SEO';

const Gallery = () => {
  const images = [
    '/basement1.webp',
    '/bathroom1.webp',
    '/bathroom2.webp',
    '/bathroom3.webp',
    '/bathroom4.webp',
    '/floor1.webp',
    '/floor2.webp',
    '/floor3.webp',
    '/floor4.webp',
    '/kitchen1.webp',
    '/painting1.webp',
    '/picture1.webp',
    '/picture2.webp',
    '/picture3.webp',
    '/picture4.webp',
    '/picture5.webp',
    '/picture6.webp',
    '/picture7.webp',
    '/picture8.webp',
    '/picture9.webp',
    '/picture10.webp',
    '/picture11.webp',
    '/picture12.webp',
    '/picture13.webp'

  ];

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedImage('');
    setOpen(false);
  };

  // Scroll to top whenever this component is rendered
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f4f4f4' }}>
      <SEO
        title="Project Gallery | Home Remodeling Chicago"
        description="Browse our portfolio of kitchen, bathroom, and basement renovations in Chicago. See the quality craftsmanship of Auggie's Home Remodeling."
        canonical="https://www.auggieshomeremodeling.com/gallery"
      />
      <Typography variant="h1" sx={{ textAlign: 'center', mb: 4, color: '#333', fontSize: { xs: '2rem', md: '3rem' } }}>
        Our Project Gallery
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' },
          gap: '10px',
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image}
            alt={`Home Remodeling Project Chicago Gallery ${index + 1}`}
            onClick={() => handleOpen(image)}
            sx={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              cursor: 'pointer',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
        ))}
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          position: 'fixed',
          zIndex: 9999, // Much higher z-index
        }}
      >
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: { xs: '90%', sm: '80%', md: '70%' },
              maxHeight: '90vh',
              bgcolor: 'white',
              borderRadius: '12px',
              p: 2,
              outline: 'none',
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                bgcolor: 'white',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.8)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
            <Box
              component="img"
              src={selectedImage}
              alt="Enlarged"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: 'calc(90vh - 48px)',
                borderRadius: '8px',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Gallery;