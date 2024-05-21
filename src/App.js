// import logo from './logo.svg';
import React from 'react';

import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Barista from './components/Barista';
import La_pinoz from './components/La_pinoz';
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
      <Header />
    
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/barista" element={<Barista />} />
          <Route path="/la_pinoz" element={<La_pinoz />} />
          <Route path="/cartpage" element={<Cart />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
