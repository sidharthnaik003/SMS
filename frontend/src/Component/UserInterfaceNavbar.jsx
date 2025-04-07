import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const UserInterfaceNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null); // State for dropdown menu
  const navigate = useNavigate(); // For navigation

  const toggleMenu = (event) => {
    if (anchorEl) {
      setAnchorEl(null); // Close menu
    } else {
      setAnchorEl(event.currentTarget); // Open menu
    }
  };

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
    setAnchorEl(null); // Close menu after navigation
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#003366', padding: 1 }}>
      <Toolbar>
        {/* Navbar Header */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          School Management System
        </Typography>

        {/* Hamburger Menu / Close Button */}
        <IconButton
          color="inherit"
          aria-label={anchorEl ? 'Close Menu' : 'Open Menu'}
          onClick={toggleMenu}
        >
          {anchorEl ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={() => alert('Help Section Coming Soon!')}>Help</MenuItem>
          <MenuItem onClick={() => handleNavigation('/signup')}>
            <span style={{ marginRight: '10px' }}>&#128100;</span> Sign Up
          </MenuItem>
          <MenuItem onClick={() => handleNavigation('/choose-user')}>
            <span style={{ marginRight: '10px' }}>&#128274;</span> Login
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default UserInterfaceNavbar;
