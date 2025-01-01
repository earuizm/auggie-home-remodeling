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

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobile, setMobile] = useState(window.innerWidth <= 500);
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMobile(window.innerWidth <= 500);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#DFDED9',
        zIndex: 2000, // Increased z-index
        height: '150px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 16px',
      }}
    >
      <Toolbar>
        {/* Logo Image */}
        <img
          src="/auggie-logo-nbg.png"
          alt="Auggie’s Home Remodeling"
          style={{ height: '150px', objectFit: 'contain' }}
        />
        <Box sx={{ flexGrow: 1 }} />

        {mobile ? (
          // Hamburger Icon for Mobile
          <IconButton onClick={toggleMobileMenu} sx={{ color: '#5F90CD' }}>
            <MenuIcon />
          </IconButton>
        ) : (
          // Regular Navigation for Desktop
          <>
            <Button color="inherit" component={Link} to="/" sx={{ color: '#5F90CD' }}>
              Home
            </Button>
            <Button color="inherit" onClick={handleMenuOpen} sx={{ color: '#5F90CD' }}>
              Services
              <ArrowDropDownIcon sx={{ marginLeft: '8px' }} />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{
                zIndex: 5000, // Set a higher z-index for the dropdown
              }}
            >
              <MenuItem component={Link} to="/services/kitchen" onClick={handleMenuClose} sx={{ color: '#5F90CD' }}>
                Kitchen Remodeling
              </MenuItem>
              <MenuItem component={Link} to="/services/bathroom" onClick={handleMenuClose} sx={{ color: '#5F90CD' }}>
                Bathroom Renovations
              </MenuItem>
              <MenuItem component={Link} to="/services/basement" onClick={handleMenuClose} sx={{ color: '#5F90CD' }}>
                Basement Renovations
              </MenuItem>
              <MenuItem component={Link} to="/services/flooring" onClick={handleMenuClose} sx={{ color: '#5F90CD' }}>
                Flooring
              </MenuItem>
              <MenuItem component={Link} to="/services/painting" onClick={handleMenuClose} sx={{ color: '#5F90CD' }}>
                Painting
              </MenuItem>
            </Menu>
            <Button color="inherit" component={Link} to="/gallery" sx={{ color: '#5F90CD' }}>
              Gallery
            </Button>
            <Button color="inherit" component={Link} to="/about" sx={{ color: '#5F90CD' }}>
              About
            </Button>
            <Button color="inherit" component={Link} to="/contact" sx={{ color: '#5F90CD' }}>
              Contact
            </Button>
          </>
        )}

        {/* Conditionally render the phone number section on desktop only */}
        {!mobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 3 }}>
            <IconButton sx={{ backgroundColor: '#8BC34A', color: 'white', mr: 1 }}>
              <PhoneIcon />
            </IconButton>
            <Box>
              <Typography
                variant="caption"
                sx={{ color: '#5F90CD', fontWeight: 500, textTransform: 'uppercase' }}
              >
                Call Today
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#5F90CD' }}>
                847-302-7344
              </Typography>
            </Box>
          </Box>
        )}
      </Toolbar>

      {/* Mobile Menu */}
      {mobile && menuOpen && (
        <Box
          sx={{
            backgroundColor: '#DFDED9',
            position: 'absolute',
            top: '150px',
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '10px',
          }}
        >
          <Button component={Link} to="/" sx={{ color: '#5F90CD', width: '100%', textAlign: 'left' }} onClick={toggleMobileMenu}>
            Home
          </Button>
          <Button component={Link} to="/services/kitchen" sx={{ color: '#5F90CD', width: '100%', textAlign: 'left' }} onClick={toggleMobileMenu}>
            Kitchen Remodeling
          </Button>
          <Button component={Link} to="/services/bathroom" sx={{ color: '#5F90CD', width: '100%', textAlign: 'left' }} onClick={toggleMobileMenu}>
            Bathroom Renovations
          </Button>
          <Button component={Link} to="/services/basement" sx={{ color: '#5F90CD', width: '100%', textAlign: 'left' }} onClick={toggleMobileMenu}>
            Basement Renovations
          </Button>
          <Button component={Link} to="/services/flooring" sx={{ color: '#5F90CD', width: '100%', textAlign: 'left' }} onClick={toggleMobileMenu}>
            Flooring
          </Button>
          <Button component={Link} to="/services/painting" sx={{ color: '#5F90CD', width: '100%', textAlign: 'left' }} onClick={toggleMobileMenu}>
            Painting
          </Button>
          <Button component={Link} to="/gallery" sx={{ color: '#5F90CD', width: '100%', textAlign: 'left' }} onClick={toggleMobileMenu}>
            Gallery
          </Button>
          <Button component={Link} to="/about" sx={{ color: '#5F90CD', width: '100%', textAlign: 'left' }} onClick={toggleMobileMenu}>
            About
          </Button>
          <Button component={Link} to="/contact" sx={{ color: '#5F90CD', width: '100%', textAlign: 'left' }} onClick={toggleMobileMenu}>
            Contact
          </Button>
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
