import React, { useState, useEffect } from 'react';
import { Box, Modal, IconButton, Portal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Gallery = () => {
  const images = [
    '/basement1.jpg',
    '/bathroom1.jpg',
    '/bathroom2.jpg',
    '/bathroom3.jpg',
    '/bathroom4.jpg',
    '/floor1.jpg',
    '/floor2.jpg',
    '/floor3.jpg',
    '/floor4.jpg',
    '/kitchen1.jpg',
    '/painting1.jpg',
    '/picture1.jpg',
    '/picture2.HEIC',
    '/picture3.HEIC',
    '/picture4.HEIC',
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
            alt={`Gallery Image ${index}`}
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