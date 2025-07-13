// src/pages/ProductDetailPage.js
import React, { useContext } from 'react'; // useContext import karein
import { useParams } from 'react-router-dom';
import { CartContext } from '../CartContext'; 
const products = [ ];

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext); 
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="container">Product not found.</div>;
  }

  return (
    <div className="product-detail-page container">
      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="price">${product.price.toFixed(2)}</p>
          <p>{product.description}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;