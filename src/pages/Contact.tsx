import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { colors } from '../theme';
import SEO from '../components/SEO';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <Box sx={{ width: '100%', minHeight: '100vh', paddingBottom: '80px' }}>
      <SEO
        title="Contact Us | Free Remodeling Estimates Chicago"
        description="Get a free quote for your next home renovation. Contact Auggie's Home Remodeling in Chicago for kitchen, bath, and basement projects."
      />

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

          {/* Contact Info - Centered */}
          <Grid item xs={12} md={8} sx={{ mx: 'auto', textAlign: 'center' }}>
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 4, color: colors.primary.main, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Get in Touch
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: colors.text.secondary, mb: 6, fontSize: '1.2rem' }}>
              Ready to start your home renovation journey? Reach out to us for a free consultation and estimate. We're here to answer any questions you may have.
            </Typography>

            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4,
              width: '100%',
              mt: 4
            }}>
              {/* Phone */}
              <Box
                component="a"
                href="tel:+18473027344"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                  textAlign: 'center',
                  p: 4,
                  borderRadius: '20px',
                  bgcolor: 'white',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    '& .icon-box': {
                      bgcolor: colors.accent.main,
                      color: 'white'
                    }
                  }
                }}
              >
                <Box className="icon-box" sx={{
                  color: colors.accent.main,
                  bgcolor: colors.accent.main + '15',
                  p: 2,
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  mb: 1
                }}>
                  <PhoneIcon sx={{ fontSize: 32 }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: colors.text.secondary, mb: 1, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Call Us</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: colors.primary.main }}>
                    (847) 302-7344
                  </Typography>
                </Box>
              </Box>

              {/* Email */}
              <Box
                component="a"
                href="mailto:auggiesremodeling@gmail.com"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                  textAlign: 'center',
                  p: 4,
                  borderRadius: '20px',
                  bgcolor: 'white',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    '& .icon-box': {
                      bgcolor: colors.accent.main,
                      color: 'white'
                    }
                  }
                }}
              >
                <Box className="icon-box" sx={{
                  color: colors.accent.main,
                  bgcolor: colors.accent.main + '15',
                  p: 2,
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  mb: 1
                }}>
                  <EmailIcon sx={{ fontSize: 32 }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: colors.text.secondary, mb: 1, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Email Us</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: colors.primary.main, fontSize: '1rem', wordBreak: 'break-all' }}>
                    auggiesremodeling@gmail.com
                  </Typography>
                </Box>
              </Box>

              {/* Service Area */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                  textAlign: 'center',
                  p: 4,
                  borderRadius: '20px',
                  bgcolor: 'white',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    '& .icon-box': {
                      bgcolor: colors.accent.main,
                      color: 'white'
                    }
                  }
                }}
              >
                <Box className="icon-box" sx={{
                  color: colors.accent.main,
                  bgcolor: colors.accent.main + '15',
                  p: 2,
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  mb: 1
                }}>
                  <LocationOnIcon sx={{ fontSize: 32 }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: colors.text.secondary, mb: 1, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Service Area</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: colors.primary.main }}>
                    Chicago & North Shore, IL
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
