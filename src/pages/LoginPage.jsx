// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // For redirection after login

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    setError(''); // Clear previous errors

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    
    if (email === 'user@example.com' && password === 'password123') {
      alert('Login Successful!');
      
      navigate('/');
    } else {
      setError('Invalid email or password.');
    }
    
  };

  return (
    <div className="container login-page">
      <div className="login-form-container">
        <h2>Welcome Back!</h2>
        <p className="login-subtext">Sign in to access your personalized purchase experince .</p>
        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a> {/* You can create a SignUp page later */}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;