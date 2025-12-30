import React, { useEffect } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import KitchenIcon from '@mui/icons-material/Kitchen';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { colors } from '../theme';

const KitchenRemodeling = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: 'Custom Design',
      description: 'We work with you to create a layout that maximizes space and efficient workflow.',
      icon: <ArchitectureIcon sx={{ fontSize: 40, color: colors.accent.main }} />
    },
    {
      title: 'Premium Materials',
      description: 'From granite countertops to hardwood custom cabinets, we use only the best.',
      icon: <KitchenIcon sx={{ fontSize: 40, color: colors.accent.main }} />
    },
    {
      title: 'Expert Installation',
      description: 'Our licensed craftsmen ensure every detail is perfect, from tiling to plumbing.',
      icon: <AutoFixHighIcon sx={{ fontSize: 40, color: colors.accent.main }} />
    }
  ];

  const galleryImages = [
    '/kitchen1.jpg',
    '/picture8.jpg',
    '/picture9.jpg',
    // Fallback/Placeholder if needed, or reuse
    '/picture4.HEIC' // Keeping original list but HEIC might be an issue in some browsers
  ];

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', paddingBottom: '80px' }}>

      {/* ============ HERO SECTION ============ */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '70vh',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundAttachment: 'fixed',
          backgroundImage: 'url(/kitchen1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 100%)',
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
            Kitchen Remodeling
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
            The heart of your home, reimagined. Excellence in every detail.
          </Typography>
        </Container>
      </Box>

      {/* ============ INTRO SECTION ============ */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/picture8.jpg"
              alt="Beautiful Kitchen Detail"
              sx={{
                width: '100%',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                transform: 'rotate(-2deg)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'rotate(0deg) scale(1.02)'
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="overline" sx={{ color: colors.accent.main, fontWeight: 700, letterSpacing: 1.5 }}>
              TRANSFORM YOUR SPACE
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, color: colors.primary.main }}>
              Kitchens Designed for Life
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: colors.text.secondary, fontSize: '1.1rem', lineHeight: 1.8 }}>
              At Auggie's Home Remodeling, we believe that your kitchen should be more than just a space – it should be a place that inspires and enhances your everyday life.
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: colors.text.secondary, fontSize: '1.1rem', lineHeight: 1.8 }}>
              Our team is committed to delivering exceptional results, turning your kitchen into a stunning masterpiece that reflects both your style and functionality needs.
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: colors.accent.main,
                  '&:hover': { backgroundColor: colors.accent.dark },
                  borderRadius: '30px',
                  px: 4
                }}
              >
                Start Your Project
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ============ FEATURES SECTION ============ */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 8, color: colors.primary.main }}>
            Why Choose Us?
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    bgcolor: 'transparent',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'translateY(-10px)' }
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        bgcolor: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>{feature.title}</Typography>
                    <Typography variant="body1" sx={{ color: colors.text.secondary }}>{feature.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ============ GALLERY PREVIEW ============ */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 6, color: colors.primary.main }}>
          Recent Projects
        </Typography>
        <Grid container spacing={2}>
          {galleryImages.map((img, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  height: '300px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  position: 'relative',
                  '&:hover img': {
                    transform: 'scale(1.1)'
                  }
                }}
              >
                <Box
                  component="img"
                  src={img}
                  alt={`Gallery item ${index}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            component={Link}
            to="/gallery"
            variant="outlined"
            size="large"
            sx={{
              borderWidth: 2,
              borderColor: colors.primary.main,
              color: colors.primary.main,
              '&:hover': { borderWidth: 2, bgcolor: colors.primary.main + '10' }
            }}
          >
            View Full Gallery
          </Button>
        </Box>
      </Container>

      {/* ============ CTA SECTION ============ */}
      <Box sx={{ bgcolor: colors.primary.main, py: 8, color: 'white', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            Ready for your Dream Kitchen?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Contact us today for a free consultation and let's bring your vision to life.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: colors.primary.main,
              fontWeight: 700,
              px: 6,
              py: 1.5,
              borderRadius: '50px',
              '&:hover': {
                bgcolor: '#f0f0f0'
              }
            }}
          >
            Get A Free Quote
          </Button>
        </Container>
      </Box>

    </Box>
  );
};

export default KitchenRemodeling;
