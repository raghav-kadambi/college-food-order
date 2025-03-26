import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { handleImageError } from '../utils/imageUtils';

const restaurants = [
  {
    id: 1,
    name: 'Gymkhana',
    description: "College's favorite spot for delicious meals",
    imageUrl: '/images/restaurants/gymkhana.jpg',
    rating: 4.5,
    deliveryTime: '30-40 mins'
  },
  {
    id: 2,
    name: 'Gazebo',
    description: 'Quick bites and refreshing beverages',
    imageUrl: '/images/restaurants/gazebo.jpg',
    rating: 4.2,
    deliveryTime: '20-30 mins'
  }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Order Food from College Restaurants
      </Typography>
      
      <Grid container spacing={4}>
        {restaurants.map((restaurant) => (
          <Grid item xs={12} sm={6} key={restaurant.id}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image={restaurant.imageUrl}
                alt={restaurant.name}
                data-type="restaurant"
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
                <Typography gutterBottom variant="h5" component="div">
                  {restaurant.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {restaurant.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  ⭐ {restaurant.rating} • 🕒 {restaurant.deliveryTime}
                </Typography>
                <Button 
                  variant="contained" 
                  sx={{ mt: 2 }}
                  onClick={() => navigate(`/restaurant/${restaurant.id}`)}
                >
                  View Menu
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;