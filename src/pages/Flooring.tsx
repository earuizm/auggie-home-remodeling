import React, { useEffect } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import GridViewIcon from '@mui/icons-material/GridView';
import LayersIcon from '@mui/icons-material/Layers';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { colors } from '../theme';
import SEO from '../components/SEO';

const Flooring = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: 'Hardwood Flooring',
      description: 'Timeless elegance and durability with premium solid or engineered wood.',
      icon: <LayersIcon sx={{ fontSize: 40, color: colors.accent.main }} />
    },
    {
      title: 'Luxury Vinyl (LVP)',
      description: 'Waterproof, resilient, and stylish options perfect for any room.',
      icon: <GridViewIcon sx={{ fontSize: 40, color: colors.accent.main }} />
    },
    {
      title: 'Tile & Stone',
      description: 'Beautiful and durable surfaces for kitchens, bathrooms, and entryways.',
      icon: <SquareFootIcon sx={{ fontSize: 40, color: colors.accent.main }} />
    }
  ];

  const galleryImages = [
    '/floor1.jpg',
    '/floor2.jpg',
    '/floor3.jpg',
    '/floor4.jpg'
  ];

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', paddingBottom: '80px' }}>
      <SEO
        title="Flooring Installation Chicago | Hardwood & Tile"
        description="Professional flooring installation in Chicago. Hardwood, luxury vinyl, and custom tile flooring by Auggie's Home Remodeling."
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
          backgroundImage: 'url(/floor1.jpg)',
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
            Flooring Solutions
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
            The foundation of a beautiful home.
          </Typography>
        </Container>
      </Box>

      {/* ============ INTRO SECTION ============ */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/floor2.jpg"
              alt="Hardwood Floor Installation Detail in Chicago"
              sx={{
                width: '100%',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                transform: 'rotate(2deg)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'rotate(0deg) scale(1.02)'
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="overline" sx={{ color: colors.accent.main, fontWeight: 700, letterSpacing: 1.5 }}>
              ELEVATE EVERY STEP
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 3, color: colors.primary.main }}>
              Quality You Can Stand On
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: colors.text.secondary, fontSize: '1.1rem', lineHeight: 1.8 }}>
              New flooring can completely change the look and feel of your home. We offer expert installation of a wide range of materials, ensuring a flawless finish that lasts for years.
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
                Get a Quote
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ============ FEATURES SECTION ============ */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" sx={{ fontWeight: 800, mb: 8, color: colors.primary.main }}>
            Expert Installation
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
          Pattern & Texture
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
                  alt={`Flooring Installation Project ${index + 1}`}
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
            Ready to Refresh Your Floors?
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
            Schedule Consultation
          </Button>
        </Container>
      </Box>

    </Box>
  );
};

export default Flooring;
