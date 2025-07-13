// src/pages/HomePage.js
import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import HeroSection from '../components/HeroSection';
import { CartContext } from '../CartContext'; // CartContext import karein
import prizadImage from '../assets/prizad.webp'
import Peerkamil from '../assets/peer kamil.jpg'
import Namal from '../assets/namal.jpg'
import Halam from '../assets/halam.jpg'
import Mushaif from '../assets/musahif.jpg'
import Amerbail from '../assets/amerbail.jpg'




const featuredProducts = [
  {
    id: 1,
    name: 'Parizad',
    price: 900.00,
    image: prizadImage,
  },
  {
    id: 3,
    name: 'Pir e Kamil(PBUH)',
    price: 1200,
    image: Peerkamil,
  },
  {
    id: 6,
    name: 'Namal',
    price: 4995,
    image: Namal,
  },
  {
    id: 4,
    name: 'Halam by nimra ahmad',
    price: 24.99,
    image: Halam,
  },
  {
    id: 4,
    name: 'Musahif',
    price: 12.99,
    image: Mushaif,
  },
  {
    id: 4,
    name: 'Amerbail',
    price: 2.499,
    image: Amerbail,
  },
];

const HomePage = () => {
  const { addToCart } = useContext(CartContext); 
  return (
    <div className="container">
      <HeroSection /> 
      
      <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>Our Top Picks</h2> {/* Added some inline style for centering the heading */}
      <div className="products-grid">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      
    </div>
  );
};

export default HomePage;