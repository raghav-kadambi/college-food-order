import React from 'react';
import { AppBar, Toolbar, Typography, Button, Badge, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          College Food Order
        </Typography>
        <IconButton 
          color="inherit" 
          onClick={() => navigate('/cart')}
          sx={{ mr: 2 }}
        >
          <Badge badgeContent={cartItemCount} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <Button color="inherit" onClick={() => navigate('/login')}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;