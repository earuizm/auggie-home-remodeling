import React, { useEffect } from 'react';
import { Box, Typography, Container, Grid, Button, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import KitchenIcon from '@mui/icons-material/Kitchen';
import BathtubIcon from '@mui/icons-material/Bathtub';
import FoundationIcon from '@mui/icons-material/Foundation';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import GridViewIcon from '@mui/icons-material/GridView';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ConstructionIcon from '@mui/icons-material/Construction';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { colors } from '../theme';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: 'Kitchen Remodeling',
      description: 'Transform your culinary space with custom cabinetry, modern appliances, and functional layouts designed for your lifestyle.',
      icon: <KitchenIcon sx={{ fontSize: 40 }} />,
      path: '/services/kitchen',
      image: '/kitchen1.webp',
      features: ['Custom Cabinetry', 'Island Design', 'Modern Lighting', 'Backsplash installation']
    },
    {
      title: 'Bathroom Renovations',
      description: 'Create a personal sanctuary with spy-inspired designs, luxury fixtures, and efficient use of space.',
      icon: <BathtubIcon sx={{ fontSize: 40 }} />,
      path: '/services/bathroom',
      image: '/bathroom1.webp',
      features: ['Walk-in Showers', 'Custom Vanities', 'Tile Work', 'Heated Floors']
    },
    {
      title: 'Basement Finishing',
      description: 'Maximize your home\'s potential by converting your basement into a home theater, gym, office, or extra living space.',
      icon: <FoundationIcon sx={{ fontSize: 40 }} />,
      path: '/services/basement',
      image: '/basement1.webp',
      features: ['Entertainment Areas', 'Home Gyms', 'Guest Suites', 'Waterproofing']
    },
    {
      title: 'Flooring Installation',
      description: 'Brief new life into your rooms with premium hardwood, luxury vinyl, tile, or carpet installation services.',
      icon: <GridViewIcon sx={{ fontSize: 40 }} />,
      path: '/services/flooring',
      image: '/floor1.webp',
      features: ['Hardwood', 'Luxury Vinyl Plank', 'Ceramic Tile', 'Refinishing']
    },
    {
      title: 'Professional Painting',
      description: 'Refresh your home\'s interior or exterior with our detailed painting services, using high-quality paints and finishes.',
      icon: <FormatPaintIcon sx={{ fontSize: 40 }} />,
      path: '/services/painting',
      image: '/painting1.webp',
      features: ['Interior/Exterior', 'Cabinet Painting', 'Drywall Repair', 'Color Consultation']
    },
  ];

  const process = [
    {
      title: '1. Consultation',
      description: 'We meet to discuss your vision, budget, and timeline.',
      icon: <HandshakeIcon sx={{ fontSize: 40, color: colors.accent.main }} />
    },
    {
      title: '2. Design & Plan',
      description: 'Our team creates detailed plans and renderings for your approval.',
      icon: <DesignServicesIcon sx={{ fontSize: 40, color: colors.accent.main }} />
    },
    {
      title: '3. Construction',
      description: 'We execute the build with precision and respect for your home.',
      icon: <ConstructionIcon sx={{ fontSize: 40, color: colors.accent.main }} />
    },
  ];

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', pb: 8 }}>
      {/* ============ HERO SECTION ============ */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '60vh',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          mb: 8,
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/kitchen1.webp)', // Reusing a good image for now
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.9) 0%, rgba(45, 45, 68, 0.8) 100%)',
            },
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              color: '#ffffff',
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '4rem' },
              mb: 2,
              animation: 'fadeInDown 0.8s ease forwards',
            }}
          >
            Our Expert <span style={{ color: colors.accent.main }}>Services</span>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
              animation: 'fadeInUp 0.8s ease 0.2s forwards',
              opacity: 0,
            }}
          >
            Comprehensive home remodeling solutions tailored to your unique style and needs.
          </Typography>
        </Container>
      </Box>

      {/* ============ SERVICES GRID ============ */}
      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '20px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  overflow: 'visible',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                    '& .service-icon-box': {
                      transform: 'scale(1.1) rotate(5deg)',
                      backgroundColor: colors.accent.main,
                      color: '#fff',
                    },
                    '& .service-img': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                {/* Image Section */}
                <Box sx={{ position: 'relative', height: '240px', overflow: 'hidden', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
                  <CardMedia
                    component="img"
                    image={service.image}
                    alt={service.title}
                    className="service-img"
                    sx={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '60%',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    }}
                  />
                  {/* Floating Icon */}
                  <Box
                    className="service-icon-box"
                    sx={{
                      position: 'absolute',
                      bottom: '-25px',
                      right: '25px',
                      width: '60px',
                      height: '60px',
                      borderRadius: '15px',
                      backgroundColor: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      color: colors.primary.main,
                      transition: 'all 0.3s ease',
                      zIndex: 2,
                    }}
                  >
                    {service.icon}
                  </Box>
                </Box>

                <CardContent sx={{ p: 4, pt: 5, flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 2, color: colors.primary.main }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: colors.text.secondary, mb: 3, lineHeight: 1.6 }}>
                    {service.description}
                  </Typography>

                  {/* Features List */}
                  <Box sx={{ mb: 3 }}>
                    {service.features.map((feature, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CheckCircleIcon sx={{ color: colors.accent.main, fontSize: 18, mr: 1 }} />
                        <Typography variant="body2" sx={{ color: colors.text.primary }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button
                    component={Link}
                    to={service.path}
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      mt: 'auto',
                      color: colors.accent.main,
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: colors.accent.dark,
                        transform: 'translateX(5px)',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>


      {/* ============ HOW WE WORK SECTION ============ */}
      <Box sx={{ backgroundColor: 'rgba(0,0,0,0.02)', py: 10, mb: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 1, color: colors.primary.main }}>
            Our Remodeling Process
          </Typography>
          <Typography variant="h6" align="center" sx={{ color: colors.text.secondary, mb: 8, maxWidth: '600px', mx: 'auto' }}>
            We make your renovation journey smooth, transparent, and enjoyable from start to finish.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {process.map((step, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ textAlign: 'center', px: 2 }}>
                  <Box
                    sx={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                      border: `2px solid ${colors.accent.main}20`,
                    }}
                  >
                    {step.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: colors.primary.main }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: colors.text.secondary }}>
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ============ CTA SECTION ============ */}
      <Container maxWidth="md">
        <Box
          sx={{
            background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.primary.light} 100%)`,
            borderRadius: '30px',
            p: { xs: 4, md: 8 },
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.primary.light} 100%)`, // Solid gradient fallback
              opacity: 0.1,
            }}
          />
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 3, position: 'relative', zIndex: 1 }}>
            Ready to Start Your Project?
          </Typography>
          <Typography variant="h6" sx={{ mb: 5, opacity: 0.9, position: 'relative', zIndex: 1 }}>
            Contact us today for a free consultation and estimate. Let's build something beautiful together.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: colors.accent.main,
              color: 'white',
              px: 6,
              py: 2,
              borderRadius: '50px',
              fontSize: '1.2rem',
              fontWeight: 600,
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              position: 'relative',
              zIndex: 1,
              '&:hover': {
                backgroundColor: colors.accent.light,
                transform: 'translateY(-2px)',
                boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
              },
            }}
          >
            Get a Free Quote
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;