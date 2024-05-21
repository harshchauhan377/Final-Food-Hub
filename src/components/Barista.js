import React, { useState } from 'react';
import "../styles/barista.css";
import items from '../data';
import { Link, useNavigate } from 'react-router-dom';

const Barista = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const onAddToCart = (item) => {
    const exist = cartItems.find(x => x.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map(x =>
          x.id === item.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const goToCart = () => {
    navigate('/cartpage', { state: { cartItems } });
  };

  return (
    <div className='barista'>
      <header>
        <nav className="logo-container">
          <img src="foodhub-logo.png" alt="logo" className="logo-1" />
        </nav>
        <nav>
          <ul className="nav-linkss">
            <li><Link to="/">Home</Link></li>
            <li><a href="#">Restaurant</a></li>
            <li><a href="#">About</a></li>
            <li><a href="./login.html">Log In</a></li>
            <li><button className='cart-button' onClick={goToCart}>
            <i className="fas fa-shopping-cart"></i>
              </button></li>
          </ul>
        </nav>
      </header>

      <div className="logo">
        <img src="./bg-barista-main.png" alt="logo" className="logo1" />
      </div>

      <div className="row-container">
        {items.map((item, index) => (
          <div className="outlet-items" key={index}>
            <div className="wrap-container-main">
              <div className="wrap-container">
                <div className="wrap-container-img">
                  <img src={item.image} alt="" className="wrap-img" />
                </div>
                <div className="wrap-container-text">
                  <h4 className="wrap-name">{item.name}</h4>
                  <p className="wrap-name">₹{item.price}.00</p>
                  <button className="add-itm-btn" onClick={() => onAddToCart(item)}>
                    Add Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Barista;
