import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import KitchenIcon from '@mui/icons-material/Kitchen';
import BathtubIcon from '@mui/icons-material/Bathtub';
import FoundationIcon from '@mui/icons-material/Foundation';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import GridViewIcon from '@mui/icons-material/GridView';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import HandymanIcon from '@mui/icons-material/Handyman';
import VerifiedIcon from '@mui/icons-material/Verified';
import GroupsIcon from '@mui/icons-material/Groups';
import SEO from '../components/SEO';
import { colors } from '../theme';

const Home = () => {
  const [mobile, setMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen into the heart of your home with custom designs.',
      icon: <KitchenIcon sx={{ fontSize: 40 }} />,
      path: '/services/kitchen',
      image: '/kitchen1.jpg',
    },
    {
      title: 'Bathroom Renovations',
      description: 'Create your personal spa with stunning bathroom transformations.',
      icon: <BathtubIcon sx={{ fontSize: 40 }} />,
      path: '/services/bathroom',
      image: '/bathroom1.jpg',
    },
    {
      title: 'Basement Renovations',
      description: 'Unlock your basement\'s potential with beautiful living spaces.',
      icon: <FoundationIcon sx={{ fontSize: 40 }} />,
      path: '/services/basement',
      image: '/basement1.jpg',
    },
    {
      title: 'Flooring',
      description: 'Quality flooring solutions that elevate every room.',
      icon: <GridViewIcon sx={{ fontSize: 40 }} />,
      path: '/services/flooring',
      image: '/floor1.jpg',
    },
    {
      title: 'Painting',
      description: 'Professional painting services for a fresh new look.',
      icon: <FormatPaintIcon sx={{ fontSize: 40 }} />,
      path: '/services/painting',
      image: '/painting1.jpg',
    },
  ];

  const stats = [
    { number: '25+', label: 'Years Experience', icon: <StarIcon /> },
    { number: '500+', label: 'Projects Completed', icon: <HandymanIcon /> },
    { number: '100%', label: 'Satisfaction Rate', icon: <VerifiedIcon /> },
    { number: '1000+', label: 'Happy Families', icon: <GroupsIcon /> },
  ];

  const areas = [
    'Chicago, IL',
    'Evanston, IL',
    'Skokie, IL',
    'Northbrook, IL',
    'Glenview, IL',
    'Wilmette, IL',
  ];

  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>
      <SEO
        title="Home Remodeling Chicago | Kitchen, Bath & Basement Experts"
        description="Auggie's Home Remodeling offers expert kitchen, bathroom, and basement renovations in Chicago & North Shore. Family-owned, licensed, and insured since 1999."
        canonical="https://www.auggieshomeremodeling.com/"
      />
      {/* ============ HERO SECTION ============ */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
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
            backgroundImage: 'url(/picture1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.92) 0%, rgba(45, 45, 68, 0.85) 50%, rgba(26, 26, 46, 0.9) 100%)',
            },
          }}
        />

        {/* Decorative Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${colors.accent.main}15 0%, transparent 70%)`,
            filter: 'blur(60px)',
            animation: 'subtleFloat 6s ease-in-out infinite',
          }}
        />

        {/* Hero Content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center', py: 4 }}>
          {/* Badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              padding: '10px 24px',
              borderRadius: '50px',
              border: '1px solid rgba(255,255,255,0.2)',
              mb: 4,
              animation: 'fadeInDown 0.8s ease forwards',
            }}
          >
            <StarIcon sx={{ color: colors.accent.main, fontSize: 20 }} />
            <Typography sx={{ color: '#fff', fontWeight: 500, fontSize: '0.9rem' }}>
              Trusted by 1000+ Chicago Families
            </Typography>
          </Box>

          {/* Main Headline */}
          <Typography
            variant="h1"
            sx={{
              color: '#ffffff',
              fontWeight: 800,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
              lineHeight: 1.1,
              mb: 3,
              animation: 'fadeInUp 0.8s ease 0.2s forwards',
              opacity: 0,
            }}
          >
            Transform Your Home
            <Box
              component="span"
              sx={{
                display: 'block',
                background: `linear-gradient(135deg, ${colors.accent.main} 0%, ${colors.accent.light} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Into Your Dream
            </Box>
          </Typography>

          {/* Subheadline */}
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.8)',
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.25rem' },
              maxWidth: '600px',
              margin: '0 auto',
              mb: 5,
              lineHeight: 1.6,
              animation: 'fadeInUp 0.8s ease 0.4s forwards',
              opacity: 0,
            }}
          >
            Expert remodeling services backed by 25+ years of experience.
            We bring craftsmanship, dedication, and your vision together.
          </Typography>

          {/* CTA Buttons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: 'center',
              animation: 'fadeInUp 0.8s ease 0.6s forwards',
              opacity: 0,
            }}
          >
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: `linear-gradient(135deg, ${colors.accent.main} 0%, ${colors.accent.dark} 100%)`,
                color: '#fff',
                padding: '16px 40px',
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '50px',
                boxShadow: `0 8px 30px ${colors.accent.main}50`,
                '&:hover': {
                  background: `linear-gradient(135deg, ${colors.accent.light} 0%, ${colors.accent.main} 100%)`,
                  transform: 'translateY(-3px)',
                  boxShadow: `0 12px 40px ${colors.accent.main}60`,
                },
                transition: 'all 0.3s ease',
              }}
            >
              Get A Free Estimatete
            </Button>
            <Button
              component={Link}
              to="/gallery"
              variant="outlined"
              size="large"
              sx={{
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.3)',
                padding: '16px 40px',
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '50px',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  borderColor: 'rgba(255,255,255,0.6)',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-3px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              View Our Work
            </Button>
          </Box>

          {/* Trust Indicators */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 2, sm: 4 },
              mt: 6,
              animation: 'fadeInUp 0.8s ease 0.8s forwards',
              opacity: 0,
            }}
          >
            {['Licensed & Insured', '25+ Years Experience', 'Free Estimates'].map((item) => (
              <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircleIcon sx={{ color: colors.accent.main, fontSize: 20 }} />
                <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>


      {/* ============ STATS SECTION ============ */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.primary.light} 100%)`,
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <Box
                  sx={{
                    textAlign: 'center',
                    animation: `fadeInUp 0.6s ease ${index * 0.1}s forwards`,
                    opacity: 0,
                  }}
                >
                  <Box sx={{ color: colors.accent.main, mb: 1 }}>
                    {React.cloneElement(stat.icon, { sx: { fontSize: 36 } })}
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      color: '#fff',
                      fontWeight: 800,
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      mb: 0.5,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ============ SERVICES SECTION ============ */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#fafafa' }}>
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              sx={{
                color: colors.accent.main,
                fontWeight: 600,
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                mb: 2,
              }}
            >
              What We Do
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: colors.primary.main,
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.75rem' },
                mb: 2,
              }}
            >
              Our Expert Services
            </Typography>
            <Typography
              sx={{
                color: colors.text.secondary,
                fontSize: '1.1rem',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              From kitchen transformations to complete home makeovers,
              we deliver quality craftsmanship every step of the way.
            </Typography>
          </Box>

          {/* Services Grid */}
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={service.title}>
                <Card
                  component={Link}
                  to={service.path}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    borderRadius: '20px',
                    overflow: 'visible',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                      '& .service-image': {
                        transform: 'scale(1.1)',
                      },
                      '& .service-icon': {
                        background: `linear-gradient(135deg, ${colors.accent.main} 0%, ${colors.accent.dark} 100%)`,
                        color: '#fff',
                      },
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', height: 200 }}>
                    <Box sx={{
                      overflow: 'hidden',
                      height: '100%',
                      borderRadius: '20px 20px 0 0',
                    }}>
                      <CardMedia
                        component="img"
                        image={service.image}
                        alt={service.title}
                        className="service-image"
                        sx={{
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease',
                        }}
                      />
                    </Box>
                    <Box
                      className="service-icon"
                      sx={{
                        position: 'absolute',
                        bottom: -20,
                        left: 24,
                        width: 56,
                        height: 56,
                        borderRadius: '14px',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: colors.accent.main,
                        transition: 'all 0.3s ease',
                        zIndex: 10,
                      }}
                    >
                      {service.icon}
                    </Box>
                  </Box>
                  <CardContent sx={{ pt: 5, pb: 3, px: 3, flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: colors.primary.main,
                        mb: 1,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.text.secondary,
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ============ ABOUT PREVIEW SECTION ============ */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* Image Side */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                }}
              >
                <img
                  src="/picture8.jpg"
                  alt="Auggie's Home Remodeling Team Chicago"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
                {/* Experience Badge */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 24,
                    right: 24,
                    background: `linear-gradient(135deg, ${colors.accent.main} 0%, ${colors.accent.dark} 100%)`,
                    color: '#fff',
                    padding: '20px 28px',
                    borderRadius: '16px',
                    textAlign: 'center',
                    boxShadow: `0 10px 30px ${colors.accent.main}50`,
                  }}
                >
                  <Typography sx={{ fontWeight: 800, fontSize: '2rem', lineHeight: 1 }}>
                    25+
                  </Typography>
                  <Typography sx={{ fontSize: '0.85rem', fontWeight: 500 }}>
                    Years Experience
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Content Side */}
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  color: colors.accent.main,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  mb: 2,
                }}
              >
                About Us
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: colors.primary.main,
                  fontWeight: 700,
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  mb: 3,
                  lineHeight: 1.3,
                }}
              >
                Family-Owned Excellence Serving Chicago Since 1999
              </Typography>
              <Typography
                sx={{
                  color: colors.text.secondary,
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                At Auggie's Home Remodeling, we're not just contractors—we're your neighbors.
                Our family-owned business has been transforming Chicago homes for over 25 years,
                bringing unmatched craftsmanship and personal attention to every project.
              </Typography>

              {/* Features */}
              <Box sx={{ mb: 4 }}>
                {[
                  'Licensed & Fully Insured',
                  'Personalized Design Consultations',
                  'Quality Materials & Workmanship',
                  'On-Time Project Completion',
                ].map((feature) => (
                  <Box
                    key={feature}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        backgroundColor: colors.secondary.main + '20',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <CheckCircleIcon sx={{ color: colors.secondary.main, fontSize: 18 }} />
                    </Box>
                    <Typography sx={{ color: colors.text.primary, fontWeight: 500 }}>
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Button
                component={Link}
                to="/about"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  background: colors.primary.main,
                  color: '#fff',
                  padding: '14px 32px',
                  borderRadius: '50px',
                  fontWeight: 600,
                  '&:hover': {
                    background: colors.primary.light,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Learn More About Us
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ============ AREAS WE SERVE ============ */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.primary.light} 100%)`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Typography
                sx={{
                  color: colors.accent.main,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  mb: 2,
                }}
              >
                Service Areas
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  mb: 3,
                }}
              >
                Proudly Serving the Greater Chicago Area
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                From Chicago to the North Shore suburbs, we bring our commitment to
                quality and craftsmanship to homes throughout the area.
              </Typography>

              <Grid container spacing={2}>
                {areas.map((area) => (
                  <Grid item xs={6} key={area}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <CheckCircleIcon sx={{ color: colors.accent.main, fontSize: 20 }} />
                      <Typography sx={{ color: '#fff', fontWeight: 500 }}>
                        {area}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                }}
              >
                <img
                  src="/service-area.png"
                  alt="Service Area Map"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ============ CTA SECTION ============ */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          textAlign: 'center',
          background: `linear-gradient(135deg, ${colors.accent.main} 0%, ${colors.accent.dark} 100%)`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h2"
            sx={{
              color: '#fff',
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 3,
            }}
          >
            Ready to Transform Your Home?
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: '1.2rem',
              mb: 5,
              maxWidth: '500px',
              margin: '0 auto 40px',
            }}
          >
            Get in touch today for a free, no-obligation estimate.
            Let's bring your vision to life!
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: colors.primary.main,
                color: '#fff',
                padding: '16px 40px',
                fontSize: '1.1rem',
                fontWeight: 700,
                borderRadius: '50px',
                '&:hover': {
                  backgroundColor: colors.primary.dark || '#1a1a2e',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Get A Free Estimatete
            </Button>
            <Button
              component="a"
              href="tel:+18473027344"
              variant="outlined"
              size="large"
              sx={{
                color: '#fff',
                borderColor: '#fff',
                padding: '16px 40px',
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '50px',
                '&:hover': {
                  borderColor: '#fff',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-3px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Call (847) 302-7344
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
