import React, { useEffect } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import FoundationIcon from '@mui/icons-material/Foundation';
import WeekendIcon from '@mui/icons-material/Weekend';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { colors } from '../theme';
import SEO from '../components/SEO';

const BasementRenovations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: 'Additional Living Space',
      description: 'Expand your home with a comfortable family room, home theater, or game room.',
      icon: <WeekendIcon sx={{ fontSize: 40, color: colors.accent.main }} />
    },
    {
      title: 'Home Gyms & Offices',
      description: 'Create productive workspaces or personal fitness centers right at home.',
      icon: <FitnessCenterIcon sx={{ fontSize: 40, color: colors.accent.main }} />
    },
    {
      title: 'Solid Foundations',
      description: 'We ensure waterproofing, insulation, and structural integrity for lasting quality.',
      icon: <FoundationIcon sx={{ fontSize: 40, color: colors.accent.main }} />
    }
  ];

  const galleryImages = [
    '/basement1.webp',
    '/picture10.webp', // Large interior shot
    '/picture11.webp', // Large interior shot
    '/picture12.webp'
  ];

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', paddingBottom: '80px' }}>
      <SEO
        title="Basement Finishing Chicago | Home Theater & Gyms"
        description="Expand your living space with expert basement finishing. Home theaters, guest suites, and gyms designed by Auggie's Home Remodeling."
      />

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
          backgroundImage: 'url(/basement1.webp)',
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
            Basement Renovations
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
            Unlock the hidden potential of your home.
          </Typography>
        </Container>
      </Box>

      {/* ============ INTRO SECTION ============ */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/picture10.webp"
              alt="Finished Basement Home Theater"
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
              EXPAND YOUR LIFESTYLE
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 3, color: colors.primary.main }}>
              More Space, More Value
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: colors.text.secondary, fontSize: '1.1rem', lineHeight: 1.8 }}>
              A finished basement is the most cost-effective way to add living space to your house. We transform dark, unused basements into bright, inviting rooms that the whole family can enjoy.
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
                Discuss Your Project
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ============ FEATURES SECTION ============ */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" sx={{ fontWeight: 800, mb: 8, color: colors.primary.main }}>
            Possibilities are Endless
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
        <Typography variant="h2" align="center" sx={{ fontWeight: 800, mb: 6, color: colors.primary.main }}>
          Recent Tranformations
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
                  '&:hover img': {
                    transform: 'scale(1.1)'
                  }
                }}
              >
                <Box
                  component="img"
                  src={img}
                  alt={`Basement Renovation Project ${index + 1}`}
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
      </Container>

      {/* ============ CTA SECTION ============ */}
      <Box sx={{ bgcolor: colors.primary.main, py: 8, color: 'white', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 3 }}>
            Maximize Your Home's Potential
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
            Get A Free Estimate
          </Button>
        </Container>
      </Box>

    </Box>
  );
};

export default BasementRenovations;
