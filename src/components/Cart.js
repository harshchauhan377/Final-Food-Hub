import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../styles/cart.css";

const Cart = () => {
  const location = useLocation();
  const [cartItems, setCartItems] = useState(location.state?.cartItems || []);

  const handlePrice = () => {
    let ans = 0;
    cartItems.forEach((item) => {
      ans += item.quantity * item.price;
    });
    return ans;
  };

  const handleRemove = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  const handleChange = (item, d) => {
    const exist = cartItems.find(x => x.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map(x =>
          x.id === item.id ? { ...exist, quantity: exist.quantity + d } : x
        )
      );
    }
  };

  useEffect(() => {
    handlePrice();
  }, [cartItems]);

  return (
    <div className="cart-page">
      <h2 className="cart-page__title">Shopping Cart</h2>
      <div className="cart-page__items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item__image" />
            <div className="cart-item__details">
              <h3 className="cart-item__name">{item.name}</h3>
              <p className="cart-item__description">{item.description}</p>
              <div className="cart-item__price-quantity">
                <p className="cart-item__price">Price: ₹{item.price}</p>
                <p className="cart-item__quantity">Quantity: {item.quantity}</p>
                <button className="p_button" onClick={() => handleChange(item, +1)}> + </button>
                <button className="p_button" onClick={() => handleChange(item, -1)}> - </button>
              </div>
              <button className="r_button" onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-page__total">
        <h3 className="cart-page__total-title">Total:</h3>
        <p className="cart-page__total-price">₹{handlePrice().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
