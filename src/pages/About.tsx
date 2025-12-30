import React, { useEffect } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar } from '@mui/material';
import HandymanIcon from '@mui/icons-material/Handyman';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GroupsIcon from '@mui/icons-material/Groups';
import { colors } from '../theme';
import SEO from '../components/SEO';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      title: 'Craftsmanship',
      description: 'We believe in doing things the right way, not the easy way. Every detail matters.',
      icon: <HandymanIcon sx={{ fontSize: 40, color: colors.accent.main }} />
    },
    {
      title: 'Integrity',
      description: 'Honest pricing, transparent timelines, and clear communication from start to finish.',
      icon: <VerifiedUserIcon sx={{ fontSize: 40, color: colors.accent.main }} />
    },
    {
      title: 'Community',
      description: 'As a local business, we are dedicated to improving the homes and lives of our neighbors.',
      icon: <GroupsIcon sx={{ fontSize: 40, color: colors.accent.main }} />
    }
  ];

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', paddingBottom: '80px' }}>
      <SEO
        title="About Auggie's Home Remodeling | 25+ Years Experience"
        description="Family-owned remodeling contractors serving Chicago since 1999. Dedicated to quality craftsmanship and customer satisfaction."
      />

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
          backgroundAttachment: 'fixed',
          backgroundImage: 'url(/picture3.webp)', // Using a general home image
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
            Building Dreams
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
            Auggie's Home Remodeling: Dedicated to quality since day one.
          </Typography>
        </Container>
      </Box>

      {/* ============ OUR STORY ============ */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={8} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={10} sx={{ textAlign: 'center' }}>
            <Typography variant="overline" sx={{ color: colors.accent.main, fontWeight: 700, letterSpacing: 1.5 }}>
              WHO WE ARE
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 3, color: colors.primary.main }}>
              A Legacy of Excellence
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: colors.text.secondary, fontSize: '1.1rem', lineHeight: 1.8 }}>
              Founded with a passion for transformation, Auggie's Home Remodeling has grown from a small operation into one of the region's most trusted renovation partners.
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: colors.text.secondary, fontSize: '1.1rem', lineHeight: 1.8 }}>
              We understand that remodeling is more than just construction; it's about creating a space where memories are made. Our team of skilled architects, designs, and craftsmen work tirelessly to bring your unique vision to life.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* ============ VALUES ============ */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" sx={{ fontWeight: 800, mb: 8, color: colors.primary.main }}>
            Our Core Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    bgcolor: 'white',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'translateY(-10px)' }
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        bgcolor: '#f0f4f8',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3
                      }}
                    >
                      {value.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>{value.title}</Typography>
                    <Typography variant="body1" sx={{ color: colors.text.secondary }}>{value.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ============ TEAM / STATS ============ */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={4} justifyContent="center" sx={{ textAlign: 'center' }}>
          <Grid item xs={6} md={3}>
            <Typography variant="h2" sx={{ fontWeight: 800, color: colors.accent.main }}>15+</Typography>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>Years Experience</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h2" sx={{ fontWeight: 800, color: colors.accent.main }}>300+</Typography>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>Projects Completed</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h2" sx={{ fontWeight: 800, color: colors.accent.main }}>100%</Typography>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>Satisfaction Guarantee</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
