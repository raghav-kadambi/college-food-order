import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RestaurantMenu from './pages/RestaurantMenu';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';  // Add this
import { CartProvider } from './contexts/CartContext';  // Add this
import './App.css';

function App() {
  return (
    <CartProvider>  {/* Add this wrapper */}
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant/:id" element={<RestaurantMenu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />  {/* Add this route */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;