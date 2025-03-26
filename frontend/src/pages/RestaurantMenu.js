import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box, Chip } from '@mui/material';
import { useCart } from '../contexts/CartContext';
import { handleImageError } from '../utils/imageUtils';

const menuData = {
  1: {
    name: 'Gymkhana',
    categories: [
      {
        name: 'Main Course',
        items: [
          {
            id: '1',
            name: 'Butter Chicken',
            price: 180,
            description: 'Creamy tomato based curry with tender chicken',
            imageUrl: '/images/menu-items/butter-chicken.jpg',
            veg: false
          },
          {
            id: '2',
            name: 'Paneer Butter Masala',
            price: 160,
            description: 'Rich and creamy curry with soft paneer cubes',
            imageUrl: '/images/menu-items/paneer-butter-masala.jpg',
            veg: true
          }
        ]
      },
      {
        name: 'Rice & Breads',
        items: [
          {
            id: '3',
            name: 'Jeera Rice',
            price: 90,
            description: 'Aromatic rice with cumin seeds',
            imageUrl: '/images/menu-items/jeera-rice.jpg',
            veg: true
          },
          {
            id: '4',
            name: 'Butter Naan',
            price: 40,
            description: 'Soft bread brushed with butter',
            imageUrl: '/images/menu-items/butter-naan.jpg',
            veg: true
          }
        ]
      }
    ]
  },
  2: {
    name: 'Gazebo',
    categories: [
      {
        name: 'Quick Bites',
        items: [
          {
            id: '101',
            name: 'Grilled Sandwich',
            price: 60,
            description: 'Toasted sandwich with vegetables and cheese',
            imageUrl: '/images/menu-items/grilled-sandwich.jpg',
            veg: true
          },
          {
            id: '102',
            name: 'French Fries',
            price: 50,
            description: 'Crispy golden fries with seasoning',
            imageUrl: '/images/menu-items/french-fries.jpg',
            veg: true
          },
          {
            id: '103',
            name: 'Veg Burger',
            price: 70,
            description: 'Fresh vegetable patty with lettuce and cheese',
            imageUrl: '/images/menu-items/veg-burger.jpg',
            veg: true
          }
        ]
      },
      {
        name: 'Beverages',
        items: [
          {
            id: '201',
            name: 'Cold Coffee',
            price: 60,
            description: 'Chilled coffee with ice cream',
            imageUrl: '/images/menu-items/cold-coffee.jpg',
            veg: true
          },
          {
            id: '202',
            name: 'Mango Shake',
            price: 50,
            description: 'Fresh mango milkshake',
            imageUrl: '/images/menu-items/mango-shake.jpg',
            veg: true
          },
          {
            id: '203',
            name: 'Masala Lime Soda',
            price: 40,
            description: 'Refreshing lime soda with Indian spices',
            imageUrl: '/images/menu-items/masala-lime.jpg',
            veg: true
          }
        ]
      },
      {
        name: 'Desserts',
        items: [
          {
            id: '301',
            name: 'Chocolate Brownie',
            price: 45,
            description: 'Warm chocolate brownie',
            imageUrl: '/images/menu-items/brownie.jpg',
            veg: true
          },
          {
            id: '302',
            name: 'Ice Cream',
            price: 40,
            description: 'Choice of vanilla, chocolate, or strawberry',
            imageUrl: '/images/menu-items/ice-cream.jpg',
            veg: true
          }
        ]
      }
    ]
  }
};

const RestaurantMenu = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const restaurant = menuData[id];

  if (!restaurant) {
    return (
      <Container>
        <Typography variant="h5">Restaurant not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {restaurant.name} - Menu
      </Typography>

      {restaurant.categories.map((category) => (
        <Box key={category.name} sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {category.name}
          </Typography>
          <Grid container spacing={3}>
            {category.items.map((menuItem) => (
              <Grid item xs={12} sm={6} md={4} key={menuItem.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={menuItem.imageUrl}
                    alt={menuItem.name}
                    data-type="menuItem"
                    onError={handleImageError}
                    sx={{ 
                      objectFit: 'cover',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        transition: 'transform 0.3s ease-in-out'
                      }
                    }}
                  />
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Typography variant="h6" component="div">
                        {menuItem.name}
                      </Typography>
                      <Chip 
                        label={menuItem.veg ? "Veg" : "Non-Veg"}
                        color={menuItem.veg ? "success" : "error"}
                        size="small"
                        sx={{ ml: 1 }}
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {menuItem.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                      <Typography variant="h6" color="primary">
                        ₹{menuItem.price}
                      </Typography>
                      <Button 
                        variant="contained" 
                        size="small"
                        onClick={() => addToCart({
                          id: menuItem.id,
                          name: menuItem.name,
                          price: menuItem.price,
                          restaurantId: id
                        })}
                      >
                        Add to Cart
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  );
};

export default RestaurantMenu;