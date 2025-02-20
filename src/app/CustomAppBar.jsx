// CustomAppBar.jsx
import React from 'react';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

const CustomAppBar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#ffffff' }}>
      <Toolbar>
        <IconButton edge="start" color="primary" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="primary" aria-label="notifications">
          <NotificationsIcon />
        </IconButton>
        <IconButton color="primary" aria-label="account">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
