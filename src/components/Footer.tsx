import React from 'react';
import { Box, Typography, Container, Grid, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Email, Phone, LocationOn } from '@mui/icons-material';
import { colors } from '../theme';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Kitchen Remodeling', path: '/services/kitchen' },
    { name: 'Bathroom Renovations', path: '/services/bathroom' },
    { name: 'Basement Renovations', path: '/services/basement' },
    { name: 'Flooring', path: '/services/flooring' },
    { name: 'Painting', path: '/services/painting' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: colors.primary.main,
        color: '#fff',
        pt: { xs: 6, md: 8 },
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <img
                src="/auggie-logo-nbg.webp"
                alt="Auggie's Home Remodeling"
                style={{
                  height: '60px',
                  filter: 'brightness(1.2)',
                  marginBottom: '16px',
                }}
              />
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.95rem',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Family-owned and operated since 1999. We bring over 25 years of
                experience and dedication to every home remodeling project.
              </Typography>

              {/* Social Links */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                  component="a"
                  href="https://www.facebook.com/people/Auggies-Remodeling/61559702580670/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#fff',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      backgroundColor: colors.accent.main,
                      transform: 'translateY(-3px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.instagram.com/auggiesremodeling/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#fff',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      backgroundColor: colors.accent.main,
                      transform: 'translateY(-3px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Instagram />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Services Links */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="h6"
              sx={{
                color: '#fff',
                fontWeight: 600,
                fontSize: '1rem',
                mb: 3,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 30,
                  height: 2,
                  backgroundColor: colors.accent.main,
                },
              }}
            >
              Services
            </Typography>
            <Box component="nav">
              {services.map((service) => (
                <Typography
                  key={service.path}
                  component={Link}
                  to={service.path}
                  sx={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    py: 0.75,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: colors.accent.main,
                      paddingLeft: '8px',
                    },
                  }}
                >
                  {service.name}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="h6"
              sx={{
                color: '#fff',
                fontWeight: 600,
                fontSize: '1rem',
                mb: 3,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 30,
                  height: 2,
                  backgroundColor: colors.accent.main,
                },
              }}
            >
              Quick Links
            </Typography>
            <Box component="nav">
              {quickLinks.map((link) => (
                <Typography
                  key={link.path}
                  component={Link}
                  to={link.path}
                  sx={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    py: 0.75,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: colors.accent.main,
                      paddingLeft: '8px',
                    },
                  }}
                >
                  {link.name}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                color: '#fff',
                fontWeight: 600,
                fontSize: '1rem',
                mb: 3,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 30,
                  height: 2,
                  backgroundColor: colors.accent.main,
                },
              }}
            >
              Contact Us
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Phone sx={{ color: colors.accent.main, fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>
                    Phone
                  </Typography>
                  <Typography
                    component="a"
                    href="tel:+18473027344"
                    sx={{
                      color: '#fff',
                      textDecoration: 'none',
                      fontWeight: 500,
                      '&:hover': { color: colors.accent.main },
                      transition: 'color 0.2s ease',
                    }}
                  >
                    (847) 302-7344
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Email sx={{ color: colors.accent.main, fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>
                    Email
                  </Typography>
                  <Typography
                    component="a"
                    href="mailto:auggiesremodeling@gmail.com"
                    sx={{
                      color: '#fff',
                      textDecoration: 'none',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      '&:hover': { color: colors.accent.main },
                      transition: 'color 0.2s ease',
                    }}
                  >
                    auggiesremodeling@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <LocationOn sx={{ color: colors.accent.main, fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>
                    Service Area
                  </Typography>
                  <Typography sx={{ color: '#fff', fontWeight: 500, fontSize: '0.9rem' }}>
                    Chicago & North Shore, IL
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            mt: 6,
            pt: 3,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
            © {currentYear} Auggie's Home Remodeling. All Rights Reserved.
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
            License #: TCG079682 | Fully Licensed & Insured
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
