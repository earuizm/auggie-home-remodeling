import React from 'react';
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

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    // <AppBar position="fixed" sx={{ backgroundColor: '#DFDED9', padding: '0 16px' }}>
      
      <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#DFDED9',
        zIndex: 1100,
        height: '150px', // Fixed header height
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
