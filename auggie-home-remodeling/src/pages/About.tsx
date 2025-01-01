import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const About = () => {
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
          About Auggie's Home Remodeling
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
          Auggie's Home Remodeling is a family-owned business that has been proudly serving the Chicago area for over 25 years. We specialize in turning your house into a home, with a focus on bathroom and kitchen remodeling, home additions, and more. Our team’s mission is simple – to deliver exceptional quality, unparalleled service, and a personal touch that makes all the difference.
        </Typography>
      </Box>

      {/* Experience & Care Section */}
      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '24px', md: '32px' },
            color: '#444',
            marginBottom: '20px',
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Our Experience & Commitment to Quality
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '16px', md: '18px' },
            lineHeight: 1.7,
            color: '#666',
            marginBottom: '20px',
            fontFamily: "'Georgia', serif",
          }}
        >
          With over 25 years in the remodeling industry, our family has earned a reputation for excellence. We’ve built lasting relationships with our clients, who know they can rely on us to bring their visions to life. Our team takes great pride in the work we do and is committed to delivering flawless results that exceed expectations. Every project is treated with the utmost care, attention to detail, and a personalized touch that only a family business can offer.
        </Typography>
      </Box>

      {/* Why We Care Section */}
      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '24px', md: '32px' },
            color: '#444',
            marginBottom: '20px',
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Why We Care About Your Home
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '16px', md: '18px' },
            lineHeight: 1.7,
            color: '#666',
            marginBottom: '20px',
            fontFamily: "'Georgia', serif",
          }}
        >
          At Auggie's Home Remodeling, we’re not just here to complete a job – we’re here to make your dream home a reality. From the initial consultation to the final walk-through, we’re dedicated to providing personalized service that reflects our commitment to your satisfaction. We take the time to listen to your needs, understand your style, and offer solutions that work within your budget. Our family’s reputation is built on care, craftsmanship, and a genuine desire to improve your living space.
        </Typography>
      </Box>

      {/* Our Promise */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '24px', md: '32px' },
            color: '#444',
            marginBottom: '20px',
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Our Promise to You
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '16px', md: '18px' },
            lineHeight: 1.7,
            color: '#666',
            marginBottom: '20px',
            fontFamily: "'Georgia', serif",
          }}
        >
          We promise to deliver not just a finished product, but a transformation. We care deeply about the work we do and the people we do it for. Our family is committed to providing the highest level of craftsmanship, and we ensure that every project reflects our core values: integrity, attention to detail, and dedication to excellence.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
