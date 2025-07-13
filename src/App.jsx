import React from 'react'; // useState and useEffect will be inside CartProvider
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import CheckoutPage from './pages/CheckoutPage';
import { CartProvider, CartContext } from './CartContext'; // Import CartProvider and CartContext
import { useContext } from 'react'; // useContext hook to get totalCartItems for Header

// Main App component
function AppContent() {
  // Now, cart related states and functions are consumed from context
  const { addToCart, updateQuantity, removeFromCart, cartItems, totalCartItems } = useContext(CartContext);

  return (
    <>
      <Header cartItemCount={totalCartItems} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route path="/products" element={<ProductsPage addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetailPage addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/signup" element={<div>Sign Up Page Coming Soon!</div>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

// Wrapper for the whole App to provide CartContext
function App() {
  return (
    <Router>
      <CartProvider> {/* Wrap your entire app with CartProvider */}
        <AppContent />
      </CartProvider>
    </Router>
  );
}

export default App;