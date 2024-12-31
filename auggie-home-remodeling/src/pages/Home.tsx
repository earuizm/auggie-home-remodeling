import React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';

const Home = () => {
  return (
    <>
      <Box sx={{ width: '100%', position: 'relative' }}>
        {/* Header */}
        <Box sx={{ height: '150px', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1100 }}>
          {/* Your existing Header component here */}
        </Box>

        {/* Main content */}
        <Box sx={{ marginTop: '150px', width: '100%' }}>
          <Box sx={{ position: 'relative', width: '100%', height: '700px', overflow: 'hidden' }}>
            {/* Image background */}
            <img
              src="picture5.HEIC"
              alt="Home Image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: -1,
              }}
            />

            {/* Text on top of the image */}
            <Box sx={{ position: 'absolute', top: '20%', left: '5%', zIndex: 1 }}>
              <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                Your Dream Home Awaits
              </Typography>
              <Typography variant="h6" sx={{ color: 'white', marginTop: '10px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                Let us help you transform your space with our expert remodeling services.
              </Typography>
            </Box>

            {/* Schedule Consultation Form */}
            <Box sx={{
              position: 'absolute',
              top: '20%',
              right: '5%',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '20px',
              borderRadius: '8px',
              zIndex: 1,
              width: '300px',
            }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Schedule a Consultation</Typography>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Message"
                fullWidth
                multiline
                rows={4}
                margin="normal"
              />
              <Button variant="contained" fullWidth sx={{ marginTop: '10px' }}>Submit</Button>
            </Box>
          </Box>

          {/* Responsive Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px',
              marginTop: '100px', // Add space between the top and content
            }}
          >
            {/* Image on the left */}
            <Box sx={{ width: { xs: '100%', sm: '40%' }, paddingRight: { sm: '16px' } }}>
              <img
                src="picture7.HEIC"
                alt="Vertical Image"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
            </Box>

            {/* Text on the right */}
            <Box sx={{ width: { xs: '100%', sm: '55%' }, padding: { xs: '20px', sm: '0' } }}>
              <Typography variant="h4" sx={{ color: '#333', fontWeight: 'bold', marginBottom: '16px' }}>
                Transform Your Home Today
              </Typography>
              <Typography variant="body1" sx={{ color: '#666' }}>
                At Auggie's Home Remodeling, we provide expert services that help bring your vision to life. Whether you're planning a kitchen remodel or a complete home transformation, our team is here to assist you every step of the way. Let’s make your dream home a reality.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
