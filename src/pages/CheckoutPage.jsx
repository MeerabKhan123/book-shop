import React, { useContext } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext'; 

const CheckoutPage = () => {
  const navigate = useNavigate();
  
  
  const dummyClearCart = () => {
    localStorage.removeItem('cartItems'); 
  };

  const handlePlaceOrder = () => {
    alert('Your order has been placed successfully! Thank you for perchase your favourite book.');
    
    
    dummyClearCart(); 

    
    navigate('/'); 
  };

  return (
    <div className="container checkout-page">
      <div className="checkout-content">
        <h2>Confirm Your Order</h2>
        <p>Please review your details and confirm your order.</p>
        <p>Your book will be delivered soon!</p>

        <button onClick={handlePlaceOrder} className="place-order-button">
          Place Order
        </button>

        <Link to="/cart" className="back-to-cart-button">
          ← Back to Cart
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;