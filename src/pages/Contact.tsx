import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: '60px 20px' }}>
      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '28px', md: '36px' },
            color: '#333',
            marginBottom: '20px',
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '16px', md: '18px' },
            lineHeight: 1.7,
            color: '#666',
            fontFamily: "'Georgia', serif",
          }}
        >
          We'd love to hear from you! Whether you have a question, need a quote, or want to discuss your upcoming project, we're here to help. We strive to offer the best service possible and are committed to providing you with timely and professional responses.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                📧 <a href="mailto:auggiesremodeling@gmail.com" style={{ color: '#f5a623', textDecoration: 'none' }}>auggiesremodeling@gmail.com</a>
              </Typography>
              <Typography variant="body1">
                📞 <a href="tel:+18473027344" style={{ color: '#f5a623', textDecoration: 'none' }}>(847)-302-7344</a>
              </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '16px', md: '18px' },
            lineHeight: 1.7,
            color: '#666',
            fontFamily: "'Georgia', serif",
            marginTop: '20px',
            fontStyle: 'italic',
          }}
        >
          ¡Se habla español! ¡No dude en contactarnos!
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact;
