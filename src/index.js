import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import './index.css';
import App from './App';
import { CartContextProvider } from './Context/CartContext';

const firebaseConfig = {
  apiKey: "AIzaSyDxz89fE1S1G-qJ9JnRfUc05N4Badca2FQ",
  authDomain: "coffee-design.firebaseapp.com",
  projectId: "coffee-design",
  storageBucket: "coffee-design.appspot.com",
  messagingSenderId: "219649173503",
  appId: "1:219649173503:web:a8e652b4d8d4424d1da9ca",
  measurementId: "G-8RS1FLPC2E"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);

