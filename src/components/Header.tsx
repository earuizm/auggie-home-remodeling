import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { colors } from '../theme';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobile, setMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleMobileMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const handleWindowSizeChange = () => {
    setMobile(window.innerWidth <= 768);
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navButtonStyles = {
    color: scrolled ? colors.primary.main : '#ffffff',
    fontWeight: 600,
    fontSize: '0.95rem',
    padding: '8px 16px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    position: 'relative',
    textShadow: scrolled ? 'none' : '0 1px 3px rgba(0,0,0,0.5)',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      width: 0,
      height: '2px',
      background: colors.accent.main,
      transition: 'all 0.3s ease',
      transform: 'translateX(-50%)',
    },
    '&:hover': {
      backgroundColor: 'transparent',
      '&::after': {
        width: '70%',
      },
    },
  };

  const services = [
    { name: 'Kitchen Remodeling', path: '/services/kitchen' },
    { name: 'Bathroom Renovations', path: '/services/bathroom' },
    { name: 'Basement Renovations', path: '/services/basement' },
    { name: 'Flooring', path: '/services/flooring' },
    { name: 'Painting', path: '/services/painting' },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: scrolled
            ? 'rgba(255, 255, 255, 0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          boxShadow: scrolled
            ? '0 4px 30px rgba(0, 0, 0, 0.1)'
            : 'none',
          zIndex: 2000,
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          transition: 'all 0.4s ease',
        }}
      >
        <Toolbar sx={{
          justifyContent: 'space-between',
          maxWidth: '1400px',
          width: '100%',
          margin: '0 auto',
          padding: { xs: '0 16px', md: '0 32px' },
        }}>
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <img
              src="/auggie-logo-nbg.png"
              alt="Auggie's Home Remodeling"
              style={{
                height: '120px',
                objectFit: 'contain',
                filter: scrolled ? 'none' : 'brightness(1.1)',
              }}
            />
          </Box>

          {mobile ? (
            // Mobile Menu Button
            <IconButton
              onClick={toggleMobileMenu}
              sx={{
                color: scrolled ? colors.primary.main : '#ffffff',
                backgroundColor: scrolled ? 'transparent' : 'rgba(255,255,255,0.1)',
                '&:hover': {
                  backgroundColor: scrolled ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.2)',
                },
              }}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          ) : (
            // Desktop Navigation
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                component={Link}
                to="/"
                sx={navButtonStyles}
              >
                Home
              </Button>

              <Button
                onClick={handleMenuOpen}
                sx={navButtonStyles}
                endIcon={<ArrowDropDownIcon />}
              >
                Services
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{ zIndex: 5000 }}
                PaperProps={{
                  sx: {
                    mt: 1,
                    borderRadius: '12px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    minWidth: '200px',
                  },
                }}
              >
                {services.map((service) => (
                  <MenuItem
                    key={service.path}
                    component={Link}
                    to={service.path}
                    onClick={handleMenuClose}
                    sx={{
                      color: colors.primary.main,
                      padding: '12px 20px',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: colors.accent.main + '15',
                        color: colors.accent.dark,
                      },
                    }}
                  >
                    {service.name}
                  </MenuItem>
                ))}
              </Menu>

              <Button component={Link} to="/gallery" sx={navButtonStyles}>
                Gallery
              </Button>
              <Button component={Link} to="/about" sx={navButtonStyles}>
                About
              </Button>
              <Button component={Link} to="/contact" sx={navButtonStyles}>
                Contact
              </Button>

              {/* CTA Section */}
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 3, gap: 2 }}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  borderRadius: '50px',
                  backgroundColor: scrolled ? colors.primary.main + '08' : 'rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                }}>
                  <IconButton
                    component="a"
                    href="tel:+18473027344"
                    sx={{
                      background: `linear-gradient(135deg, ${colors.accent.main} 0%, ${colors.accent.dark} 100%)`,
                      color: 'white',
                      width: 40,
                      height: 40,
                      mr: 1.5,
                      '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: `0 4px 20px ${colors.accent.main}50`,
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <PhoneIcon fontSize="small" />
                  </IconButton>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: scrolled ? colors.text.secondary : 'rgba(255,255,255,0.7)',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        fontSize: '0.7rem',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Call Today
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 700,
                        color: scrolled ? colors.primary.main : '#ffffff',
                        fontSize: '1rem',
                      }}
                    >
                      (847) 302-7344
                    </Typography>
                  </Box>
                </Box>

                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  sx={{
                    background: `linear-gradient(135deg, ${colors.accent.main} 0%, ${colors.accent.dark} 100%)`,
                    color: '#ffffff',
                    fontWeight: 600,
                    padding: '10px 24px',
                    borderRadius: '50px',
                    boxShadow: `0 4px 20px ${colors.accent.main}40`,
                    '&:hover': {
                      background: `linear-gradient(135deg, ${colors.accent.light} 0%, ${colors.accent.main} 100%)`,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 30px ${colors.accent.main}50`,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Free Estimate
                </Button>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Menu Overlay */}
      {mobile && menuOpen && (
        <Box
          sx={{
            position: 'fixed',
            top: '100px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 1999,
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            animation: 'fadeIn 0.3s ease',
          }}
        >
          {[
            { name: 'Home', path: '/' },
            ...services,
            { name: 'Gallery', path: '/gallery' },
            { name: 'About', path: '/about' },
            { name: 'Contact', path: '/contact' },
          ].map((item, index) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              onClick={toggleMobileMenu}
              sx={{
                color: colors.primary.main,
                fontSize: '1.1rem',
                fontWeight: 500,
                justifyContent: 'flex-start',
                padding: '16px 20px',
                borderRadius: '12px',
                animation: `fadeInUp 0.4s ease ${index * 0.05}s forwards`,
                opacity: 0,
                '&:hover': {
                  backgroundColor: colors.accent.main + '15',
                },
              }}
            >
              {item.name}
            </Button>
          ))}

          {/* Mobile CTA */}
          <Box sx={{ mt: 'auto', pt: 3 }}>
            <Button
              component="a"
              href="tel:+18473027344"
              fullWidth
              variant="outlined"
              startIcon={<PhoneIcon />}
              sx={{
                mb: 2,
                padding: '14px',
                borderRadius: '12px',
                borderColor: colors.primary.main,
                color: colors.primary.main,
                fontWeight: 600,
              }}
            >
              (847) 302-7344
            </Button>
            <Button
              component={Link}
              to="/contact"
              onClick={toggleMobileMenu}
              fullWidth
              variant="contained"
              sx={{
                background: `linear-gradient(135deg, ${colors.accent.main} 0%, ${colors.accent.dark} 100%)`,
                color: '#ffffff',
                padding: '14px',
                borderRadius: '12px',
                fontWeight: 600,
                boxShadow: `0 4px 20px ${colors.accent.main}40`,
              }}
            >
              Get A Free Estimate
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Header;
