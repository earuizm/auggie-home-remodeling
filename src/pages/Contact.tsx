import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Grid, TextField, Button, Paper } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SendIcon from '@mui/icons-material/Send';
import { colors } from '../theme';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', paddingBottom: '80px' }}>

      {/* ============ HERO SECTION ============ */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '50vh',
          minHeight: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundAttachment: 'fixed',
          backgroundImage: 'url(/picture8.jpg)', // Interior shot
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)',
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              color: '#ffffff',
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '4.5rem' },
              mb: 2,
              textShadow: '0 4px 10px rgba(0,0,0,0.3)'
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '800px',
              mx: 'auto',
              fontWeight: 400
            }}
          >
            Let's discuss your next project.
          </Typography>
        </Container>
      </Box>

      {/* ============ FORM & INFO SECTION ============ */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={8}>

          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, color: colors.primary.main }}>
              Get in Touch
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: colors.text.secondary, mb: 6 }}>
              Ready to start your home renovation journey? Reach out to us for a free consultation and estimate. We're here to answer any questions you may have.
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <Box sx={{ mr: 2, color: colors.accent.main }}><PhoneIcon fontSize="large" /></Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: colors.text.secondary }}>Phone</Typography>
                <Typography
                  component="a"
                  href="tel:+18473027344"
                  variant="h6"
                  sx={{ textDecoration: 'none', color: 'inherit' }}
                >
                  (847) 302-7344
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <Box sx={{ mr: 2, color: colors.accent.main }}><EmailIcon fontSize="large" /></Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: colors.text.secondary }}>Email</Typography>
                <Typography
                  component="a"
                  href="mailto:auggiesremodeling@gmail.com"
                  variant="h6"
                  sx={{ textDecoration: 'none', color: 'inherit', fontSize: '1.1rem' }}
                >
                  auggiesremodeling@gmail.com
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <Box sx={{ mr: 2, color: colors.accent.main }}><LocationOnIcon fontSize="large" /></Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: colors.text.secondary }}>Service Area</Typography>
                <Typography variant="h6">Chicago & North Shore, IL</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <Box sx={{ mr: 2, color: colors.accent.main }}><CalendarTodayIcon fontSize="large" /></Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: colors.text.secondary }}>Hours</Typography>
                <Typography variant="body1">Mon-Fri: 8am - 6pm</Typography>
                <Typography variant="body1">Sat: 10am - 4pm</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: '24px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                bgcolor: 'white'
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>
                Send us a Message
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      variant="outlined"
                      value={formData.name}
                      onChange={handleChange}
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleChange}
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      variant="outlined"
                      value={formData.phone}
                      onChange={handleChange}
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Project Description"
                      name="message"
                      multiline
                      rows={4}
                      variant="outlined"
                      value={formData.message}
                      onChange={handleChange}
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{
                        py: 1.5,
                        borderRadius: '12px',
                        fontWeight: 700,
                        bgcolor: colors.primary.main,
                        '&:hover': { bgcolor: colors.primary.dark }
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
