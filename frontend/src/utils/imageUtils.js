export const getPlaceholderImage = (type) => {
    const defaultRestaurant = '/images/restaurants/default-restaurant.jpg';
    const defaultMenuItem = '/images/menu-items/default-food.jpg';
    
    return type === 'restaurant' ? defaultRestaurant : defaultMenuItem;
  };
  
  export const handleImageError = (event) => {
    const isRestaurant = event.target.getAttribute('data-type') === 'restaurant';
    event.target.src = getPlaceholderImage(isRestaurant ? 'restaurant' : 'menuItem');
  };