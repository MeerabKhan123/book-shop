import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css'; // Updated import path to your main CSS file
import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);