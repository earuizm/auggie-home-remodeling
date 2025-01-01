import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Container } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission, replace with actual API call as needed
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage('Thank you for your inquiry! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 2000); // Simulated API call delay
  };

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
          We'd love to hear from you! Whether you have a question, need a quote, or want to discuss your upcoming project, we're here to help.
        </Typography>
      </Box>

      {/* Contact Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Phone"
              variant="outlined"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              required
            />
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              padding: '10px 20px',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </Box>

        {/* Success Message */}
        {successMessage && (
          <Box sx={{ marginTop: '20px', textAlign: 'center', color: '#4CAF50' }}>
            <Typography variant="body1">{successMessage}</Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Contact;
